"use client";

import React from "react";
import {
  FiAward,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";

import type { Course } from "@/components/courses/data/coursesData";

interface CourseCertificateProps {
  course: Course;
}

const CourseCertificate = ({
  course,
}: CourseCertificateProps) => {
  if (!course.certification) {
    return null;
  }

  // Mock certificate data
  const studentName = "Aarav Sharma";
  const certificateId = "EKE-2026-001247";
  const issueDate = "September 30, 2026";

  return (
    <section>
      {/* Section Heading */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
          Certification
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Showcase your achievement.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
          Complete the learning path and receive a professional
          certificate from EklavyaED.
        </p>
      </div>

      {/* Certificate Showcase */}
      <div className="mt-7 border border-slate-200 bg-slate-100 p-3 sm:p-5">
        {/* =====================================================
            16:9 CERTIFICATE
        ====================================================== */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#faf9f6] shadow-2xl">
          {/* Outer Border */}
          <div className="absolute inset-[1.2%] border-[2px] border-[#A41034]/70" />

          {/* Inner Border */}
          <div className="absolute inset-[2.3%] border border-slate-300" />

          {/* Decorative Top Line */}
          <div className="absolute left-[7%] right-[7%] top-[5.5%] h-px bg-[#A41034]/30" />

          {/* Decorative Bottom Line */}
          <div className="absolute bottom-[5.5%] left-[7%] right-[7%] h-px bg-[#A41034]/30" />

          {/* Watermark */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="select-none text-[clamp(5rem,15vw,14rem)] font-serif font-bold tracking-[0.12em] text-slate-900/[0.025]">
              EKLAVYA
            </span>
          </div>

          {/* Top Left Decorative Mark */}
          <div className="absolute left-[4.2%] top-[4.2%] h-10 w-10 border-l-2 border-t-2 border-[#A41034] sm:h-14 sm:w-14">
            <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-[#A41034]" />
          </div>

          {/* Top Right Decorative Mark */}
          <div className="absolute right-[4.2%] top-[4.2%] h-10 w-10 border-r-2 border-t-2 border-[#A41034] sm:h-14 sm:w-14">
            <div className="absolute -bottom-1 -left-1 h-2 w-2 bg-[#A41034]" />
          </div>

          {/* Bottom Left Decorative Mark */}
          <div className="absolute bottom-[4.2%] left-[4.2%] h-10 w-10 border-b-2 border-l-2 border-[#A41034] sm:h-14 sm:w-14">
            <div className="absolute -right-1 -top-1 h-2 w-2 bg-[#A41034]" />
          </div>

          {/* Bottom Right Decorative Mark */}
          <div className="absolute bottom-[4.2%] right-[4.2%] h-10 w-10 border-b-2 border-r-2 border-[#A41034] sm:h-14 sm:w-14">
            <div className="absolute -left-1 -top-1 h-2 w-2 bg-[#A41034]" />
          </div>

          {/* Main Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-[8%] text-center">
            {/* Company */}
            <div>
              <p className="text-[clamp(8px,1.1vw,15px)] font-bold uppercase tracking-[0.3em] text-[#A41034]">
                EKLAVYAED
              </p>

              <div className="mx-auto mt-1 h-px w-16 bg-[#A41034]/50 sm:w-24" />

              <p className="mt-1 text-[clamp(5px,0.65vw,9px)] uppercase tracking-[0.22em] text-slate-400">
                Learning • Skills • Excellence
              </p>
            </div>

            {/* Award Icon */}
            <div className="mt-[2.5%] flex h-[clamp(30px,4.5vw,64px)] w-[clamp(30px,4.5vw,64px)] items-center justify-center border border-[#A41034]/30 bg-[#A41034]/5 text-[#A41034]">
              <FiAward
                className="h-[55%] w-[55%]"
                strokeWidth={1.4}
              />
            </div>

            {/* Certificate Title */}
            <p className="mt-[1.8%] text-[clamp(7px,1vw,14px)] font-medium uppercase tracking-[0.3em] text-slate-500">
              Certificate of Completion
            </p>

            {/* Student */}
            <h3 className="mt-[1.2%] font-serif text-[clamp(20px,4vw,58px)] font-semibold leading-none tracking-tight text-slate-900">
              {studentName}
            </h3>

            {/* Student Line */}
            <div className="mt-[1.5%] h-px w-[35%] bg-slate-300" />

            {/* Description */}
            <p className="mt-[1.5%] max-w-[72%] text-[clamp(7px,0.95vw,13px)] leading-relaxed text-slate-500">
              has successfully completed the prescribed learning
              requirements for
            </p>

            {/* Course Name */}
            <h4 className="mt-[1%] max-w-[78%] text-[clamp(12px,2vw,27px)] font-semibold leading-tight text-[#A41034]">
              {course.title}
            </h4>

            {/* Certification */}
            <p className="mt-[0.7%] max-w-[70%] text-[clamp(6px,0.8vw,11px)] leading-relaxed text-slate-500">
              {course.certification}
            </p>

            {/* Bottom Information */}
            <div className="absolute bottom-[10%] left-[9%] right-[9%] grid grid-cols-3 items-end">
              {/* Issue Date */}
              <div className="text-left">
                <p className="text-[clamp(5px,0.6vw,9px)] uppercase tracking-[0.14em] text-slate-400">
                  Issue Date
                </p>

                <div className="mt-1 h-px w-[85%] bg-slate-300" />

                <p className="mt-1 text-[clamp(6px,0.75vw,10px)] font-semibold text-slate-700">
                  {issueDate}
                </p>
              </div>

              {/* Seal */}
              <div className="flex justify-center">
                <div className="relative flex h-[clamp(38px,5.5vw,76px)] w-[clamp(38px,5.5vw,76px)] items-center justify-center border-2 border-[#A41034]/70 bg-[#faf9f6]">
                  <div className="absolute inset-[10%] border border-[#A41034]/40" />

                  <div className="relative flex flex-col items-center justify-center text-center">
                    <FiShield
                      className="h-[30%] w-[30%] text-[#A41034]"
                      strokeWidth={1.5}
                    />

                    <span className="mt-0.5 text-[clamp(4px,0.5vw,7px)] font-bold uppercase tracking-[0.12em] text-[#A41034]">
                      Verified
                    </span>

                    <span className="text-[clamp(4px,0.45vw,6px)] uppercase tracking-[0.08em] text-slate-400">
                      EklavyaED
                    </span>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="text-right">
                <div className="ml-auto w-[85%]">
                  <p className="font-serif text-[clamp(10px,1.3vw,17px)] italic text-slate-800">
                    Vivek Sharma
                  </p>

                  <div className="mt-1 h-px bg-slate-300" />

                  <p className="mt-1 text-[clamp(5px,0.6vw,9px)] font-semibold uppercase tracking-[0.1em] text-slate-500">
                    Vivek Sharma
                  </p>

                  <p className="text-[clamp(4px,0.55vw,8px)] uppercase tracking-[0.12em] text-slate-400">
                    CEO & Founder
                  </p>

                  <p className="text-[clamp(4px,0.5vw,7px)] uppercase tracking-[0.12em] text-[#A41034]">
                    EklavyaED
                  </p>
                </div>
              </div>
            </div>

            {/* Certificate ID */}
            <div className="absolute bottom-[3.8%] left-1/2 -translate-x-1/2 whitespace-nowrap">
              <p className="text-[clamp(4px,0.5vw,7px)] uppercase tracking-[0.16em] text-slate-400">
                Certificate ID:{" "}
                <span className="font-semibold text-slate-600">
                  {certificateId}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Certificate Information */}
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="flex items-start gap-3 border border-slate-200 bg-white p-4">
            <FiCheckCircle
              size={17}
              className="mt-0.5 shrink-0 text-[#A41034]"
            />

            <div>
              <p className="text-xs font-semibold text-slate-900">
                Completion Certificate
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-500">
                Recognition of successful completion of the
                learning program.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 border border-slate-200 bg-white p-4">
            <FiAward
              size={17}
              className="mt-0.5 shrink-0 text-[#A41034]"
            />

            <div>
              <p className="text-xs font-semibold text-slate-900">
                Student Achievement
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-500">
                A credential students can showcase as part of
                their learning journey.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 border border-slate-200 bg-white p-4">
            <FiShield
              size={17}
              className="mt-0.5 shrink-0 text-[#A41034]"
            />

            <div>
              <p className="text-xs font-semibold text-slate-900">
                Certificate Identity
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-500">
                Each certificate can carry a unique certificate
                identification number.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCertificate;