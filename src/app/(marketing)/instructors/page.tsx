import type { Metadata } from "next";
import React from "react";

import Footer from "@/components/navigations/Footer";
import Navbar from "@/components/navigations/Navbar";

import InstructorsClient from "@/components/instructors/components/InstructorsClient";

export const metadata: Metadata = {
  title: "Our Instructors | Learn From Industry Experts | Orviqen",
  description:
    "Meet Orviqen instructors and mentors who bring practical industry experience, technical knowledge and real-world learning to every course.",
  keywords: [
    "Orviqen instructors",
    "Orviqen mentors",
    "online course instructors",
    "industry experts",
    "technology instructors",
    "coding mentors",
    "professional instructors",
  ],
};

const Instructors = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <InstructorsClient />
      </main>

      <Footer />
    </div>
  );
};

export default Instructors;