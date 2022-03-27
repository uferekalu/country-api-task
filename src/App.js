import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Countries from './components/countries/Countries';
import SingleCountry from './components/singleCountry/SingleCountry';


function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    let bodyElement = document.querySelector("body")
    bodyElement.className = darkMode ? "darkmode-bg" : ""
  }, [darkMode])

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path='/' element={<Countries darkMode={darkMode} />} />
        <Route path='/country/:id' element={<SingleCountry darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
