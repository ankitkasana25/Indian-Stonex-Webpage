import Head from "next/head";
import Hero from "../components/Hero";
import DimensionsPictures from "../components/DimensionsPictures";
import DreamTempleBudget from "../components/DreamTempleBudget";
import PoojaRoomJourney from "../components/PoojaRoomJourney";

import DesignSteps from "../components/DesignSteps";
import ProjectShowcase from "../components/ProjectShowcase";
import ClientCarousel from "../components/ClientCarousel";
import CitySection from "../components/CitySection";
import FAQ from "../components/FAQ";


export default function Home() {
  return (
    <>
      <Head>
        <title>Indian Stonex - Premium Marble Temples & Stone Artistry | Home</title>
        <meta name="description" content="Create your dream marble temple with Indian Stonex. Handcrafted pooja rooms, custom temple designs, and stone sculptures. ISO 9001:2015 certified. Free consultation available." />
        <meta name="keywords" content="marble temple, pooja room design, custom mandir, marble temple for home, stone sculpture, temple design" />
        <meta property="og:title" content="Indian Stonex - Premium Marble Temples & Stone Artistry" />
        <meta property="og:description" content="Create your dream marble temple with Indian Stonex. Handcrafted pooja rooms and custom temple designs." />
        <link rel="canonical" href="https://www.indianstonex.com" />
      </Head>
      <div className="min-h-[80vh] w-full">
        <Hero />

        <DreamTempleBudget />

        <DimensionsPictures />

        <DesignSteps />

        <ProjectShowcase />

        <CitySection />

        <ClientCarousel />

        <FAQ />

        <PoojaRoomJourney />



      </div>
    </>
  );
}
