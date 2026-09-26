"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiPhone,
  FiUser,
} from "react-icons/fi";

import heroImage from "../../../assets/images/home-hero.png";

const StudyAbroadHero = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <img
        src={heroImage.src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/74" />

      <div className="relative px-6 py-12 sm:py-16 lg:py-20 xl:px-30">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_380px]">
          {/* Hero Content */}
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
              <FiGlobe size={14} />
              Study Abroad
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn your global education goal into a clear plan.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
              Explore international destinations, compare programs and get
              guidance for the next step in your study abroad journey.
            </p>

            <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Destinations", "6+"],
                ["Study Areas", "4+"],
                ["Application", "Guidance"],
                ["Support", "End-to-End"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border border-white/15 bg-white/5 p-3"
                >
                  <p className="text-lg font-semibold text-white">{value}</p>
                  <p className="mt-1 text-[11px] text-white/55">{label}</p>
                </div>
              ))}
            </div>

            <Link
              href="#destinations"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Explore destinations
              <FiArrowRight size={15} />
            </Link>
          </div>

          {/* Desktop Form */}
          <div className="bg-white p-5 shadow-lg sm:p-6">
            {submitted ? (
              <div className="py-8 text-center">
                <FiCheckCircle
                  size={32}
                  className="mx-auto text-[#A41034]"
                />

                <h2 className="mt-4 text-xl font-semibold text-slate-950">
                  Request received
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Connect this demo form to your lead API or CRM for production
                  use.
                </p>
              </div>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
                  Get Guidance
                </p>

                <h2 className="mt-2 text-xl font-semibold text-slate-950">
                  Plan your study abroad journey
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Share your details and our team can help you explore the
                  right options.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-5 space-y-3"
                >
                  <div className="relative">
                    <FiUser
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Full name"
                      className="w-full border border-slate-200 px-10 py-3 text-sm outline-none focus:border-[#A41034]"
                    />
                  </div>

                  <div className="relative">
                    <FiPhone
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone number"
                      className="w-full border border-slate-200 px-10 py-3 text-sm outline-none focus:border-[#A41034]"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email address"
                    className="w-full border border-slate-200 px-3.5 py-3 text-sm outline-none focus:border-[#A41034]"
                  />

                  <select
                    name="destination"
                    defaultValue=""
                    required
                    className="w-full border border-slate-200 px-3.5 py-3 text-sm text-slate-600 outline-none focus:border-[#A41034]"
                  >
                    <option value="" disabled>
                      Preferred destination
                    </option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="germany">Germany</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="ireland">Ireland</option>
                  </select>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#8C0D2A]"
                  >
                    Get Free Guidance
                    <FiArrowRight size={15} />
                  </button>
                </form>

                <p className="mt-3 text-[10px] leading-4 text-slate-400">
                  By submitting this form, you agree to be contacted regarding
                  study abroad guidance.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadHero;