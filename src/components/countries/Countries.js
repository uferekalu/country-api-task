import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import Country from "./country/Country";
import useStyles from './styles'

const url = "https://restcountries.com/v3.1/all";

const Countries = ({ darkMode }) => {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null)
  const [error, setError] = useState('')
  const [searchItem, setSearchItem] = useState("")
  const [scroll, setScroll] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    try {
        (async () => {
            const { data } = await axios.get(url)
            setCountries(data)
            setFilteredCountries(data)
            console.log(data)
        })()
    } catch (error) {
        console.log(error)
    }
  }, [])

  window.onscroll = (e) => {
      console.log(document.documentElement.scrollTop)
      if(document.documentElement.scrollTop > 100) {
          setScroll(true)
      } else {
          setScroll(false)
      }
  }

  const handleSarchForCountry = (event) => {
      var countriesArray = countries?.filter((country) => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
      setSearchItem(event.target.value)
      setError(() => {
          if (countriesArray?.length > 0) {
              return null
          } else {
              return "No countries found!"
          }
      })
      setFilteredCountries(countriesArray)
  }

  const handleFilterByRegion = (event) => {
    var countriesArray = countries?.filter((country) => country.region.toLowerCase().includes(event.target.value.toLowerCase()))
    document.querySelector("[name='filterInput']").value = ""
    setError(null)
    setFilteredCountries(countriesArray)
  }

  const handleReset = () => {
      setSearchItem("");
      setError(null)
      setFilteredCountries(countries)
  }

  const handleScroll = () => {
    document.getElementsByTagName('html')[0].scrollIntoView({ behavior: "smooth" });
}


  return (
     <div className={classes.main}>
        {scroll && <BsFillArrowUpCircleFill onClick={handleScroll} className={`scroll ${darkMode ? "darkmode-bg" : ""}`} />}
        <div className="filter">
        <div
                    className={`filter-input ${
                        darkMode ? "darkmode-input" : ""
                    }`}
                >
                    <AiOutlineSearch className="search" />
                    <input
                        onChange={handleSarchForCountry}
                        value={searchItem}
                        name="filterInput"
                        type="text"
                        placeholder="Search for a country..."
                    />
                    {searchItem && 
                        <AiOutlineCloseCircle
                            onClick={handleReset}
                            className={`close-input`}
                        />
                    }
                </div>
                <div>
                    <select
                        name="filter_select"
                        className={`${classes.filterSelect} ${darkMode ? "darkmode-light" : ""}`}
                        onChange={handleFilterByRegion}
                    >
                        <option value="">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
        </div>
        {error && (
                <div className={`${classes.error} ${darkMode ? "darkmode-light" : ""}`}>
                    <p>
                        <BiError /> {error} <BiError />
                    </p>
                </div>
            )}
            <div className={classes.countries}>
                {filteredCountries?.map((country, index) => (
                    <Country 
                        key={index} 
                        flags={country.flags.png}
                        name={country.name.common}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                        darkMode={darkMode}
                    />
                ))}
            </div>
     </div>
  )
};

export default Countries;
