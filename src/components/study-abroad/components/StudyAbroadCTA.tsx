import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiGlobe,
  FiMessageCircle,
} from "react-icons/fi";

const StudyAbroadCTA = () => {
  return (
    <section className="bg-slate-50 py-10 sm:py-12 lg:py-14">
      <div className="px-6 xl:px-30">
        <div className="relative overflow-hidden bg-slate-950">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=85"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/78" />

          <div className="relative px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
                  <FiGlobe size={15} />
                  Start Your Global Journey
                </div>

                <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  Your study abroad plan can start with one conversation.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                  Tell us where you want to study, what you want to learn and
                  where you want your career to go.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8C0D2A]"
                >
                  Talk to an Advisor
                  <FiMessageCircle size={15} />
                </Link>

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Explore Courses
                  <FiArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadCTA;