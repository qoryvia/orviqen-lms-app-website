"use client";

import React, { FormEvent, useState } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiMail,
  FiPhone,
  FiUser,
} from "react-icons/fi";

const LeadCapture = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="lead" className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="px-6 xl:px-30">
        <div className="grid overflow-hidden border border-slate-200 bg-white lg:grid-cols-[0.9fr_1.1fr]">
          {/* Guidance Panel - Desktop Only */}
          <div className="relative hidden min-h-full overflow-hidden lg:block">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#A41034]/85" />

            {/* Content */}
            <div className="relative p-9 text-white xl:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                Get Guidance
              </p>

              <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight">
                Not sure which technology path is right for you?
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
                Tell us about your current education, skills and career goal.
                Start a conversation around the right learning path.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Understand the right learning direction",
                  "Explore relevant programs",
                  "Ask about internships or apprenticeships",
                  "Discuss your current skill level",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-white/15">
                      <FiCheck size={12} />
                    </span>

                    <span className="text-sm leading-5 text-white/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8 lg:p-9 xl:p-10">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center bg-[#A41034]/10 text-[#A41034]">
                  <FiCheck size={24} />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-slate-950">
                  Request received
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                  Your form has been submitted on this demo frontend. Connect
                  this form to your lead API, CRM or email service for
                  production use.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
                    Start Here
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                    Find Your Learning Path
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Share a few details and start the conversation.
                  </p>
                </div>

                <form
                  className="mt-6 space-y-4"
                  onSubmit={handleSubmit}
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold text-slate-800"
                    >
                      Full Name
                    </label>

                    <div className="relative">
                      <FiUser
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full border border-slate-200 bg-white px-10 py-3 text-sm outline-none focus:border-[#A41034]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold text-slate-800"
                    >
                      Email Address
                    </label>

                    <div className="relative">
                      <FiMail
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full border border-slate-200 bg-white px-10 py-3 text-sm outline-none focus:border-[#A41034]"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-semibold text-slate-800"
                    >
                      Phone Number
                    </label>

                    <div className="relative">
                      <FiPhone
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-slate-200 bg-white px-10 py-3 text-sm outline-none focus:border-[#A41034]"
                      />
                    </div>
                  </div>

                  {/* Interest */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="mb-1.5 block text-xs font-semibold text-slate-800"
                    >
                      What do you want to learn?
                    </label>

                    <select
                      id="interest"
                      name="interest"
                      required
                      defaultValue=""
                      className="w-full border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 outline-none focus:border-[#A41034]"
                    >
                      <option value="" disabled>
                        Select your interest
                      </option>
                      <option value="software-development">
                        Software Development
                      </option>
                      <option value="data-science">Data Science</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="ethical-hacking">
                        Ethical Hacking
                      </option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="cloud-devops">Cloud & DevOps</option>
                      <option value="internship">Internship</option>
                      <option value="apprenticeship">
                        Apprenticeship
                      </option>
                    </select>
                  </div>

                  {/* Goal */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-semibold text-slate-800"
                    >
                      What is your goal?
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="For example: I want to become a full stack developer..."
                      className="w-full resize-none border border-slate-200 bg-white px-3.5 py-3 text-sm outline-none focus:border-[#A41034]"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#8C0D2A]"
                  >
                    Get Learning Guidance
                    <FiArrowRight size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;