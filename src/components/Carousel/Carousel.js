import React, { Component } from "react";
import "./Carousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import car0 from "../../assets/car0.jpg";
import car1 from "../../assets/car1.jpg";
import car2 from "../../assets/car2.jpg";
import car3 from "../../assets/car3.jpg";
import car4 from "../../assets/car4.jpg";
import car5 from "../../assets/car5.jpg";
import car6 from "../../assets/car6.jpg";
import car7 from "../../assets/car7.jpg";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel autoPlay showStatus={false} infiniteLoop>
        <div>
          <img src={car0} alt="test" />
        </div>
        <div>
          <img src={car1} alt="test" />
        </div>
        <div>
          <img src={car2} alt="test" />
        </div>
        <div>
          <img src={car3} alt="test" />
        </div>
        <div>
          <img src={car4} alt="test" />
        </div>
        <div>
          <img src={car5} alt="test" />
        </div>
        <div>
          <img src={car6} alt="test" />
        </div>
        <div>
          <img src={car7} alt="test" />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
