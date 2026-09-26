import React from "react";
import { FiBriefcase } from "react-icons/fi";
import { careerOpportunities } from "../data/careerData";

const CareerOpportunities = () => {
  return (
    <section
      id="openings"
      className="bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="px-6 xl:px-30">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            <FiBriefcase />
            Career Areas
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Find a place for your skills.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Our work brings together education, technology, student experience
            and operations. Explore the areas where your background can make an
            impact.
          </p>
        </div>

        {/* Opportunities */}
        <div className="mt-7 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 sm:snap-none lg:grid-cols-4">
          {careerOpportunities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="w-[82vw] shrink-0 snap-start border border-slate-200 bg-slate-50 p-5 sm:w-auto sm:shrink"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-[#A41034]/10 text-[#A41034]">
                  <Icon size={19} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-3 text-xs text-slate-400 sm:hidden">
          Swipe to explore career areas →
        </p>
      </div>
    </section>
  );
};

export default CareerOpportunities;