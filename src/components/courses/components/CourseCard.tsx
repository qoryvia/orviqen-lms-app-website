"use client";

import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiClock,
  FiStar,
  FiTag,
} from "react-icons/fi";

import type { Course } from "../data/coursesData";

type CourseCardProps = {
  course: Course;
};

const formatPrice = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
};

const CourseCard = ({ course }: CourseCardProps) => {
  const {
    fixedPrice,
    discount,
    saleDiscount,
    currency,
    sale,
    offerLabel,
  } = course.pricing;

  const activeDiscount = sale ? saleDiscount : discount;

  const sellingPrice = Math.round(
    fixedPrice * (1 - activeDiscount / 100)
  );

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block w-[84vw] shrink-0 snap-start sm:w-[360px] md:w-auto md:shrink"
    >
      <article className="flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-slate-100 sm:h-48">
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

          {/* Category */}
          <div className="absolute left-3 top-3">
            <span className="bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-900">
              {course.category}
            </span>
          </div>

          {/* Discount */}
          {activeDiscount > 0 && (
            <div className="absolute bottom-3 right-3">
              <span className="inline-flex items-center gap-1 bg-[#A41034] px-2.5 py-1 text-[10px] font-bold text-white">
                <FiTag size={11} />
                {activeDiscount}% OFF
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          {/* Title */}
          <h3 className="line-clamp-2 text-lg font-semibold leading-6 tracking-tight text-slate-950 transition-colors group-hover:text-[#A41034]">
            {course.title}
          </h3>

          {/* Short Description */}
          <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600">
            {course.shortDescription}
          </p>

          {/* Meta */}
          <div className="mt-3 flex items-center gap-3 border-y border-slate-100 py-2.5 text-[11px] text-slate-500">
            {course.rating !== undefined && (
              <span className="inline-flex items-center gap-1">
                <FiStar
                  size={12}
                  className="fill-amber-400 text-amber-400"
                />
                <span className="font-semibold text-slate-800">
                  {course.rating.toFixed(1)}
                </span>

                {course.reviewsCount !== undefined && (
                  <span>({course.reviewsCount})</span>
                )}
              </span>
            )}

            <span className="h-3 w-px bg-slate-200" />

            <span className="inline-flex items-center gap-1">
              <FiClock size={12} className="text-[#A41034]" />
              {course.duration}
            </span>
          </div>

          {/* Pricing */}
          <div className="mt-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-950">
                {formatPrice(sellingPrice, currency)}
              </span>

              {activeDiscount > 0 && (
                <span className="text-xs font-medium text-slate-400 line-through">
                  {formatPrice(fixedPrice, currency)}
                </span>
              )}
            </div>

            {sale && offerLabel && (
              <p className="mt-0.5 text-[10px] font-medium text-[#A41034]">
                {offerLabel}
              </p>
            )}
          </div>

          {/* CTA */}
          <div className="mt-3">
            <div className="flex items-center justify-between border border-slate-200 px-3.5 py-2.5 text-slate-900 transition-all duration-300 group-hover:border-[#A41034] group-hover:bg-[#A41034] group-hover:text-white">
              <span className="text-xs font-semibold">
                Explore Course
              </span>

              <FiArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CourseCard;