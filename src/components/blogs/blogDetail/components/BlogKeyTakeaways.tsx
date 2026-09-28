import React from "react";
import {
  FiCheckCircle,
  FiKey,
} from "react-icons/fi";

import { BlogPost } from "../../data/blogsData";

interface BlogKeyTakeawaysProps {
  blog: BlogPost;
}

const BlogKeyTakeaways = ({
  blog,
}: BlogKeyTakeawaysProps) => {
  if (!blog.keyTakeaways?.length) {
    return null;
  }

  return (
    <section className="mt-8 border border-[#A41034]/15 bg-[#A41034]/5 p-6 sm:p-7">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#A41034] text-white">
          <FiKey size={18} />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Key Takeaways
          </p>

          <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-950">
            What to remember
          </h2>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {blog.keyTakeaways.map(
          (item) => (
            <div
              key={item}
              className="flex gap-3 border border-white bg-white p-4"
            >
              <FiCheckCircle
                size={17}
                className="mt-0.5 shrink-0 text-[#A41034]"
              />

              <p className="text-sm leading-6 text-slate-600">
                {item}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default BlogKeyTakeaways;