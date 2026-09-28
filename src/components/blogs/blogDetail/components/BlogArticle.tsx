import React from "react";
import {
  FiArrowUpRight,
  FiCode,
} from "react-icons/fi";

import { BlogPost } from "../../data/blogsData";

interface BlogArticleProps {
  blog: BlogPost;
}

const BlogArticle = ({
  blog,
}: BlogArticleProps) => {
  const tableOfContents =
    blog.tableOfContents || [];

  return (
    <div
      id="article"
      className="mt-10"
    >
      <div className="max-w-3xl">
        <div className="space-y-12">
          {blog.content.map(
            (section, index) => {
              const tocItem =
                tableOfContents[index];

              return (
                <section
                  key={`${section.heading || "section"}-${index}`}
                  id={tocItem?.id}
                  className="scroll-mt-28"
                >
                  {section.heading && (
                    <div className="mb-5">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A41034]">
                        Section {String(index + 1).padStart(2, "0")}
                      </p>

                      <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                        {section.heading}
                      </h2>
                    </div>
                  )}

                  {section.paragraphs?.map(
                    (paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-4 text-[15px] leading-8 text-slate-600 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    )
                  )}

                  {section.bullets &&
                    section.bullets.length > 0 && (
                      <div className="mt-6 space-y-3">
                        {section.bullets.map(
                          (bullet) => (
                            <div
                              key={bullet}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A41034]" />

                              <p className="text-[15px] leading-7 text-slate-600 sm:text-base">
                                {bullet}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    )}

                  {section.quote && (
                    <blockquote className="mt-7 border-l-4 border-[#A41034] bg-slate-50 px-6 py-5">
                      <p className="text-lg font-medium leading-8 text-slate-800">
                        “{section.quote}”
                      </p>
                    </blockquote>
                  )}

                  {section.code && (
                    <div className="mt-7 overflow-hidden border border-slate-200 bg-slate-950">
                      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                          <FiCode size={14} />
                          Example
                        </div>

                        <span className="text-xs text-slate-500">
                          Code
                        </span>
                      </div>

                      <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-300">
                        <code>
                          {section.code}
                        </code>
                      </pre>
                    </div>
                  )}
                </section>
              );
            }
          )}
        </div>

        <div className="mt-14 border-t border-slate-200 pt-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Article tags
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {blog.tags.map(
                  (tag) => (
                    <span
                      key={tag}
                      className="border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <a
              href="#article"
              className="hidden h-10 w-10 shrink-0 items-center justify-center border border-slate-200 text-slate-500 transition-colors hover:border-[#A41034] hover:text-[#A41034] sm:flex"
              aria-label="Back to top"
            >
              <FiArrowUpRight
                size={17}
                className="-rotate-45"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;