import React from "react";

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
          <p className="more-info"><img src={require("../images/Group 48095399.png")} alt="IMG" style={{marginTop:"8px"}}/></p>
        </div>

        <div className="mat-img" id="mat-img">
          <div className="mat-img-right" id="mat-img-right">
            <div className="mat-img-right-parent" id="mat-img-right-parent">
              <img src="./images/mat-img.jpg" alt="mat img" />
              <div className="mat-img-right-blur" id="mat-img-right-blur">
                <img src="./images/mat-img.jpg" alt="mat blur img" />
              </div>
              <div className="back-grey4" id="back-grey4"></div>
            </div>
          </div>

          <div className="mat-img-left" id="mat-img-left">
            <div className="up-img" id="up-img">
              <img src="./images/up-img.png" alt="up img" />
              <div className="up-img-blur" id="up-img-blur">
                <img src="./images/up-img.png" alt="up img" />
              </div>
            </div>
            <div className="down-img" id="down-img">
              <img src="./images/down-img.png" alt="down img" />
              <div className="down-img-blur" id="down-img-blur">
                <img src="./images/down-img.png" alt="down img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meterial;
