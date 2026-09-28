import Link from "next/link";
import React from "react";
import {
  FiArrowUpRight,
  FiClock,
  FiLayers,
} from "react-icons/fi";

import { applicationPrograms } from "../data/applyData";

const ApplyPrograms = () => {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="px-6 py-14 xl:px-30 lg:py-20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              Choose Your Direction
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Explore programs before submitting your application.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Select a program based on your interests and goals. You can
              also use the application form to tell us what you are
              looking for.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#A41034]"
          >
            View all courses
            <FiArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {applicationPrograms.map((program) => (
            <a
              key={program.id}
              href="#application-form"
              className="group border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
                  <FiLayers size={18} />
                </div>

                <FiArrowUpRight
                  size={17}
                  className="text-slate-300 transition-colors group-hover:text-[#A41034]"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
                {program.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {program.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <FiClock size={13} />
                  {program.duration}
                </span>

                <span className="text-slate-400">
                  {program.level}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplyPrograms;