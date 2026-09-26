import React from "react";
import Link from "next/link";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";

const FinalCTA = () => {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="px-6 xl:px-30">
        <div className="relative overflow-hidden">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-950/75" />

          {/* Content */}
          <div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-white/80">
                  <FiBookOpen size={17} />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                    Start Your Journey
                  </span>
                </div>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Your next skill can change the direction of your career.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                  Explore a learning path, build practical skills and take the
                  next step toward your technology career.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col">
                <Link
                  href="#programs"
                  className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#8C0D2A]"
                >
                  Explore Programs
                  <FiArrowRight size={16} />
                </Link>

                <Link
                  href="#lead"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;