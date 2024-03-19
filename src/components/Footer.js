import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <section>
          <div className="footer-bar" id="footer-bar">
            <div className="col1" id="logo-text">
              <h1>Panto</h1>
              <p>
                The advantage of hiring a workspace with <br />
                us is that givees you comfortable service <br />
                and all-around facilities.
              </p>
            </div>
            <div className="col2" id="services">
              <h3 className="footer-orange">Services</h3>
              <p className="footer-text-list">Email Marketing</p>
              <p className="footer-text-list">Campaigns</p>
              <p className="footer-text-list">Branding</p>
            </div>
            <div className="col2" id="furnitures">
              <h3 className="footer-orange">Furniture</h3>
              <p className="footer-text-list">Beds</p>
              <p className="footer-text-list">Chairs</p>
              <p className="footer-text-list">All products</p>
            </div>
            <div className="col2" id="follow-us">
              <h3 className="footer-orange">Follow Us</h3>
              <p className="footer-text-list">
                <span>
                  <i className="fa fa-facebook">&nbsp;&nbsp;</i>
                </span>
                <span>Facebook</span>
              </p>
              <p className="footer-text-list">
                <span>
                  <i className="fa fa-twitter"></i>&nbsp;
                </span>
                <span>Twitter</span>
              </p>
              <p className="footer-text-list">
                <span>
                  <i className="fa fa-instagram"></i>&nbsp;&nbsp;
                </span>
                <span>Instagram</span>
              </p>
            </div>
          </div>
          <div className="copyright" id="copyright">
            <div className="copy-text">Komron-Mirzo | &copy; Copyright 2022</div>
            <div className="terms-text">
              Terms & Conditions &emsp; &emsp; &emsp; Policy Privacy
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
