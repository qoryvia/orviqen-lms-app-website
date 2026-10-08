"use client";

import React, { useMemo, useState } from "react";
import {
  FiStar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const studentStories = [
  {
    name: "Aman Kumar",
    role: "Full Stack Learner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The biggest difference was having a clear roadmap. I knew what to learn next instead of jumping between random tutorials.",
  },
  {
    name: "Priya Singh",
    role: "Data Analytics Learner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "The project-based approach helped me understand how SQL, dashboards and business questions connect together.",
  },
  {
    name: "Rahul Verma",
    role: "Cybersecurity Learner",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote:
      "The structured path made security concepts easier to follow and gave me a direction for practical learning.",
  },
  {
    name: "Neha Sharma",
    role: "Data Science Learner",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "Learning became much easier when Python, statistics and machine learning were taught as connected skills instead of separate topics.",
  },
  {
    name: "Arjun Mehta",
    role: "AI & Machine Learning Learner",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote:
      "The practical projects helped me understand why models work and how AI concepts are actually used in applications.",
  },
  {
    name: "Sneha Gupta",
    role: "Full Stack Learner",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    quote:
      "I used to feel overwhelmed by the number of technologies developers need to know. The learning path helped me focus on one step at a time.",
  },
  {
    name: "Vikas Yadav",
    role: "Cloud & DevOps Learner",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    quote:
      "Understanding Linux, Docker and deployment together gave me a much clearer picture of how modern applications actually run.",
  },
  {
    name: "Anjali Verma",
    role: "Data Analytics Learner",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    quote:
      "The exercises felt connected to real business problems, which made learning dashboards and data analysis much more meaningful.",
  },
  {
    name: "Rohit Singh",
    role: "Cybersecurity Learner",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "Instead of only reading about security concepts, I started thinking about how they apply to real systems and applications.",
  },
];

const REVIEWS_PER_PAGE = 4;

const StudentStories = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(studentStories.length / REVIEWS_PER_PAGE);

  const visibleStories = useMemo(() => {
    const startIndex = currentPage * REVIEWS_PER_PAGE;

    return studentStories.slice(startIndex, startIndex + REVIEWS_PER_PAGE);
  }, [currentPage]);

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="px-6 xl:px-30">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10">
          <span className="h-0.5 w-8 bg-[#A51C30]/70 sm:w-12" />

          <h2 className="text-center text-xs font-bold uppercase tracking-[0.08em] text-slate-900 sm:text-sm">
            What Our Students Say
          </h2>

          <span className="h-0.5 w-8 bg-[#A51C30]/70 sm:w-12" />
        </div>

        {/* =====================================================
            REVIEWS
        ====================================================== */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleStories.map((story) => (
            <article
              key={story.name}
              className="
                flex
                min-h-[250px]
                flex-col
                border
                border-slate-200
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-slate-300
                hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]
                sm:p-6
              "
            >
              {/* Quote + Rating */}
              <div className="flex items-start justify-between gap-4">
                <BiSolidQuoteAltLeft
                  size={28}
                  className="shrink-0 text-[#A51C30]"
                />

                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FiStar
                      key={index}
                      size={12}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="mt-5 flex-1 text-sm leading-6 text-slate-700">
                “{story.quote}”
              </p>

              {/* Student */}
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-9 w-9 shrink-0 rounded-full object-cover"
                />

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-950">
                    {story.name}
                  </p>

                  <p className="mt-0.5 truncate text-xs text-slate-500">
                    {story.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            PAGINATION
        ====================================================== */}
        {totalPages > 1 && (
          <div className="mt-7 flex items-center justify-center gap-4">
            {/* Previous */}
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous reviews"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                text-slate-500
                transition-all
                hover:border-[#A51C30]
                hover:bg-[#A51C30]
                hover:text-white
              "
            >
              <FiChevronLeft size={14} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Go to review page ${index + 1}`}
                  aria-current={currentPage === index ? "page" : undefined}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentPage === index
                        ? "w-6 bg-[#A51C30]"
                        : "w-2 bg-slate-300 hover:bg-[#A51C30]/50"
                    }
                  `}
                />
              ))}
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next reviews"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                text-slate-500
                transition-all
                hover:border-[#A51C30]
                hover:bg-[#A51C30]
                hover:text-white
              "
            >
              <FiChevronRight size={14} />
            </button>
          </div>
        )}

        {/* Page Information */}
        {totalPages > 1 && (
          <p className="mt-3 text-center text-[10px] text-slate-400">
            Page {currentPage + 1} of {totalPages}
          </p>
        )}
      </div>
    </section>
  );
};

export default StudentStories;
