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
  return (
    <section>
      <div className="border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
        <div className="max-w-2xl">
          <div className="flex h-10 w-10 items-center justify-center bg-[#A41034]">
            <FiBriefcase size={18} />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#d16a84]">
            Career Paths
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Where this learning path can take you.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Build the skills and project experience needed to move
            toward roles related to{" "}
            {course.shortTitle || course.title}.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {(course.careerPaths || []).map((career) => (
            <div
              key={career}
              className="flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-4"
            >
              <FiCheckCircle
                size={17}
                className="shrink-0 text-[#d16a84]"
              />

              <span className="text-sm font-medium text-slate-200">
                {career}
              </span>

              <FiArrowRight
                size={15}
                className="ml-auto text-slate-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCareer;