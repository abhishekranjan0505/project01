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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project01</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>

        <Shutter />

        <Header />

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
