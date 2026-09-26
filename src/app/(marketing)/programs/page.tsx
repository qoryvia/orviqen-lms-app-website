import type { Metadata } from "next";
import React from "react";

import Footer from "@/components/navigations/Footer";
import Navbar from "@/components/navigations/Navbar";

import ProgramsHero from "@/components/programs/components/ProgramsHero";
import ProgramFilters from "@/components/programs/components/ProgramFilters";
import ProgramsCTA from "@/components/programs/components/ProgramsCTA";

export const metadata: Metadata = {
  title: "Programs | HenleyCrest",
  description:
    "Explore HenleyCrest learning programs across software development, data, AI, cybersecurity, cloud and career-focused technology skills.",
};

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <ProgramsHero />
        <ProgramFilters />
        <ProgramsCTA />
      </main>

      <Footer />
    </div>
  );
};

export default ProgramsPage;