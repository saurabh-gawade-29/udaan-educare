// import Logo from "../../assets/Logo.jpg";
import React, { Component } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="gradient-tab"></div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light udaan-top-navbar">
          <div className="container-fluid">
            <NavLink className="navbar-brand udaan-full" to="/">
              <span className="udaan-text">Udaan</span>{" "}
              <span className="educare-text">Educare</span>
            </NavLink>
            {/* <div className="logo-container px-4">
              <a className="navbar-brand" href="/">
                <img src={Logo} alt="Udaan Educare" className="logo-img" />
              </a>
            </div> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                {/* Home */}
                <li className="nav-item mx-3">
                  <NavLink className="nav-link" to="/" activeclassname="active">
                    Home
                  </NavLink>
                </li>

                {/* About Us */}
                <li className="nav-item dropdown mx-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="AboutNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="AboutNavbarDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/About"
                        activeclassname="active"
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/OurPedagogy"
                        activeclassname="active"
                      >
                        Our Pedagogy
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* Discover Courses */}
                <li className="nav-item dropdown mx-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="DiscoverNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Discover Courses
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="DiscoverNavbarDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/FCourse"
                        activeclassname="active"
                      >
                        Foundation Course
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/ECourse"
                        activeclassname="active"
                      >
                        Engineering Course
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/MCourse"
                        activeclassname="active"
                      >
                        Medical Course
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* Admission */}
                <li className="nav-item dropdown mx-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="AboutNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Admission
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="AboutNavbarDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/Admission"
                        activeclassname="active"
                      >
                        Admission Criteria
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* Contact Us */}
                <li className="nav-item mx-3">
                  <NavLink
                    className="nav-link"
                    to="/Contact"
                    activeclassname="active"
                  >
                    Contact Us
                  </NavLink>
                </li>

                {/* End */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
