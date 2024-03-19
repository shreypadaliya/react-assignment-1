import React from "react";
import { FaShoppingBag } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="brand-title">Panto</div>
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li>Furniture</li>
            <i
              className="fa-solid fa-angle-down"
              style={{
                color: "white",
                marginLeft: "15px",
                alignItems: "center",
              }}
            ></i>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <i
            className="fa-solid fa-bag-shopping" 
            style={{ color: "white", fontSize: "30px" }}
          ><FaShoppingBag />
</i>
          <div
            style={{
              height: "20px",
              width: "20px",
              borderRadius: "40px",
              backgroundColor: "#e58411",
              marginLeft: "-10px",
            }}
          >
            <p style={{ color: "white", marginLeft:"5px" }}>0</p>
          </div>
        </div>

        
      </nav>
    </>
  );
};

export default Navbar;
