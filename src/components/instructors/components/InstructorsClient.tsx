"use client";

import React, { useMemo, useState } from "react";

import InstructorCard from "./InstructorCard";
import InstructorFilters from "./InstructorFilters";
import InstructorsCTA from "./InstructorsCTA";
import InstructorsHero from "./InstructorsHero";
import InstructorsTeachingApproach from "./InstructorsTeachingApproach";

import {
  instructors,
} from "../data/instructorsData";

const InstructorsClient = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredInstructors = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return instructors.filter((instructor) => {
      const matchesCategory =
        category === "All" ||
        instructor.expertise.includes(category);

      if (!normalizedSearch) {
        return matchesCategory;
      }

      const searchableText = [
        instructor.name,
        instructor.role,
        instructor.shortRole,
        instructor.location,
        instructor.bio,
        ...instructor.expertise,
        ...instructor.skills,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        searchableText.includes(normalizedSearch)
      );
    });
  }, [category, search]);

  const featuredInstructor =
    instructors.find((instructor) => instructor.featured) ||
    instructors[0];

  return (
    <>
      <InstructorsHero />

      {/* Featured instructor */}
      <section className="bg-white">
        <div className="px-6 py-12 xl:px-30 sm:py-14 lg:py-16">
          <div className="border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
              {/* Profile */}
              <div className="bg-slate-950 p-6 text-white sm:p-8 lg:p-10">
                <div className="flex h-20 w-20 items-center justify-center bg-[#A41034] text-2xl font-semibold">
                  {featuredInstructor.initials}
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-[#d16a84]">
                  Featured Instructor
                </p>

                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                  {featuredInstructor.name}
                </h2>

                <p className="mt-2 text-sm text-slate-300">
                  {featuredInstructor.role}
                </p>

                <div className="mt-7 grid grid-cols-3 border border-white/10">
                  <div className="px-3 py-4">
                    <p className="text-lg font-semibold">
                      {featuredInstructor.experience}
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-slate-500">
                      Experience
                    </p>
                  </div>

                  <div className="border-x border-white/10 px-3 py-4">
                    <p className="text-lg font-semibold">
                      {featuredInstructor.students}
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-slate-500">
                      Learners
                    </p>
                  </div>

                  <div className="px-3 py-4">
                    <p className="text-lg font-semibold">
                      {featuredInstructor.rating.toFixed(1)}
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-slate-500">
                      Rating
                    </p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
                  Teaching Focus
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Practical learning with a strong technical foundation.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                  {featuredInstructor.bio}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {featuredInstructor.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-7 border-t border-slate-200 pt-5">
                  <p className="text-xs text-slate-400">
                    Teaching focus
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-950">
                    {featuredInstructor.expertise.join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All instructors */}
      <section
        id="instructors"
        className="scroll-mt-24 border-t border-slate-200 bg-slate-50"
      >
        <div className="px-6 py-12 xl:px-30 sm:py-14 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              Instructor Directory
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Find the right instructor for your learning path.
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Search by instructor, skill or location, or filter by the area
              you want to learn.
            </p>
          </div>

          <div className="mt-7">
            <InstructorFilters
              search={search}
              category={category}
              onSearchChange={setSearch}
              onCategoryChange={setCategory}
            />
          </div>

          <div className="mt-6">
            {filteredInstructors.length > 0 ? (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-medium text-slate-500">
                    {filteredInstructors.length} instructor
                    {filteredInstructors.length !== 1 ? "s" : ""}
                  </p>

                  {search || category !== "All" ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSearch("");
                        setCategory("All");
                      }}
                      className="text-xs font-semibold text-[#A41034] hover:text-[#8f0e2d]"
                    >
                      Clear filters
                    </button>
                  ) : null}
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {filteredInstructors.map((instructor) => (
                    <InstructorCard
                      key={instructor.id}
                      instructor={instructor}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="border border-slate-200 bg-white px-6 py-14 text-center">
                <h3 className="text-lg font-semibold text-slate-950">
                  No instructors found.
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try another search term or select a different area.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                  }}
                  className="mt-5 bg-[#A41034] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
                >
                  Show All Instructors
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <InstructorsTeachingApproach />

      <InstructorsCTA />
    </>
  );
};

export default InstructorsClient;