import React, { Component } from "react";
import "./HomeOwl.scss";

// Owl Img
import owl1 from "../../assets/owl1.jpg";
import owl2 from "../../assets/owl2.jpg";
import owl3 from "../../assets/owl3.jpg";
// Owl Carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 20,
  responsiveClass: true,
  dots: true,
  autoplay: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

export class HomeOwl extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="owl-videos">
          <h1 className="text-center">
            <span>Useful</span> <span className="text-orange">Videos</span>
          </h1>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          <div class="item">
            <div className="card shadow p-1 my-4">
              <img src={owl1} alt="owl1" className="img-fluid owl-img-main" />
            </div>
          </div>
          <div class="item">
            <div className="card shadow p-1 my-4">
              <img src={owl2} alt="owl1" className="img-fluid owl-img-main" />
            </div>
          </div>
          <div class="item">
            <div className="card shadow p-1 my-4">
              <img src={owl3} alt="owl1" className="img-fluid owl-img-main" />
            </div>
          </div>
          <div class="item">
            <div className="card shadow p-1 my-4">
              <img src={owl1} alt="owl1" className="img-fluid owl-img-main" />
            </div>
          </div>
          <div class="item">
            <div className="card shadow p-1 my-4">
              <img src={owl2} alt="owl1" className="img-fluid owl-img-main" />
            </div>
          </div>
          <div class="item">
            <div className="card shadow p-1 my-4">
              <img src={owl3} alt="owl1" className="img-fluid owl-img-main" />
            </div>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default HomeOwl;
