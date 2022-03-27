import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { formatLink, formatNumber } from "../../../utils/utility";
import useStyles from "./styles";

const Country = ({ flags, name, capital, region, population, darkMode }) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.singleCountry} ${darkMode ? "darkmode-light" : ""}`}
    >
      <img className={classes.countryImg} src={flags} alt={name} />
      <div className={classes.countryInfo}>
        <Link title={name} to={`/${formatLink(name.toLowerCase(), false)}`}>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            className={`${classes.countryInfoHeader} ${darkMode
              ? "darkmode-text"
              : ""}`}
          >
            {name}
          </Typography>
        </Link>
        <Typography
          variant="h7"
          component="div"
          sx={{ flexGrow: 1 }}
          className={classes.countryInfoText}
        >
          <b>Population</b>: {formatNumber(population)}
        </Typography>
        <Typography
          variant="h7"
          component="div"
          sx={{ flexGrow: 1 }}
          className={classes.countryInfoText}
        >
          <b>Region</b>: {region}
        </Typography>
        <Typography
          variant="h7"
          component="div"
          sx={{ flexGrow: 1 }}
          className={classes.countryInfoText}
        >
          <b>Capital</b>: {capital}
        </Typography>
      </div>
    </div>
  );
};

export default Country;
