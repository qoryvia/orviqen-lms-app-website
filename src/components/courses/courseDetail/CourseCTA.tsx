import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CourseCTAProps {
  course: Course;
}

const CourseCTA = ({ course }: CourseCTAProps) => {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="px-6 py-14 xl:px-30 lg:py-20">
        <div className="border border-slate-200 bg-slate-50 px-6 py-10 sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
                Start Your Learning Journey
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Ready to learn{" "}
                {course.shortTitle || course.title}?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Take the next step with a structured curriculum,
                practical projects and a learning path designed around
                your goals.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Structured curriculum",
                  "Practical projects",
                  "Industry-relevant skills",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <FiCheck
                      size={15}
                      className="text-[#A41034]"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/#lead"
                className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
              >
                Enquire Now
                <FiArrowRight size={16} />
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
              >
                Explore Other Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCTA;