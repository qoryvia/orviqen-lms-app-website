import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiCode,
  FiCpu,
  FiShield,
} from "react-icons/fi";

const BlogCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="px-6 py-14 xl:px-30 lg:py-20">
        <div className="relative overflow-hidden border border-slate-200 bg-slate-50 px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#A41034]/5" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
                Keep Learning
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Turn knowledge into practical skills.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Explore structured courses designed around software
                development, AI, data, cybersecurity and modern technical
                skills.
              </p>

              <Link
                href="/courses"
                className="mt-7 inline-flex items-center gap-2 bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
              >
                Explore Courses
                <FiArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[440px]">
              {[
                {
                  label: "Development",
                  icon: FiCode,
                },
                {
                  label: "AI & ML",
                  icon: FiCpu,
                },
                {
                  label: "Cybersecurity",
                  icon: FiShield,
                },
                {
                  label: "Learning",
                  icon: FiBookOpen,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="border border-slate-200 bg-white p-4"
                  >
                    <Icon
                      size={19}
                      className="text-[#A41034]"
                    />

                    <p className="mt-7 text-xs font-semibold leading-5 text-slate-700">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;