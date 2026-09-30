"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiHelpCircle } from "react-icons/fi";

import { contactFaqs } from "../data/contactData";

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-slate-200 bg-white">
      <div className="px-6 py-14 xl:px-30 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            FAQ
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Common questions before getting in touch.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Here are a few common questions about contacting Eklavya and getting
            started with our learning programs.
          </p>
        </div>

        <div className="mt-7 max-w-4xl border border-slate-200">
          {contactFaqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="border-b border-slate-200 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <FiHelpCircle size={18} className="shrink-0 text-[#A41034]" />

                  <span className="flex-1 text-sm font-semibold text-slate-900">
                    {item.question}
                  </span>

                  {isOpen ? (
                    <FiChevronUp
                      size={18}
                      className="shrink-0 text-slate-400"
                    />
                  ) : (
                    <FiChevronDown
                      size={18}
                      className="shrink-0 text-slate-400"
                    />
                  )}
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 bg-slate-50 px-5 py-5 pl-12">
                    <p className="text-sm leading-7 text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
