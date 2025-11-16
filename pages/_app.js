import '../styles/globals.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Montserrat } from 'next/font/google';
import SpeedDial from "../components/SpeedDial";
import { useEffect, useState } from "react";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // Optional: use as a CSS variable
  display: 'swap',
});

export default function App({ Component, pageProps }) {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <main className={montserrat.variable}>
      <Head>
        <title>Indian Stonex - Premium Marble Temples & Stone Artistry</title>
        <meta name="description" content="Indian Stonex specializes in handcrafted marble temples, pooja rooms, and stone sculptures. ISO 9001:2015 certified. Custom designs for homes and communities. Serving India and worldwide." />
        <meta name="keywords" content="marble temple, pooja room, stone sculpture, marble mandir, custom temple design, Indian Stonex, Makrana marble, temple design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Indian Stonex" />
        <meta property="og:title" content="Indian Stonex - Premium Marble Temples & Stone Artistry" />
        <meta property="og:description" content="Handcrafted marble temples, pooja rooms, and stone sculptures. ISO 9001:2015 certified. Custom designs for homes and communities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.indianstonex.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indian Stonex - Premium Marble Temples" />
        <meta name="twitter:description" content="Handcrafted marble temples, pooja rooms, and stone sculptures. ISO 9001:2015 certified." />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://www.indianstonex.com" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />

      <div className="fixed bottom-[1rem] right-[15px] z-[100] flex flex-col gap-3">
        <SpeedDial />
        {isScrolled && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>
    </main>
  )
}
