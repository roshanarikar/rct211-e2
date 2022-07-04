import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div  id="nav">
      <div data-cy="navbar-home-link">
        <img id="logo"
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <Link to="/login"><button data-cy="navbar-login-button" id="btn">LOGIN</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
