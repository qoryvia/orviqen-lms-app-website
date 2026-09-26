import React from "react";
import { learningApproach } from "../data/aboutData";

const AboutApproach = () => {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="px-6 xl:px-30">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Our Approach
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            From learning to real progress.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            A simple framework that helps learners move from uncertainty to
            practical action.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {learningApproach.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-slate-400">
                    {step.number}
                  </span>

                  <Icon size={19} className="text-[#A41034]" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutApproach;