import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiClock,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface RelatedCoursesProps {
  courses: Course[];
}

const RelatedCourses = ({
  courses,
}: RelatedCoursesProps) => {
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="px-6 py-14 xl:px-30 lg:py-16">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              Continue Learning
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Related courses
            </h2>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#A41034]"
          >
            View all courses
            <FiArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group border border-slate-200 bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A41034]">
                  {course.category}
                </span>

                <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
                  {course.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                  {course.shortDescription ||
                    course.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <FiClock size={14} />
                    {course.duration}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <FiBookOpen size={14} />
                    View course
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCourses;