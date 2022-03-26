import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
export class Footer extends Component {
  render() {
    return (
      <>
        <footer className="upperFooter">
          <div className="container upper-foot-container">
            <section className="top-footer">
              <div className="row">
                <div className="col-3">
                  <h5>Welcome to Udaan Educare</h5>
                  <h1>Udaan Educare</h1>
                  <p className="m-0">
                    Helping Engineering &amp; Medical aspirants by providing
                    quality education which helps them in building a strong
                    fundamental base &amp; developing their problem-solving
                    ability.
                  </p>
                </div>
                <div className="col-3">
                  <div className="usefull">
                    <h5>USEFULL LINKS</h5>
                    <ul>
                      <li>
                        <a href="/">About Us</a>
                      </li>
                      <li>
                        <a href="/">Admission Criteria</a>
                      </li>
                      <li>
                        <a href="/">Career Option</a>
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
                <div className="col-3">
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
                <div className="col-3">
                  <div className="other">
                    <h5>OTHER LINK</h5>
                    <ul>
                      <li>
                        <a href="/">Terms & Condition</a>
                      </li>
                      <li>
                        <a href="/">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/">Refund Policy</a>
                      </li>
                      <li>
                        <a href="/">FAQ's</a>
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
                <div className="foot-social d-flex mx-4">
                  <div className="facebook">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="highlight mx-3"
                      size="lg"
                    />
                  </div>
                  <div className="instagram">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="highlight mx-3"
                      size="lg"
                    />
                  </div>
                  <div className="youtube">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="highlight mx-3"
                      size="lg"
                    />
                  </div>
                  <div className="linkedin">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="highlight mx-3"
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
