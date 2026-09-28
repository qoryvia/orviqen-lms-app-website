"use client"
import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiClock,
} from "react-icons/fi";

import type { Course } from "../data/coursesData";
import { useRouter } from 'next/navigation'

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: CourseCardProps) => {
  const router = useRouter()

  return (
    <article onClick={() => router.push(`/courses/${course.slug}`)} className="group flex w-[84vw] shrink-0 snap-start flex-col overflow-hidden border border-slate-200 bg-white sm:w-[380px] md:w-auto md:shrink">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-900">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold leading-tight tracking-tight text-slate-950">
            {course.title}
          </h3>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400">
            <FiArrowRight size={15} />
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {course.description}
        </p>

        {/* Meta */}
        <div className="mt-4 flex items-center justify-between border-y border-slate-100 py-3 text-xs text-slate-500">
          <span>{course.level}</span>

          <span className="flex items-center gap-1.5">
            <FiClock className="text-[#A41034]" />
            {course.duration}
          </span>
        </div>

        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {course.skills.map((skill) => (
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
            href={course.href}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#A41034]"
          >
            Explore course
            <FiArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;