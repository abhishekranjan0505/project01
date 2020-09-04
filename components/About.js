import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import Button from "../ui/Button";

const About = () => {
    return (
        <>
        <div id='about'>
            <div style={{ padding: '50px 8px 50px 8px'}}>

                <div>
                    <div id='images-container'>

                        <div id='img1-container'>
                            <img src='https://djzfsf1yiw-flywheel.netdna-ssl.com/wp-content/uploads/2020/03/Adige-About-Us-1-1250x980.jpg' className='img' id='img1' />
                        </div>

                        <div id='img2-container'>
                          <Parallax className='custom-class' y={[-30, 10]} >
                            <img src='https://djzfsf1yiw-flywheel.netdna-ssl.com/wp-content/uploads/2020/04/Custom-Works-2-650x830.jpg' className='img' id='img2' />
                          </Parallax>
                        </div>

                    </div>
                </div>

          <div id="about-text">
            <h2 className="heading">ABOUT US</h2>

            <p>
              With a passion for quality products, Adige Design’s mission is to
              uncover special artisans, unique materials & products, and
              incorporate them in any development, home, or office.
            </p>

            <div>
              <Button text="LEARN MORE" url="/" color="dark" />
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
        #about-text {
          margin: 40px 0 0 0;
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

export default About;
