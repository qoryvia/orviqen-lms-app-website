import Link from "next/link";
import React from "react";
import {
  FiArrowDown,
  FiArrowRight,
  FiBookOpen,
} from "react-icons/fi";

const BlogsHero = () => {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-slate-950">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2200&q=90"
        alt="People learning and working"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 -z-10 bg-slate-950/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/35" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-slate-950/80 to-transparent" />

      <div className="relative flex min-h-[620px] items-end">
        <div className="w-full px-6 py-16 xl:px-30 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-3xl text-white">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                <FiBookOpen size={14} />
                Orviqen Journal
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-7xl">
                Ideas, insights and practical knowledge for modern learners.
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Explore practical articles on software development,
                artificial intelligence, cybersecurity, data, careers and
                the evolving world of technology.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#latest"
                  className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
                >
                  Explore Articles
                  <FiArrowDown size={16} />
                </Link>

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  Explore Courses
                  <FiArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="border border-white/15 bg-black/25 p-6 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e2a1b1]">
                  What you&apos;ll find here
                </p>

                <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
                  {[
                    "Development",
                    "Artificial Intelligence",
                    "Cybersecurity",
                    "Data",
                    "Career",
                    "Learning",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border-b border-white/10 pb-3"
                    >
                      <p className="text-sm text-slate-200">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs leading-5 text-slate-400">
                    Practical, structured and designed to help you
                    understand what to learn next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;