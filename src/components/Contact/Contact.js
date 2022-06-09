import React, { Component } from "react";
import "./Contact.scss";
import contact_back from "../../assets/Contact_Back.jpg";
import location from "../../assets/location-dot-solid.svg";
import mail from "../../assets/envelope-circle-check-solid.svg";
import call from "../../assets/headset-solid.svg";
import clock from "../../assets/clock-solid.svg";
import contact_girl from "../../assets/Contact_girl.jpg";
import {
  Map,
  Marker,
  InfoWindow,
  GoogleApiWrapper,
  Circle,
} from "google-maps-react";

const LoadingContainer = (props) => <div>Fancy loading container!</div>;
const office = { lat: 19.2067, lng: 72.9537 };
export class Contact extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

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
                <h1>
                  Contact <span className="text-orange">Us</span>
                </h1>
                <h6 className="text-muted">For Any Addmission Queries</h6>
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
                        <span className="text-orange">for any Questions!</span>
                      </h2>
                    </div>
                    <img
                      src={contact_girl}
                      alt=""
                      className="img-fluid shadow rounded"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-2">
                    <form>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="yourName"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="yourEmail"
                          placeholder="Your Email"
                          required
                        />
                        <div id="emailHelp" className="form-text">
                          We'll never share your email with anyone else.
                        </div>
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="yourSubject"
                          placeholder="Your Subject"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <textarea
                          className="form-control"
                          id="yourMsg"
                          rows="3"
                          placeholder="Your Message (Optional)"
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
                      position: "relative",
                    }}
                    google={this.props.google}
                    zoom={14}
                    initialCenter={{
                      lat: 19.2067,
                      lng: 72.9537,
                    }}
                  >
                    <Marker
                      onClick={this.onMarkerClick}
                      title={"Hey! You Are On The Right Way"}
                      name={"Udaan Educare"}
                      position={office}
                    />
                    <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}
                      onClose={this.onClose}
                    >
                      <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                      </div>
                    </InfoWindow>
                    <Circle
                      center={office}
                      radius={500}
                      onMouseover={() => console.log("mouseover")}
                      onClick={() => console.log("click")}
                      onMouseout={() => console.log("mouseout")}
                      strokeColor="transparent"
                      strokeOpacity={0}
                      strokeWeight={5}
                      fillColor="#FF0000"
                      fillOpacity={0.2}
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
  LoadingContainer: LoadingContainer,
})(Contact);
