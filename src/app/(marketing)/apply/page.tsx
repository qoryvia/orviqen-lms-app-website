import type { Metadata } from "next";
import React from "react";

import Footer from "@/components/navigations/Footer";
import Navbar from "@/components/navigations/Navbar";

import ApplyHero from "@/components/apply/components/ApplyHero";
import ApplyPrograms from "@/components/apply/components/ApplyPrograms";
import ApplyForm from "@/components/apply/components/ApplyForm";
import ApplySteps from "@/components/apply/components/ApplySteps";
import ApplyBenefits from "@/components/apply/components/ApplyBenefits";
import ApplyFAQ from "@/components/apply/components/ApplyFAQ";
import ApplyCTA from "@/components/apply/components/ApplyCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apply to Orviqen",
  description:
    "Apply to Orviqen and explore learning programs across software development, AI, data, cybersecurity, programming and cloud technology.",
  keywords: [
    "Orviqen application",
    "apply to Orviqen",
    "technology courses",
    "software development courses",
    "AI courses",
    "data science courses",
    "cybersecurity courses",
    "programming courses",
  ],
  openGraph: {
    title: "Apply to Orviqen",
    description:
      "Start your learning journey with an Orviqen program.",
    type: "website",
  },
};

const ApplyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <ApplyHero />

        <ApplyPrograms />

        <section className="bg-white">
          <div className="px-6 py-14 xl:px-30 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
              <ApplyForm />

              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-5">
                  <div className="border border-slate-200 bg-slate-50 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
                      Application Guide
                    </p>

                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                      A few minutes can start the conversation.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Keep your answers clear and specific. Your goals and
                      background help provide useful context for the next step.
                    </p>

                    <div className="mt-6 space-y-4 border-t border-slate-200 pt-5">
                      {[
                        "Use accurate contact details",
                        "Choose your preferred program",
                        "Share your current experience",
                        "Explain your learning goals",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-[#A41034]/5 text-[10px] font-bold text-[#A41034]">
                            {index + 1}
                          </span>

                          <p className="text-sm leading-6 text-slate-600">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border border-[#A41034]/15 bg-[#A41034]/5 p-6">
                    <p className="text-sm font-semibold text-slate-950">
                      Need help choosing a program?
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Explore the course library before submitting your
                      application.
                    </p>

                    <Link
                      href="/courses"
                      className="mt-4 inline-flex items-center text-sm font-semibold text-[#A41034]"
                    >
                      Explore courses →
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <ApplySteps />

        <ApplyBenefits />

        <ApplyFAQ />

        <ApplyCTA />
      </main>

      <Footer />
    </div>
  );
};

export default ApplyPage;