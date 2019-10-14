import React from 'react';
import {NavLink} from "react-router-dom"

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <NavLink activeClassName="active" to="/" exact>Home</NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/about">About</NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
