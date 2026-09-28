import React from "react";
import {
  FiCheckCircle,
  FiCpu,
  FiGithub,
  FiLayers,
  FiCode,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CourseHighlightsProps {
  course: Course;
}

const CourseHighlights = ({
  course,
}: CourseHighlightsProps) => {
  const highlights = course.detailPage?.highlights || [];

  const icons = [
    FiCheckCircle,
    FiCode,
    FiLayers,
    FiCpu,
    FiGithub,
  ];

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
        What You Will Learn
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        Skills and technologies you will work with.
      </h2>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {highlights.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div
              key={item}
              className="flex gap-4 border border-slate-200 bg-white p-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
                <Icon size={17} />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-950">
                  {item}
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Practical exposure through structured lessons and
                  hands-on development.
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {course.technologies &&
        course.technologies.length > 0 && (
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              Technology Stack
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {course.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}
    </section>
  );
};

export default CourseHighlights;