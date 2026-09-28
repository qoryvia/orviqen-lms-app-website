import React from "react";
import {
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

import { contactReasons } from "../data/contactData";

const ContactReasons = () => {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="px-6 py-14 xl:px-30 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              What You Can Ask
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              One place for questions across your learning journey.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
              Whether you are researching your first course or exploring
              a partnership, use the same enquiry path to get started.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactReasons.map((reason) => (
              <div
                key={reason}
                className="group flex items-center gap-3 border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-slate-300"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
                  <FiCheck size={15} />
                </div>

                <span className="flex-1 text-sm font-medium text-slate-700">
                  {reason}
                </span>

                <FiArrowRight
                  size={15}
                  className="text-slate-300 transition-transform group-hover:translate-x-0.5"
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