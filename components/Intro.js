import Link from "next/link";
import { bgLightColor, textDarkColor } from "../constants";
import Button from '../ui/Button';
import Heading from "../ui/Heading";

const Intro = () => {
  return (
    <>
      <div id="intro">
        <div id="content">
          <div id="font">
            International artisan & construction material sourcing company
          </div>
          
          <Heading text="Discovering special people producing extraordinary products" color="dark" size="large" />

          <div style={{ display: "flex" }}>
            <Button text="OUR PRODUCTS" url="/" style={{marginRight: "20px"}} />
            <Button text="OUR SERVICES" url="/" />
          </div>
        </div>

        <div id="img-container">
          <img id="image" src="/images/intro-banner.jpg" alt="" />
        </div>
      </div>

      <style jsx>{`
        #intro {
          background-color: ${bgLightColor};
          padding-top: 100px;
        }

        #content {
          padding: 0px 0px 20px 5%;
        }
        h1 {
          color: ${textDarkColor};
          margin-bottom: 20px;
        }
        #font {
          text-transform: uppercase;
          letter-spacing: 2.2px;
          font-size: 0.6875rem;
          font-weight: 700;
          color: ${textDarkColor};
          line-height: 120%;
        }
        #image {
          width: 100vw;
          height: auto;
        }
        #img-container::before {
          content: "";
          display: block;
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 150px 100vw 0 0;
          border-color: ${bgLightColor} transparent transparent transparent;
        }
      `}</style>
    </>
  );
};

export default Intro;
