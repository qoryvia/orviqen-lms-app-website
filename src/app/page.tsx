import React from "react";
import Navbar from "../components/navigations/Navbar";
import HomeHero from "../components/home/components/HomeHero";
import LearningCategories from "../components/home/components/LearningCategories";
import FeaturedPrograms from "../components/home/components/FeaturedPrograms";
import LearningJourney from "../components/home/components/LearningJourney";
import InternshipApprenticeship from "../components/home/components/InternshipApprenticeship";
import WhyStudentsChooseUs from "../components/home/components/WhyStudentsChooseUs";
import StudentStories from "../components/home/components/StudentStories";
import LeadCapture from "../components/home/components/LeadCapture";
import HomeFAQ from "../components/home/components/HomeFAQ";
import FinalCTA from "../components/home/components/FinalCTA";
import Footer from "@/components/navigations/Footer";

const Page = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <HomeHero />
      <LearningCategories />
      <FeaturedPrograms />
      <LearningJourney />
      <InternshipApprenticeship />
      <WhyStudentsChooseUs />
      <StudentStories />
      <LeadCapture />
      <HomeFAQ />
      <FinalCTA />

      <Footer/>
    </main>
  );
};

export default Page;