import React, { useState } from "react";

import Head from "next/head";
import Intro from "../components/Intro";
import Header from "../components/Header";
import About from "../components/About";
import Servicing from "../components/Servicing";
import Products from "../components/Products";
import Projects from "../components/Projects";
import Instagram from "../components/Instagram";
import Artisans from "../components/Artisans";
import Footer from "../components/Footer";
import Shutter from "../components/Shutter";
import Navigation from "../components/Navigation";

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  const navToggleHandler = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <Head>
        <title>Project01</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Shutter />

        <Header clicked={navToggleHandler} showNav={showNav} />

        <Navigation showNav={showNav} />

        <Intro />

        <About />

        <Products />

        <Servicing />

        <Artisans />

        <Projects />

        <Instagram />

        <Footer />
      </div>
    </div>
  );
}
