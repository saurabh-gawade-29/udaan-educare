import React, { Component } from "react";
import "./About.scss";
import director from "../../assets/about-us-director.jpg";

export class About extends Component {
  render() {
    return (
      <div>
        <div className="container my-4">
          <h1 className="text-center about-us-heading">
            <span>About</span> <span className="us-head">Us</span>
          </h1>
          <div className="first-para">
            <p>
              Welcome to Excellence Educare. We are grateful for your interest
              in associating with us. The time before and after 10th Standard
              boards is a confusing one, and you must have several questions in
              your mind. As parents and students alike, the next two years
              represent a quantum change and extremely decisive in terms of
              future prospects. At Excellence Educare, our ethos is high
              standards of excellence – moral, ethical and academic. We aim to
              nurture our students and mentor them on the correct path,
              emphasising on not just academic progress, but, more crucially,
              building character and values to help them become competent,
              contributing and informed citizens of our Nation.
            </p>
          </div>
          <div className="second-para my-2">
            <ul>
              <li>
                <p>
                  Where do I get the best support and guidance for entrance
                  exams?
                </p>
              </li>
              <li>
                <p>
                  Where do I get the best support and guidance for entrance
                  exams?
                </p>
              </li>
              <li>
                <p>
                  Where do I get the best support and guidance for entrance
                  exams?
                </p>
              </li>
              <li>
                <p>
                  Where do I get the best support and guidance for entrance
                  exams?
                </p>
              </li>
              <li>
                <p>
                  Where do I get the best support and guidance for entrance
                  exams?
                </p>
              </li>
              <li>
                <p>
                  Where do I get the best support and guidance for entrance
                  exams?
                </p>
              </li>
            </ul>
          </div>
          <div className="third-para">
            <p>
              Welcome to Excellence Educare. We are grateful for your interest
              in associating with us. The time before and after 10th Standard
              boards is a confusing one, and you must have several questions in
              your mind. As parents and students alike, the next two years
              represent a quantum change and extremely decisive in terms of
              future prospects. At Excellence Educare, our ethos is high
              standards of excellence – moral, ethical and academic. We aim to
              nurture our students and mentor them on the correct path,
              emphasising on not just academic progress, but, more crucially,
              building character and values to help them become competent,
              contributing and informed citizens of our Nation.
            </p>
          </div>
          <div className="forth-para">
            <p>
              Welcome to Excellence Educare. We are grateful for your interest
              in associating with us. The time before and after 10th Standard
              boards is a confusing one, and you must have several questions in
              your mind. As parents and students alike, the next two years
              represent a quantum change and extremely decisive in terms of
              future prospects.
            </p>
          </div>
        </div>

        <div className="container my-4">
          <div className="why-us">
            <h1 className="text-center">
              <span>Why</span> <span className="us-why">Us</span>
            </h1>
            <h5 className="text-center">Learn From The Best, Be The Best</h5>
          </div>
          <div className="row my-4">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <h5 className="text-center dash-benifit">
                <span>Benifits of Excellance</span>
              </h5>
              <ul>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <h5 className="text-center dash-benifit">
                <span>Benifits of Excellance</span>
              </h5>
              <ul>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <h5 className="text-center dash-benifit">
                <span>Benifits of Excellance</span>
              </h5>
              <ul>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className="director-heading">
            <span>From</span>{" "}
            <span className="director-pen">Directors Pen</span>
          </h1>
          <hr />
          <div className="owner-info my-4">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 my-2">
                <div className="owner-img card shadow">
                  <img src={director} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-12 col-sm=12 col-md-8 col-lg-8 my-2">
                <div className="owner-area">
                  <div className="owner-tagline">
                    <p className="text-muted font-weight-bold text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora, id.
                    </p>
                  </div>
                  <div className="owner-summurty">
                    <p className="text-muted">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nulla, facere sapiente. Similique harum omnis fuga vero
                      molestias explicabo aperiam reprehenderit animi vitae
                      consequuntur, amet impedit deleniti expedita hic
                      perferendis nisi voluptatem, eaque repellendus. Quia
                      reprehenderit hic exercitationem dignissimos consectetur
                      est, impedit necessitatibus nostrum fugiat sint expedita?
                      Velit repellendus adipisci eum? Lorem ipsum dolor sit
                      amet. Lorem ipsum dolor sit amet.
                    </p>
                    <div className="owner-name text-center my-4">
                      <h5 className="text-director">MR. SAURABH GAWADE</h5>
                      <h6 className="">DIRECTOR</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="owner-info my-4">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 my-2">
                <div className="owner-img card shadow">
                  <img src={director} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-12 col-sm=12 col-md-8 col-lg-8 my-2">
                <div className="owner-area">
                  <div className="owner-tagline">
                    <p className="text-muted font-weight-bold text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora, id.
                    </p>
                  </div>
                  <div className="owner-summurty">
                    <p className="text-muted">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nulla, facere sapiente. Similique harum omnis fuga vero
                      molestias explicabo aperiam reprehenderit animi vitae
                      consequuntur, amet impedit deleniti expedita hic
                      perferendis nisi voluptatem, eaque repellendus. Quia
                      reprehenderit hic exercitationem dignissimos consectetur
                      est, impedit necessitatibus nostrum fugiat sint expedita?
                      Velit repellendus adipisci eum? Lorem ipsum dolor sit
                      amet. Lorem ipsum dolor sit amet.
                    </p>
                    <div className="owner-name text-center my-4">
                      <h5 className="text-director">MR. SAURABH GAWADE</h5>
                      <h6 className="">DIRECTOR</h6>
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

export default About;
