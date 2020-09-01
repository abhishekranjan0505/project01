import React, { Component } from "react";
import Link from "next/link";
import { bgDarkColor, navItemsColor } from "../constants";

class Navigation extends Component {
  render() {
    const NavigationItems = [
      "Products",
      "Services",
      "Artisans",
      "Projects",
      "Showroom",
      "Team",
      "Contact",
    ];
    return (
      <div
        id="Navigation"
        className={this.props.showNav ? "nav open" : "nav close"}
      >
        <ul id="ul">
          {NavigationItems.map((items) => (
            <li key={items}>
              <Link href="/">
                <a>
                  <h2 className="heading">{items}</h2>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <style jsx>{`
          #Navigation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            overflow-x: auto;
            overflow-y: auto;
            background-color: ${bgDarkColor};
            z-index: 60;
            transition: 0.5s;
          }

          .nav {
            opacity: 0;
          }

          .open {
            opacity: 1;
          }

          .close {
            opacity: 0;
          }
          #ul {
            z-index: 60,
            margin: 0;
            padding-top: 10vh;
            padding-left: 5vw;
            list-style-type: none;
            color :${navItemsColor};
          }
          #ul li:hover {
            color: white;

          }
        `}</style>
      </div>
    );
  }
}

export default Navigation;
