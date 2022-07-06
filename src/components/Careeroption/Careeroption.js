import React, { Component } from "react";
import "./Careeroption.scss";
import career from "../../assets/car_op.jpg";
import { ToastContainer } from "react-toastify";
import { Validator } from "../../helper/Validator";

export class Careeroption extends Component {
  constructor(props) {
    super(props);
    this.career_name = React.createRef();
    this.career_email = React.createRef();
    this.career_contact_no = React.createRef();
    this.career_resume = React.createRef();
    this.career_comment = React.createRef();
    this.state = {
      name: "",
      email: "",
      contactNo: "",
      resume: null,
      comment: "",
    };
    this.contactOnChange = this.contactOnChange.bind(this);
  }

  componentDidMount() {
    try {
      this.validator = new Validator();
      this.validator.add(this.career_name);
      this.validator.add(this.career_email);
      this.validator.add(this.career_contact_no);
      this.validator.add(this.career_resume);
      this.validator.add(this.career_comment);
    } catch (error) {
      console.log(error);
    }
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
      contactNo: "",
      resume: "",
      comment: "",
    });
    return true;
  };

  homeSubmit = (e) => {
    debugger;
    e.preventDefault();
    let checkTrue = false;
    checkTrue = this.validator.hardValidator();
    // Check For Return True or Not
    if (checkTrue === true) {
      this.formClear();
    }
  };

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center">
            JOB OPPORTUNITY AT{" "}
            <span className="text-orange">UDAAN EDUCARE</span>
          </h2>
          <div className="wrapper-car-form">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <img
                  src={career}
                  alt=""
                  className="img-fluid shadow car-op-img mt-4"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                {/* <form> */}
                <div class="form-group my-3">
                  <div class="form-floating">
                    <input
                      name="name"
                      aria-label="Your Full Name"
                      value={this.state.name}
                      ref={this.career_name}
                      onChange={(e) => {
                        this.contactOnChange(e);
                      }}
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      required
                    />
                    <label for="Name">Full Name</label>
                  </div>
                </div>
                <div class="form-group my-3">
                  <div class="form-floating">
                    <input
                      name="email"
                      aria-label="Your Email"
                      value={this.state.email}
                      ref={this.career_email}
                      onChange={(e) => {
                        this.contactOnChange(e);
                      }}
                      type="email"
                      class="form-control"
                      placeholder="Email Address"
                      required
                    />
                    <label for="Email">Email</label>
                  </div>
                </div>
                <div class="form-group my-3">
                  <div class="form-floating">
                    <input
                      name="contactNo"
                      aria-label="Your Contact no"
                      value={this.state.contactNo}
                      ref={this.career_contact_no}
                      onChange={(e) => {
                        this.contactOnChange(e);
                      }}
                      type="number"
                      class="form-control"
                      placeholder="Contact Number"
                      required
                    />
                    <label for="contact">Contact Number</label>
                  </div>
                </div>
                <div class="form-group my-3">
                  <div class="input-group mb-3">
                    <label class="input-group-text" for="cv">
                      Resume / CV
                    </label>
                    <input
                      name="resume"
                      aria-label="Your Resume"
                      value={this.state.resume}
                      ref={this.career_resume}
                      onChange={(e) => {
                        this.contactOnChange(e);
                      }}
                      type="file"
                      class="form-control "
                      required
                      accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    />
                  </div>
                </div>
                <div class="form-group my-3">
                  <div class="form-floating">
                    <textarea
                      name="comment"
                      aria-label="Comment"
                      value={this.state.comment}
                      ref={this.career_comment}
                      onChange={(e) => {
                        this.contactOnChange(e);
                      }}
                      class="form-control"
                      placeholder="Leave a comment here"
                      required
                    ></textarea>
                    <label for="msg">Any Comment</label>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-orange"
                  onClick={(e) => {
                    this.homeSubmit(e);
                  }}
                >
                  Submit
                </button>
                {/* </form> */}
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default Careeroption;
