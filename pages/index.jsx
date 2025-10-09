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
