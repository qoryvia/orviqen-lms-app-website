import Link from "next/link";
import React from "react";
import {
  FiArrowDown,
  FiArrowRight,
  FiCompass,
  FiMap,
} from "react-icons/fi";

const ResourcesHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=90"
        alt="Student exploring technology and learning resources"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-slate-950/74" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/35" />

      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-slate-950/90 to-transparent" />

      <div className="px-6 xl:px-30">
        <div className="grid min-h-[620px] items-end gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              <FiMap size={14} />
              Learning Resources
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-7xl">
              Don&apos;t know what to learn next? Start with a roadmap.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              Choose the technology domain that interests you, tell us where
              you are starting from and follow a practical roadmap from
              fundamentals to projects, advanced skills and career preparation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#roadmap-explorer"
                className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
              >
                Find My Roadmap
                <FiArrowDown size={16} />
              </a>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                Browse Courses
                <FiArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="border border-white/15 bg-black/25 p-6 backdrop-blur-md sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-[#A41034] text-white">
                <FiCompass size={19} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#dfa0b0]">
                  Start here
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Follow your path in three steps
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-5">
              {[
                {
                  number: "01",
                  text: "Choose a domain",
                },
                {
                  number: "02",
                  text: "Select your current level",
                },
                {
                  number: "03",
                  text: "Follow the recommended roadmap",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-xs font-bold text-[#dfa0b0]">
                    {item.number}
                  </span>

                  <p className="text-sm text-slate-200">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="text-xs leading-5 text-slate-400">
                No single roadmap fits everyone. Use the path as a guide and
                adapt it around your goals and current skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;