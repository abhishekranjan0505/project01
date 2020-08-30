import React, { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import { textDarkColor, bgLightColor } from "../constants.js";

const Instagram = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div id="instagram">
        <div id="instagram-text">instagram</div>

        <div id="images-container">
          <div id="img-row1">
            <div className="image" data-aos="fade-up">
              <Link href="/">
                <a className="img-link">
                  <img src="/images/instagram1.jpg" />
                </a>
              </Link>
            </div>

            <div className="image" data-aos="fade-up" data-aos-delay="300">
              <Link href="/">
                <a className="img-link">
                  <img src="/images/instagram2.jpg" />
                </a>
              </Link>
            </div>
          </div>

          <div id="img-row2">
            <div className="image" data-aos="fade-up">
              <Link href="/">
                <a className="img-link">
                  <img src="/images/instagram3.jpg" />
                </a>
              </Link>
            </div>

            <div className="image" data-aos="fade-up" data-aos-delay="300">
              <Link href="/">
                <a className="img-link">
                  <img src="/images/instagram4.jpg" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #instagram {
          background-color: ${bgLightColor};
          padding: 55px 5vw;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        #instagram-text {
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2.2px;
          color: ${textDarkColor};
          line-height: 120%;
        }
        img {
          width: 44.5vw;
          height: 44.5vw;
        }
        #images-container {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          width: 90vw;
        }
        #img-row1 {
          display: flex;
          margin-bottom: 0.5vw;
          justify-content: space-between;
        }
        #img-row2 {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
};

export default Instagram;
