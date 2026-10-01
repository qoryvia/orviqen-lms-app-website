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

const CourseFAQ = ({
  course,
}: CourseFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    null
  );

  if (!course.faq?.length) {
    return null;
  }

  return (
    <section className="py-10 lg:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
        FAQ
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        Questions students usually ask.
      </h2>

      <div className="mt-6 border border-slate-200">
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
                className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-slate-50 sm:px-5"
              >
                <FiHelpCircle
                  size={17}
                  className="shrink-0 text-[#A41034]"
                />

                <span className="flex-1 text-sm font-semibold leading-6 text-slate-900">
                  {item.question}
                </span>

                {isOpen ? (
                  <FiChevronUp
                    size={17}
                    className="shrink-0 text-slate-400"
                  />
                ) : (
                  <FiChevronDown
                    size={17}
                    className="shrink-0 text-slate-400"
                  />
                )}
              </button>

              {isOpen && (
                <div className="border-t border-slate-100 bg-slate-50 px-4 py-4 pl-11 sm:px-5 sm:pl-12">
                  <p className="text-xs leading-6 text-slate-600">
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