import React from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiClock,
} from "react-icons/fi";

import { studyPrograms } from "../data/studyAbroadData";

const StudyAbroadPrograms = () => {
  return (
    <section className="bg-slate-50 py-12 sm:py-14 lg:py-16">
      <div className="px-6 xl:px-30">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              <FiBookOpen />
              Explore Programs
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Explore popular study pathways.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Discover sample pathways across different destinations and
              academic areas.
            </p>
          </div>

          <span className="text-xs font-medium text-slate-400">
            Undergraduate & Postgraduate
          </span>
        </div>

        <div className="mt-7 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:pb-0 md:snap-none">
          {studyPrograms.map((program) => (
            <article
              key={program.title}
              className="group w-[84vw] shrink-0 snap-start overflow-hidden border border-slate-200 bg-white sm:w-[400px] md:w-auto"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-900">
                    {program.destination}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold leading-tight text-slate-950">
                  {program.title}
                </h3>

                <div className="mt-3 flex items-center justify-between border-y border-slate-100 py-3 text-xs text-slate-500">
                  <span>{program.level}</span>

                  <span className="flex items-center gap-1.5">
                    <FiClock className="text-[#A41034]" />
                    {program.duration}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#A41034]"
                >
                  Get program details
                  <FiArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-3 text-xs text-slate-400 md:hidden">
          Swipe to explore programs →
        </p>
      </div>
    </section>
  );
};

export default StudyAbroadPrograms;