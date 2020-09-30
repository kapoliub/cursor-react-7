import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="link-wrapper">
        <NavLink activeClassName='active' to="/users">Users</NavLink>
      </div>
      <div className="link-wrapper">
        <NavLink activeClassName='active'  to="/addUser">Add user</NavLink>
      </div>
      <div className="link-wrapper">
        <NavLink activeClassName='active'  to="/tweets">Tweets</NavLink>
      </div>
      <div className="link-wrapper">
        <NavLink activeClassName='active'  to="/addTweet">Add tweet</NavLink>
      </div>
    </div>
  );
};

export default Navbar;