import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import { textDarkColor } from "../constants";

const Servicing = () => {
  return (
    <>
      <div id="servicing" style={{ padding: "50px 8px 50px 8px" }}>
        <div style={{ padding: "8px" }}>
          <div>
            <div id="images-container">
              <div id="img1-container">
                <img
                  src="/images/servicing-Marble-Carving.jpg"
                  className="img"
                  id="img1"
                />
              </div>

              <div id="img2-container">
                <Parallax className="custom-class" y={[-20, 20]}>
                  <img
                    src="/images/servicing-img.jpg"
                    className="img"
                    id="img2"
                  />
                </Parallax>
              </div>
            </div>
          </div>

          <div id="servicing-text">
            <h2 className="heading">
              Servicing developers, architects, and designers alike
            </h2>

            <p>
              We are a Boston-based full service architectural material sourcing
              company, offering a full range of design and tailored consulting
              services on luxury materials and artisan products through the
              construction stage, in addition to interior design and furniture
              specifications.
            </p>

            <div>
              <Link href="/">
                <a className="link-btn">LEARN MORE</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #images-container {
          width: 100%;
          position: relative;
          margin: auto;
        }
        .img {
          width: 100%;
        }
        #img1-container {
          width: 90%;
        }
        #img2-container {
          max-width: 50%;
          position: absolute;
          bottom: -15px;
          right: 10px;
        }
        #servicing-text {
          margin: 40px 0 0 0;
        }
        h2 {
          fontsize: 1.375rem;
          color: ${textDarkColor};
          margin-top: 80px;
          margin-bottom: 0;
        }
        p {
          font-size: 1rem;
          line-height: 190%;
          font-weight: 100;
        }
      `}</style>
    </>
  );
};

export default Servicing;
