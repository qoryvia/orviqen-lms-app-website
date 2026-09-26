import React from "react";
import { aboutValues } from "../data/aboutData";

const AboutValues = () => {
  return (
    <section className="bg-slate-50 py-12 sm:py-14 lg:py-16">
      <div className="px-6 xl:px-30">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            What Guides Us
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Simple principles behind the experience.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Every learning experience is shaped around a few principles that
            keep the focus on clarity, relevance and progress.
          </p>
        </div>

        {/* Values */}
        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {aboutValues.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="border border-slate-200 bg-white p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-[#A41034]/10 text-[#A41034]">
                  <Icon size={19} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;