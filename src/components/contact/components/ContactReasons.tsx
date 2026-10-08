import React from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";

import { contactReasons } from "../data/contactData";

const ContactReasons = () => {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="px-6 py-12 xl:px-30 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              What You Can Ask
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              One place for the questions that matter.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
              From choosing a course to understanding support or partnership
              options, start with the question you have today.
            </p>
          </div>

          <div className="grid border border-slate-200 sm:grid-cols-2">
            {contactReasons.map((reason, index) => (
              <div
                key={reason}
                className={[
                  "group flex min-h-[76px] items-center gap-3 px-5 py-4",
                  "border-slate-200",
                  index % 2 !== 1 ? "sm:border-r" : "",
                  index < contactReasons.length - 2
                    ? "border-b"
                    : "",
                  index === contactReasons.length - 2
                    ? "sm:border-b-0"
                    : "",
                  index === contactReasons.length - 1
                    ? "border-b-0"
                    : "",
                ].join(" ")}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
                  <FiCheck size={14} />
                </span>

                <span className="flex-1 text-sm font-medium text-slate-700">
                  {reason}
                </span>

                <FiArrowRight
                  size={14}
                  className="shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactReasons;