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
                  <div className="mb-4">
                    <input
                      placeholder="Your Full Name"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      placeholder="Email Address"
                      type="email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      placeholder="Contact Number"
                      type="number"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-4 w-50 wrapper-home-form-dropdown">
                    <select className="form-select home-form-dropdown">
                      <option value="0" className="home-form-option">
                        Open this to select menu
                      </option>
                      <option value="0" className="home-form-option">
                        Class XII
                      </option>
                      <option value="1" className="home-form-option">
                        Class XI
                      </option>
                      <option value="2" className="home-form-option">
                        Class I
                      </option>
                      <option value="3" className="home-form-option">
                        Class II
                      </option>
                      <option value="4" className="home-form-option">
                        Class III
                      </option>
                      <option value="5" className="home-form-option">
                        Class IV
                      </option>
                      <option value="6" className="home-form-option">
                        Class V
                      </option>
                      <option value="7" className="home-form-option">
                        Class VI
                      </option>
                      <option value="8" className="home-form-option">
                        Class VII
                      </option>
                      <option value="9" className="home-form-option">
                        Class VIII
                      </option>
                      <option value="10" className="home-form-option">
                        Class IX
                      </option>
                      <option value="11" className="home-form-option">
                        Class X
                      </option>
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
