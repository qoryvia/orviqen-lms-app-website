import React from "react";
import {
  FiArrowRight,
  FiUsers,
} from "react-icons/fi";
import { workplaceValues } from "../data/careerData";

const CareerWorkplace = () => {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="px-6 xl:px-30">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          {/* Content */}
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              <FiUsers size={14} />
              Working at EklavyaED
            </div>

            <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Work with people who care about the outcome.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
              Our teams work across education, technology,
              student experience and business operations. We value
              people who bring expertise, responsibility and a
              willingness to keep learning.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
              Whether you join as an educator, trainer,
              technologist or business professional, your work
              contributes to the larger learning ecosystem.
            </p>
          </div>

          {/* Values */}
          <div className="grid gap-3 sm:grid-cols-3">
            {workplaceValues.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-slate-200 bg-slate-50 p-5 transition-colors hover:bg-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center bg-white text-[#A41034]">
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <FiArrowRight
                    size={14}
                    className="mt-5 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#A41034]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerWorkplace;