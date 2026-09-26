import React from "react";
import { careerDevelopment } from "../data/careerData";

const CareerDevelopment = () => {
  return (
    <section className="bg-slate-50 py-12 sm:py-14 lg:py-16">
      <div className="px-6 xl:px-30">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Why Join Us
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Grow while doing meaningful work.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            We want people to have room to contribute, learn and take
            ownership as they grow with the organization.
          </p>
        </div>

        {/* Development Steps */}
        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {careerDevelopment.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-slate-400">
                    {item.number}
                  </span>

                  <Icon size={18} className="text-[#A41034]" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerDevelopment;