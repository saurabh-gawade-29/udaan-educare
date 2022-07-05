import React, { Component } from "react";
import "./Dashboard.scss";

import loginImg from "../../assets/img/pexels-pixabay-356065.jpg";
// import { Routes, Route } from "react-router-dom";
// import AdminHome from "../AdminHome/AdminHome";
// import AdminNavbar from "../AdminNavbar/AdminNavbar";
// import AdminSidebarIn from "../AdminSidebarIn/AdminSidebarIn";
// import AdminContact from "../AdminContact/AdminContact";

export class Dashboard extends Component {
  render() {
    return (
      <div className="admin-dashboard-login">
        <div className="image-wrap">
          <img src={loginImg} alt="login-img" className="login-img" />
        </div>
        <div className="content-wrap">
          <div className="row g-0">
            <div className="col-10 col-sm-10 col-md-6 col-lg-4 offset-1 offset-sm-1 offset-md-3 offset-lg-4">
              <div className="container">
                <div className="card">
                  <div className="card-body">
                    <h1 className="display-6">Login</h1>
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          autoComplete="on"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          autoComplete="on"
                        />
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn-orange">
                          Login
                        </button>
                        {/* <div>
            <label>
                Username:{''}
                <input type="text" onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
