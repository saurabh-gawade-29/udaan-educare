import React, { Component } from "react";
import "./Dashboard.scss";

import { Routes, Route } from "react-router-dom";
import AdminHome from "../AdminHome/AdminHome";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AdminSidebarIn from "../AdminSidebarIn/AdminSidebarIn";
import AdminContact from "../AdminContact/AdminContact";

export class Dashboard extends Component {
  render() {
    return (
      <div className="admin-dashboard">
        <AdminNavbar />
        <div className="container-fluid admin-sidebar">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse vh-100"
            >
              <AdminSidebarIn />
            </nav>
            {/* Admin - Content */}
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Routes>
                {/* <Route path="/" element={<AdminHome />} /> */}
                <Route path="/home" element={<AdminHome />} />
                <Route path="/contact" element={<AdminContact />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
