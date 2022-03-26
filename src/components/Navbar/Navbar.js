import React, { Component } from "react";
import Logo from "../../assets/Logo.jpg";
import "./Navbar.scss";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              Udaan Educare
            </a>
            {/* <div class="logo-container px-4">
              <a class="navbar-brand" href="/">
                <img src={Logo} alt="Udaan Educare" className="logo-img" />
              </a>
            </div> */}
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto">
                {/* Home */}
                <li class="nav-item mx-3">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>

                {/* About Us */}
                <li class="nav-item dropdown mx-3">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    id="AboutNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="AboutNavbarDropdown"
                  >
                    <li>
                      <a class="dropdown-item" href="/">
                        Our Pedagogy
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Discover Courses */}
                <li class="nav-item dropdown mx-3">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    id="DiscoverNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Discover Courses
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="DiscoverNavbarDropdown"
                  >
                    <li>
                      <a class="dropdown-item" href="/">
                        Foundation Course
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Foundation Course
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Foundation Course
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Admission */}
                <li class="nav-item dropdown mx-3">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    id="AboutNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Admission
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="AboutNavbarDropdown"
                  >
                    <li>
                      <a class="dropdown-item" href="/">
                        Admission Criteria
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Contact Us */}
                <li class="nav-item mx-3">
                  <a class="nav-link" href="/">
                    Contact Us
                  </a>
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
