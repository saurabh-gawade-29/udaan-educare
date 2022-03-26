import React, { Component } from "react";
import "./Contact.scss";
import contact_back from "../../assets/Contact_Back.jpg";
// import contact_girl from "../../assets/Contact_girl.jpg";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div className="first-container">
          <img src={contact_back} alt="" className="img-fluid" />
        </div>
      </div>
    );
  }
}

export default Contact;
