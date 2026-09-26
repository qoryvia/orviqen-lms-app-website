import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiClock,
} from "react-icons/fi";

import type { Program } from "../data/programsData";

type ProgramCardProps = {
  program: Program;
};

const ProgramCard = ({ program }: ProgramCardProps) => {
  const Icon = program.icon;

  return (
    <article
      className={`group flex w-[84vw] shrink-0 snap-start flex-col overflow-hidden border bg-white sm:w-[380px] md:w-auto md:shrink ${
        program.featured
          ? "border-[#A41034]/30 shadow-[0_12px_35px_rgba(15,23,42,0.07)]"
          : "border-slate-200"
      }`}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-900">
            {program.category}
          </span>
        </div>

        {/* Icon */}
        <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center bg-[#A41034] text-white">
          <Icon size={17} />
        </div>

        {program.featured && (
          <div className="absolute bottom-4 right-4">
            <span className="bg-[#A41034] px-2.5 py-1 text-[11px] font-semibold text-white">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold leading-tight tracking-tight text-slate-950">
            {program.title}
          </h3>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400">
            <FiArrowRight size={15} />
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {program.description}
        </p>

        {/* Meta */}
        <div className="mt-4 border-y border-slate-100 py-3">
          <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
            <span>{program.level}</span>

            <span className="flex items-center gap-1.5">
              <FiClock className="text-[#A41034]" />
              {program.duration}
            </span>
          </div>

          <p className="mt-1 text-[11px] text-slate-400">
            {program.format}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {program.skills.map((skill) => (
            <span
              key={skill}
              className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-5">
          <Link
            href={program.href}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#A41034]"
          >
            Explore program
            <FiArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProgramCard;