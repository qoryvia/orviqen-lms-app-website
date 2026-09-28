import React from "react";
import {
  FiArrowDown,
  FiMessageCircle,
} from "react-icons/fi";

const ContactHero = () => {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="px-6 py-16 xl:px-30 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              <FiMessageCircle size={15} />
              Contact Orviqen
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Let&apos;s talk about your learning journey.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Have a question about a course, learning path, admissions,
              partnerships or student support? Share your requirements and
              our team will help point you in the right direction.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
              >
                Send an Enquiry
                <FiArrowDown size={16} />
              </a>

              <a
                href="#faq"
                className="inline-flex items-center gap-2 border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
              >
                View FAQs
              </a>
            </div>
          </div>

          <div className="border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              How we can help
            </p>

            <div className="mt-5 space-y-4">
              {[
                "Explore courses and technologies",
                "Understand learning paths",
                "Ask admissions questions",
                "Get student support",
                "Discuss partnerships",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#A41034]" />

                  <p className="text-sm font-medium text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;