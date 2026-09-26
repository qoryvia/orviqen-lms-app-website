import type { Metadata } from "next";
import Footer from "@/components/navigations/Footer";
import Navbar from "@/components/navigations/Navbar";
import StudyAbroadHero from "@/components/study-abroad/components/StudyAbroadHero";
import StudyAbroadDestinations from "@/components/study-abroad/components/StudyAbroadDestinations";
import StudyAbroadPathways from "@/components/study-abroad/components/StudyAbroadPathways";
import StudyAbroadPrograms from "@/components/study-abroad/components/StudyAbroadPrograms";
import StudyAbroadSupport from "@/components/study-abroad/components/StudyAbroadSupport";
import StudyAbroadStories from "@/components/study-abroad/components/StudyAbroadStories";
import StudyAbroadFAQ from "@/components/study-abroad/components/StudyAbroadFAQ";
import StudyAbroadCTA from "@/components/study-abroad/components/StudyAbroadCTA";


export const metadata: Metadata = {
  title: "Study Abroad | HenleyCrest",
  description:
    "Explore study abroad destinations, international programs and personalized guidance for your global education journey.",
};

const StudyAbroadPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <StudyAbroadHero />
        <StudyAbroadDestinations />
        <StudyAbroadPathways />
        <StudyAbroadPrograms />
        <StudyAbroadSupport />
        <StudyAbroadStories />
        <StudyAbroadFAQ />
        <StudyAbroadCTA />
      </main>

      <Footer />
    </div>
  );
};

export default StudyAbroadPage;