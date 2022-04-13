import React, { Component } from "react";
import "./Faq.scss";
import FAQ from "../../assets/Faq.jpg";

export class Faq extends Component {
  render() {
    return (
      <div>
        <div className="Faq-Wrapper">
          <div className="container">
            <div className="Faq-heading text-center my-4">
              <h1>
                Frequently Asked <span className="text-orange">Questions</span>
              </h1>
            </div>
            <div className="faq-container my-4">
              <div className="row">
                {/* Col6 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-4">
                  <div className="faq-img-container ">
                    <div className="card p-1 shadow">
                      <img src={FAQ} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-4">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    {/* Question Number 1 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          How Online Lectures are Scheduled?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          You Will be informed 1 week ago with a PDF of 1month
                          time-table of subject and the teachers who will take
                          the lectures and other information
                        </div>
                      </div>
                    </div>

                    {/* Question Number 2 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          How Can I Ask Doubt In Online Lecture?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          All the online lectures are not more then 10 students
                          only and if you are taking Private/Home tution then
                          one to one nobody else, now for doubt since batches
                          are small it will be very interactive and you can
                          raise your hand and ask doubt easily also teachers can
                          ask you questions as well so better be attentive in
                          class.
                        </div>
                      </div>
                    </div>

                    {/* Question Number 3 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          I want private tuition but the location is not in
                          Mumbai/Thane/Navi Mumbai?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Well we have good news for you as after great success
                          in physical location we started online private tution
                          as well so whether you are in J&K, Tamil Nadu, Gujrat
                          to North East, every location is covered by Excellence
                          Educare.
                        </div>
                      </div>
                    </div>

                    {/* Question Number 4 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          I Am Weak In Particular Subject Can I Take Single
                          Subject For My JEE/NEET Preparation?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Well guess what, we got you covered as well, i would
                          like to suggest you that if you are weak in particular
                          subject you should definitely go for single subject
                          private tution Home/Online so we will take care of
                          your subject and we will make the subject as a strong
                          subject for you.
                        </div>
                      </div>
                    </div>

                    {/* Question Number 5 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          My Parents Can’t Pay This Much Fee At Once, Can You
                          Help With That?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          We Excellence Educare as responsible classes
                          understand that as we charge lowest then any other
                          coaching in the country still we understand the
                          current situation and how badly people are affected so
                          we can arrange a meeting for that and can talk about
                          EMI facility as well which Excellence Educare provide.
                        </div>
                      </div>
                    </div>
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

export default Faq;
