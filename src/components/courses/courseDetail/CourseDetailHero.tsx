import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBookOpen,
  FiClock,
  FiLayers,
  FiStar,
  FiTag,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";
import {
  formatCurrency,
  getCoursePricing,
} from "@/utils/coursePricing";

interface CourseDetailHeroProps {
  course: Course;
}

const CourseDetailHero = ({
  course,
}: CourseDetailHeroProps) => {
  const {
    activeDiscount,
    sellingPrice,
    savings,
  } = getCoursePricing(course.pricing);

  return (
    <section className="border-b border-slate-800 bg-slate-950 text-white">
      <div className="px-6 xl:px-30">
        <div className="grid gap-10 py-10 lg:min-h-[580px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-16">
          {/* Left */}
          <div className="max-w-3xl">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 transition-colors hover:text-white"
            >
              <FiArrowLeft size={14} />
              Back to Courses
            </Link>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-slate-200">
                {course.category}
              </span>

              {course.subCategory && (
                <span className="border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-slate-400">
                  {course.subCategory}
                </span>
              )}

              {course.popular && (
                <span className="bg-[#A41034] px-3 py-1.5 text-[11px] font-semibold text-white">
                  Popular Course
                </span>
              )}
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {course.detailPage?.heroTitle ||
                course.title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:text-lg">
              {course.detailPage?.heroDescription ||
                course.shortDescription ||
                course.description}
            </p>

            {/* Meta */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-300 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <FiClock className="text-[#d16a84]" />
                {course.duration}
              </span>

              <span className="inline-flex items-center gap-2">
                <FiLayers className="text-[#d16a84]" />
                {course.level}
              </span>

              {course.lessons && (
                <span className="inline-flex items-center gap-2">
                  <FiBookOpen className="text-[#d16a84]" />
                  {course.lessons} lessons
                </span>
              )}

              {course.rating !== undefined && (
                <span className="inline-flex items-center gap-2">
                  <FiStar className="fill-amber-400 text-amber-400" />
                  {course.rating.toFixed(1)}

                  {course.reviewsCount !== undefined && (
                    <span>
                      ({course.reviewsCount.toLocaleString()})
                    </span>
                  )}
                </span>
              )}
            </div>

            {/* Mobile Pricing */}
            <div className="mt-8 border border-white/10 bg-white/5 p-5 lg:hidden">
              <div className="flex flex-wrap items-end gap-3">
                <span className="text-3xl font-bold">
                  {formatCurrency(
                    sellingPrice,
                    course.pricing.currency
                  )}
                </span>

                {activeDiscount > 0 && (
                  <span className="pb-1 text-sm text-slate-500 line-through">
                    {formatCurrency(
                      course.pricing.fixedPrice,
                      course.pricing.currency
                    )}
                  </span>
                )}
              </div>

              {activeDiscount > 0 && (
                <p className="mt-1 text-xs font-semibold text-emerald-400">
                  Save{" "}
                  {formatCurrency(
                    savings,
                    course.pricing.currency
                  )}
                </p>
              )}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#lead"
                className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
              >
                Enquire About Course
                <FiArrowRight size={16} />
              </Link>

              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Curriculum
                <FiArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="overflow-hidden border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3]">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {activeDiscount > 0 && (
                  <div className="absolute right-4 top-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#A41034] px-3 py-1.5 text-xs font-bold">
                      <FiTag size={12} />
                      {activeDiscount}% OFF
                    </span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">
                    Lessons
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    {course.lessons || "—"}
                  </p>
                </div>

                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">
                    Projects
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    {course.projectsCount || "—"}
                  </p>
                </div>

                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">
                    Mode
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    {course.mode || "Online"}
                  </p>
                </div>
              </div>
            </div>

            {course.certification && (
              <div className="mt-4 border border-white/10 bg-white p-4 text-slate-950">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#A41034]">
                  Certificate Included
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