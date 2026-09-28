import React from "react";
import { FiTool } from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CourseToolsProps {
  course: Course;
}

const CourseTools = ({
  course,
}: CourseToolsProps) => {
  if (!course.tools?.length) {
    return null;
  }

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
        Tools & Environment
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
        Tools you will use.
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {course.tools.map((tool) => (
          <div
            key={tool}
            className="flex items-center gap-3 border border-slate-200 bg-white px-4 py-4"
          >
            <FiTool
              size={16}
              className="shrink-0 text-[#A41034]"
            />

            <span className="text-sm font-medium text-slate-700">
              {tool}
            </span>
          </div>
        ))}
      </div>

      {course.programmingLanguages &&
        course.programmingLanguages.length > 0 && (
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              Programming Languages
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {course.programmingLanguages.map(
                (language) => (
                  <span
                    key={language}
                    className="border border-[#A41034]/15 bg-[#A41034]/5 px-3 py-2 text-xs font-semibold text-[#A41034]"
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