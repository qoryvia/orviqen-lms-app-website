import type { Metadata } from "next";
import React from "react";

import Footer from "@/components/navigations/Footer";
import Navbar from "@/components/navigations/Navbar";

import AboutHero from "@/components/about/components/AboutHero";
import AboutStory from "@/components/about/components/AboutStory";
import AboutValues from "@/components/about/components/AboutValues";
import AboutApproach from "@/components/about/components/AboutApproach";
import AboutCTA from "@/components/about/components/AboutCTA";

export const metadata: Metadata = {
  title: "About | Eklavya",
  description:
    "Learn more about Eklavya, our approach to education, practical learning and global career development.",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutApproach />
        <AboutCTA />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
