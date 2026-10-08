"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { blogs } from "@/components/blogs/data/blogsData";

const LatestBlogs = () => {
  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="px-6 xl:px-30">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-[0.04em] text-slate-900 sm:text-base">
            Latest From Our Blog
          </h2>

          <Link
            href="/blogs"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#A51C30] transition-colors hover:text-[#8E1829] sm:text-sm"
          >
            View All Articles
            <FiArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* =====================================================
            BLOG CARDS
        ====================================================== */}
        {latestBlogs.length > 0 ? (
          <div
            className="
              flex gap-4 overflow-x-auto pb-3
              snap-x snap-mandatory
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              sm:grid
              sm:grid-cols-2
              sm:gap-5
              sm:overflow-visible
              sm:pb-0
              sm:snap-none

              lg:grid-cols-4
            "
          >
            {latestBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="
                  group
                  w-[285px]
                  shrink-0
                  snap-start
                  sm:w-auto
                "
              >
                <article
                  className="
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    border
                    border-slate-200
                    bg-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-slate-300
                    hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]
                  "
                >
                  {/* =================================================
                      IMAGE
                  ================================================== */}
                  <div className="relative h-[165px] overflow-hidden bg-slate-100 sm:h-[175px]">
                    <Image
                      src={blog.image}
                      alt={blog.imageAlt || blog.title}
                      fill
                      sizes="
                        (max-width: 640px) 285px,
                        (max-width: 1024px) 50vw,
                        25vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    {/* Date */}
                    <p className="text-[10px] font-medium text-slate-400 sm:text-[11px]">
                      {blog.date}
                    </p>

                    {/* Title */}
                    <h3
                      className="
                        mt-2
                        line-clamp-2
                        min-h-[42px]
                        text-sm
                        font-semibold
                        leading-5
                        text-slate-900
                        transition-colors
                        group-hover:text-[#A51C30]
                        sm:text-[15px]
                        sm:leading-5
                      "
                    >
                      {blog.title}
                    </h3>

                    {/* Category */}
                    <div className="mt-auto pt-4">
                      <span className="text-[10px] font-semibold text-[#A51C30] sm:text-[11px]">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border border-slate-200 px-6 py-12 text-center">
            <p className="text-sm font-medium text-slate-600">
              No blog articles available.
            </p>
          </div>
        )}

        {/* Mobile Hint */}
        {latestBlogs.length > 1 && (
          <p className="mt-3 text-[10px] text-slate-400 sm:hidden">
            Swipe to explore more articles →
          </p>
        )}
      </div>
    </section>
  );
};

export default LatestBlogs;
