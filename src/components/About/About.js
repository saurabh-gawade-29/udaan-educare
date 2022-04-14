import React, { Component } from "react";
import "./About.scss";
import director from "../../assets/about-us-director.jpg";

export class About extends Component {
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="about-us-heading text-center">
            <span>About</span> <span className="text-orange">Us</span>
          </h1>
        </div>
        <div className="container my-3 rounded-3 p-4 shadow bg-light">
          <div className="first-para">
            <p>
              Welcome to Udaan Educare. We are grateful for your interest in
              associating with us. The time before and after 10th Standard
              boards is a confusing one, and you must have several questions in
              your mind. As parents and students alike, the next two years
              represent a quantum change and extremely decisive in terms of
              future prospects. At Udaan Educare, our ethos is high standards of
              excellence – moral, ethical and academic. We aim to nurture our
              students and mentor them on the correct path, emphasising on not
              just academic progress, but, more crucially, building character
              and values to help them become competent, contributing and
              informed citizens of our Nation.
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
              Welcome to Udaan Educare. We are grateful for your interest in
              associating with us. The time before and after 10th Standard
              boards is a confusing one, and you must have several questions in
              your mind. As parents and students alike, the next two years
              represent a quantum change and extremely decisive in terms of
              future prospects. At Udaan Educare, our ethos is high standards of
              excellence – moral, ethical and academic. We aim to nurture our
              students and mentor them on the correct path, emphasising on not
              just academic progress, but, more crucially, building character
              and values to help them become competent, contributing and
              informed citizens of our Nation.
            </p>
          </div>
          <div className="forth-para">
            <p>
              Welcome to Udaan Educare. We are grateful for your interest in
              associating with us. The time before and after 10th Standard
              boards is a confusing one, and you must have several questions in
              your mind. As parents and students alike, the next two years
              represent a quantum change and extremely decisive in terms of
              future prospects.
            </p>
          </div>
        </div>

        <div className="container">
          <h1 className="director-heading">
            <span>From</span> <span className="text-orange">Directors Pen</span>
          </h1>
          <div className="owner-info">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div class="card my-3 shadow rounded">
                  <div class="row g-0">
                    <div class="col-md-5">
                      <img
                        src={director}
                        class="img-fluid rounded-start rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-7">
                      <div class="card-body">
                        <h5 class="card-title">Saurabh Gawade</h5>
                        <p class="card-text">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Veritatis iste temporibus a, minus quibusdam
                          nesciunt vero non laudantium cumque soluta, incidunt
                          labore illo ratione officiis dolore rem odio, error
                          nam similique. Repellendus, similique dicta. Quam,
                          maxime. Cupiditate odio veniam veritatis iusto
                          molestias rem mollitia, ad et sed magnam natus nobis!
                        </p>
                        <p class="card-text">
                          <small class="text-muted">~ Director</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div class="card my-3 shadow rounded">
                  <div class="row g-0">
                    <div class="col-md-5">
                      <img
                        src={director}
                        class="img-fluid rounded-start rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-7">
                      <div class="card-body">
                        <h5 class="card-title">Saurabh Gawade</h5>
                        <p class="card-text">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Veritatis iste temporibus a, minus quibusdam
                          nesciunt vero non laudantium cumque soluta, incidunt
                          labore illo ratione officiis dolore rem odio, error
                          nam similique. Repellendus, similique dicta. Quam,
                          maxime. Cupiditate odio veniam veritatis iusto
                          molestias rem mollitia, ad et sed magnam natus nobis!
                        </p>
                        <p class="card-text">
                          <small class="text-muted">~ Director</small>
                        </p>
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

export default About;
