import React from "react";
import {
  FiArrowUpRight,
  FiFolder,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CourseProjectsProps {
  course: Course;
}

const CourseProjects = ({
  course,
}: CourseProjectsProps) => {
  if (!course.projects?.length) {
    return null;
  }

  return (
    <section className="py-10 lg:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
        Practical Projects
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        Build work you can showcase.
      </h2>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {course.projects.map((project, index) => (
          <article
            key={project.title}
            className="group border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-slate-50 text-[#A41034]">
                <FiFolder size={17} />
              </div>

              <span className="text-[10px] font-semibold text-slate-300">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-5 text-base font-semibold text-slate-950">
              {project.title}
            </h3>

            <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>

            <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-[#A41034]">
              Project-based learning
              <FiArrowUpRight
                size={12}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CourseProjects;