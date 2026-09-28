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
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
        Practical Projects
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        Build projects you can showcase.
      </h2>

      <div className="mt-7 grid gap-5">
        {(course.projects || []).map((project, index) => (
          <article
            key={project.title}
            className="border border-slate-200 bg-white p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-slate-50 text-[#A41034]">
                <FiFolder size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Project{" "}
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-slate-950">
                      {project.title}
                    </h3>
                  </div>

                  <FiArrowUpRight
                    size={18}
                    className="shrink-0 text-slate-300"
                  />
                </div>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {(project.technologies || []).map(
                    (technology) => (
                      <span
                        key={technology}
                        className="bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CourseProjects;