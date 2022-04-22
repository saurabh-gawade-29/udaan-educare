import React, { Component } from "react";
import "./Topeng.scss";
import JsonData from "../../JSON/JEE_Advanced_College.json";
import JsonData1 from "../../JSON/JEE_Main_College.json";
import JsonData2 from "../../JSON/JEE_Main_College2.json";
import JsonData3 from "../../JSON/MAH_College.json";
import JsonData4 from "../../JSON/Birla_College.json";

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

const displayData2 = JsonData2.map((e) => {
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

const displayData3 = JsonData3.map((e) => {
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

const displayData4 = JsonData4.map((e) => {
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
          {/* JEE Advaned College */}
          <div className="wrapper-table table-responsive my-4">
            <h5 className="text-blue">
              IITs (Admissions through JEE Advanced)
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
          {/* TOP NIT Colleges from JEE MAIN */}
          <div className="wrapper-table table-responsive my-4">
            <h5 className="text-blue">
              National Institutis of Technology (NITs) (Admissions through JEE
              Main)
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
          {/* TOP IIT Colleges from JEE MAIN */}
          <div className="wrapper-table table-responsive my-4">
            <h5 className="text-blue">
              IIITs,IIITDM & IIITM (Admissionsthrough JEE Main)
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
              <tbody>{displayData2}</tbody>
            </table>
          </div>
          {/* TOP MAH Colleges */}
          <div className="wrapper-table table-responsive my-4">
            <h5 className="text-blue">Top Maharashtra State Colleges</h5>
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
              <tbody>{displayData3}</tbody>
            </table>
          </div>
          {/* TOP Birla Colleges */}
          <div className="wrapper-table table-responsive my-4">
            <h5 className="text-blue">
              Birla Institute of Technology and Science (BITS)
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
              <tbody>{displayData4}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Topeng;
