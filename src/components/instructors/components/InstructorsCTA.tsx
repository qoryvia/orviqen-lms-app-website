import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiMessageCircle,
} from "react-icons/fi";

const InstructorsCTA = () => {
  return (
    <section className="bg-[#101828] text-white">
      <div className="px-6 py-12 xl:px-30 sm:py-14 lg:py-16">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#d16a84]">
              <FiMessageCircle size={14} />
              Start Learning
            </div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Find a course that matches your goals.
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              Explore courses, compare learning paths and start building skills
              with guidance from experienced instructors.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#A41034] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
          >
            Explore Courses
            <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstructorsCTA;