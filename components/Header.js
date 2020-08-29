import React, { Component } from "react";
class Header extends Component {
  state = {
    hover: false,
  };
  hoverHandler = () => {
    this.setState({ hover: !this.state.hover });
  };
  render() {
    return (
      <div id="header">
        <img id="logo" src="/A.png" alt="" />
        <div
          id="drawer-toggle"
          onMouseEnter={this.hoverHandler}
          onMouseLeave={this.hoverHandler}
        >
          <div id="upper-div"></div>
          <div id={this.state.hover ? "hover-div1" : "middle-div"}></div>
          <div id={this.state.hover ? "hover-div2" : "lower-div"}></div>
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
            background-color: #221f20;
          }
          #middle-div {
            width: 66%;
            height: 4px;
            background-color: #221f20;
            transition: width 0.3s;
          }
          #lower-div {
            width: 33%;
            height: 4px;
            background-color: #221f20;
            transition: width 0.3s;
          }
          #hover-div1 {
            width: 100%;
            height: 4px;
            transition: width 0.3s;
            background-color: #221f20;
          }
          #hover-div2 {
            width: 100%;
            transition: width 0.3s;
            height: 4px;
            background-color: #221f20;
          }
        `}</style>
      </div>
    );
  }
}

export default Header;
