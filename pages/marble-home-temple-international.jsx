import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import DreamTempleBudget from "../components/DreamTempleBudget";
import ComparisonTable from "../components/ComparisonTable";
import DimensionsPictures from "../components/DimensionsPictures";
import ProjectShowcase from "../components/ProjectShowcase";
import CitySection from "../components/CitySection";
import FAQ from "../components/FAQ";
import PoojaRoomJourney from "../components/PoojaRoomJourney";
import DesignSteps from "../components/DesignSteps";
import ClientCarousel from "../components/ClientCarousel";
import ModularTempleSolutions from "../components/JainTemple/ModularTempleSolutions";
import DreamTemplatesSection from "../components/JainTemple/DreamTemplesSection";
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
   
      <div>
        <Hero/>
        <ModularTempleSolutions/>
        <DreamTemplatesSection/>
        <DesignSteps/>
        <CitySection/>
        <DreamTempleBudget/>
        <ProjectShowcase/>
        <FAQ/>
        <PoojaRoomJourney/>
      </div>
  );
}
