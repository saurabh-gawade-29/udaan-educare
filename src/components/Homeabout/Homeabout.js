import React, { Component } from "react";
import homeAboutImg from "../../assets/img_1_boy.jpg";
import "./Homeabout.scss";

// SVG
import personSvg from "../../assets/person-rays-solid.svg";
import infinitySvg from "../../assets/infinity-solid.svg";
import heartSvg from "../../assets/heart-pulse-solid.svg";
import waveSvg from "../../assets/wave-square-solid.svg";

export class Homeabout extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row my-3">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="home-about-left">
                <div className="text-center my-4">
                  <h1>Udaan Educare</h1>
                </div>
                <p>
                  We help Engineering & Medical aspirants by providing quality
                  education which helps them in building a strong fundamental
                  base & developing their problem-solving ability. The kind of
                  students who love our work is the one who don’t like switching
                  institutes & want a trusted coaching institute where they can
                  get one to one attention, doubt solving, tricks & strategies.
                  Our courses have small batches & we keep students accountable
                  by providing monthly reports & test reports to their parents
                  that help us to work for their growth accordingly.
                </p>
                <div className="text-center my-4">
                  <button className="btn btn-orange">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="home-about-img p-4">
                <img
                  src={homeAboutImg}
                  alt=""
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
              <div className="home-about-rock text-center">
                <img src={personSvg} alt="" className="img-fluid" />
              </div>
              <h1 className="text-center home-svg-main-text">JEE Main</h1>
              <h5 className="text-center my-2">BITS / MHT-CET / KVPY</h5>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
              <div className="home-about-rock text-center">
                <img src={infinitySvg} alt="" className="img-fluid" />
              </div>
              <h1 className="text-center home-svg-main-text">JEE Advanced</h1>
              <h5 className="text-center my-2">IIT</h5>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
              <div className="home-about-rock text-center">
                <img src={heartSvg} alt="" className="img-fluid" />
              </div>
              <h1 className="text-center home-svg-main-text">Medical</h1>
              <h5 className="text-center my-2">NEET</h5>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
              <div className="home-about-rock text-center">
                <img src={waveSvg} alt="" className="img-fluid" />
              </div>
              <h1 className="text-center home-svg-main-text">Foundation</h1>
              <h5 className="text-center my-2">NTSE IMO & INJSO</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homeabout;
