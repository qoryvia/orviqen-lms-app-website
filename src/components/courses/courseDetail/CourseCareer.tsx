import React from "react";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CourseCareerProps {
  course: Course;
}

const CourseCareer = ({
  course,
}: CourseCareerProps) => {
  if (!course.careerPaths?.length) {
    return null;
  }

  return (
    <section className="py-10 lg:py-14">
      <div className="border border-slate-800 bg-slate-950 p-6 text-white sm:p-8">
        <div className="max-w-2xl">
          <div className="flex h-9 w-9 items-center justify-center bg-[#A41034]">
            <FiBriefcase size={17} />
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#d16a84]">
            Career Paths
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Skills aligned with real-world roles.
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            The learning path is designed to help you build
            practical skills relevant to roles associated with{" "}
            {course.shortTitle || course.title}.
          </p>
        </div>

        <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
          {course.careerPaths.map((career) => (
            <div
              key={career}
              className="flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-3.5"
            >
              <FiCheckCircle
                size={15}
                className="shrink-0 text-[#d16a84]"
              />

              <span className="text-xs font-medium text-slate-300">
                {career}
              </span>

              <FiArrowRight
                size={13}
                className="ml-auto shrink-0 text-slate-600"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCareer;