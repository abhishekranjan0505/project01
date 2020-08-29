import Head from 'next/head'
import Intro from '../components/Intro';
import Header from '../components/Header';
import About from '../components/About';
import Products from '../components/Products';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project01</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>

        <Header />

        <Intro />

        <About />

        <Products />

      </div>

    </div>
  )
}
