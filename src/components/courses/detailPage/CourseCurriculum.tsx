"use client";

import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiBookOpen,
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

  return (
    <section id="curriculum">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
        Curriculum
      </p>

      <div className="mt-2 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          A structured path from fundamentals to application.
        </h2>

        {course.lessons && (
          <p className="text-sm text-slate-500">
            {course.lessons} total lessons
          </p>
        )}
      </div>

      <div className="mt-7 border border-slate-200">
        {(course.curriculum || []).map((module, index) => {
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
                className="flex w-full items-center gap-4 px-5 py-5 text-left"
                aria-expanded={isOpen}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
                  <FiBookOpen size={17} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-950">
                    Module {index + 1}
                  </p>

                  <h3 className="mt-1 text-base font-semibold text-slate-900">
                    {module.title}
                  </h3>

                  {module.description && (
                    <p className="mt-1 text-sm text-slate-500">
                      {module.description}
                    </p>
                  )}
                </div>

                <div className="shrink-0 text-slate-400">
                  {isOpen ? (
                    <FiChevronUp size={18} />
                  ) : (
                    <FiChevronDown size={18} />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-slate-100 bg-slate-50 px-5 py-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {(module.topics || []).map((topic) => (
                      <div
                        key={topic}
                        className="flex items-center gap-3"
                      >
                        <FiCheck
                          size={15}
                          className="shrink-0 text-[#A41034]"
                        />

                        <span className="text-sm text-slate-600">
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