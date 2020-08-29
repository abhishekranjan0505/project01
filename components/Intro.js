import Link from "next/link";

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
        <img id="image" src="/intro-banner.jpg" alt="" />
      </div>

      <style jsx>{`
        #intro {
          background-color: #cbd1d2;
          padding-top: 100px;
        }

        #content {
          padding: 0px 0px 20px 5%;
        }
        h1 {
          font-weight: 400;
          line-height: 120%;
          color: #221f20;
          margin-bottom: 0;
        }
        #font {
          text-transform: uppercase;
          letter-spacing: 2.2px;
          font-size: 0.6875rem;
          font-weight: 700;
          color: #221f20;
          line-height: 120%;
        }
        #image {
          width: 100vw;
          height: auto;
        }
      `}</style>
    </>
  );
};

export default Intro;
