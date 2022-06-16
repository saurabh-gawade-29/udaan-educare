import React, { Component } from "react";
import "./Homeform.scss";
import homeImg from "../../assets/img_1_girl.jpg";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as validator from "../../helper/Validator";

export class Homeform extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.email = React.createRef();
    this.contact = React.createRef();
    this.std = React.createRef();
    this.state = {
      name: "",
      email: "",
      contact: "",
      std: "",
    };
    this.contactOnChange = this.contactOnChange.bind(this);
  }

  componentDidMount() {
    validator.add(this.name);
    validator.add(this.email);
    validator.add(this.contact);
    validator.add(this.std);
  }

  contactOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  homeSubmit = (e) => {
    debugger;
    e.preventDefault();
    let checkTrue = validator.hardValidator();
    // Check For Return True or Not
    if (checkTrue === true) {
      this.setState({
        name: "",
        email: "",
        contact: "",
        std: "",
      });
    }
  };
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
                {/* <form> */}
                <h2 className="text-orange text-center">Talk To Our Expert</h2>
                <div className="mb-4">
                  <input
                    name="name"
                    aria-label="Your Full Name"
                    value={this.state.name}
                    ref={this.name}
                    placeholder="Your Full Name"
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => {
                      this.contactOnChange(e);
                    }}
                  />
                </div>
                <div className="mb-4">
                  <input
                    name="email"
                    aria-label="Your Email"
                    value={this.state.email}
                    ref={this.email}
                    placeholder="Email Address"
                    type="email"
                    className="form-control"
                    required
                    onChange={(e) => {
                      this.contactOnChange(e);
                    }}
                  />
                </div>
                <div className="mb-4">
                  <input
                    name="contact"
                    aria-label="Your Contact"
                    value={this.state.contact}
                    ref={this.contact}
                    placeholder="Contact Number"
                    type="number"
                    className="form-control"
                    required
                    onChange={(e) => {
                      this.contactOnChange(e);
                    }}
                  />
                </div>
                <div className="mb-4 w-50 wrapper-home-form-dropdown">
                  <select
                    className="form-select home-form-dropdown"
                    ref={this.std}
                    name="std"
                    value={this.state.std}
                    aria-label="at list one selection"
                    onChange={(e) => {
                      this.contactOnChange(e);
                    }}
                  >
                    <option value="" className="home-form-option">
                      Please Select One
                    </option>
                    <option value="Class XII" className="home-form-option">
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
                <button
                  type="button"
                  className="btn btn-orange"
                  onClick={(e) => this.homeSubmit(e)}
                >
                  Submit
                </button>
                {/* </form> */}
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homeform;
