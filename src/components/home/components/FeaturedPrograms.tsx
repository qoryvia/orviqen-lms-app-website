"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiLayers,
  FiStar,
  FiTag,
} from "react-icons/fi";

import { courses } from "@/components/courses/data/coursesData";
import {
  formatCurrency,
  getCoursePricing,
} from "@/utils/coursePricing";

const FeaturedPrograms = () => {
  // Only the first 8 featured courses
  const featuredCourses = courses
    .filter((course) => course.featured === true)
    .slice(0, 8);

  return (
    <section
      id="programs"
      className="bg-[#f7f6f3] py-14 sm:py-16 lg:py-20"
    >
      <div className="px-6 xl:px-30">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="flex flex-col gap-6 border-b border-slate-200 pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 border border-[#A51C30]/15 bg-[#A51C30]/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A51C30] sm:text-[11px]">
              <FiBookOpen size={13} />
              Featured Programs
            </div>

            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Build skills for the work you want to do.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Practical learning paths focused on relevant technologies,
              hands-on projects and the skills students need to move forward.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <FiLayers
              size={15}
              className="text-[#A51C30]"
            />

            <span>
              {featuredCourses.length} featured learning paths
            </span>
          </div>
        </div>

        {/* =====================================================
            FEATURED PROGRAMS
        ====================================================== */}
        {featuredCourses.length > 0 ? (
          <div
            className="
              mt-7 grid gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {featuredCourses.map((program, index) => {
              const {
                activeDiscount,
                sellingPrice,
              } = getCoursePricing(program.pricing);

              return (
                <Link
                  key={program.id}
                  href={`/courses/${program.slug}`}
                  className="group block h-full"
                >
                  <article className="flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                    {/* =================================================
                        IMAGE
                    ================================================== */}
                    <div className="relative h-48 overflow-hidden bg-slate-100 sm:h-52">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 50vw,
                          (max-width: 1280px) 33vw,
                          25vw
                        "
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />

                      {/* Program Number */}
                      <div className="absolute left-4 bottom-3">
                        <span className="text-[10px] font-semibold tracking-[0.18em] text-white/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Category */}
                      <div className="absolute left-4 top-4">
                        <span className="bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-900 shadow-sm">
                          {program.category}
                        </span>
                      </div>

                      {/* Discount */}
                      {activeDiscount > 0 && (
                        <div className="absolute right-4 top-4">
                          <span className="inline-flex items-center gap-1 bg-[#A51C30] px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                            <FiTag size={10} />
                            {activeDiscount}% OFF
                          </span>
                        </div>
                      )}
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================== */}
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      {/* Title */}
                      <div className="flex items-start gap-3">
                        <h3 className="line-clamp-2 min-h-[48px] flex-1 text-lg font-semibold leading-6 tracking-tight text-slate-950 transition-colors group-hover:text-[#A51C30]">
                          {program.title}
                        </h3>

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-[#A51C30] group-hover:bg-[#A51C30] group-hover:text-white">
                          <FiArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>

                      {/* Short Description */}
                      <p className="mt-2.5 line-clamp-2 text-xs leading-5 text-slate-600">
                        {program.shortDescription ||
                          program.description}
                      </p>

                      {/* Rating + Duration */}
                      <div className="mt-3 flex items-center gap-3 border-y border-slate-100 py-2.5 text-[10px] text-slate-500">
                        {program.rating !== undefined && (
                          <>
                            <span className="inline-flex items-center gap-1">
                              <FiStar
                                size={12}
                                className="fill-amber-400 text-amber-400"
                              />

                              <span className="font-semibold text-slate-800">
                                {program.rating.toFixed(1)}
                              </span>

                              {program.reviewsCount !==
                                undefined && (
                                <span className="text-slate-400">
                                  (
                                  {program.reviewsCount.toLocaleString()}
                                  )
                                </span>
                              )}
                            </span>

                            <span className="h-3 w-px bg-slate-200" />
                          </>
                        )}

                        <span className="inline-flex items-center gap-1.5">
                          <FiClock
                            size={12}
                            className="text-[#A51C30]"
                          />
                          {program.duration}
                        </span>
                      </div>

                      {/* =================================================
                          PRICING
                      ================================================== */}
                      <div className="mt-4">
                        <div className="flex items-end gap-2">
                          <span className="text-xl font-bold tracking-tight text-slate-950">
                            {formatCurrency(
                              sellingPrice,
                              program.pricing.currency
                            )}
                          </span>

                          {activeDiscount > 0 && (
                            <span className="pb-0.5 text-xs font-medium text-slate-400 line-through">
                              {formatCurrency(
                                program.pricing.fixedPrice,
                                program.pricing.currency
                              )}
                            </span>
                          )}
                        </div>

                        {program.pricing.sale &&
                          program.pricing.offerLabel && (
                            <p className="mt-1 text-[10px] font-medium text-[#A51C30]">
                              {program.pricing.offerLabel}
                            </p>
                          )}
                      </div>

                      {/* =================================================
                          SKILLS
                      ================================================== */}
                      {program.skills.length > 0 && (
                        <div className="mt-4">
                          <div className="flex flex-wrap gap-1.5">
                            {program.skills
                              .slice(0, 3)
                              .map((skill) => (
                                <span
                                  key={skill}
                                  className="border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600"
                                >
                                  {skill}
                                </span>
                              ))}

                            {program.skills.length > 3 && (
                              <span className="px-1 py-1 text-[10px] font-medium text-slate-400">
                                +{program.skills.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* =================================================
                          CTA
                      ================================================== */}
                      <div className="mt-auto pt-4">
                        <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                          <span className="text-xs font-semibold text-slate-900 transition-colors group-hover:text-[#A51C30]">
                            Explore Program
                          </span>

                          <span className="text-[10px] font-medium text-slate-400 transition-colors group-hover:text-[#A51C30]">
                            View Details
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-7 border border-slate-200 bg-white px-6 py-12 text-center">
            <p className="text-sm font-medium text-slate-600">
              Featured programs will appear here.
            </p>
          </div>
        )}

        {/* =====================================================
            MOBILE HINT
        ====================================================== */}
        <div className="mt-4 text-xs text-slate-400 sm:hidden">
          Explore our featured learning paths.
        </div>

        {/* =====================================================
            BOTTOM GUIDANCE CTA
        ====================================================== */}
        <div className="mt-8 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <FiCheckCircle
                  size={16}
                  className="text-[#A51C30]"
                />
                Need help choosing a program?
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Tell us your goals and we&apos;ll help you find a
                suitable learning path.
              </p>
            </div>

            <a
              href="#lead"
              className="inline-flex items-center justify-center gap-2 bg-[#A51C30] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#8E1829]"
            >
              Get Program Guidance
              <FiArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;