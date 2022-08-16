import React, { Component } from "react";
import "./AdminSidebarIn.scss";

import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBuildingShield } from "@fortawesome/free-solid-svg-icons";

class AdminSidebarIn extends Component {
  render() {
    return (
      <div>
        <div className="position-sticky pt-3 admin-sidebar">
          <ul className="nav flex-column">
            <li className="nav-item ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "sideNavActive nav-link px-1 d-flex align-items-center"
                    : "nav-link px-1 d-flex align-items-center"
                }
                // className="nav-link px-1 d-flex align-items-center"
                aria-current="page"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faHouseUser} size="lg" />
                </div>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "sideNavActive nav-link px-1 d-flex align-items-center"
                    : "nav-link px-1 d-flex align-items-center"
                }
                to="/contact"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faAddressCard} size="lg" />
                </div>
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "sideNavActive nav-link px-1 d-flex align-items-center"
                    : "nav-link px-1 d-flex align-items-center"
                }
                to="/about"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faCircleInfo} size="lg" />
                </div>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "sideNavActive nav-link px-1 d-flex align-items-center"
                    : "nav-link px-1 d-flex align-items-center"
                }
                to="/admission"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faTicket} size="lg" />
                </div>
                Admission
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "sideNavActive nav-link px-1 d-flex align-items-center"
                    : "nav-link px-1 d-flex align-items-center"
                }
                to="/career"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faPersonChalkboard} size="lg" />
                </div>
                Career Option
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "sideNavActive nav-link px-1 d-flex align-items-center"
                    : "nav-link px-1 d-flex align-items-center"
                }
                to="/college"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faGraduationCap} size="lg" />
                </div>
                Top College
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "sideNavActive nav-link px-1 d-flex align-items-center"
                    : "nav-link px-1 d-flex align-items-center"
                }
                to="/other"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faBuildingShield} size="lg" />
                </div>
                Other
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminSidebarIn;
