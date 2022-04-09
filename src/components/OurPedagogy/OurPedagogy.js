import React, { Component } from "react";
import "./OurPedagogy.scss";
import OurPedagogyImage1 from "../../assets/HighQ.jpg";
import OurPedagogyImage2 from "../../assets/StudyM.jpg";
import OurPedagogyImage3 from "../../assets/FeedbackR.jpg";
import OurPedagogyImage4 from "../../assets/TrainingA.jpg";
import OurPedagogyImage5 from "../../assets/IntractiveG.jpg";
import OurPedagogyImage6 from "../../assets/EffectiveB.jpg";
import OurPedagogyImage7 from "../../assets/DevelopmentB.jpg";
import OurPedagogyImage8 from "../../assets/TestAll.jpg";

export class OurPedagogy extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="first-container">
            <h1 className="our-pedagogy text-center my-4">
              <span>Our</span>
              <span className="text-orange">Pedagogy</span>
            </h1>
            <p>
              Udaan Educare is a pioneer in revolutionizing the concept of
              inclusive and extensive coaching in IIT JEE &amp; NEET in Mumbai,
              which enables the students to enhance their performance in these
              competitive Exams. This approach helps students to save time and
              multiply their efforts. We have been consistently producing top
              results, as our educational program is imparted in the most
              time-efficient manner.
            </p>
          </div>
          <div className="second-container my-4">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage1}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body our-pedagogy-card-body">
                    <p className="card-text our-pedagogoy-truncate">
                      Team of highly qualified teachers comprising of Ex-IIT
                      professors, IIT-ians and Doctorates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage2}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body our-pedagogy-card-body">
                    <p className="card-text our-pedagogoy-truncate">
                      Exhaustive study material prepared by experienced faculty
                      members.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage3}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body our-pedagogy-card-body">
                    <p className="card-text our-pedagogoy-truncate">
                      Regular feedback system, parent-teacher meeting & detailed
                      analysis report after every major test.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage4}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body our-pedagogy-card-body">
                    <p className="card-text our-pedagogoy-truncate">
                      Precise and exhaustive training for competitive exams as
                      well as school exams.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage5}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body our-pedagogy-card-body">
                    <p className="card-text our-pedagogoy-truncate">
                      Highly interactive and innovative teaching methodology to
                      suit individual needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage6}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body our-pedagogy-card-body">
                    <p className="card-text our-pedagogoy-truncate">
                      Efective batch size in class and regular availability of
                      teachers in librery for doubt solving.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage7}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body our-pedagogy-card-body">
                    <p className="card-text our-pedagogoy-truncate">
                      Development of a child’s curiosity, reasoning &amp;
                      out-of-box thinking skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage8}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body our-pedagogy-card-body">
                    <p className="card-text our-pedagogoy-truncate">
                      Rigorous daily practice problems (DPP), topic-wise tests,
                      major tests to assess & evaluate perfromance level
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurPedagogy;
