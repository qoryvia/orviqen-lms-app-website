"use client";

import React, { useMemo, useState } from "react";
import {
  FiBookOpen,
  FiSearch,
  FiSliders,
  FiX,
} from "react-icons/fi";

import CourseCard from "./CourseCard";
import {
  courseCategories,
  courses,
} from "../data/coursesData";

const CourseSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory =
        selectedCategory === "All" ||
        course.category === selectedCategory;

      const searchableText = [
        course.title,
        course.category,
        course.level,
        course.description,
        ...course.skills,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        query.length === 0 || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <section
      id="courses"
      className="bg-slate-50 py-12 sm:py-14 lg:py-16"
    >
      <div className="px-6 xl:px-30">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            <FiBookOpen />
            Course Library
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Search courses by your interest.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Search by course name, technology, skill or category to find a
            learning path that fits your goals.
          </p>
        </div>

        {/* Search */}
        <div className="mt-7">
          <div className="relative">
            <FiSearch
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search courses, skills or technologies..."
              className="w-full border border-slate-200 bg-white py-3.5 pl-11 pr-11 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#A41034]"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <FiX size={17} />
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="mt-5">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
            <FiSliders size={13} />
            Categories
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {courseCategories.map((category) => {
              const active = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 border px-4 py-2 text-xs font-semibold transition-colors ${
                    active
                      ? "border-[#A41034] bg-[#A41034] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Header */}
        <div className="mt-7 flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-slate-700">
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course" : "courses"} found
          </p>

          {(searchQuery || selectedCategory !== "All") && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#A41034]"
            >
              <FiX size={14} />
              Clear filters
            </button>
          )}
        </div>

        {/* Courses */}
        {filteredCourses.length > 0 ? (
          <div className="mt-6 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 md:snap-none xl:grid-cols-4">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="mt-6 border border-slate-200 bg-white px-6 py-12 text-center">
            <FiSearch
              size={24}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-4 text-lg font-semibold text-slate-950">
              No courses found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another keyword or choose a different category.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 text-sm font-semibold text-[#A41034]"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Mobile Hint */}
        {filteredCourses.length > 0 && (
          <p className="mt-3 text-xs text-slate-400 md:hidden">
            Swipe to explore courses →
          </p>
        )}
      </div>
    </section>
  );
};

export default CourseSearch;