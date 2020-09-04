import React, { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import { bgDarkColor, textLightColor } from "../constants.js";
import Button from '../ui/Button';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div id="projects">
        <div id="projects-text">Highlighted Projects</div>

        <div id="projects-img" data-aos="fade-up">
          <Link href="/">
            <div className="image">
              <img src="/images/projects1.jpg" alt="" />
              <h2 className="heading">maison vernon</h2>
            </div>
          </Link>

          <Link href="/">
            <div className="image" id="img2">
              <img src="/images/projects2.jpg" alt="" />
              <h2 className="heading">sear's crescent</h2>
            </div>
          </Link>

          <Link href="/">
            <div className="image">
              <img src="/images/projects3.jpg" alt="" />
              <h2 style={{ fontSize: "18px" }} className="heading">
                maison commonwealth
              </h2>
            </div>
          </Link>
        </div>

        <div>
          <Button text="OUR PROJECTS" url="/" color="light" />
        </div>
      </div>

      <style jsx>{`
        #projects {
          padding: 60px 5vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: ${bgDarkColor};
        }
        #projects-text {
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2.2px;
          color: ${textLightColor};
          line-height: 120%;
        }
        #projects-img {
          display: flex;
          width: 100%;
          margin: 40px 0;
          overflow: scroll;
          overflow-x: scroll;
          overflow-y: hidden;
        }
        img {
          width: 42.5vw;
        }
        #img2 {
          margin-left: 5vw;
          margin-right: 5vw;
        }
        .image {
          position: relative;
          text-align: center;
        }
        .image::after {
          content: "";
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 40%;
          background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
        }
        h2 {
          color: ${textLightColor};
          font-size: 20px;
          position: absolute;
          bottom: 0;
          width: 100%;
          z-index: 2;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Projects;
