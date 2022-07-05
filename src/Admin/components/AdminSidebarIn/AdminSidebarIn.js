import React, { Component } from "react";
import "./AdminSidebarIn.scss";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faBuildingShield } from "@fortawesome/free-solid-svg-icons";

class AdminSidebarIn extends Component {
  render() {
    return (
      <div>
        <div className="position-sticky pt-3 admin-sidebar">
          <ul className="nav flex-column">
            <li className="nav-item d-flex align-items-center">
              <div className="my-dash-symbol">
                <FontAwesomeIcon icon={faHouseUser} size="lg" />
              </div>
              <Link to="/" className="nav-link px-1" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <div className="my-dash-symbol">
                <FontAwesomeIcon icon={faAddressCard} size="lg" />
              </div>
              <Link className="nav-link px-1" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <div className="my-dash-symbol">
                <FontAwesomeIcon icon={faCircleInfo} size="lg" />
              </div>
              <Link className="nav-link px-1" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <div className="my-dash-symbol">
                <FontAwesomeIcon icon={faTicket} size="lg" />
              </div>
              <Link className="nav-link px-1" to="/admission">
                Admission
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <div className="my-dash-symbol">
                <FontAwesomeIcon icon={faPersonChalkboard} size="lg" />
              </div>
              <Link className="nav-link px-1" to="/career">
                Career Option
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <div className="my-dash-symbol">
                <FontAwesomeIcon icon={faBuildingColumns} size="lg" />
              </div>
              <Link className="nav-link px-1" to="/college">
                Top College
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <div className="my-dash-symbol">
                <FontAwesomeIcon icon={faBuildingShield} size="lg" />
              </div>
              <Link className="nav-link px-1" to="/other">
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
