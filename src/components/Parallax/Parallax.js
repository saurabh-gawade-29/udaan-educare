import React from "react";
import { Parallax } from "react-parallax";
import para_1 from "../../assets/parallax_1.jpg";
import "./Parallax.scss";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

function demoParallax() {
  return (
    <div>
      <Parallax bgImage={para_1} strength={-100} blur={{ min: -1, max: 4 }}>
        <div style={{ height: 600 }}>
          <div style={insideStyles} className="text-center">
            <h1 className="text-orange home-para-main-text">
              4 Years Flagship Program.
            </h1>
            <h4 className="home-para-details">
              Students can start preparing for the target IIT/Medical exam from
              class-9 to start early. In this course students will get best
              chance of getting selected in any entrance exam which they are
              preparing.
            </h4>
            <button className="btn btn-orange my-4">Enroll Now</button>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default demoParallax;
