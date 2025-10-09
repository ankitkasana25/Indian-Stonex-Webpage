import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/Home.module.css";
import Hero from "../components/TsaDesignhub/Hero";
import DreamTempleBudget from "../components/DreamTempleBudget";
import ComparisonTable from "../components/ComparisonTable";
import DimensionsPictures from "../components/DimensionsPictures";
import ProjectShowcase from "../components/ProjectShowcase";
import CitySection from "../components/CitySection";
import FAQ from "../components/FAQ";
import PoojaRoomJourney from "../components/PoojaRoomJourney";
import DesignSteps from "../components/DesignSteps";
import ClientCarousel from "../components/ClientCarousel";
import ImageTextSection from "../components/TsaDesignhub/ImageTextSection";
import HelpSection from "../components/TsaDesignhub/HelpSection";
import CollaborateSection from "../components/TsaDesignhub/CollaborateSection";
import ScopeOfWorkSection from "../components/TsaDesignhub/ScopeOfWorkSection";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (

    <div >
      <Hero />
      <ImageTextSection />
      <HelpSection />
      <CollaborateSection />
      <ScopeOfWorkSection />
      {/* <DreamTempleBudget/>
        <ComparisonTable/>
        <DimensionsPictures/>
        <DesignSteps/>
        <ProjectShowcase/>
        <CitySection/>
        <ClientCarousel/> 
        <FAQ/> */}
      <PoojaRoomJourney />
    </div>
  );
}
