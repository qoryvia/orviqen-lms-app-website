import React from "react";
import {
  FiCode,
  FiTool,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CourseToolsProps {
  course: Course;
}

const CourseTools = ({
  course,
}: CourseToolsProps) => {
  const hasTools = Boolean(course.tools?.length);
  const hasLanguages = Boolean(
    course.programmingLanguages?.length
  );

  if (!hasTools && !hasLanguages) {
    return null;
  }

  return (
    <section className="py-10 lg:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
        Tools & Environment
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
        Your learning toolkit.
      </h2>

      {hasTools && (
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {course.tools!.map((tool) => (
            <div
              key={tool}
              className="flex items-center gap-2.5 border border-slate-200 bg-white px-3.5 py-3"
            >
              <FiTool
                size={15}
                className="shrink-0 text-[#A41034]"
              />

              <span className="text-xs font-medium text-slate-700">
                {tool}
              </span>
            </div>
          ))}
        </div>
      )}

      {hasLanguages && (
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <FiCode
              size={15}
              className="text-[#A41034]"
            />

            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              Programming Languages
            </p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {course.programmingLanguages!.map(
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

export default CourseTools;