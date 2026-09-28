import React from "react";
import {
  FiCalendar,
  FiUser,
} from "react-icons/fi";

import { BlogPost } from "../../data/blogsData";

interface BlogAuthorCardProps {
  blog: BlogPost;
}

const BlogAuthorCard = ({
  blog,
}: BlogAuthorCardProps) => {
  return (
    <div className="border-b border-slate-200 pb-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {blog.authorImage ? (
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-slate-100 text-[#A41034]">
              <FiUser size={19} />
            </div>
          )}

          <div>
            <p className="text-sm font-semibold text-slate-950">
              {blog.author}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {blog.authorRole}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {blog.tags.slice(0, 4).map(
            (tag) => (
              <span
                key={tag}
                className="border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-600"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {blog.authorBio && (
        <div className="mt-5 flex gap-3 border border-slate-200 bg-slate-50 p-5">
          <FiCalendar
            size={17}
            className="mt-0.5 shrink-0 text-[#A41034]"
          />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
              About the author
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {blog.authorBio}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogAuthorCard;