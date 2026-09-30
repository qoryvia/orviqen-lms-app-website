import type { Metadata } from "next";
import React from "react";

import Navbar from "@/components/navigations/Navbar";
import Footer from "@/components/navigations/Footer";

import ResourcesHero from "@/components/resources/components/ResourcesHero";
import RoadmapFlow from "@/components/resources/components/RoadmapFlow";
import RoadmapExplorer from "@/components/resources/components/RoadmapExplorer";
import ResourceLibrary from "@/components/resources/components/ResourceLibrary";
import LearningToolkit from "@/components/resources/components/LearningToolkit";
import ResourcesFAQ from "@/components/resources/components/ResourcesFAQ";

export const metadata: Metadata = {
  title: "Learning Roadmaps & Resources | Eklavya",
  description:
    "Explore step-by-step learning roadmaps for frontend, backend, full stack, AI, machine learning, data, cybersecurity, cloud, programming and more.",
  keywords: [
    "learning roadmap",
    "developer roadmap",
    "frontend roadmap",
    "backend roadmap",
    "full stack roadmap",
    "AI roadmap",
    "machine learning roadmap",
    "data science roadmap",
    "cybersecurity roadmap",
    "ethical hacking roadmap",
    "cloud roadmap",
    "DevOps roadmap",
    "Python roadmap",
    "Java roadmap",
    "DSA roadmap",
    "programming roadmap",
    "technology learning resources",
  ],
  openGraph: {
    title: "Learning Roadmaps & Resources | Eklavya",
    description:
      "Find your learning path and follow a practical roadmap from fundamentals to projects and advanced skills.",
    type: "website",
  },
};

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <ResourcesHero />

        <RoadmapFlow />

        <RoadmapExplorer />

        <ResourceLibrary />

        <LearningToolkit />

        <ResourcesFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
