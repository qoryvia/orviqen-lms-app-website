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

const CourseDetailHero = ({ course }: CourseDetailHeroProps) => {
  const { activeDiscount, sellingPrice, savings } = getCoursePricing(
    course.pricing
  );

  const heroTitle = course.detailPage?.heroTitle || course.title;
  const heroDescription =
    course.detailPage?.heroDescription ||
    course.shortDescription ||
    course.description;

  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-black text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Black image shadow / overlay */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      {/* Stronger left-side readability */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.76)_38%,rgba(0,0,0,0.48)_72%,rgba(0,0,0,0.62)_100%)]" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="px-6 xl:px-30">
        <div className="flex min-h-[680px] items-center py-12 lg:py-16">
          <div className="w-full max-w-5xl">
            {/* Back */}
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-white"
            >
              <FiArrowLeft size={16} />
              Back to Courses
            </Link>

            {/* Category / status */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="border border-white/20 bg-black/30 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
                {course.category}
              </span>

              {course.subCategory && (
                <span className="border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/75 backdrop-blur-sm">
                  {course.subCategory}
                </span>
              )}

              {course.popular && (
                <span className="bg-[#A41034] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                  Popular
                </span>
              )}

              {activeDiscount > 0 && (
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#A41034]">
                  <FiTag size={12} />
                  {activeDiscount}% Off
                </span>
              )}
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              {heroTitle}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/72 sm:text-base lg:text-lg lg:leading-8">
              {heroDescription}
            </p>

            {/* Important course information */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <FiClock className="text-[#d16a84]" size={16} />
                {course.duration}
              </span>

              <span className="inline-flex items-center gap-2">
                <FiLayers className="text-[#d16a84]" size={16} />
                {course.level}
              </span>

              {course.lessons && (
                <span className="inline-flex items-center gap-2">
                  <FiBookOpen className="text-[#d16a84]" size={16} />
                  {course.lessons} lessons
                </span>
              )}

              {course.rating !== undefined && (
                <span className="inline-flex items-center gap-2">
                  <FiStar className="fill-amber-400 text-amber-400" size={16} />
                  <span className="text-white">
                    {course.rating.toFixed(1)}
                  </span>

                  {course.reviewsCount !== undefined && (
                    <span className="text-white/55">
                      ({course.reviewsCount.toLocaleString()} reviews)
                    </span>
                  )}
                </span>
              )}
            </div>

            {/* Pricing */}
            <div className="mt-8 flex flex-wrap items-end gap-x-4 gap-y-2">
              <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                {formatCurrency(
                  sellingPrice,
                  course.pricing.currency
                )}
              </span>

              {activeDiscount > 0 && (
                <>
                  <span className="pb-1 text-base text-white/45 line-through">
                    {formatCurrency(
                      course.pricing.fixedPrice,
                      course.pricing.currency
                    )}
                  </span>

                  <span className="pb-1 text-sm font-semibold text-emerald-400">
                    Save{" "}
                    {formatCurrency(
                      savings,
                      course.pricing.currency
                    )}
                  </span>
                </>
              )}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#lead"
                className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all hover:bg-[#8f0e2d]"
              >
                Enquire About Course
                <FiArrowRight size={16} />
              </Link>

              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
              >
                View Curriculum
                <FiArrowRight size={16} />
              </a>
            </div>

            {/* Minimal supporting information */}
            {course.certification && (
              <div className="mt-7 flex items-center gap-2 text-xs text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {course.certification}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailHero;