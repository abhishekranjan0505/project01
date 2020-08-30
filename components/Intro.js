import Link from "next/link";
import { bgLightColor, textDarkColor } from "../constants";

const Intro = () => {
  return (
    <>
      <div id="intro">
        <div id="content">
          <div id="font">
            International artisan & construction material sourcing company
          </div>

          <h1 className="heading">
            Discovering special people producing extraordinary products
          </h1>

          <div>
            <Link href="/">
              <a style={{ marginRight: "20px" }} className="link-btn">
                OUR PRODUCTS
              </a>
            </Link>

            <Link href="/">
              <a className="link-btn">OUR SERVICES</a>
            </Link>
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
