import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiCheck,
} from "react-icons/fi";

const ApplyCTA = () => {
  return (
    <section className="border-t border-slate-200 bg-slate-950">
      <div className="px-6 py-14 xl:px-30 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <div className="flex h-10 w-10 items-center justify-center bg-[#A41034] text-white">
              <FiBookOpen size={18} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#d8899d]">
              Your Next Step
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Not sure which program is right for you?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Explore the course library first, compare learning paths and
              then return to the application when you are ready.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Explore course details",
                "Compare technologies",
                "Understand learning paths",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <FiCheck
                    size={15}
                    className="text-[#d8899d]"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
            >
              Explore Courses
              <FiArrowRight size={16} />
            </Link>

            <a
              href="#application-form"
              className="inline-flex items-center justify-center border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyCTA;