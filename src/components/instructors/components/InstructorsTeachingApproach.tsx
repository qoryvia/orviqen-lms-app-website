import React from "react";
import {
  FiBookOpen,
  FiCode,
  FiTrendingUp,
} from "react-icons/fi";

const teachingPoints = [
  {
    icon: FiBookOpen,
    title: "Strong fundamentals",
    description:
      "Understand the concepts first so you can apply them confidently beyond a single project or course.",
  },
  {
    icon: FiCode,
    title: "Learn by building",
    description:
      "Work through practical examples and projects instead of relying only on theory and lectures.",
  },
  {
    icon: FiTrendingUp,
    title: "Skills that move forward",
    description:
      "Focus on tools, workflows and problem-solving skills that are useful as you progress in your career.",
  },
];

const InstructorsTeachingApproach = () => {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="px-6 py-12 xl:px-30 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              How We Teach
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              More than watching lessons.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
              Our instructors are there to help learners understand the
              reasoning behind the work, practise it and build confidence over
              time.
            </p>
          </div>

          <div className="grid border border-slate-200 bg-white sm:grid-cols-3">
            {teachingPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`p-5 sm:p-6 ${
                    index !== teachingPoints.length - 1
                      ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorsTeachingApproach;