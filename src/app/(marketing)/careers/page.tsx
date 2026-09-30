import type { Metadata } from "next";
import React from "react";

import Footer from "@/components/navigations/Footer";
import Navbar from "@/components/navigations/Navbar";

import CareerHero from "@/components/career/components/CareerHero";
import CareerOpportunities from "@/components/career/components/CareerOpportunities";
import CareerDevelopment from "@/components/career/components/CareerDevelopment";
import CareerWorkplace from "@/components/career/components/CareerWorkplace";
import CareerApplication from "@/components/career/components/CareerApplication";
import CareerCTA from "@/components/career/components/CareerCTA";

export const metadata: Metadata = {
  title: "Careers | EklavyaED",
  description:
    "Explore opportunities at EklavyaED across teaching, training, technology, student success, sales, operations and corporate functions.",
};

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <CareerHero />

        <CareerOpportunities />

        <CareerApplication />

        <CareerDevelopment />

        <CareerWorkplace />

        <CareerCTA />
      </main>

      <Footer />
    </div>
  );
};

export default CareerPage;