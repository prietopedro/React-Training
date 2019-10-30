import React, { useState } from 'react';
import useDarkMode from "./hooks/useDarkMode"
import {Link} from "react-router-dom"

const Navbar = () => {
  const [darkMode, setDarkMode, changeColors] = useDarkMode(false);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  // useEffect(()=>{

  // },[darkMode])
  console.log(darkMode)
  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ""}`}>
      <Link id={darkMode ? 'dark-mode-links' : 'Links'} to="/"><h1>Crypto Tracker</h1></Link>
      <div className="dark-mode__toggle" onClick={changeColors}>
        <div
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
