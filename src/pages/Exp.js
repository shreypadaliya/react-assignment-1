import React from "react";
import exp_img from "../assets/images/exp-img.jpg"
import moreinfo from "../assets/images/Group 48095399.png"

const Exp = () => {
  return (
    <>
      <div className="experience" id="experience">
        <div className="exp-img" id="exp-img">
          <div className="exp-img-left" id="exp-img-left">
            <img src={exp_img} alt="exp img" />
            <div className="back-grey1" id="back-grey1"></div>
            <div className="back-grey2" id="backgrey2"></div>
            <div className="back-grey3" id="backgrey3"></div>
          </div>
        </div>

        <div className="exp-text" id="exp-text">
          <p className="experiences">Experiences</p>
          <p className="why-title">
            We provide you <br />
            the best experience
          </p>
          <p className="column-sub2">
            You don't have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <p className="more-info">
            <img
              src={moreinfo}
              alt="IMG"
              style={{ marginTop: "8px" }}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default Exp;
