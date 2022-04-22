import React, { Component } from "react";
import "./Topmedi.scss";
import JsonData from "../../JSON/Top_Medical_college.json";
import JsonData1 from "../../JSON/Top_Medical_Maharashtra.json";

const displayData = JsonData.map((e) => {
  return (
    <tr>
      <th scope="col" className="text-center p-2">
        {e.id}
      </th>
      <th scope="col" className="text-center p-2">
        {e.name}
      </th>
      <th scope="col" className="text-center p-2">
        {e.city}
      </th>
    </tr>
  );
});

const displayData1 = JsonData1.map((e) => {
  return (
    <tr>
      <th scope="col" className="text-center p-2">
        {e.id}
      </th>
      <th scope="col" className="text-center p-2">
        {e.name}
      </th>
      <th scope="col" className="text-center p-2">
        {e.city}
      </th>
    </tr>
  );
});

export class Topmedi extends Component {
  render() {
    return (
      <div>
        <div className="container my-4">
          <h1 className="text-orange text-center">
            Top Medical Institutes Of India
          </h1>

          <div className="wrapper-table table-responsive my-4">
            <h5 className="text-blue">
              Top 25 Medical College of india (in preference order)
            </h5>
            <table className="table table-hover table-bordered">
              <thead className="table-light text-center">
                <tr>
                  <th scope="col" className="p-2">
                    No
                  </th>
                  <th scope="col" className="p-2">
                    College Name
                  </th>
                  <th scope="col" className="p-2">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>{displayData}</tbody>
            </table>
          </div>

          <div className="wrapper-table table-responsive my-4">
            <h5 className="text-blue">
              List of Medical and Dental College in Maharashtra
            </h5>
            <table className="table table-hover table-bordered">
              <thead className="table-light text-center">
                <tr>
                  <th scope="col" className="p-2">
                    No
                  </th>
                  <th scope="col" className="p-2">
                    College Name
                  </th>
                  <th scope="col" className="p-2">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>{displayData1}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Topmedi;
