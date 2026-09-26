import React from "react";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

const AboutStory = () => {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="px-6 xl:px-30">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Heading */}
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              <FiBookOpen />
              Our Story
            </div>

            <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Building a more connected learning experience.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              We believe education should give learners more than information.
              It should give them clarity, confidence and a direction to move
              forward.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-3xl">
            <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                Choosing what to learn can be difficult. There are countless
                technologies, courses and career options, but it is not always
                clear where to begin, what to learn next or how one skill
                connects to another.
              </p>

              <p>
                HenleyCrest was built around this challenge. Our approach is
                focused on creating structured learning experiences that help
                students move from curiosity to understanding and from
                understanding to practical application.
              </p>

              <p>
                We bring learning paths, practical projects, career guidance
                and future opportunities into a more connected experience. The
                objective is not simply to complete a course, but to help
                learners understand what they are building and where those
                skills can take them.
              </p>

              <p>
                Whether someone is beginning their technology journey,
                developing existing skills or exploring a new career direction,
                we aim to make the next step easier to understand and easier
                to take.
              </p>
            </div>

            {/* Simple Information Row */}
            <div className="mt-7 grid border-y border-slate-200 sm:grid-cols-3">
              <div className="border-b border-slate-200 py-4 sm:border-b-0 sm:border-r sm:pr-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A41034]">
                  Focus
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  Practical Learning
                </p>
              </div>

              <div className="border-b border-slate-200 py-4 sm:border-b-0 sm:border-r sm:px-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A41034]">
                  Approach
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  Structured Paths
                </p>
              </div>

              <div className="py-4 sm:pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A41034]">
                  Direction
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  Academic & Career Growth
                </p>
              </div>
            </div>

            {/* Link */}
            <a
              href="/programs"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A41034]"
            >
              Explore our learning paths
              <FiArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;