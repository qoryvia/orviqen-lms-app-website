import Link from "next/link";
import React from "react";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiFileText,
  FiFolder,
  FiMap,
} from "react-icons/fi";

import { resourceLibrary } from "../data/resourcesData";

const RESOURCE_ICONS: Record<
  string,
  React.ComponentType<{ size?: number }>
> = {
  map: FiMap,
  book: FiBookOpen,
  code: FiCode,
  folder: FiFolder,
  file: FiFileText,
  briefcase: FiBriefcase,
};

const ResourceLibrary = () => {
  return (
    <section className="bg-white">
      <div className="px-6 py-14 xl:px-30 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Resource Library
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            More than roadmaps.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Use roadmaps as your starting point, then move into courses,
            projects, practice and career resources.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resourceLibrary.map((resource) => {
            const Icon =
              RESOURCE_ICONS[
                resource.icon
              ] || FiMap;

            const isExternal =
              resource.href.startsWith("/");

            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-slate-50 text-[#A41034]">
                    <Icon size={18} />
                  </div>

                  <FiArrowUpRight
                    size={17}
                    className="text-slate-300 transition-colors group-hover:text-[#A41034]"
                  />
                </div>

                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A41034]">
                  {resource.type}
                </p>

                <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
                  {resource.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {resource.description}
                </p>
              </>
            );

            if (isExternal) {
              return (
                <Link
                  key={resource.id}
                  href={resource.href}
                  className="group border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={resource.id}
                href={resource.href}
                className="group border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;