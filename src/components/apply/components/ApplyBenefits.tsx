import React from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiLayers,
  FiTool,
  FiUserCheck,
} from "react-icons/fi";

import { applicationBenefits } from "../data/applyData";

const ApplyBenefits = () => {
  const icons = [
    FiLayers,
    FiTool,
    FiCheckCircle,
    FiUserCheck,
  ];

  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="px-6 py-14 xl:px-30 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              Why Apply
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Start with a clearer learning direction.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
              Your application gives us context about your current level,
              interests and goals so the conversation can begin from the
              right place.
            </p>

            <a
              href="#application-form"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A41034]"
            >
              Begin your application
              <FiArrowRight size={15} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {applicationBenefits.map(
              (benefit, index) => {
                const Icon =
                  icons[index % icons.length];

                return (
                  <div
                    key={benefit.title}
                    className="border border-slate-200 bg-white p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-5 text-base font-semibold text-slate-950">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {benefit.description}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyBenefits;