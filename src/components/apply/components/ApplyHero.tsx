import Link from "next/link";
import React from "react";
import {
  FiArrowDown,
  FiArrowRight,
  FiCheckCircle,
  FiFileText,
} from "react-icons/fi";

const ApplyHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2200&q=90"
        alt="Students learning together"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-slate-950/72" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/45" />

      <div className="relative">
        <div className="px-6 py-16 xl:px-30 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl text-white">
              <div className="inline-flex items-center gap-2 border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                <FiFileText size={14} />
                Apply to Orviqen
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Start building the skills that move you forward.
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Tell us what you want to learn, where you are starting
                from and what you want to achieve. Submit an application
                and take the first step toward your learning path.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#application-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
                >
                  Start Application
                  <FiArrowDown size={16} />
                </a>

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  Explore Courses
                  <FiArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="border border-white/15 bg-black/25 p-6 backdrop-blur-md sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e0a1b1]">
                Before you apply
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Choose a direction. We&apos;ll help with the next step.
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Select an area you want to learn",
                  "Share your current background",
                  "Tell us your learning goals",
                  "Submit your application",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <FiCheckCircle
                      size={17}
                      className="shrink-0 text-[#e0a1b1]"
                    />

                    <span className="text-sm text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyHero;