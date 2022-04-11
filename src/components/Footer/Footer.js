import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
import { Link } from "react-router-dom";
export class Footer extends Component {
  render() {
    return (
      <>
        <footer className="upperFooter">
          <div className="container upper-foot-container">
            <section className="top-footer">
              <div className="row">
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 uFooter-col">
                  <h5>Welcome to Udaan Educare</h5>
                  <h1>Udaan Educare</h1>
                  <p className="m-0">
                    Helping Engineering &amp; Medical aspirants by providing
                    quality education which helps them in building a strong
                    fundamental base &amp; developing their problem-solving
                    ability.
                  </p>
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 uFooter-col">
                  <div className="usefull">
                    <h5>USEFULL LINKS</h5>
                    <ul>
                      <li>
                        <Link to="/About">About Us</Link>
                      </li>
                      <li>
                        <Link to="/Admission">Admission Criteria</Link>
                      </li>
                      <li>
                        <Link to="/Careeroption">Career Option</Link>
                      </li>
                      <li>
                        <a href="/">Vidoes</a>
                      </li>
                      <li>
                        <a href="/">Top Engineering Institute</a>
                      </li>
                      <li>
                        <a href="/">Top Medical Institute</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 uFooter-col">
                  <div className="courses">
                    <h5>COURSES</h5>
                    <ul>
                      <li>
                        <a href="/">Foundation Course</a>
                      </li>
                      <li>
                        <a href="/">Engineering Course</a>
                      </li>
                      <li>
                        <a href="/">Medical Course</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 uFooter-col">
                  <div className="other">
                    <h5>OTHER LINK</h5>
                    <ul>
                      <li>
                        <Link to="/Terms">Terms & Condition</Link>
                      </li>
                      <li>
                        <Link to="/Privacy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/Refund">Refund Policy</Link>
                      </li>
                      <li>
                        <Link to="/Faq">FAQ's</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="bottom-footer">
            <div className="container-fluid">
              <div className="foot-back d-flex justify-content-between">
                <div className="foot-lic">
                  <p>Udaan Educare 2021. All Right Reserved</p>
                </div>
                <div className="foot-social d-flex">
                  <div className="facebook mx-3">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="highlight"
                      size="lg"
                    />
                  </div>
                  <div className="instagram mx-3">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="highlight"
                      size="lg"
                    />
                  </div>
                  <div className="youtube mx-3">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="highlight"
                      size="lg"
                    />
                  </div>
                  <div className="linkedin mx-3">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="highlight"
                      size="lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </>
    );
  }
}

export default Footer;
