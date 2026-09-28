import Link from "next/link";
import React from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBookOpen,
  FiClock,
  FiLayers,
  FiPlayCircle,
  FiStar,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CourseDetailHeroProps {
  course: Course;
}

const CourseDetailHero = ({
  course,
}: CourseDetailHeroProps) => {
  return (
    <section className="border-b border-slate-200 bg-slate-950 text-white">
      <div className="px-6 xl:px-30">
        <div className="grid min-h-[560px] items-center gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="max-w-3xl">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 transition-colors hover:text-white"
            >
              <FiArrowLeft size={14} />
              Back to Courses
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200">
                {course.category}
              </span>

              {course.subCategory && (
                <span className="border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-400">
                  {course.subCategory}
                </span>
              )}

              {course.popular && (
                <span className="bg-[#A41034] px-3 py-1.5 text-xs font-semibold text-white">
                  Popular
                </span>
              )}
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {course.detailPage?.heroTitle || course.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {course.detailPage?.heroDescription ||
                course.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <div className="inline-flex items-center gap-2">
                <FiClock className="text-[#A41034]" />
                {course.duration}
              </div>

              <div className="inline-flex items-center gap-2">
                <FiLayers className="text-[#A41034]" />
                {course.level}
              </div>

              {course.lessons && (
                <div className="inline-flex items-center gap-2">
                  <FiBookOpen className="text-[#A41034]" />
                  {course.lessons} lessons
                </div>
              )}

              {course.rating && (
                <div className="inline-flex items-center gap-2">
                  <FiStar className="fill-current text-amber-400" />
                  {course.rating}

                  {course.reviewsCount
                    ? ` (${course.reviewsCount.toLocaleString()} reviews)`
                    : ""}
                </div>
              )}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#lead"
                className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
              >
                Enquire About Course
                <FiArrowRight size={16} />
              </Link>

              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <FiPlayCircle size={16} />
                View Curriculum
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10">
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                    Projects
                  </p>

                  <p className="mt-1 text-xl font-semibold">
                    {course.projectsCount || "—"}
                  </p>
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                    Mode
                  </p>

                  <p className="mt-1 text-xl font-semibold">
                    {course.mode || "Online"}
                  </p>
                </div>
              </div>
            </div>

            {course.certification && (
              <div className="absolute -bottom-5 left-5 right-5 border border-slate-200 bg-white p-4 text-slate-950 shadow-xl sm:left-auto sm:w-80">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A41034]">
                  Certification
                </p>

                <p className="mt-1 text-sm font-semibold">
                  {course.certification}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailHero;