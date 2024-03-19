import React from "react";
import { Carousel } from "flowbite-react";
// import "./Testimonial.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const Testimonial = () => {
  return (
    <>
      {/*  */}
      <div className="testimonial" id="testimonial">
        <div className="testimonial-orange-title" id="testimonial-orange">
          testimonials
        </div>

        <div className="testimonial-black-title" id="testi-title">
          Our Client Reviews
        </div>
        
        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="flex justify-center items-center"><GrFormPrevious style={{height : "50px", width : "50px"}} /></div>
          <div
            style={{
              position: "relative", // Add this line
              width: "27%",
              height: 600,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              src="/images/test1.jpg"
              style={{ height: "100%", width: "100%", borderRadius: 15 }}
            />

            <div
              style={{
                position: "absolute",
                zIndex: 9999,
                backgroundColor: "white",
                width: "90%", // Adjusted width to 100%
                bottom: 10,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                borderRadius: 15
              }}
            >
              <div
                style={{
                  width: 66,
                  height: 66,
                  zIndex: 10,
                  backgroundColor: "white",
                  borderRadius: 120,
                  marginTop: -30,
                }}
              >
                <img
                  src="/images/profi-1.jpg"
                  style={{ height: "100%", width: "100%", borderRadius: 120 }}
                />
              </div>
              <div class="testi-name" id="testi-name">
                James Cameron
              </div>
              <div class="testi-job" id="testi-job">
                Producer
              </div>

              <div style={{ width: "80%", fontSize: 15 }} id="testi-text">
                "Here is the testimonial text written in English without any
                grammatical mistakes. But I do not know if it has mistakes or
                not"
              </div>

              <div class="star-rating" id="star-rating">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20, marginRight: 5 }}
                  />
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20, marginRight: 5 }}
                  />
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20, marginRight: 5 }}
                  />
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20, marginRight: 5 }}
                  />
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20 }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "relative", // Add this line
              width: "28%",
              height: 600,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              src="/images/test2.jpg"
              style={{ height: "100%", width: "100%", borderRadius: 15 }}
            />

            <div
              style={{
                position: "absolute",
                zIndex: 9999,
                backgroundColor: "white",
                width: "90%", // Adjusted width to 100%
                bottom: 10,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                borderRadius: 15
              }}
            >
              <div
                style={{
                  width: 66,
                  height: 66,
                  zIndex: 10,
                  backgroundColor: "white",
                  borderRadius: 120,
                  marginTop: -30,
                }}
              >
                <img
                  src="/images/profi-2.jpg"
                  style={{ height: "100%", width: "100%", borderRadius: 120 }}
                />
              </div>
              <div class="testi-name" id="testi-name">
                James Cameron
              </div>
              <div class="testi-job" id="testi-job">
                Producer
              </div>

              <div style={{ width: "80%", fontSize: 15 }} id="testi-text">
                "Here is the testimonial text written in English without any
                grammatical mistakes. But I do not know if it has mistakes or
                not"
              </div>

              <div class="star-rating" id="star-rating">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20, marginRight: 5 }}
                  />
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20, marginRight: 5 }}
                  />
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20, marginRight: 5 }}
                  />
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20, marginRight: 5 }}
                  />
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20 }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "relative", // Add this line
              width: "28%",
              height: 600,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              src="/images/test3.jpg"
              style={{ height: "100%", width: "100%", borderRadius: 15 }}
            />

            <div
              style={{
                position: "absolute",
                zIndex: 9999,
                backgroundColor: "white",
                width: "90%", // Adjusted width to 100%
                bottom: 10,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                borderRadius: 15
              }}
            >
              <div
                style={{
                  width: 66,
                  height: 66,
                  zIndex: 10,
                  backgroundColor: "white",
                  borderRadius: 120,
                  marginTop: -30,
                }}
              >
                <img
                  src="/images/profi-3.jpg"
                  style={{ height: "100%", width: "100%", borderRadius: 120 }}
                />
              </div>
              <div class="testi-name" id="testi-name">
                James Cameron
              </div>
              <div class="testi-job" id="testi-job">
                Producer
              </div>

              <div style={{ width: "80%", fontSize: 15 }} id="testi-text">
                "Here is the testimonial text written in English without any
                grammatical mistakes. But I do not know if it has mistakes or
                not"
              </div>

              <div class="star-rating" id="star-rating">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20, marginRight: 5 }}
                  />
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20, marginRight: 5 }}
                  />
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20, marginRight: 5 }}
                  />
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20, marginRight: 5 }}
                  />
                  <img
                    src="/images/Star.png"
                    style={{ height: 20, width: 20 }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center"><MdNavigateNext style={{height : "50px", width : "50px"}} /></div>
        </div>

        {/* <Carousel slideInterval={4000}>
          <div className="flex items-center justify-center gap-16">
            <img src={require("../images/Te1.png")} alt="IMAGE1" />
            <img src={require("../images/Te2.png")} alt="IMAGE2" />
            <img src={require("../images/Te3.png")} alt="IMAGE3" />
          </div>
          <div className="flex items-center  justify-center gap-16">
            <img src={require("../images/Te1.png")} alt="IMAGE1" />
            <img src={require("../images/Te2.png")} alt="IMAGE2" />
            <img src={require("../images/Te3.png")} alt="IMAGE3" />
          </div>
          <div className="flex items-center  justify-center gap-16">
            <img src={require("../images/Te1.png")} alt="IMAGE1" />
            <img src={require("../images/Te2.png")} alt="IMAGE2" />
            <img src={require("../images/Te3.png")} alt="IMAGE3" />
          </div>
        </Carousel> */}
      </div>
    </>
  );
};

export default Testimonial;
