import React from "react";
import Navbar from "../components/navigations/Navbar";
import HomeHero from "../components/home/components/HomeHero";
import LearningCategories from "../components/home/components/LearningCategories";
import FeaturedPrograms from "../components/home/components/FeaturedPrograms";
import WhyStudentsChooseUs from "../components/home/components/WhyStudentsChooseUs";
import StudentStories from "../components/home/components/StudentStories";
import HomeFAQ from "../components/home/components/HomeFAQ";
import FinalCTA from "../components/home/components/FinalCTA";
import Footer from "@/components/navigations/Footer";
import LatestBlogs from "@/components/home/components/LatestBlogs";

const Page = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <HomeHero />
      <LearningCategories />
      <FeaturedPrograms />
      <WhyStudentsChooseUs />
      <StudentStories />
      <LatestBlogs/>
      <HomeFAQ />
      <FinalCTA />

      <Footer/>
    </main>
  );
};

export default Page;