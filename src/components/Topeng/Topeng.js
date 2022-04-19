import React, { Component } from "react";
import "./Topeng.scss";
import JsonData from "../../JSON/Eng.json";

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

export class Topeng extends Component {
  render() {
    return (
      <div>
        <div className="container my-4">
          <h1 className="text-orange text-center">
            Top Engineering Institutes
          </h1>
          <div className="wrapper-table table-responsive my-4">
            <h5 className="text-blue">
              IITs (Admissions through JEE Advanced)
            </h5>
            <table className="table table-hover table-bordered border-secondary">
              <thead className="table-dark text-center">
                <tr>
                  <th scope="col" className="p-2">
                    No
                  </th>
                  <th scope="col" className="p-2">
                    College Name
                  </th>
                  <th scope="col" className="p-2">
                    State
                  </th>
                </tr>
              </thead>
              <tbody>{displayData}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Topeng;
