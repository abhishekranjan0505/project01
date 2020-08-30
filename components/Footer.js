import Link from 'next/link'
import { bgDarkColor, textLightColor } from "../constants";

const Footer = () => {
    return (
        <>
        <div id="footer">
            <h2 className='heading'>GET IN TOUCH</h2>

            <div>
                <div style={{ textAlign: "center"}}>
                    <Link href="/">
                        <a className="link-btn">CONTACT US</a>
                    </Link>
                </div>
            </div>

            <div id='text-container'>
                <div className="text" id="address">
                100 Summer Street, Suite 1600
                <br/>
                Boston, MA 02110
                </div>

                <div className="text" id="contact">
                    <Link href="tel:(617) 370 8810">
                        <a>(617) 370 8810</a>
                    </Link>
                    <br />
                    <Link href="mailto:info@adigedesign.com">
                        <a>info@adigedesign.com</a>
                    </Link>
                </div>

                <div className="text" id="links">
                    <Link href="/">
                        <a>Privacy Policy</a>
                    </Link>
                    <br />
                    <Link href="/">
                        <a>Terms Of Use</a>
                    </Link>
                    <br />
                    <Link href="/">
                        <a>Crafted by Fhoke</a>
                    </Link>
                </div>
            </div>

            <div id="logo-and-icons">
                <div id="logo">
                    ADIGE
                </div>

                <div id="icons">
                    <span>
                        <a>
                            <i className="fa fa-facebook" />
                        </a>
                    </span>

                    <span>
                        <a>
                            <i className="fa fa-instagram" />
                        </a>
                    </span>

                    <span>
                        <a>
                            <i className="fa fa-linkedin" />
                        </a>
                    </span>
                </div>
            </div>

        </div>

        <style jsx>{`
            #footer {
                background: ${bgDarkColor};
                color: ${textLightColor};
                padding: 40px 8px 40px 8px;
            }
            .heading {
                text-align: center;
            }
            .link-btn::before {
                background: white;
            }
            #text-container {
                margin: 30px 0 40px 0;
            }
            .text {
                font-size: .875rem;
                line-height: 190%;
                margin: 30px 0 0 0;
            }
            #logo-and-icons {
                display: flex;
                align-items: center;
            }
            #logo {
                flex: 2;
                font-size: 2.5rem;
                font-family: "exodus-demo-sharpen", serif;
            }
            #icons {
                flex: 1;
                justify-content: space-between;
                font-size: 1.5rem;
                display: flex;
            }
        `}</style>
        </>
    )
}

export default Footer;