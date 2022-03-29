import React, { Component } from "react";
import "./OurPedagogy.scss";
import OurPedagogyImage from "../../assets/about-us-director.jpg";

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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              sed ducimus iure ipsa harum culpa tempore reprehenderit, deserunt
              dolores, repudiandae quo dolore sint ea qui voluptates. Accusamus
              quae ullam sequi animi modi corporis quod iusto iure dignissimos
              molestiae libero odit molestias dolorum laborum similique
              doloribus dicta a commodi nam, cupiditate ducimus asperiores.
              Pariatur accusamus minima voluptate sunt consectetur odit illum,
              vero voluptatem quaerat, quis itaque iure temporibus, cupiditate
              amet! Animi eos adipisci reprehenderit et quisquam perspiciatis
              maiores illum voluptates officia! Culpa fugit exercitationem id
              sit dignissimos atque, similique, reiciendis, et necessitatibus
              maxime repellat vitae
            </p>
          </div>
          <div className="second-container my-4">
            <div className="row">
              <div className="col-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card my-3 shadow p-1 ourImage">
                  <img
                    src={OurPedagogyImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="third-container">
            <hr className="dot-hr-tag" />
          </div>
        </div>
      </div>
    );
  }
}

export default OurPedagogy;
