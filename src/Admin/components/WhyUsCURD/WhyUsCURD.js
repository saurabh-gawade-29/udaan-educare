import React, { Component } from "react";
import "./WhyUsCURD.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export class WhyUsCURD extends Component {
  render() {
    return (
      <div>
        <div className="section-1 my-4">
          <h3>Home - Why Us</h3>
        </div>
        <div className="section-2 my-4">
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Add Why Us"
                required
              />
            </div>
            <div className="col-md-2">
              <button type="submit" class="btn admin-button btn-block">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="section-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr No</th>
                <th scope="col">Why Us - title</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Test Title</td>
                <td>
                  <div className="table-data-center-1">
                    <div className="">
                      <FontAwesomeIcon icon={faTrash} size="md" />
                    </div>
                    <div className="mx-4">
                      <FontAwesomeIcon icon={faPencil} size="md" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default WhyUsCURD;
