import React, { useEffect } from 'react'
import { bgLightColor, textDarkColor, textLightColor } from "../constants";
import AOS from 'aos'
import Link from 'next/link'
import Button from "../ui/Button";

const Artisans = () => {

    useEffect(() => {
        AOS.init()
    })

    return (
        <>
        <div id='artisans'>
            <div style={{ background: bgLightColor, padding: '50px 8px 50px 8px', color: 'white'}}>
                <div>
                    <p className='para'>OUR ARTISANS</p>
                </div>
                
                <h2 className="heading" style={{ color: textDarkColor}}>TRUE MASTERS OF THEIR CRAFT</h2>

                <div id='images-container'>
                    <div data-aos='fade-up'>
                        <Link href='/'>
                            <a className="img-link">
                                <img src='https://djzfsf1yiw-flywheel.netdna-ssl.com/wp-content/uploads/2019/12/Adige_Artisan_Armonia_Interni-Featured-552x700.jpg' />
                                <div className='img-text'>
                                    <h3 className="heading">PERSON 1</h3>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div data-aos='fade-up'>
                        <Link href='/'>
                            <a className="img-link">
                                <img src='https://adigedesign.com/wp-content/uploads/2019/12/Adige_Artisan_Stocco_Tailormade-Featured-552x700.jpg' />
                                <div className='img-text'>
                                    <h3 className="heading">PERSON 2</h3>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div data-aos='fade-up'>
                        <Link href='/'>
                            <a className="img-link">
                                <img src='https://adigedesign.com/wp-content/uploads/2019/12/Adige_Artisan_Mingardo-Featured-552x700.jpg' />
                                <div className='img-text'>
                                    <h3 className="heading">PERSON 3</h3>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>

                <div id='all-products-container'>
                    <div style={{ float: "right"}}>
                        <Button text="ALL ARTISANS" url="/" color="dark" />
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
            .para {
                font-size: .6875rem;
                font-weight: 700;
                letter-spacing: 2.2px;
                color: ${textDarkColor};
            }
            #images-container {
                margin-bottom: 15px;
            }
            .img-link {
                display: inline-block;
                height: 100%;
                position: relative;
                margin-top: 5px;
            }
            .img-link::after {
                content: '';
                position: absolute;
                bottom: 5px;
                left: 0;
                width: 100%;
                height: 40%;
                background-image: linear-gradient(transparent, rgba(0,0,0,0.6));
            }
            img {
                width: 100%;
            }
            .img-text {
                position: absolute;
                bottom: 15px;
                z-index: 2;
                width: 100%;
                display: grid;
                place-items: center;
                color: ${textLightColor};
            }
            #all-products-container {
                margin-bottom: 50px;
            }
            #all-product {
                float: right;
                color: ${textDarkColor};
            }
            #all-product::before {
                background: ${textDarkColor};
            }
        `}</style>
        </>
    )
}

export default Artisans;