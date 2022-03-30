import React, { Component } from "react";
import "./Contact.scss";
import contact_back from "../../assets/Contact_Back.jpg";
import location from "../../assets/location-dot-solid.svg";
import mail from "../../assets/envelope-circle-check-solid.svg";
import call from "../../assets/headset-solid.svg";
import clock from "../../assets/clock-solid.svg";
import contact_girl from "../../assets/Contact_girl.jpg";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div className="first-container">
          <div className="container-fluid p-0">
            <div className="banner-img">
              <img src={contact_back} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="second-container my-3">
          <div className="row con-gutter-row">
            <div className="col-12">
              <div className="con-head text-center py-2 my-2">
                <h1>Contact Us</h1>
                <p className="text-muted">For Any Addmission Queries</p>
              </div>
              <div className="container">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-2">
                        <div className="con-loc-1">
                          <img
                            src={location}
                            alt="location"
                            className="con-icons-down img-fluid my-2"
                          />
                          <p>
                            D1,Plot no.43,Jyoti chs, near New Gokul Dairy,
                            Thane, Maharashtra 400606
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-2">
                        <div className="con-loc">
                          <img
                            src={mail}
                            alt="location"
                            className="con-icons-down img-fluid my-2"
                          />
                          <p>udaanEducare.com</p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-2">
                        <div className="con-loc">
                          <img
                            src={call}
                            alt="location"
                            className="con-icons-down img-fluid my-2"
                          />
                          <p>077389 66868</p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-2">
                        <div className="con-loc">
                          <img
                            src={clock}
                            alt="location"
                            className="con-icons-down img-fluid my-2"
                          />
                          <p>10-7</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container con-form-container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-2">
                    <div className="get-in-touch">
                      <h5 className="text-muted">Get in Touch With Us</h5>
                      <h2 className="fw-bold">
                        Contact Us{" "}
                        <span className="get-part">for any Questions!</span>
                      </h2>
                    </div>
                    <img src={contact_girl} alt="" className="img-fluid" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-2">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="yourName"
                          className="form-label fw-bold text-muted"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="yourName"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="yourEmail"
                          className="form-label fw-bold text-muted"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="yourEmail"
                          aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                          We'll never share your email with anyone else.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="yourSubject"
                          className="form-label fw-bold text-muted"
                        >
                          Your Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="yourSubject"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="yourMsg"
                          className="form-label fw-bold text-muted"
                        >
                          Your Message ( Optional )
                        </label>
                        <textarea
                          className="form-control"
                          id="yourMsg"
                          rows="3"
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-orange fw-bold">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="map-height">
                <div className="google-map">
                  <Map
                    style={{
                      width: "100%",
                      height: "100%",
                      // position: "relative",
                    }}
                    google={this.props.google}
                    zoom={14}
                    initialCenter={{
                      lat: 19.2092143,
                      lng: 72.9506094,
                    }}
                  >
                    <Marker
                      onClick={this.onMarkerClick}
                      name={"Current location"}
                    />
                  </Map>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDQd18tNe5xViquCSZDegRQWZKBc62uGw4",
})(Contact);
