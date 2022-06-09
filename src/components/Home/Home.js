import React, { Component } from "react";
import Carousel from "../Carousel/Carousel";
import Homeform from "../Homeform/Homeform";
import Homeabout from "../Homeabout/Homeabout";
import Parallax from "../Parallax/Parallax";
import "./Home.scss";
import Homewhy from "../Homewhy/Homewhy";
import HomeOwl from "../HomeOwl/HomeOwl";
import HomeOwlReview from "../HomeOwlReview/HomeOwlReview";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-all-main">
          <div className="home-car">
            <Carousel />
          </div>
          <div className="home-form">
            <Homeform />
          </div>
          <div className="home-about my-4 py-3">
            <Homeabout />
          </div>
          <div className="home-parallax">
            <Parallax />
          </div>
          <div className="home-why-us my-4">
            <Homewhy />
          </div>
          <div className="home-owl my-4">
            <HomeOwl />
          </div>
          <div className="home-owl-review my-4">
            <HomeOwlReview />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
