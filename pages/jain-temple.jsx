import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/Home.module.css";
import Hero from "../components/JainTemple/Hero";
import DreamTempleBudget from "../components/DreamTempleBudget";
import DimensionsPictures from "../components/DimensionsPictures";
import ProjectShowcase from "../components/ProjectShowcase";
import CitySection from "../components/CitySection";
import FAQ from "../components/FAQ";
import PoojaRoomJourney from "../components/PoojaRoomJourney";
import DesignSteps from "../components/DesignSteps";
import ClientCarousel from "../components/ClientCarousel";
import ExpertiseSection from "../components/JainTemple/ExpertiseSection";
import CustomJainDesigns from "../components/JainTemple/CustomJainDesigns";


export default function Home() {
  return (

    <div >
      <Hero />
      <ExpertiseSection />
      <DreamTempleBudget />
      <CustomJainDesigns />
      <DimensionsPictures />
      <ProjectShowcase />
      <FAQ />
      <PoojaRoomJourney />
    </div>

  );
}
