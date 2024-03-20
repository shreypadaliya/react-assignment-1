import React from "react";
import moreinfo from "../assets/images/Group 48095399.png"
import mat_img from "../assets/images/mat-img.jpg"
import up_img from "../assets/images/up-img.png"
import down_img from "../assets/images/down-img.png"

const Meterial = () => {
  return (
    <>
      <div className="materials" id="materials">
        <div className="mat-text" id="mat-text">
          <p className="experiences">Materials</p>
          <p className="why-title">
            Very serious <br />
            materials for making <br />
            furniture
          </p>
          <p className="column-sub2">
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>
          <p className="more-info"><img src={moreinfo} alt="IMG" style={{marginTop:"8px"}}/></p>
        </div>

        <div className="mat-img" id="mat-img">
          <div className="mat-img-right" id="mat-img-right">
            <div className="mat-img-right-parent" id="mat-img-right-parent">
              <img src={mat_img} alt="mat img" />
              <div className="mat-img-right-blur" id="mat-img-right-blur">
                <img src={mat_img} alt="mat blur img" />
              </div>
              <div className="back-grey4" id="back-grey4"></div>
            </div>
          </div>

          <div className="mat-img-left" id="mat-img-left">
            <div className="up-img" id="up-img">
              <img src={up_img} alt="up img" />
              <div className="up-img-blur" id="up-img-blur">
                <img src={up_img} alt="up img" />
              </div>
            </div>
            <div className="down-img" id="down-img">
              <img src={down_img} alt="down img" />
              <div className="down-img-blur" id="down-img-blur">
                <img src={down_img} alt="down img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meterial;
