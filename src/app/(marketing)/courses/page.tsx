import type { Metadata } from "next";
import React from "react";

import Footer from "@/components/navigations/Footer";
import Navbar from "@/components/navigations/Navbar";

import CoursesHero from "@/components/courses/components/CoursesHero";
import CourseSearch from "@/components/courses/components/CourseSearch";
import CoursesCTA from "@/components/courses/components/CoursesCTA";

export const metadata: Metadata = {
  title: "Courses | Eklavya",
  description:
    "Explore technology courses across software development, data, AI, cybersecurity, cloud and career-focused learning.",
};

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <CoursesHero />
        <CourseSearch />
        <CoursesCTA />
      </main>

      <Footer />
    </div>
  );
};

export default CoursesPage;
