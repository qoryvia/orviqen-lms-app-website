import Link from "next/link";
import React from "react";
import {
  FiArrowUpRight,
  FiClock,
} from "react-icons/fi";

import { BlogPost } from "../data/blogsData";

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard = ({
  blog,
}: BlogCardProps) => {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A41034] backdrop-blur">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span>{blog.date}</span>

          <span className="h-1 w-1 rounded-full bg-slate-300" />

          <span className="inline-flex items-center gap-1">
            <FiClock size={12} />
            {blog.readTime}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold leading-tight tracking-tight text-slate-950 transition-colors group-hover:text-[#A41034]">
          {blog.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
          {blog.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
          <div>
            <p className="text-xs font-semibold text-slate-700">
              {blog.author}
            </p>

            <p className="mt-1 text-[11px] text-slate-400">
              {blog.authorRole}
            </p>
          </div>

          <span className="inline-flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-500 transition-colors group-hover:border-[#A41034] group-hover:bg-[#A41034] group-hover:text-white">
            <FiArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;