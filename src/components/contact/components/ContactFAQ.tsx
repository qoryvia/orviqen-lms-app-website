"use client";

import React, { useState } from "react";
import {
  FiChevronDown,
  FiHelpCircle,
} from "react-icons/fi";

import { contactFaqs } from "../data/contactData";

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-slate-200 bg-slate-50"
    >
      <div className="px-6 py-12 xl:px-30 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          {/* Intro */}
          <div className="self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              FAQ
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Common questions before getting in touch.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
              A few answers to common questions about courses, admissions,
              support and contacting Eklavya.
            </p>
          </div>

          {/* Questions */}
          <div className="border border-slate-200 bg-white">
            {contactFaqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="border-b border-slate-200 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
                      <FiHelpCircle size={16} />
                    </span>

                    <span className="flex-1 text-sm font-semibold leading-6 text-slate-900">
                      {item.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-slate-200 bg-white">
                      <FiChevronDown
                        size={16}
                        className={`text-slate-400 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 bg-slate-50 px-5 py-5 pl-[4.25rem] sm:px-6 sm:pl-[4.75rem]">
                      <p className="max-w-2xl text-sm leading-7 text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;