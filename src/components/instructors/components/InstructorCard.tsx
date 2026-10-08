import Link from "next/link";
import React from "react";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiMapPin,
  FiStar,
  FiUsers,
} from "react-icons/fi";

import type { Instructor } from "../data/instructorsData";

interface InstructorCardProps {
  instructor: Instructor;
}

const avatarBackgrounds = [
  "bg-[#A41034]",
  "bg-slate-800",
  "bg-slate-700",
  "bg-[#7B1732]",
];

const InstructorCard = ({
  instructor,
}: InstructorCardProps) => {
  const avatarIndex =
    instructor.name.charCodeAt(0) % avatarBackgrounds.length;

  return (
    <article className="group flex h-full flex-col border border-slate-200 bg-white transition-colors hover:border-slate-300">
      {/* Top */}
      <div className="border-b border-slate-100 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center text-lg font-semibold text-white ${
                avatarBackgrounds[avatarIndex]
              }`}
            >
              {instructor.initials}
            </div>

            <div className="min-w-0">
              <h3 className="text-base font-semibold text-slate-950">
                {instructor.name}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {instructor.shortRole}
              </p>

              <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-400">
                <FiMapPin size={12} />
                {instructor.location}
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1 text-[#A41034]">
            <FiStar
              size={13}
              className="fill-current"
            />

            <span className="text-xs font-semibold">
              {instructor.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-600">
          {instructor.bio}
        </p>
      </div>

      {/* Skills */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            Expertise
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {instructor.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-6 grid grid-cols-2 border border-slate-100">
          <div className="border-r border-slate-100 px-3 py-3">
            <div className="flex items-center gap-2 text-slate-400">
              <FiBookOpen size={14} />

              <span className="text-[10px] uppercase tracking-[0.1em]">
                Courses
              </span>
            </div>

            <p className="mt-1 text-sm font-semibold text-slate-900">
              {instructor.courses}
            </p>
          </div>

          <div className="px-3 py-3">
            <div className="flex items-center gap-2 text-slate-400">
              <FiUsers size={14} />

              <span className="text-[10px] uppercase tracking-[0.1em]">
                Learners
              </span>
            </div>

            <p className="mt-1 text-sm font-semibold text-slate-900">
              {instructor.students}
            </p>
          </div>
        </div>

        <Link
          href={`/instructors/${instructor.id}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#A41034] transition-colors hover:text-[#8f0e2d]"
        >
          View instructor
          <FiArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
};

export default InstructorCard;