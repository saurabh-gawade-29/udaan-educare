import React, { Component } from "react";
import "./Carousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import car1 from "../../assets/img_1_girl.jpg";
import car2 from "../../assets/img_1_boy.jpg";
import car3 from "../../assets/img_1_other.jpg";
import car4 from "../../assets/img_2_girl.jpg";
import car5 from "../../assets/img_2_other.jpg";
import car6 from "../../assets/img_3_other.jpg";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={car3} alt="test" />
        </div>
        <div>
          <img src={car6} alt="test" />
        </div>
        <div>
          <img src={car2} alt="test" />
        </div>
        <div>
          <img src={car4} alt="test" />
        </div>
        <div>
          <img src={car5} alt="test" />
        </div>
        <div>
          <img src={car1} alt="test" />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
