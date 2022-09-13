import React, { Component } from "react";
import "./CarouselCURD.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import test from "../../assets/img/pexels-pixabay-356065.jpg";

class CarouselCURD extends Component {
  render() {
    return (
      <div>
        <div className="section-1 my-4">
          <div className="card">
            <div className="card-header h3">Home - Carousel</div>
            <div className="card-body">
              <form>
                <div class="mb-3">
                  <div className="row">
                    <div className="col-md-9">
                      <input class="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-md-3">
                      <button type="submit" class="btn admin-button">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="section-2 my-4">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr No</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div className="table-data-center">1</div>
                </th>
                <td>
                  <img src={test} alt="" className="table-img" />
                </td>
                <td>
                  <div className="table-data-center">
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

export default CarouselCURD;
