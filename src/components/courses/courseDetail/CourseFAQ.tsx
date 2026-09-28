"use client";

import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiHelpCircle,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CourseFAQProps {
  course: Course;
}

const CourseFAQ = ({ course }: CourseFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    null
  );

  if (!course.faq?.length) {
    return null;
  }

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
        Frequently Asked Questions
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        Questions about this course.
      </h2>

      <div className="mt-7 border border-slate-200">
        {course.faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="border-b border-slate-200 last:border-b-0"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-5 py-5 text-left"
              >
                <FiHelpCircle
                  size={18}
                  className="shrink-0 text-[#A41034]"
                />

                <span className="flex-1 text-sm font-semibold text-slate-900">
                  {item.question}
                </span>

                {isOpen ? (
                  <FiChevronUp
                    size={18}
                    className="shrink-0 text-slate-400"
                  />
                ) : (
                  <FiChevronDown
                    size={18}
                    className="shrink-0 text-slate-400"
                  />
                )}
              </button>

              {isOpen && (
                <div className="border-t border-slate-100 bg-slate-50 px-5 py-5 pl-12">
                  <p className="text-sm leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CourseFAQ;