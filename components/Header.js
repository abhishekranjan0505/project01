import React, { useState, useEffect } from "react";
import { textDarkColor } from "../constants.js";

const Header = () => {
  const [hover, setHover] = useState(false);

  const hoverHandler = () => {
    setHover(!hover);
  };

  useEffect(() => {
    const h = document.getElementById("header");
    var prev_Y = window.pageYOffset;
    window.addEventListener("scroll", () => {
      console.log(window.pageYOffset)
      if(window.pageYOffset > 40) {
        if(window.pageYOffset > prev_Y) {
          h.style.top = "-50px";
        } else {
          h.style.top = "20px";
        }
      } 
      prev_Y = window.pageYOffset;
    })
  })

  return (
    <div id="header">
      <img id="logo" src="/images/A.png" alt="" />
      <div
        id="drawer-toggle"
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
      >
        <div id="upper-div"></div>
        <div id={hover ? "hover-div1" : "middle-div"}></div>
        <div id={hover ? "hover-div2" : "lower-div"}></div>
      </div>

      <style jsx>{`
        #header {
          display: flex;
          align-items: center;
          position: fixed;
          z-index: 10;
          left: 5%;
          top: 20px;
          transition: .2s;
        }
        #logo {
          height: 44px;
          width: 40px;
          margin-right: 20px;
        }
        #drawer-toggle {
          width: 30px;
          height: 24px;
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          box-sizing: border-box;
          cursor: pointer;
          transition: align-items 2s;
        }

        #upper-div {
          height: 4px;
          width: 100%;
          background-color: ${textDarkColor};
        }
        #middle-div {
          width: 66%;
          height: 4px;
          background-color: ${textDarkColor};
          transition: width 0.3s;
        }
        #lower-div {
          width: 33%;
          height: 4px;
          background-color: ${textDarkColor};
          transition: width 0.3s;
        }
        #hover-div1 {
          width: 100%;
          height: 4px;
          transition: width 0.3s;
          background-color: ${textDarkColor};
        }
        #hover-div2 {
          width: 100%;
          transition: width 0.3s;
          height: 4px;
          background-color: ${textDarkColor};
        }
      `}</style>
    </div>
  );
};

export default Header;
