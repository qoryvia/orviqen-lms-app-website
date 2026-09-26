import React from "react";
import {
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import { supportServices } from "../data/studyAbroadData";

const StudyAbroadSupport = () => {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="px-6 xl:px-30">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              Study Abroad Support
            </p>

            <h2 className="mt-2 max-w-md text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Support through the important decisions.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
              Studying abroad involves many decisions. A structured support
              process can help make those decisions easier to understand.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-800">
              <FiCheckCircle className="text-[#A41034]" />
              Destination and program guidance
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-800">
              <FiCheckCircle className="text-[#A41034]" />
              Application and planning support
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-800">
              <FiCheckCircle className="text-[#A41034]" />
              Pre-departure preparation
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {supportServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center bg-white text-[#A41034]">
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#A41034]">
                    Learn more
                    <FiArrowRight size={13} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadSupport;