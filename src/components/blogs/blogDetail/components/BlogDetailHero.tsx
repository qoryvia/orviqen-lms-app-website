import Link from "next/link";
import React from "react";
import {
  FiArrowLeft,
  FiArrowDown,
  FiClock,
  FiEye,
  FiMessageCircle,
  FiTag,
} from "react-icons/fi";

import { BlogPost } from "../../data/blogsData";

interface BlogDetailHeroProps {
  blog: BlogPost;
}

const BlogDetailHero = ({
  blog,
}: BlogDetailHeroProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      <img
        src={blog.image}
        alt={
          blog.imageAlt ||
          blog.title
        }
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-slate-950/72" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/35" />

      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-slate-950/90 to-transparent" />

      <div className="px-6 xl:px-30">
        <div className="max-w-5xl py-14 sm:py-18 lg:py-24">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 transition-colors hover:text-white"
          >
            <FiArrowLeft size={14} />
            Back to Journal
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 bg-[#A41034] px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white">
              <FiTag size={13} />
              {blog.category}
            </span>

            {blog.subCategory && (
              <span className="border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-200 backdrop-blur-sm">
                {blog.subCategory}
              </span>
            )}

            {blog.featured && (
              <span className="border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                Featured
              </span>
            )}
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {blog.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            {blog.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-300">
            <span>
              {blog.date}
            </span>

            {blog.updatedDate && (
              <>
                <span className="h-1 w-1 rounded-full bg-slate-500" />

                <span>
                  Updated {blog.updatedDate}
                </span>
              </>
            )}

            <span className="h-1 w-1 rounded-full bg-slate-500" />

            <span className="inline-flex items-center gap-1.5">
              <FiClock size={13} />
              {blog.readTime}
            </span>

            {blog.views !== undefined && (
              <>
                <span className="h-1 w-1 rounded-full bg-slate-500" />

                <span className="inline-flex items-center gap-1.5">
                  <FiEye size={13} />
                  {blog.views.toLocaleString()}
                </span>
              </>
            )}

            {blog.comments !== undefined && (
              <>
                <span className="h-1 w-1 rounded-full bg-slate-500" />

                <span className="inline-flex items-center gap-1.5">
                  <FiMessageCircle size={13} />
                  {blog.comments}
                </span>
              </>
            )}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#article"
              className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
            >
              Read Article
              <FiArrowDown size={16} />
            </a>

            <Link
              href="/courses"
              className="inline-flex items-center justify-center border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailHero;