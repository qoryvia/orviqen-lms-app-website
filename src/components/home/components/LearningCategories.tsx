import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiBookOpen,
} from "react-icons/fi";
import { learningCategories } from "../data/homeData";

const LearningCategories = () => {
  return (
    <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="px-6 xl:px-30">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 border border-[#A51C30]/15 bg-[#A51C30]/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A51C30]">
            <FiBookOpen />
            Learning Categories
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Choose a direction and start learning.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore different learning paths and find the area that matches
            your interests, skills and career goals.
          </p>
        </div>

        {/* Category Cards */}
        <div
          className="
            mt-8 flex gap-4 overflow-x-auto pb-2
            snap-x snap-mandatory
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:grid sm:grid-cols-2 sm:gap-5
            sm:overflow-visible sm:pb-0 sm:snap-none
            xl:grid-cols-4
          "
        >
          {learningCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                href={category.href}
                key={category.title}
                className="
                  group flex w-[82vw] shrink-0 snap-start flex-col
                  border border-slate-200 bg-white p-6
                  transition-colors
                  hover:border-[#A51C30]/30
                  sm:w-auto
                "
              >
                <div className="flex h-11 w-11 items-center justify-center bg-[#A51C30]/10 text-[#A51C30]">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>

                <div className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#A51C30]">
                  Explore path
                  <FiArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile Hint */}
        <p className="mt-3 text-xs text-slate-400 sm:hidden">
          Swipe to explore more →
        </p>
      </div>
    </section>
  );
};

export default LearningCategories;