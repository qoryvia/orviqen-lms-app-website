import React from "react";
import { pathways } from "../data/studyAbroadData";

const StudyAbroadPathways = () => {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="px-6 xl:px-30">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Your Journey
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            One journey. Four clear steps.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Break the study abroad process into manageable stages and focus on
            one decision at a time.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] text-slate-400">
                    {step.number}
                  </span>

                  <Icon
                    size={18}
                    className="text-[#A41034]"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadPathways;