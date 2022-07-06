import React, { Component } from "react";
import "./AdminSidebarIn.scss";

import { Link } from "react-router-dom";
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
              <Link
                to="/"
                className="nav-link px-1 d-flex align-items-center"
                aria-current="page"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faHouseUser} size="lg" />
                </div>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-1 d-flex align-items-center"
                to="/contact"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faAddressCard} size="lg" />
                </div>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-1 d-flex align-items-center"
                to="/about"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faCircleInfo} size="lg" />
                </div>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-1 d-flex align-items-center"
                to="/admission"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faTicket} size="lg" />
                </div>
                Admission
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link px-1 d-flex align-items-center"
                to="/career"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faPersonChalkboard} size="lg" />
                </div>
                Career Option
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link px-1 d-flex align-items-center"
                to="/college"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faGraduationCap} size="lg" />
                </div>
                Top College
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link px-1 d-flex align-items-center"
                to="/other"
              >
                <div className="my-dash-symbol">
                  <FontAwesomeIcon icon={faBuildingShield} size="lg" />
                </div>
                Other
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminSidebarIn;
