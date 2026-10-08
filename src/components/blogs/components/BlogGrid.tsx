"use client";

import React, { useMemo, useState } from "react";
import {
  FiBookOpen,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
} from "react-icons/fi";

import { blogs } from "../data/blogsData";

import BlogSearch from "./BlogSearch";
import BlogCard from "./BlogCard";

const BLOGS_PER_PAGE = 8;

const BlogGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBlogs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;

      const searchableText = [
        blog.title,
        blog.excerpt,
        blog.category,
        blog.author,
        blog.authorRole,
        ...blog.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        query.length === 0 || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);

  const safeCurrentPage =
    totalPages > 0 ? Math.min(currentPage, totalPages) : 1;

  const visibleBlogs = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * BLOGS_PER_PAGE;

    return filteredBlogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);
  }, [filteredBlogs, safeCurrentPage]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setCurrentPage(1);
  };

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    document.getElementById("latest")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="latest" className="bg-slate-50">
      <BlogSearch
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        onClear={clearFilters}
      />

      <div className="px-6 py-14 xl:px-30 lg:py-20">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              Latest Articles
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Explore the latest ideas.
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            {filteredBlogs.length}{" "}
            {filteredBlogs.length === 1 ? "article" : "articles"}
          </p>
        </div>

        {/* Blog Results */}
        {visibleBlogs.length > 0 ? (
          <>
            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  Showing{" "}
                  <span className="font-semibold text-slate-700">
                    {(safeCurrentPage - 1) * BLOGS_PER_PAGE + 1}
                  </span>{" "}
                  –{" "}
                  <span className="font-semibold text-slate-700">
                    {Math.min(
                      safeCurrentPage * BLOGS_PER_PAGE,
                      filteredBlogs.length,
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-slate-700">
                    {filteredBlogs.length}
                  </span>
                </p>

                <div className="flex items-center gap-1.5">
                  {/* Previous */}
                  <button
                    type="button"
                    onClick={() => changePage(safeCurrentPage - 1)}
                    disabled={safeCurrentPage === 1}
                    aria-label="Previous page"
                    className="inline-flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <FiChevronLeft size={16} />
                  </button>

                  {/* Page Numbers */}
                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1,
                  ).map((page) => {
                    const active = page === safeCurrentPage;

                    return (
                      <button
                        key={page}
                        type="button"
                        onClick={() => changePage(page)}
                        aria-label={`Go to page ${page}`}
                        aria-current={active ? "page" : undefined}
                        className={`inline-flex h-9 min-w-9 items-center justify-center border px-3 text-xs font-semibold transition-colors ${
                          active
                            ? "border-[#A41034] bg-[#A41034] text-white"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  {/* Next */}
                  <button
                    type="button"
                    onClick={() => changePage(safeCurrentPage + 1)}
                    disabled={safeCurrentPage === totalPages}
                    aria-label="Next page"
                    className="inline-flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <FiChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="mt-7 border border-slate-200 bg-white px-6 py-16 text-center">
            <FiSearch size={26} className="mx-auto text-slate-300" />

            <h3 className="mt-4 text-xl font-semibold text-slate-950">
              No articles found.
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Try another keyword or select a different category to discover
              more articles.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 text-sm font-semibold text-[#A41034]"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Footer information */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
            <FiBookOpen size={14} />
            Eklavya Journal
          </div>

          <p className="text-xs text-slate-400">
            New perspectives, practical guides and ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
