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
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
        Before You Start
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
        Prerequisites
      </h2>

      <div className="mt-6 border border-slate-200 bg-slate-50 p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-white text-[#A41034]">
            <FiInfo size={17} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-950">
              Recommended starting point
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              These requirements help you get the most from the
              course. They are not necessarily required for every
              learner.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {(course.prerequisites || []).map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 border border-slate-200 bg-white p-4"
            >
              <FiCheck
                size={16}
                className="shrink-0 text-[#A41034]"
              />

              <span className="text-sm text-slate-600">
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