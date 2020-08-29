import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div id="projects">
        <div id="projects-text">Highlighted Projects</div>
        <div id="projects-img">
          <div id="img1">
            <img src="/projects1.jpg" alt="" />
            <h2 className="heading">maison vernon</h2>
          </div>
          <div id="img2">
            <img src="/projects2.jpg" alt="" />
            <h2 className="heading">sear's crescent</h2>
          </div>
          <div id="img3">
            <img src="/projects3.jpg" alt="" />
            <h2 className="heading">maison commonwealth</h2>
          </div>
        </div>
        <div style={{ color: "#fff" }}>
          <Link href="/">
            <a className="link-btn">Our Projects</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        #projects {
          padding: 60px 5vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: rgb(64, 64, 64);
        }
        #projects-text {
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2.2px;
          color: #ffffff;
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
        #img1 {
          position: relative;
          text-align: center;
        }
        #img2 {
          position: relative;
          margin-left: 5vw;
          margin-right: 5vw;
          text-align: center;
        }
        #img3 {
          position: relative;
          text-align: center;
        }
        h2 {
          color: #fff;
          font-size: 18px;
          position: absolute;
          bottom: 0;
          width: 100%;
        }
        .link-btn::before {
          background: #fff;
        }
      `}</style>
    </>
  );
};

export default Projects;
