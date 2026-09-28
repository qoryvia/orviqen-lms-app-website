import React from "react";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiUsers,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CourseLearningProps {
  course: Course;
}

const CourseLearning = ({
  course,
}: CourseLearningProps) => {
  return (
    <section>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Learning Outcomes
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            What you will be able to do.
          </h2>

          <div className="mt-6 space-y-3">
            {(course.learningOutcomes || []).map(
              (outcome) => (
                <div
                  key={outcome}
                  className="flex gap-3"
                >
                  <FiCheck
                    size={17}
                    className="mt-0.5 shrink-0 text-[#A41034]"
                  />

                  <p className="text-sm leading-6 text-slate-600">
                    {outcome}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Ideal For
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            Who this course is for.
          </h2>

          <div className="mt-6 space-y-3">
            {(course.detailPage?.audience || []).map(
              (audience) => (
                <div
                  key={audience}
                  className="flex items-center gap-3 border border-slate-200 p-4"
                >
                  <FiUsers
                    size={17}
                    className="shrink-0 text-[#A41034]"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {audience}
                  </span>

                  <FiArrowRight
                    size={15}
                    className="ml-auto text-slate-300"
                  />
                </div>
              )
            )}
          </div>

          {course.certification && (
            <div className="mt-6 flex items-start gap-3 border border-[#A41034]/15 bg-[#A41034]/5 p-5">
              <FiBriefcase
                size={18}
                className="mt-0.5 shrink-0 text-[#A41034]"
              />

              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Certificate
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {course.certification}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseLearning;