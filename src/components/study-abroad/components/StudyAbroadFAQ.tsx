import React from "react";
import {
  FiChevronDown,
  FiHelpCircle,
} from "react-icons/fi";

import { studyFAQs } from "../data/studyAbroadData";

const StudyAbroadFAQ = () => {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="px-6 xl:px-30">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            <FiHelpCircle />
            FAQ
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Common study abroad questions.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Start with answers to some of the questions students commonly have
            before beginning the process.
          </p>
        </div>

        <div className="mt-7 space-y-2">
          {studyFAQs.map((faq, index) => (
            <details
              key={faq.question}
              className="group border border-slate-200 bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 sm:px-6 sm:py-5">
                <span className="flex-1 text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                  {faq.question}
                </span>

                <FiChevronDown
                  className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6">
                <p className="pl-7 text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadFAQ;