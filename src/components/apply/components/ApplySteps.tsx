import React from "react";
import {
  FiArrowRight,
} from "react-icons/fi";

import { applicationSteps } from "../data/applyData";

const ApplySteps = () => {
  return (
    <section className="bg-white">
      <div className="px-6 py-14 xl:px-30 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            How It Works
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            A straightforward application process.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            The application is designed to help us understand where you are
            starting from and what kind of learning path you are looking for.
          </p>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-4">
          {applicationSteps.map(
            (step, index) => (
              <div
                key={step.number}
                className="relative border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-bold tracking-[0.12em] text-[#A41034]">
                    {step.number}
                  </span>

                  {index <
                    applicationSteps.length - 1 && (
                    <FiArrowRight
                      size={17}
                      className="hidden text-slate-300 lg:block"
                    />
                  )}
                </div>

                <h3 className="mt-8 text-lg font-semibold tracking-tight text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplySteps;