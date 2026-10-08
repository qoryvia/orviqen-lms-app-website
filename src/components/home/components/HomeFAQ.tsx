"use client";

import React, { useState } from "react";
import {
  FiChevronDown,
} from "react-icons/fi";
import { faqs } from "../data/homeData";

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="px-6 xl:px-30">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10">
          <span className="h-0.5 w-8 bg-[#A51C30]/70 sm:w-12" />

          <div className="flex items-center gap-2">

            <h2 className="text-center text-xs font-bold uppercase tracking-[0.08em] text-slate-900 sm:text-sm">
              Frequently Asked Questions
            </h2>
          </div>

          <span className="h-0.5 w-8 bg-[#A51C30]/70 sm:w-12" />
        </div>

        {/* =====================================================
            FAQ CONTENT
        ====================================================== */}
        <div className="">
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      gap-4
                      py-5
                      text-left
                      sm:py-6
                    "
                  >
                    {/* Number */}
                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        text-[10px]
                        font-semibold
                        transition-colors
                        duration-300
                        ${
                          isOpen
                            ? "bg-[#A51C30] text-white"
                            : "bg-slate-100 text-slate-500"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className={`
                        flex-1
                        text-sm
                        font-semibold
                        leading-6
                        transition-colors
                        duration-300
                        sm:text-base
                        ${
                          isOpen
                            ? "text-[#A51C30]"
                            : "text-slate-900 group-hover:text-[#A51C30]"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                    {/* Icon */}
                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "border-[#A51C30] bg-[#A51C30] text-white"
                            : "border-slate-200 bg-white text-slate-400 group-hover:border-[#A51C30] group-hover:text-[#A51C30]"
                        }
                      `}
                    >
                      <FiChevronDown
                        size={15}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-5 pl-11 pr-10 sm:pb-6 sm:pl-11">
                        <p className="max-w-3xl text-sm leading-6 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;