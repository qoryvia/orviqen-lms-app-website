import React from "react";
import {
  FiBookOpen,
  FiClock,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CourseOverviewProps {
  course: Course;
}

const CourseOverview = ({
  course,
}: CourseOverviewProps) => {
  const stats = [
    {
      label: "Level",
      value: course.level,
      icon: FiLayers,
    },
    {
      label: "Duration",
      value: course.duration,
      icon: FiClock,
    },
    {
      label: "Mode",
      value: course.mode || "Online",
      icon: FiGlobe,
    },
    {
      label: "Lessons",
      value: course.lessons
        ? `${course.lessons}`
        : "—",
      icon: FiBookOpen,
    },
  ];

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
        Course Overview
      </p>

      <h2 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        {course.shortTitle || course.title}{" "}
        designed around practical learning.
      </h2>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
        {course.detailPage?.overview ||
          course.description}
      </p>

      <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="border border-slate-200 bg-slate-50 p-4"
            >
              <Icon
                size={17}
                className="text-[#A41034]"
              />

              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                {item.label}
              </p>

              <p className="mt-1.5 text-sm font-semibold text-slate-900">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CourseOverview;