import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CourseOverviewProps {
  course: Course;
}

const CourseOverview = ({
  course,
}: CourseOverviewProps) => {
  return (
    <section>
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Course Overview
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Learn by building, practicing and applying.
          </h2>
        </div>

        <div className="hidden sm:block">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
            {course.shortTitle || course.title}
            <FiArrowUpRight size={13} />
          </span>
        </div>
      </div>

      <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
        {course.detailPage?.overview || course.description}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Level",
            value: course.level,
          },
          {
            label: "Duration",
            value: course.duration,
          },
          {
            label: "Mode",
            value: course.mode || "Online",
          },
          {
            label: "Language",
            value:
              course.language?.join(", ") || "English",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="border border-slate-200 bg-slate-50 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              {item.label}
            </p>

            <p className="mt-2 text-sm font-semibold text-slate-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseOverview;