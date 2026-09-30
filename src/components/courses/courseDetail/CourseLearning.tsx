import React from "react";
import {
  FiArrowRight,
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
  const outcomes = course.learningOutcomes || [];
  const audience = course.detailPage?.audience || [];

  return (
    <section>
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Outcomes */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Learning Outcomes
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            What you will be able to do.
          </h2>

          <div className="mt-6 space-y-3">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex gap-3"
              >
                <FiCheck
                  size={16}
                  className="mt-1 shrink-0 text-[#A41034]"
                />

                <p className="text-sm leading-6 text-slate-600">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Audience */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Ideal For
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            Who should learn this course.
          </h2>

          <div className="mt-6 space-y-2.5">
            {audience.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border border-slate-200 px-4 py-3.5"
              >
                <FiUsers
                  size={16}
                  className="shrink-0 text-[#A41034]"
                />

                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>

                <FiArrowRight
                  size={14}
                  className="ml-auto text-slate-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseLearning;