import React, { Component } from "react";
import "./ContactCURD.scss";

export class ContactCURD extends Component {
  render() {
    return (
      <div>
        <div className="section-1">
          <h3>Home - Contact Us</h3>
        </div>
        <div className="section-2">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr No</th>
                <th scope="col">Your Full Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Contact No</th>
                <th scope="col">Std</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>mark@gmail.com</td>
                <td>123456789</td>
                <td>XII</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ContactCURD;
