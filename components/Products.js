import React, { useEffect } from 'react'
import { bgDarkColor } from "../constants";
import AOS from 'aos'
import Link from 'next/link'
import Button from "../ui/Button";
import Heading from "../ui/Heading";

const Products = () => {
    useEffect(() => {
        AOS.init()
    })
    
    return (
        <>
        <div id='products'>
            <div style={{ background: bgDarkColor, padding: '50px 8px 50px 8px', color: 'white'}}>
                <div>
                    <p className='para'>EXCLUSIVE PRODUCTS</p>
                </div>
                
                {/* <h2 className="heading">BROUGHT TO BOSTON BY ADIGE DESIGN</h2> */}
                <Heading text="BROUGHT TO BOSTON BY ADIGE DESIGN" color="light" />

                <div id='images-container'>
                    <div data-aos='fade-up'>
                        <Link href='/'>
                            <a className="img-link">
                                <img src='https://djzfsf1yiw-flywheel.netdna-ssl.com/wp-content/uploads/2020/07/ZEN_05_2-552x700.jpg' />
                                <div className='img-text'>
                                    <h3 className="heading">KITCHENS AND MILLWORK</h3>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div data-aos='fade-up'>
                        <Link href='/'>
                            <a className="img-link">
                                <img src='https://adigedesign.com/wp-content/uploads/2019/12/KateKelly_Ellis-2647-Edit-552x700.jpg' />
                                <div className='img-text'>
                                    <h3 className="heading">MANTELS</h3>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div data-aos='fade-up'>
                        <Link href='/'>
                            <a className="img-link">
                                <img src='https://adigedesign.com/wp-content/uploads/2020/03/Adige_Artisan_Olivieri_Mobili-05-1-552x700.jpg' />
                                <div className='img-text'>
                                    <h3 className="heading">CLOSET SYSTEMS</h3>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>

                <div id='all-products-container'>
                    {/* <span className="link-btn" id='all-product'>ALL PRODUCTS</span> */}
                    <div style={{ float: "right"}}>
                        <Button text="ALL PRODUCTS" url="/" color="light" />
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
            .para {
                font-size: .6875rem;
                font-weight: 700;
                letter-spacing: 2.2px;
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
            }
            #all-products-container {
                margin-bottom: 50px;
            }
        `}</style>
        </>
    )
}

export default Products;