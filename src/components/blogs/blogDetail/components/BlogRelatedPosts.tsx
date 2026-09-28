import Link from "next/link";
import React from "react";
import {
  FiArrowUpRight,
  FiClock,
} from "react-icons/fi";

import { BlogPost } from "../../data/blogsData";

interface BlogRelatedPostsProps {
  posts: BlogPost[];
}

const BlogRelatedPosts = ({
  posts,
}: BlogRelatedPostsProps) => {
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="px-6 py-14 xl:px-30 lg:py-18">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              Continue Reading
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              You may also like
            </h2>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#A41034]"
          >
            View all articles
            <FiArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map(
            (post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={
                      post.imageAlt ||
                      post.title
                    }
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  <div className="absolute left-4 top-4">
                    <span className="bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A41034]">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{post.date}</span>

                    <span className="h-1 w-1 rounded-full bg-slate-300" />

                    <span className="inline-flex items-center gap-1">
                      <FiClock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-tight tracking-tight text-slate-950 transition-colors group-hover:text-[#A41034]">
                    {post.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                    <span className="text-xs font-semibold text-slate-500">
                      Read article
                    </span>

                    <span className="inline-flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-500 transition-colors group-hover:border-[#A41034] group-hover:bg-[#A41034] group-hover:text-white">
                      <FiArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogRelatedPosts;