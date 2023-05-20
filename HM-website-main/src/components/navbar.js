// import React, { useState } from "react";
import React from "react";
// import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [isActive, setIsActive] = useState(false);



  return (
    <>
      {/* <nav
        
        role="navigation"
        aria-label="main navigation"
      > */}
      {/* <div className="navbar-brand">
     

          <button
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleNavbar}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div> */}

      <div
        id="navbarBasicExample"
        className={`navbar-menu is-active`}
      >
        <div className="navbar-start">
          <Link className="navbar-item" to="/" >
            Unstoppable Journey
          </Link>
          <Link className="navbar-item" to="/" style={{ marginLeft: "40%" }}>
            Home
          </Link>
          <Link className="navbar-item" to="/services">
            Services
          </Link>
          <Link className="navbar-item" to="/gotocart" >
            <p style={{ width: "100px" }}> HM Store</p>
          </Link>
          <Link className="navbar-item" to="/about">
            <p style={{ width: "80px" }}> About Us</p>
          </Link>
        </div>

        {/* <div className="navbar-end">
            <a className="btn btn-primary" style={{width:"min-content"}}>
              Login/Sign Up
            </a>
          </div> */}
        <Link to="/" style={{ marginLeft: "40%" }}><button className="btn btn-primary">Login / Sign Up</button></Link>
        <Link to="/gotocart" style={{ marginLeft: "4%" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </Link>
      </div>

    </>
  );
};

export default Navbar;