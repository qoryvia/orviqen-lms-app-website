import React from "react";
import {
  FiList,
} from "react-icons/fi";

import { BlogPost } from "../../data/blogsData";

interface BlogTableOfContentsProps {
  blog: BlogPost;
}

const BlogTableOfContents = ({
  blog,
}: BlogTableOfContentsProps) => {
  if (!blog.tableOfContents?.length) {
    return null;
  }

  return (
    <div className="border border-slate-200 bg-white">
      <div className="border-b border-slate-200 p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#A41034]">
          <FiList size={14} />
          On this page
        </div>
      </div>

      <nav className="p-3">
        {blog.tableOfContents.map(
          (item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex gap-3 px-3 py-3 transition-colors hover:bg-slate-50"
            >
              <span className="text-[11px] font-semibold text-slate-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-sm leading-5 text-slate-600 transition-colors group-hover:text-[#A41034]">
                {item.title}
              </span>
            </a>
          )
        )}
      </nav>
    </div>
  );
};

export default BlogTableOfContents;