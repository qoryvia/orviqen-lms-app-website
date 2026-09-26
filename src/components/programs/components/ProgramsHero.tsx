import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiBookOpen,
  FiCompass,
} from "react-icons/fi";

const ProgramsHero = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=85"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/72" />

      <div className="relative px-6 py-14 sm:py-16 lg:py-20 xl:px-30">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
            <FiBookOpen size={14} />
            Learning Programs
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Choose a program built around your goals.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
            Explore structured learning programs designed around practical
            skills, projects and clear career directions.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#programs"
              className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8C0D2A]"
            >
              Explore Programs
              <FiArrowRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Need Guidance
              <FiCompass size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;