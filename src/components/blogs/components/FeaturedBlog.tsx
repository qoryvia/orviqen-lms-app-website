import Link from "next/link";
import React from "react";
import {
  FiArrowUpRight,
  FiClock,
  FiStar,
} from "react-icons/fi";

import { BlogPost } from "../data/blogsData";

interface FeaturedBlogProps {
  blog: BlogPost;
}

const FeaturedBlog = ({
  blog,
}: FeaturedBlogProps) => {
  return (
    <section className="bg-white">
      <div className="px-6 py-14 xl:px-30 lg:py-20">
        <div className="mb-7 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              Editor&apos;s Pick
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Featured story
            </h2>
          </div>

          <div className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-400 sm:flex">
            <FiStar />
            Featured
          </div>
        </div>

        <Link
          href={`/blogs/${blog.slug}`}
          className="group block overflow-hidden border border-slate-200 bg-slate-950"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[470px]">
              <img
                src={blog.image}
                alt={blog.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

              <div className="absolute left-5 top-5">
                <span className="bg-[#A41034] px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white">
                  {blog.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 text-white sm:p-10 lg:p-14">
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span>{blog.date}</span>

                <span className="h-1 w-1 rounded-full bg-slate-500" />

                <span className="inline-flex items-center gap-1">
                  <FiClock size={13} />
                  {blog.readTime}
                </span>
              </div>

              <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {blog.title}
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                {blog.excerpt}
              </p>

              <div className="mt-8 flex items-center justify-between gap-6 border-t border-white/10 pt-5">
                <div>
                  <p className="text-sm font-semibold text-white">
                    {blog.author}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {blog.authorRole}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Read Article
                  <FiArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedBlog;