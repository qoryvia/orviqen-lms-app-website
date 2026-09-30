import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiClock,
  FiTag,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

import {
  formatCurrency,
  getCoursePricing,
} from "@/utils/coursePricing";

interface RelatedCoursesProps {
  courses: Course[];
}

const RelatedCourses = ({
  courses,
}: RelatedCoursesProps) => {
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="px-6 py-12 xl:px-30 lg:py-14">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              Continue Learning
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              You may also like
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

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map((course) => {
            const {
              activeDiscount,
              sellingPrice,
            } = getCoursePricing(course.pricing);

            return (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="group overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {activeDiscount > 0 && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 bg-[#A41034] px-2.5 py-1 text-[10px] font-bold text-white">
                      <FiTag size={10} />
                      {activeDiscount}% OFF
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#A41034]">
                    {course.category}
                  </p>

                  <h3 className="mt-1.5 line-clamp-2 text-base font-semibold tracking-tight text-slate-950">
                    {course.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                    {course.shortDescription ||
                      course.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <div>
                      <p className="text-lg font-bold text-slate-950">
                        {formatCurrency(
                          sellingPrice,
                          course.pricing.currency
                        )}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#A41034]">
                      Explore
                      <FiArrowRight size={12} />
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-1.5 text-[10px] text-slate-400">
                    <FiClock size={12} />
                    {course.duration}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedCourses;