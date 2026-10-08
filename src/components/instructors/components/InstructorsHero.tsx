import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiUsers,
} from "react-icons/fi";

import { instructorStats } from "../data/instructorsData";

const InstructorsHero = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-black bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=2400&q=85')",
      }}
    >
      {/* Dark image overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Strong left-side shadow for readability */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.82)_38%,rgba(0,0,0,0.58)_72%,rgba(0,0,0,0.68)_100%)]" />

      {/* Bottom shadow */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="px-6 xl:px-30">
        <div className="grid min-h-[620px] gap-10 py-14 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:py-20">
          {/* Main Content */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#e08ba0]">
              <FiUsers size={15} />
              Our Instructors
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
              Learn from people who know how to build.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Meet the instructors and mentors behind Orviqen&apos;s learning
              experience. Our teaching approach combines strong fundamentals,
              practical projects and industry-focused skills.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
              >
                Explore Courses
                <FiArrowRight size={16} />
              </Link>

              <a
                href="#instructors"
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-black/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Meet the Instructors
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="overflow-hidden border border-white/15 bg-black/40 backdrop-blur-sm">
            {instructorStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex items-center gap-4 px-5 py-5 sm:px-6 ${
                  index !== instructorStats.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/10 text-[#e08ba0]">
                  {index === 0 ? (
                    <FiBookOpen size={18} />
                  ) : (
                    <FiUsers size={18} />
                  )}
                </div>

                <div>
                  <p className="text-xl font-semibold text-white">
                    {stat.value}
                  </p>

                  <p className="mt-0.5 text-xs text-white/50">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorsHero;