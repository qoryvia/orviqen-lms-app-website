import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiCheck,
  FiClock,
  FiLayers,
  FiTag,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";
import {
  formatCurrency,
  getCoursePricing,
} from "@/utils/coursePricing";

interface CourseEnrollmentCardProps {
  course: Course;
}

const CourseEnrollmentCard = ({
  course,
}: CourseEnrollmentCardProps) => {
  const {
    activeDiscount,
    sellingPrice,
    savings,
  } = getCoursePricing(course.pricing);

  const facts = [
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
      label: "Lessons",
      value: course.lessons
        ? `${course.lessons}`
        : "—",
      icon: FiBookOpen,
    },
    {
      label: "Projects",
      value: course.projectsCount
        ? `${course.projectsCount}`
        : "—",
      icon: FiCheck,
    },
  ];

  return (
    <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
      {/* Price */}
      <div className="border-b border-slate-200 p-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Course Fee
          </span>

          {activeDiscount > 0 && (
            <span className="inline-flex items-center gap-1 bg-[#A41034]/5 px-2.5 py-1 text-[10px] font-bold text-[#A41034]">
              <FiTag size={11} />
              {activeDiscount}% OFF
            </span>
          )}
        </div>

        <div className="mt-3 flex items-end gap-3">
          <span className="text-3xl font-bold tracking-tight text-slate-950">
            {formatCurrency(
              sellingPrice,
              course.pricing.currency
            )}
          </span>

          {activeDiscount > 0 && (
            <span className="pb-1 text-sm text-slate-400 line-through">
              {formatCurrency(
                course.pricing.fixedPrice,
                course.pricing.currency
              )}
            </span>
          )}
        </div>

        {activeDiscount > 0 && (
          <p className="mt-1 text-xs font-semibold text-emerald-600">
            You save{" "}
            {formatCurrency(
              savings,
              course.pricing.currency
            )}
          </p>
        )}

        {course.pricing.sale &&
          course.pricing.offerLabel && (
            <p className="mt-3 text-xs font-medium text-[#A41034]">
              {course.pricing.offerLabel}
            </p>
          )}
      </div>

      {/* CTA */}
      <div className="border-b border-slate-200 p-6">
        <Link
          href="/#lead"
          className="flex w-full items-center justify-center gap-2 bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
        >
          Enquire About Course
          <FiArrowRight size={16} />
        </Link>

        <p className="mt-3 text-center text-[11px] text-slate-400">
          Talk to our team about batches, fees and enrollment.
        </p>
      </div>

      {/* Facts */}
      <div className="divide-y divide-slate-100">
        {facts.map((fact) => {
          const Icon = fact.icon;

          return (
            <div
              key={fact.label}
              className="flex items-center gap-3 px-6 py-3.5"
            >
              <Icon
                size={15}
                className="shrink-0 text-[#A41034]"
              />

              <span className="text-sm text-slate-500">
                {fact.label}
              </span>

              <span className="ml-auto text-right text-xs font-semibold text-slate-900">
                {fact.value}
              </span>
            </div>
          );
        })}
      </div>

      {/* Included */}
      <div className="border-t border-slate-200 bg-slate-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
          Course Includes
        </p>

        <div className="mt-4 space-y-3">
          {[
            "Structured curriculum",
            "Practical projects",
            "Industry-relevant skills",
            course.certification
              ? "Certificate of completion"
              : null,
          ]
            .filter(Boolean)
            .map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5"
              >
                <FiCheck
                  size={14}
                  className="shrink-0 text-[#A41034]"
                />

                <span className="text-xs text-slate-600">
                  {item}
                </span>
              </div>
            ))}
        </div>

        {course.certification && (
          <div className="mt-5 flex items-start gap-3 border border-[#A41034]/10 bg-white p-3.5">
            <FiAward
              size={17}
              className="mt-0.5 shrink-0 text-[#A41034]"
            />

            <div>
              <p className="text-xs font-semibold text-slate-900">
                Certification
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-500">
                {course.certification}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseEnrollmentCard;