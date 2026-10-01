"use client";

import React, { useState } from "react";
import {
  FiBookOpen,
  FiChevronDown,
  FiChevronUp,
  FiCheck,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CourseCurriculumProps {
  course: Course;
}

const CourseCurriculum = ({
  course,
}: CourseCurriculumProps) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!course.curriculum?.length) {
    return null;
  }

  return (
    <section id="curriculum" className="py-10 lg:py-14">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Curriculum
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Your learning path.
          </h2>
        </div>

        {course.lessons && (
          <p className="text-xs text-slate-500">
            {course.lessons} total lessons
          </p>
        )}
      </div>

      <div className="mt-6 border border-slate-200">
        {course.curriculum.map((module, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={module.title}
              className="border-b border-slate-200 last:border-b-0"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(isOpen ? -1 : index)
                }
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-slate-50 sm:px-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
                  <FiBookOpen size={16} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Module{" "}
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                    {module.title}
                  </h3>

                  {module.description && (
                    <p className="mt-1 line-clamp-1 text-xs text-slate-500">
                      {module.description}
                    </p>
                  )}
                </div>

                <span className="shrink-0 text-slate-400">
                  {isOpen ? (
                    <FiChevronUp size={17} />
                  ) : (
                    <FiChevronDown size={17} />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-slate-100 bg-slate-50 px-4 py-4 sm:px-5">
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {module.topics.map((topic) => (
                      <div
                        key={topic}
                        className="flex items-start gap-2.5"
                      >
                        <FiCheck
                          size={14}
                          className="mt-0.5 shrink-0 text-[#A41034]"
                        />

                        <span className="text-xs leading-5 text-slate-600">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CourseCurriculum;