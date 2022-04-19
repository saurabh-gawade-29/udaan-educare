import React, { Component } from "react";
import "./Topmedi.scss";

export class Topmedi extends Component {
  render() {
    return (
      <div>
        <div className="container my-4">
          <h1 className="display-6 text-orange">Top Medical Institutes</h1>
          <div className="wrapper-table table-responsive my-4">
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">College Name</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Topmedi;
