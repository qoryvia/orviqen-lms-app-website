import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

import {
  formatCurrency,
  getCoursePricing,
} from "@/utils/coursePricing";

interface CourseCTAProps {
  course: Course;
}

const CourseCTA = ({
  course,
}: CourseCTAProps) => {
  const {
    activeDiscount,
    sellingPrice,
  } = getCoursePricing(course.pricing);

  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="px-6 py-12 xl:px-30 lg:py-16">
        <div className="border border-slate-200 bg-slate-50 px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
                Start Learning
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Ready to learn{" "}
                {course.shortTitle || course.title}?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Take the next step with a structured curriculum,
                practical projects and a focused learning path.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {[
                  "Structured curriculum",
                  "Practical projects",
                  course.certification
                    ? "Certificate"
                    : "Skill-focused learning",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-600"
                  >
                    <FiCheck
                      size={13}
                      className="text-[#A41034]"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="min-w-[240px]">
              <div className="border border-slate-200 bg-white p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Current Course Fee
                </p>

                <p className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                  {formatCurrency(
                    sellingPrice,
                    course.pricing.currency
                  )}
                </p>

                {activeDiscount > 0 && (
                  <p className="mt-1 text-[10px] font-semibold text-emerald-600">
                    {activeDiscount}% discount applied
                  </p>
                )}
              </div>

              <Link
                href="/#lead"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
              >
                Enquire Now
                <FiArrowRight size={15} />
              </Link>

              <Link
                href="/courses"
                className="mt-2 inline-flex w-full items-center justify-center border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-slate-700 transition-colors hover:text-slate-950"
              >
                Explore Other Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCTA;