import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiGlobe,
} from "react-icons/fi";

import { destinations } from "../data/studyAbroadData";

const StudyAbroadDestinations = () => {
  return (
    <section
      id="destinations"
      className="bg-slate-50 py-12 sm:py-14 lg:py-16"
    >
      <div className="px-6 xl:px-30">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            <FiGlobe />
            Top Destinations
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Where would you like to study?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Start with a destination, then explore the academic areas,
            universities and opportunities available there.
          </p>
        </div>

        <div className="mt-7 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 md:snap-none xl:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group w-[82vw] shrink-0 snap-start overflow-hidden border border-slate-200 bg-white sm:w-[380px] md:w-auto"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.shortName}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/65">
                    Study in
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    {destination.shortName}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm leading-6 text-slate-600">
                  {destination.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {destination.popularPrograms.map((program) => (
                    <span
                      key={program}
                      className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                    >
                      {program}
                    </span>
                  ))}
                </div>

                <Link
                  href={destination.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#A41034]"
                >
                  Explore destination
                  <FiArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-3 text-xs text-slate-400 md:hidden">
          Swipe to explore destinations →
        </p>
      </div>
    </section>
  );
};

export default StudyAbroadDestinations;