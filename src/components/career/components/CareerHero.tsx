import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiBriefcase,
  FiSend,
} from "react-icons/fi";

const CareerHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/80" />

      {/* Content */}
      <div className="relative px-6 py-16 sm:py-20 lg:py-24 xl:px-30">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Left */}
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:text-[11px]">
              <FiBriefcase size={14} />
              Careers at EklavyaED
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find work where your skills can make a difference.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base lg:text-lg">
              We welcome educators, trainers, technologists,
              academic professionals, student-success specialists,
              sales professionals and business support teams.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#openings"
                className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8C0D2A]"
              >
                Explore Career Areas
                <FiArrowRight size={16} />
              </Link>

              <Link
                href="#apply"
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Apply by Domain
                <FiSend size={15} />
              </Link>
            </div>
          </div>

          {/* Right — Hiring Focus */}
          <div className="border border-white/10 bg-white/[0.06] backdrop-blur-sm">
            <div className="border-b border-white/10 p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#d16a84]">
                Who We Hire
              </p>

              <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                Different backgrounds. One shared purpose.
              </h2>

              <p className="mt-2 text-xs leading-5 text-white/55 sm:text-sm">
                Explore opportunities across our academic,
                technical and business functions.
              </p>
            </div>

            <div className="grid grid-cols-2">
              {[
                "Faculty",
                "Trainers",
                "Technical",
                "Academic",
                "Student Success",
                "Sales",
                "Operations",
                "Corporate",
              ].map((item, index) => (
                <div
                  key={item}
                  className="border-b border-r border-white/10 px-4 py-3.5 last:border-b-0 sm:py-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-white/75">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;