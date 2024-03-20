import React from 'react'
import moreinfo from "../assets/images/Group 48095399.png";

const Whychose = () => {
  return (
    <>
        <div className="why-us" id="why-us">
        <div className="row">
          <div className="column1">
            <span className="why-title"> Why </span>
            <span className="why-title"> choosing us? </span>
          </div>
          <div className="column">
            <div className="column-title">Luxury facilities</div>
            <p className="column-sub">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <p className="more-info"><img src={moreinfo} alt="IMGG1" style={{marginTop:"6px"}}/></p>
          </div>
          <div className="column">
            <div className="column-title">Affordable Price</div>
            <p className="column-sub">
              You can get a workspace of the highst quality at an affordable
              price and still enjoy the facilities that are oly here.
            </p>
            <p className="more-info"><img src={moreinfo} alt="IMGG2" style={{marginTop:"6px"}}/></p>
          </div>
          <div className="column">
            <div className="column-title">Many Choices</div>
            <p className="column-sub">
              We provide many unique work space choices so that you can choose
              the workspace to your liking.
            </p>
            <p className="more-info"><img src={moreinfo} alt="IMGG3" style={{marginTop:"6px"}}/></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Whychose
