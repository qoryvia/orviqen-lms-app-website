"use client";

import React from "react";
import {
  FiSearch,
  FiX,
} from "react-icons/fi";

import { instructorCategories } from "../data/instructorsData";

interface InstructorFiltersProps {
  search: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

const InstructorFilters = ({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}: InstructorFiltersProps) => {
  return (
    <div className="border border-slate-200 bg-white p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <FiSearch
            size={17}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search instructors or skills..."
            className="w-full border border-slate-200 bg-white py-3 pl-11 pr-11 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#A41034] focus:ring-1 focus:ring-[#A41034]/10"
          />

          {search && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-slate-400 transition-colors hover:text-slate-900"
            >
              <FiX size={15} />
            </button>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {instructorCategories.map((item) => {
            const active = category === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => onCategoryChange(item)}
                aria-pressed={active}
                className={`shrink-0 border px-3.5 py-2.5 text-xs font-semibold transition-colors ${
                  active
                    ? "border-[#A41034] bg-[#A41034] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InstructorFilters;