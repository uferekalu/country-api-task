import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { FaMoon, FaSun } from "react-icons/fa"

const Navbar = ({ darkMode, setDarkMode }) => {
    const handleSetDarkMode = () => {
        setDarkMode(!darkMode)
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Where in the world?
          </Typography>
          <Button color="inherit" onClick={handleSetDarkMode}>{!darkMode ? <FaMoon /> : <FaSun />} Dark Mode</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar