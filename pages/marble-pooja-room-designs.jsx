import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/Home.module.css";
import Hero from "../components/Poojaroom/Hero";
import DreamTempleBudget from "../components/DreamTempleBudget";
import ComparisonTable from "../components/ComparisonTable";
import DimensionsPictures from "../components/DimensionsPictures";
import ProjectShowcase from "../components/ProjectShowcase";
import CitySection from "../components/CitySection";
import FAQ from "../components/FAQ";
import PoojaRoomJourney from "/components/PoojaRoomJourney";
import DesignSteps from "../components/DesignSteps";
import ClientCarousel from "../components/ClientCarousel";
import Solutions from "../components/Poojaroom/Solutions";
import ServicesSection from "../components/Poojaroom/ServicesSection";



export default function Home() {
  return (
      <div >
        <Hero/>
        <DreamTempleBudget/>
        <Solutions/>
        <ServicesSection/>
        <DimensionsPictures/>
        <DesignSteps/>
        <ProjectShowcase/>
        <CitySection/>
        <ClientCarousel/>
        <FAQ/>
        <PoojaRoomJourney/>
      </div>
  );
}
