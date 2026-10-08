"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiBookOpen,
  FiClock,
  FiPlay,
  FiStar,
  FiTag,
  FiUsers,
} from "react-icons/fi";

import { courses } from "@/components/courses/data/coursesData";
import { formatCurrency, getCoursePricing } from "@/utils/coursePricing";

const FeaturedPrograms = () => {
  // Desktop: 10 courses
  // Mobile: first 5 courses are visible
  const featuredCourses = courses
    .filter((course) => course.featured === true)
    .slice(0, 10);

  return (
    <section id="programs" className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="px-6 xl:px-30">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-[0.04em] text-slate-900 sm:text-base">
            Popular Courses
          </h2>

          <Link
            href="/courses"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#A51C30] transition-colors hover:text-[#8E1829] sm:text-sm"
          >
            View All Courses
            <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* =====================================================
            COURSE GRID
        ====================================================== */}
        {featuredCourses.length > 0 ? (
          <div
            className="
              grid grid-cols-2 gap-3

              sm:gap-5

              lg:grid-cols-5
            "
          >
            {featuredCourses.map((program, index) => {
              const { activeDiscount, sellingPrice } = getCoursePricing(
                program.pricing,
              );

              const hasOffer =
                program.pricing.sale === true &&
                Boolean(program.pricing.offerLabel);

              return (
                <Link
                  key={program.id}
                  href={`/courses/${program.slug}`}
                  className={`
                    group
                    ${index >= 5 ? "hidden lg:block" : "block"}
                  `}
                >
                  <article
                    className="
                      flex h-full flex-col overflow-hidden
                      border border-slate-200
                      bg-white
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-slate-300
                      hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]
                    "
                  >
                    {/* =================================================
                        IMAGE
                    ================================================== */}
                    <div
                      className="
                        relative h-[125px]
                        overflow-hidden
                        bg-slate-100
                        sm:h-[180px]
                      "
                    >
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        sizes="
                          (max-width: 640px) 50vw,
                          (max-width: 1024px) 50vw,
                          20vw
                        "
                        className="
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />

                      {/* Real Offer Label */}
                      {hasOffer && (
                        <div className="absolute left-2 top-2 sm:left-3 sm:top-3">
                          <span
                            className="
                              inline-flex
                              max-w-[calc(100vw/3)]
                              items-center
                              gap-1
                              bg-[#A51C30]
                              px-2 py-1
                              text-[7px]
                              font-bold
                              uppercase
                              leading-3
                              tracking-wide
                              text-white
                              shadow-sm
                              sm:px-2.5
                              sm:text-[9px]
                            "
                          >
                            <FiTag size={8} className="shrink-0" />

                            <span className="truncate">
                              {program.pricing.offerLabel}
                            </span>
                          </span>
                        </div>
                      )}

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="
                            flex
                            h-8 w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-[#A51C30]
                            shadow-[0_4px_15px_rgba(0,0,0,0.18)]
                            transition-all
                            duration-300
                            group-hover:scale-110
                            sm:h-10
                            sm:w-10
                          "
                        >
                          <FiPlay
                            size={13}
                            className="ml-0.5 fill-[#A51C30] sm:size-[15px]"
                          />
                        </span>
                      </div>

                      {/* Discount */}
                      {activeDiscount > 0 && (
                        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3">
                          <span
                            className="
                              inline-flex
                              items-center
                              gap-1
                              bg-white
                              px-1.5 py-1
                              text-[7px]
                              font-bold
                              text-[#A51C30]
                              shadow-sm
                              sm:px-2
                              sm:text-[9px]
                            "
                          >
                            <FiTag size={8} />
                            {activeDiscount}%
                          </span>
                        </div>
                      )}
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================== */}
                    <div className="flex flex-1 flex-col p-3 sm:p-4">
                      {/* Category */}
                      <div className="mb-1.5 flex items-center gap-1.5 sm:mb-2">
                        <FiBookOpen
                          size={10}
                          className="shrink-0 text-[#A51C30]"
                        />

                        <span
                          className="
                            truncate
                            text-[7px]
                            font-semibold
                            uppercase
                            tracking-[0.08em]
                            text-slate-400
                            sm:text-[9px]
                          "
                        >
                          {program.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="
                          line-clamp-2
                          min-h-[36px]
                          text-[11px]
                          font-semibold
                          leading-4
                          text-slate-900
                          transition-colors
                          group-hover:text-[#A51C30]

                          sm:min-h-[42px]
                          sm:text-sm
                          sm:leading-5
                        "
                      >
                        {program.title}
                      </h3>

                      {/* Level */}
                      {program.level && (
                        <div className="mt-2 flex items-center gap-1.5 sm:mt-3 sm:gap-2">
                          <div
                            className="
                              flex
                              h-5 w-5
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#A51C30]/10
                              text-[#A51C30]
                              sm:h-6
                              sm:w-6
                            "
                          >
                            <FiUsers size={9} className="sm:size-[11px]" />
                          </div>

                          <span
                            className="
                              truncate
                              text-[8px]
                              font-medium
                              text-slate-500
                              sm:text-[10px]
                            "
                          >
                            {program.level}
                          </span>
                        </div>
                      )}

                      {/* Rating + Duration */}
                      <div
                        className="
                          mt-2
                          flex
                          flex-wrap
                          items-center
                          gap-1.5
                          sm:mt-3
                          sm:gap-2.5
                        "
                      >
                        {/* Rating */}
                        {program.rating !== undefined && (
                          <div className="inline-flex items-center gap-1">
                            <FiStar
                              size={10}
                              className="fill-amber-400 text-amber-400 sm:size-[12px]"
                            />

                            <span
                              className="
                                text-[9px]
                                font-semibold
                                text-slate-800
                                sm:text-[11px]
                              "
                            >
                              {program.rating.toFixed(1)}
                            </span>

                            {program.reviewsCount !== undefined && (
                              <span
                                className="
                                  text-[8px]
                                  text-slate-400
                                  sm:text-[10px]
                                "
                              >
                                ({program.reviewsCount.toLocaleString()})
                              </span>
                            )}
                          </div>
                        )}

                        {/* Divider */}
                        {program.rating !== undefined && program.duration && (
                          <span className="h-3 w-px bg-slate-200" />
                        )}

                        {/* Duration */}
                        {program.duration && (
                          <div className="inline-flex items-center gap-1">
                            <FiClock
                              size={10}
                              className="text-slate-400 sm:size-[11px]"
                            />

                            <span
                              className="
                                text-[8px]
                                text-slate-500
                                sm:text-[10px]
                              "
                            >
                              {program.duration}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* =================================================
                          PRICING
                      ================================================== */}
                      <div className="mt-auto pt-3 sm:pt-4">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          {/* Selling Price */}
                          <span className="text-sm font-bold text-[#A51C30] sm:text-base">
                            {formatCurrency(
                              sellingPrice,
                              program.pricing.currency,
                            )}
                          </span>

                          {/* Original Price */}
                          {activeDiscount > 0 && (
                            <span
                              className="
                                text-[8px]
                                font-medium
                                text-slate-400
                                line-through
                                sm:text-[10px]
                              "
                            >
                              {formatCurrency(
                                program.pricing.fixedPrice,
                                program.pricing.currency,
                              )}
                            </span>
                          )}
                        </div>

                        {/* Real Offer Label */}
                        {hasOffer && (
                          <p
                            className="
                              mt-1
                              line-clamp-1
                              text-[8px]
                              font-medium
                              text-slate-400
                              sm:text-[9px]
                            "
                          >
                            {program.pricing.offerLabel}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="border border-slate-200 bg-white px-6 py-12 text-center">
            <p className="text-sm font-medium text-slate-600">
              No featured courses available.
            </p>
          </div>
        )}

        {/* =====================================================
            MOBILE HINT
        ====================================================== */}
        {featuredCourses.length > 5 && (
          <p className="mt-3 text-center text-[10px] text-slate-400 sm:hidden">
            Showing 5 popular courses →
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedPrograms;
