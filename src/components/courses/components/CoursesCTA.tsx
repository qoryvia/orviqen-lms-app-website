import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiMessageCircle,
} from "react-icons/fi";

const CoursesCTA = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="px-6 xl:px-30">
        <div className="relative overflow-hidden bg-slate-950">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/78" />

          <div className="relative px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
                  <FiMessageCircle size={15} />
                  Need Help Choosing?
                </div>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Not sure which course is right for you?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
                  Tell us about your background and goals and we can help you
                  find a suitable learning direction.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8C0D2A]"
                >
                  Talk to an Advisor
                  <FiArrowRight size={15} />
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesCTA;