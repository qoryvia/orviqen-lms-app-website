import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiUsers,
} from "react-icons/fi";

const InternshipApprenticeship = () => {
  return (
    <section id="career-programs" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="px-6 xl:px-30">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="inline-flex h-14 w-14 items-center justify-center bg-[#A51C30] text-white">
              <FiBriefcase size={24} />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#A51C30]">
              Career Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Learning should connect to real experience.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              For selected programs, the journey can extend beyond courses
              into internships, apprenticeships, project work and professional
              exposure.
            </p>

            <Link
              href="#lead"
              className="mt-8 inline-flex items-center gap-2 bg-[#A51C30] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#8E1729]"
            >
              Ask About Career Programs
              <FiArrowRight />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="border border-slate-200 bg-white p-7">
              <FiUsers className="text-[#A51C30]" size={24} />

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Internship Programs
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Practical exposure for students and freshers through
                development, data, cybersecurity and technology-focused
                experiences.
              </p>

              <div className="mt-5 space-y-2">
                {[
                  "Project-based work",
                  "Professional workflow exposure",
                  "Portfolio development",
                  "Team collaboration",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <FiCheck className="text-[#A51C30]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-7">
              <FiBriefcase className="text-[#A51C30]" size={24} />

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Apprenticeship
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                A deeper practical learning path for learners who want
                structured exposure to software and technology work.
              </p>

              <div className="mt-5 space-y-2">
                {[
                  "Practical implementation",
                  "Development workflows",
                  "Professional documentation",
                  "Career preparation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <FiCheck className="text-[#A51C30]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-7 sm:col-span-2">
              <h3 className="text-xl font-bold text-slate-950">
                The goal is not just a certificate.
              </h3>

              <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
                Learners should be able to explain what they built, why they
                built it, what technologies they used, how the system works and
                what they learned from the experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipApprenticeship;