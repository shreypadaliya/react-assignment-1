import React from "react";
import "../assets/styles/ProductCard.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import image1 from "../assets/images/Star.png";
import chair from "../assets/images/chair.png";
import chair2 from "../assets/images/chair2.png";
import chair3 from "../assets/images/chair3.png";
import chair4 from "../assets/images/chair4.png";
import plus_sign from "../assets/images/plus-sign.png";
import long_arrow from "../assets/images/long-arrow.svg";

function Proslider() {
  return (
    <>
      <div class="product-slider" id="product-slider">
        <div className="product-slider-title" id="product-slider-title">
          Best Selling Product
        </div>

        <div className="tabs" id="tabs">
          <div className="chair">
            <p className="chairtext">Chair</p>
          </div>
          <p>Beds</p>
          <p>Sofa</p>
          <p>Lamp</p>
        </div>

        <div className="flex">
          <div className="flex justify-center items-center">
            <GrFormPrevious style={{ height: "50px", width: "50px" }} />
          </div>
          <div class="glider-contain">
            <div class="glider" style={{ gap: "2%" }}>
              <div class="product-card" id="product-card">
                <div class="product-img" id="product-img">
                  <img src={chair} alt="armchair" />
                </div>

                <div class="product-card-bottom" id="product-card-bottom">
                  <div class="category-title" id="category-title">
                    Chair
                  </div>
                  <div class="product-title" id="product-title">
                    Sakarias Armchair
                  </div>
                  <div class="star-rating" id="star-rating">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img src={image1} style={{ height: 20, width: 20 }} />
                    </div>
                  </div>
                  <div class="product-price" id="product-price">
                    <span class="price-text">$392</span>
                    <span class="plus-button">
                      <img src={plus_sign} alt="plus sign" class="plus-sign" />
                    </span>
                  </div>
                </div>
              </div>

              <div class="product-card" id="product-card">
                <div class="product-img" id="product-img">
                  <img src={chair2} alt="armchair" />
                </div>

                <div class="product-card-bottom" id="product-card-bottom">
                  <div class="category-title" id="category-title">
                    Chair
                  </div>
                  <div class="product-title" id="product-title">
                    Baltsar Chair
                  </div>
                  <div class="star-rating" id="star-rating">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img src={image1} style={{ height: 20, width: 20 }} />
                    </div>
                  </div>
                  <div class="product-price" id="product-price">
                    <span class="price-text">$299</span>
                    <span class="plus-button">
                      <img src={plus_sign} alt="plus sign" class="plus-sign" />
                    </span>
                  </div>
                </div>
              </div>

              <div class="product-card" id="product-card">
                <div class="product-img" id="product-img">
                  <img src={chair3} alt="armchair" />
                </div>

                <div class="product-card-bottom" id="product-card-bottom">
                  <div class="category-title" id="category-title">
                    Chair
                  </div>
                  <div class="product-title" id="product-title">
                    Anjay Chair
                  </div>
                  <div class="star-rating" id="star-rating">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img src={image1} style={{ height: 20, width: 20 }} />
                    </div>
                  </div>
                  <div class="product-price" id="product-price">
                    <span class="price-text">$519</span>
                    <span class="plus-button">
                      <img src={plus_sign} alt="plus sign" class="plus-sign" />
                    </span>
                  </div>
                </div>
              </div>

              <div class="product-card" id="product-card">
                <div class="product-img" id="product-img">
                  <img src={chair4} alt="armchair" />
                </div>

                <div class="product-card-bottom" id="product-card-bottom">
                  <div class="category-title" id="category-title">
                    Chair
                  </div>
                  <div class="product-title" id="product-title">
                    Nyantuy Chair
                  </div>
                  <div class="star-rating" id="star-rating">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img src={image1} style={{ height: 20, width: 20 }} />
                    </div>
                  </div>
                  <div class="product-price" id="product-price">
                    <span class="price-text">$912</span>
                    <span class="plus-button">
                      <img src={plus_sign} alt="plus sign" class="plus-sign" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <MdNavigateNext style={{ height: "50px", width: "50px" }} />
            </div>
            <div role="tablist" class="dots"></div>
          </div>
        </div>
        <div class="view-all">
          <span class="view">View all &nbsp;</span>{" "}
          <span>
            <img src={long_arrow} alt="long arrow" />
          </span>
        </div>
      </div>
    </>
  );
}
export default Proslider;
