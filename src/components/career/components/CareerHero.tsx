import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

const CareerHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/72" />

      <div className="relative px-6 py-16 sm:py-20 lg:py-24 xl:px-30">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
            <FiBriefcase size={14} />
            Careers at HenleyCrest
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build meaningful work that helps people move forward.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
            Join a growing team working across education, technology and
            student success to create better learning experiences and broader
            opportunities.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#openings"
              className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8C0D2A]"
            >
              View Opportunities
              <FiArrowRight size={16} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Send Your Profile
              <FiMail size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;