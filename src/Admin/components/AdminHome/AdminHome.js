import React, { Component } from "react";
import Tabs from "../../../Admin/components/Tabs/Tabs";
import "./AdminHome.scss";
import CarouselCURD from "../../../Admin/components/CarouselCURD/CarouselCURD";
import ContactCURD from "../../../Admin/components/ContactCURD/ContactCURD";
import BioCURD from "../../../Admin/components/BioCURD/BioCURD";
import EventCURD from "../../../Admin/components/EventCURD/EventCURD";
import WhyUsCURD from "../../../Admin/components/WhyUsCURD/WhyUsCURD";
import UsefullVideosCURD from "../../../Admin/components/UsefullVideosCURD/UsefullVideosCURD";
import TestimonialsCURD from "../../../Admin/components/TestimonialsCURD/TestimonialsCURD";

class AdminHome extends Component {
  render() {
    return (
      <div>
        <h1 className="admin-card-head">Admin Home</h1>
        <Tabs>
          <div label="Carousel">
            <CarouselCURD />
          </div>
          <div label="Contact">
            <ContactCURD />
          </div>
          <div label="Bio">
            <BioCURD />
          </div>
          <div label="Event">
            <EventCURD />
          </div>
          <div label="WhyUs">
            <WhyUsCURD />
          </div>
          <div label="Videos">
            <UsefullVideosCURD />
          </div>
          <div label="Testimonials">
            <TestimonialsCURD />
          </div>
        </Tabs>
      </div>
    );
  }
}

export default AdminHome;
