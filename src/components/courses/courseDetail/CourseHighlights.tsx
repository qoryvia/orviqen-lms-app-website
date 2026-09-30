import React from "react";
import {
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiLayers,
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
  ];

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
        Learning Focus
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        What you will work with.
      </h2>

      {highlights.length > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={item}
                className="flex gap-3 border border-slate-200 bg-white p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
                  <Icon size={16} />
                </div>

                <p className="pt-1 text-sm font-medium leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {course.skills.length > 0 && (
        <div className="mt-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            Skills
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {course.skills.map((skill) => (
              <span
                key={skill}
                className="border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {course.technologies &&
        course.technologies.length > 0 && (
          <div className="mt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              Technologies
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {course.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>
        )}

      {course.programmingLanguages &&
        course.programmingLanguages.length > 0 && (
          <div className="mt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              Programming Languages
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {course.programmingLanguages.map(
                (language) => (
                  <span
                    key={language}
                    className="bg-[#A41034]/5 px-3 py-1.5 text-xs font-semibold text-[#A41034]"
                  >
                    {language}
                  </span>
                )
              )}
            </div>
          </div>
        )}
    </section>
  );
};

export default CourseHighlights;