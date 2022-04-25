import React, { Component } from "react";
import "./Careeroption.scss";
import career from "../../assets/car_op.jpg";

export class Careeroption extends Component {
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
                <form>
                  <div class="form-group my-3">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Full Name"
                        id="Name"
                      />
                      <label for="Name">Full Name</label>
                    </div>
                  </div>
                  <div class="form-group my-3">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Email Address"
                        id="Email"
                      />
                      <label for="Email">Email</label>
                    </div>
                  </div>
                  <div class="form-group my-3">
                    <div class="form-floating">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Contact Number"
                        id="contact"
                      />
                      <label for="contact">Contact Number</label>
                    </div>
                  </div>
                  <div class="form-group my-3">
                    <div class="input-group mb-3">
                      <label class="input-group-text" for="cv">
                        Resume / CV
                      </label>
                      <input type="file" class="form-control " id="cv" />
                    </div>
                  </div>
                  <div class="form-group my-3">
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="msg"
                      ></textarea>
                      <label for="msg">Any Comment</label>
                    </div>
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

export default Careeroption;
