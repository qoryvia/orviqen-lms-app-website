import React from "react";
import {
  FiCheck,
  FiInfo,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CoursePrerequisitesProps {
  course: Course;
}

const CoursePrerequisites = ({
  course,
}: CoursePrerequisitesProps) => {
  if (!course.prerequisites?.length) {
    return null;
  }

  return (
    <section className="py-10 lg:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
        Before You Start
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
        Prerequisites
      </h2>

      <div className="mt-6 border border-slate-200">
        <div className="flex items-start gap-3 border-b border-slate-200 bg-slate-50 p-5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-white text-[#A41034]">
            <FiInfo size={16} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Recommended starting point
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              These are the recommended foundations for getting the
              most out of the course.
            </p>
          </div>
        </div>

        <div className="grid gap-2 p-4 sm:grid-cols-2">
          {course.prerequisites.map((item) => (
            <div
              key={item}
              className="flex items-start gap-2.5 border border-slate-100 px-3.5 py-3"
            >
              <FiCheck
                size={14}
                className="mt-0.5 shrink-0 text-[#A41034]"
              />

              <span className="text-xs leading-5 text-slate-600">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePrerequisites;