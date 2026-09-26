import React from "react";
import { FiUsers } from "react-icons/fi";
import { workplaceValues } from "../data/careerData";

const CareerWorkplace = () => {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="px-6 xl:px-30">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Content */}
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              <FiUsers />
              Our Workplace
            </div>

            <h2 className="max-w-md text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A place to contribute, learn and grow.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
              We believe good work comes from people who have clarity,
              ownership and the freedom to think carefully about the problems
              they are solving.
            </p>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
              Our culture is built around collaboration, continuous learning
              and a shared focus on creating useful outcomes for students and
              the wider education ecosystem.
            </p>
          </div>

          {/* Values */}
          <div className="grid gap-4 sm:grid-cols-3">
            {workplaceValues.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-slate-200 bg-slate-50 p-5"
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