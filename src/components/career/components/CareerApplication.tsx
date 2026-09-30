"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiChevronDown,
  FiSend,
} from "react-icons/fi";

const applicationDomains = [
  {
    title: "Faculty & Teaching",
    description:
      "Subject faculty, lecturers and academic educators.",
    roles: [
      "Faculty",
      "Subject Teacher",
      "Academic Instructor",
      "Lecturer",
    ],
  },
  {
    title: "Technical Trainers",
    description:
      "Professionals who teach programming, technology and IT skills.",
    roles: [
      "Technical Trainer",
      "Programming Trainer",
      "Cybersecurity Trainer",
      "Data / AI Trainer",
    ],
  },
  {
    title: "Technology",
    description:
      "Build and maintain the technology behind our learning ecosystem.",
    roles: [
      "Software Developer",
      "Full Stack Developer",
      "Mobile Developer",
      "IT Engineer",
    ],
  },
  {
    title: "Academic & Student Success",
    description:
      "Help students learn, progress and get the support they need.",
    roles: [
      "Academic Coordinator",
      "Student Success",
      "Program Coordinator",
      "Student Counselor",
    ],
  },
  {
    title: "Sales & Admissions",
    description:
      "Connect students and organizations with the right programs.",
    roles: [
      "Business Development",
      "Admissions",
      "Inside Sales",
      "Counselor",
    ],
  },
  {
    title: "Operations & Administration",
    description:
      "Keep programs, people and day-to-day operations running smoothly.",
    roles: [
      "Operations Executive",
      "Administration",
      "HR",
      "Office Operations",
    ],
  },
  {
    title: "Marketing & Content",
    description:
      "Build the brand, communicate our programs and create useful content.",
    roles: [
      "Digital Marketing",
      "Content Creator",
      "Social Media",
      "SEO",
    ],
  },
  {
    title: "Business & Corporate",
    description:
      "Support finance, partnerships, strategy and corporate functions.",
    roles: [
      "Finance",
      "Partnerships",
      "Business Operations",
      "Corporate Functions",
    ],
  },
];

const CareerApplication = () => {
  const [selectedDomain, setSelectedDomain] =
    useState("Faculty & Teaching");

  const selected = applicationDomains.find(
    (domain) => domain.title === selectedDomain
  );

  return (
    <section
      id="apply"
      className="border-y border-slate-200 bg-[#f7f6f3] py-12 sm:py-14 lg:py-16"
    >
      <div className="px-6 xl:px-30">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            <FiSend size={14} />
            Apply by Domain
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Apply where you can contribute.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Choose the domain closest to your experience and
            explore the types of roles we hire for.
          </p>
        </div>

        {/* Application Layout */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Domain Selector */}
          <div className="border border-slate-200 bg-white">
            {applicationDomains.map((domain, index) => {
              const active =
                selectedDomain === domain.title;

              return (
                <button
                  key={domain.title}
                  type="button"
                  onClick={() =>
                    setSelectedDomain(domain.title)
                  }
                  className={`flex w-full items-center gap-3 border-b border-slate-100 px-4 py-4 text-left transition-colors last:border-b-0 ${
                    active
                      ? "bg-[#A41034] text-white"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`text-[10px] font-semibold tracking-[0.14em] ${
                      active
                        ? "text-white/60"
                        : "text-slate-300"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-sm font-semibold">
                    {domain.title}
                  </span>

                  <FiArrowRight
                    size={15}
                    className={
                      active
                        ? "text-white"
                        : "text-slate-300"
                    }
                  />
                </button>
              );
            })}
          </div>

          {/* Selected Domain */}
          <div className="border border-slate-200 bg-white p-6 sm:p-8">
            {selected && (
              <>
                <div className="flex h-11 w-11 items-center justify-center bg-[#A41034]/10 text-[#A41034]">
                  <FiBriefcase size={19} />
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
                  Selected Domain
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  {selected.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                  {selected.description}
                </p>

                {/* Roles */}
                <div className="mt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Example Roles
                  </p>

                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {selected.roles.map((role) => (
                      <div
                        key={role}
                        className="flex items-center gap-2.5 border border-slate-200 bg-slate-50 px-3.5 py-3"
                      >
                        <FiCheck
                          size={14}
                          className="shrink-0 text-[#A41034]"
                        />

                        <span className="text-xs font-medium text-slate-700">
                          {role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply */}
                <div className="mt-7 border-t border-slate-200 pt-5">
                  <p className="text-xs leading-5 text-slate-500">
                    Select the domain that best matches your
                    background, then submit your profile through
                    our application/contact process.
                  </p>

                  <Link
                    href={`/contact?domain=${selected.title.toLowerCase()}`}
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-[#A41034] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8C0D2A]"
                  >
                    Apply for {selected.title}
                    <FiArrowRight size={15} />
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerApplication;