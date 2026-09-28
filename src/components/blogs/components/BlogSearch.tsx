"use client";

import React from "react";
import {
  FiSearch,
  FiSliders,
  FiX,
} from "react-icons/fi";

import { blogCategories } from "../data/blogsData";

interface BlogSearchProps {
  searchQuery: string;
  selectedCategory: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onClear: () => void;
}

const BlogSearch = ({
  searchQuery,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
  onClear,
}: BlogSearchProps) => {
  const hasFilters =
    searchQuery || selectedCategory !== "All";

  return (
    <div className="border-y border-slate-200 bg-white py-7">
      <div className="px-6 xl:px-30">
        <div className="space-y-5">
          {/* Search */}
          <div className="relative w-full">
            <FiSearch
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) =>
                onSearchChange(event.target.value)
              }
              placeholder="Search articles, topics or technologies..."
              className="w-full border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-11 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#A41034] focus:bg-white"
            />

            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
              className={`absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-opacity hover:text-slate-700 ${
                searchQuery
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <FiX size={17} />
            </button>
          </div>

          {/* Categories */}
          <div className="flex items-center gap-3">
            <FiSliders
              size={15}
              className="shrink-0 text-slate-400"
            />

            <div className="min-w-0 flex-1 overflow-hidden">
              <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {blogCategories.map((category) => {
                  const active =
                    selectedCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() =>
                        onCategoryChange(category)
                      }
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

            {/* Reserved Clear Button Space */}
            <div className="flex w-[72px] shrink-0 justify-end">
              <button
                type="button"
                onClick={onClear}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold text-[#A41034] transition-opacity ${
                  hasFilters
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <FiX size={14} />
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;