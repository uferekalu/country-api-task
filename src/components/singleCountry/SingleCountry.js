import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";
import { formatLink, formatNumber } from "../../utils/utility";
import useStyles from './styles'
import { Typography } from "@mui/material";

const url = "https://restcountries.com/v3.1/name/";
const url2 = "https://restcountries.com/v3.1/alpha/"

const SingleCountry = ({ darkMode }) => {
  const [country, setCountry] = useState(null);
  const [border, setBorder] = useState([]);
  const params = useParams();
  const classes = useStyles()

  useEffect(() => {
    try {
      (async () => {
        setCountry(null);
        setBorder([]);
        const { data } = await axios.get(
          url + formatLink(params.country, true) + "?fullText=true"
        )
        data[0].borders?.map(async (border) => {
            const { data } = await axios.get(url2 + border)
            setBorder((initialBorders) => [
                ...initialBorders,
                data[0].name.common
            ])
        })
        setCountry(data[0])
      })();
    } catch (error) {
      console.log(error);
    }
  }, [params.country]);

  return (
      <div className={classes.countryPage}>
          <Link className={`${classes.backBtn} ${darkMode ? "darkmode-text darkmode-light" : ""}`} to="/">
            <BsArrowLeft /> Back To Home
          </Link>
          {country && <div className={classes.countryPageDisplay}>
              {country?.flags.png && (
                  <img className={classes.countryFlag} src={country?.flags.png} alt={country?.name.common}/>
              )}
              <div className={classes.countryPageInfo}>
              <Typography
                variant="h2"
                component="div"
                sx={{ flexGrow: 1 }}
                >
                    {country?.name.common}
                </Typography>
                <div className={classes.infoFlex}>
                    <div className={classes.infoLeft}>
                    <Typography
                        variant="h2"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <span>Native Name:</span> {" "} {country?.altSpellings[1]}
                    </Typography>
                    <Typography
                        variant="h2"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <span>Population:</span> {" "} {country?.population && formatNumber(country?.population)}
                    </Typography>
                    <Typography
                        variant="h2"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <span>Region:</span> {country?.region}
                    </Typography>
                    <Typography
                        variant="h2"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <span>Sub Region:</span> {country?.subregion}
                    </Typography>
                    <Typography
                        variant="h2"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <span>Capital:</span> {country?.capital}
                    </Typography>
                    </div>
                    <div className={classes.infoRight}>
                    <Typography
                        variant="h2"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <span>Top Level Domain:</span> {country?.tld[0]}
                    </Typography>
                    <Typography
                        variant="h2"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <span>Currencies:</span> {" "} {country?.currencies && Object.values(country?.currencies).map((currency) => currency.name).join(", ")}
                    </Typography>
                    <Typography
                        variant="h2"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <span>Languages:</span> {" "} {country?.languages && Object.values(country?.languages).map((language) => language).join(", ")}
                    </Typography>
                    </div>
                </div>
                {border.length > 0 && (
                    <div className={`${classes.infoBorder} ${classes.borderCountries}`}>
                        <Typography
                        variant="h3"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Border Countries:
                    </Typography>
                    {border?.map((val, index) =>(
                        <Link className={`${
                            darkMode
                                ? "darkmode-text darkmode-light"
                                : ""
                        }`} to={`/${formatLink(val.toLowerCase(), true)}`} key={index}>{val}</Link>
                    ))}
                    </div>
                )}
              </div>
        </div>}
      </div>
  )
};

export default SingleCountry;
