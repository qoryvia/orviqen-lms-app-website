import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiMail,
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
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-950/78" />

          <div className="relative px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
                  <FiMail size={15} />
                  Join HenleyCrest
                </div>

                <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  We would like to hear from you.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                  If you do not see a role that matches your experience, send
                  us your profile and tell us where you think you can
                  contribute.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Link
                  href="mailto:careers@henleycrest.com"
                  className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8C0D2A]"
                >
                  Email Your Profile
                  <FiArrowRight size={15} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Contact Us
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