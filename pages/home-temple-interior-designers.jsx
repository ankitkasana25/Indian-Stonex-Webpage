"use client";

import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

import ImageTextSection from "../components/TsaDesignhub/ImageTextSection";
import HelpSection from "../components/TsaDesignhub/HelpSection";
import CollaborateSection from "../components/TsaDesignhub/CollaborateSection";
import ScopeOfWorkSection from "../components/TsaDesignhub/ScopeOfWorkSection";
import PoojaRoomJourney from "../components/PoojaRoomJourney";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function Home() {
  const [loading, setLoading] = useState(false);

  // 🔥 Handle form submit from Hero

  const handleFormSubmit = async (formData) => {
  setLoading(true);
  try {
    const userRef = push(ref(db, "heroContacts"));
    await set(userRef, {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      userType: formData.userType,
      timestamp: new Date().toISOString(),
    });

    const whatsappNumber = "917014116801";
    const text = `Hello Adidev Studio 👋,%0A%0A` +
      `I would like to consult about your Dream Mandir.%0A%0A` +
      `Full Name: ${formData.fullName}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `City: ${formData.city}%0A` +
      `User Type: ${formData.userType}`;

    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    // ✅ Prevent window error during SSR
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
      alert("Your details have been sent successfully!");
    }
  } catch (error) {
    console.error("Error saving data:", error);
    if (typeof window !== "undefined") {
      alert("Something went wrong. Please try again.");
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <div>
      {/* <Hero
        title="Start Building"
        highlight="Your Dream Mandir"
        subtitle="Elegant handcrafted marble temples, customized for your home."
        buttonText={loading ? "Sending..." : "Consult Our Expert"}
        phoneNumber="+91 7014116801"
        onSubmit={handleFormSubmit}
        showForm={true}
      /> */}
      <ImageTextSection />
      <HelpSection />
      {/* <CollaborateSection /> */}
      <ScopeOfWorkSection />
      <PoojaRoomJourney />
    </div>
  );
}
