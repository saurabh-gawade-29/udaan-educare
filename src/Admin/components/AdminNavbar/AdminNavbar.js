import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.scss";

class AdminNavbar extends Component {
  render() {
    return (
      <div>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow admin-dashboard-header">
          <Link
            className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fw-bold"
            to="/admin"
          >
            Dashboard
          </Link>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed navbar-toggler-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <input
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" href="/">
                Sign out
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default AdminNavbar;
