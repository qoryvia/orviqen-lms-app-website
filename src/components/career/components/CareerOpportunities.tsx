import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiBriefcase,
} from "react-icons/fi";
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
            <FiBriefcase size={14} />
            Career Domains
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Find the domain that matches your experience.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Whether you teach, build technology, support students or
            run business operations, explore the area where you want
            to contribute.
          </p>
        </div>

        {/* Opportunities */}
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {careerOpportunities.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex h-full flex-col border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#A41034]/10 text-[#A41034]">
                    <Icon size={18} />
                  </div>

                  <span className="text-[10px] font-semibold tracking-[0.15em] text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <Link
                  href="#apply"
                  className="mt-5 inline-flex items-center gap-2 border-t border-slate-200 pt-4 text-xs font-semibold text-[#A41034]"
                >
                  Explore opportunities
                  <FiArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Not seeing your exact role? You can still submit your
          profile through the application section below.
        </p>
      </div>
    </section>
  );
};

export default CareerOpportunities;