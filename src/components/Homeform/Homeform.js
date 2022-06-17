import React, { Component } from "react";
import "./Homeform.scss";
import homeImg from "../../assets/img_1_girl.jpg";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as validator from "../../helper/Validator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

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

  formClear = () => {
    this.setState({
      name: "",
      email: "",
      contact: "",
      std: "",
    });
    return true;
  };

  homeSubmit = (e) => {
    debugger;
    e.preventDefault();
    let checkTrue = false;
    checkTrue = validator.hardValidator();
    // Check For Return True or Not
    if (checkTrue === true) {
      this.formClear();
    }
  };

  onClear = () => {
    debugger;
    let checkClear = this.formClear();
    if (checkClear === true) {
      toast.success(`Cleared Successfully`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
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
              <div className="home-form-container my-4">
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
                    <option value="Class XI" className="home-form-option">
                      Class XI
                    </option>
                    <option value="Class I" className="home-form-option">
                      Class I
                    </option>
                    <option value="Class II" className="home-form-option">
                      Class II
                    </option>
                    <option value="Class III" className="home-form-option">
                      Class III
                    </option>
                    <option value="Class IV" className="home-form-option">
                      Class IV
                    </option>
                    <option value="Class V" className="home-form-option">
                      Class V
                    </option>
                    <option value="Class VI" className="home-form-option">
                      Class VI
                    </option>
                    <option value="Class VII" className="home-form-option">
                      Class VII
                    </option>
                    <option value="Class VIII" className="home-form-option">
                      Class VIII
                    </option>
                    <option value="Class IX" className="home-form-option">
                      Class IX
                    </option>
                    <option value="Class X" className="home-form-option">
                      Class X
                    </option>
                  </select>
                </div>
                <div className="btn-wrapper d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-orange"
                    onClick={(e) => this.homeSubmit(e)}
                  >
                    Submit
                  </button>
                  <div className="font-awesome-icon-wrapper">
                    <FontAwesomeIcon
                      data-toggle="tooltip"
                      icon={faArrowsRotate}
                      className="highlight mx-4 refreshUdaan"
                      size="lg"
                      onClick={this.onClear}
                      title="Clear"
                    />
                  </div>
                </div>

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
