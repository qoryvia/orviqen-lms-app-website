import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiMail,
  FiSend,
} from "react-icons/fi";

const CareerCTA = () => {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-10 sm:py-12 lg:py-14"
    >
      <div className="px-6 xl:px-30">
        <div className="relative overflow-hidden bg-slate-950">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-950/80" />

          {/* Content */}
          <div className="relative px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  <FiMail size={15} />
                  Open Applications
                </div>

                <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  Your role may not have a title yet.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                  Tell us what you do, what you are good at and
                  where you believe you can contribute at
                  EklavyaED.
                </p>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1.5">
                    <FiSend
                      size={13}
                      className="text-[#d16a84]"
                    />
                    Faculty & Trainers
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <FiSend
                      size={13}
                      className="text-[#d16a84]"
                    />
                    Technology
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <FiSend
                      size={13}
                      className="text-[#d16a84]"
                    />
                    Business & Operations
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                <Link
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8C0D2A]"
                >
                  Apply by Domain
                  <FiArrowRight size={15} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Contact EklavyaED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCTA;