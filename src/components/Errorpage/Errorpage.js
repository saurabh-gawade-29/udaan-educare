import React, { Component } from "react";
import Error from "../../assets/Error.jpg";
import "./Errorpage.scss";
import { Link } from "react-router-dom";

export class Errorpage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/" className="text-decoration-none">
              <div className="card shadow my-4 bg-light p-1 error-card">
                <img
                  src={Error}
                  alt="Work in Progress"
                  className="img-fluid error-img"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Errorpage;
