import React, { Component } from "react";
import "./Homeform.scss";
import homeImg from "../../assets/img_1_girl.jpg";

export class Homeform extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="home-text-container text-center">
                <h3>For Any Test Related Query</h3>
                <h6 className="text-orange">Enter Your Details</h6>
              </div>
              <div className="home-img-contain p-4">
                <img
                  src={homeImg}
                  alt=""
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="home-form-container">
                <form>
                  <h2 className="text-orange text-center">
                    Talk To Our Expert
                  </h2>
                  <div className="mb-3">
                    <label htmlFor="yourName1" className="form-label">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="yourName1"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Email1" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contact1" className="form-label">
                      Contact Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="contact1"
                    />
                  </div>
                  <div className="mb-3 w-25">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="0">Class XII</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-orange">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homeform;
