import React, { Component } from "react";
import "./HomeOwlReview.scss";

// Owl Img
import UserReview from "../../assets/ReviewUser.jpg";
import UserReview2 from "../../assets/UserReview2.jpg";

// Owl Carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  items: 1,
  margin: 20,
  responsiveClass: true,
  dots: false,
  autoplay: true,
  loop: true,
};

export class HomeOwl extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="owl-videos">
          <h1 className="text-center">
            <span>Testi</span>
            <span className="text-orange">Monials</span>
          </h1>
          <h6 className="p-0 text-center text-blue">
            Feedback From Our Respected Students & Parents
          </h6>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          <div className="container">
            <div className="item">
              <div className="card shadow my-4">
                <div className="card-body text-center">
                  <div className="testimonial-upper-container">
                    <div className="wrapper-img-testimonial">
                      <img src={UserReview} alt="User" className="testi-img" />
                    </div>
                  </div>
                  <div className="testimonial-bottom-container">
                    <h6>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus libero eum ea, perferendis assumenda molestiae
                      ducimus eius. Reiciendis, voluptate hic. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Tempore amet iure
                      ducimus natus quam aspernatur id porro dicta vitae
                      doloremque. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Enim fuga cupiditate, et dolore aliquid
                      delectus voluptate voluptatum laboriosam amet ullam! Lorem
                      ipsum dolor, sit amet consectetur adipisicing elit.
                      Quaerat, esse.
                    </h6>
                    <h5>~ Saurabh Gawade</h5>
                    <p>Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="item">
              <div className="card shadow p-1 my-4">
                <div className="card-body text-center">
                  <div className="testimonial-upper-container">
                    <div className="wrapper-img-testimonial">
                      <img src={UserReview2} alt="User" className="testi-img" />
                    </div>
                  </div>
                  <div className="testimonial-bottom-container">
                    <h6>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus libero eum ea, perferendis assumenda molestiae
                      ducimus eius. Reiciendis, voluptate hic. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Tempore amet iure
                      ducimus natus quam aspernatur id porro dicta vitae
                      doloremque. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Enim fuga cupiditate, et dolore aliquid
                      delectus voluptate voluptatum laboriosam amet ullam! Lorem
                      ipsum dolor, sit amet consectetur adipisicing elit.
                      Quaerat, esse.
                    </h6>
                    <h5>~ Diksha Yadav</h5>
                    <p>Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default HomeOwl;
