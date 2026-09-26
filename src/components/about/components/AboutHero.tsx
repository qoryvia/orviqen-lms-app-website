import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiBookOpen,
  FiCompass,
} from "react-icons/fi";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="relative px-6 py-16 sm:py-20 lg:py-24 xl:px-30">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="mb-4 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
            <FiBookOpen />
            About HenleyCrest
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Education with a clearer path forward.
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
            HenleyCrest is built around a simple idea: learning becomes more
            meaningful when students have clear direction, practical
            experience and a path connected to their future goals.
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8C0D2A]"
            >
              Explore Programs
              <FiArrowRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
            >
              Talk to an Advisor
              <FiCompass size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;