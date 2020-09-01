import React, { useEffect } from "react";
import { textDarkColor, navItemsColor } from "../constants.js";

const Header = (props) => {
  useEffect(() => {
    document.body.style.overflow = props.showNav ? "hidden" : "auto";
    const h = document.getElementById("header");
    var prev_Y = window.pageYOffset;
    window.addEventListener("scroll", () => {
      console.log(window.pageYOffset);
      if (window.pageYOffset > 40) {
        if (window.pageYOffset > prev_Y) {
          h.style.top = "-50px";
        } else {
          h.style.top = "20px";
        }
      }
      prev_Y = window.pageYOffset;
    });
  });

  return (
    <div id="header">
      <img id="logo" src="/images/A.png" alt="" />
      <div
        className="drawer-toggle"
        id={props.showNav ? "nav-open" : "nav-closed"}
        onClick={props.clicked}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <style jsx>{`
        #header {
          display: flex;
          align-items: center;
          position: fixed;
          z-index: 100;
          left: 5%;
          top: 20px;
        }
        #logo {
          height: 44px;
          width: 40px;
          margin-right: 20px;
        }
        .drawer-toggle {
          width: 30px;
          height: 24px;
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          box-sizing: border-box;
          transition: align-items 2s;
        }
        .drawer-toggle > div {
          height: 4px;
          background-color: ${props.showNav ? navItemsColor : textDarkColor};
          width: 100%;
        }
        .drawer-toggle div:nth-of-type(2) {
          width: 66%;
        }
        .drawer-toggle div:nth-of-type(3) {
          width: 33%;
        }
        #nav-open {
          align-items: flex-end;
        }
        #nav-closed {
          align-items: flex-start;
        }
      `}</style>
    </div>
  );
};

export default Header;
