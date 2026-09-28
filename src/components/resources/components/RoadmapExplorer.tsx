"use client";

import React, { useMemo, useState } from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiLock,
  FiMap,
  FiServer,
  FiShield,
  FiSmartphone,
  FiTerminal,
} from "react-icons/fi";

import {
  RoadmapLevel,
  resourceCategories,
  roadmaps,
} from "../data/resourcesData";

const ROADMAPS_PER_PAGE = 8;

const ROADMAP_ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  code: FiCode,
  server: FiServer,
  layers: FiLayers,
  python: FiTerminal,
  java: FiCode,
  algorithm: FiGitBranch,
  brain: FiCpu,
  chart: FiDatabase,
  analytics: FiDatabase,
  shield: FiShield,
  lock: FiLock,
  cloud: FiLayers,
  smartphone: FiSmartphone,
};

const levels: Array<RoadmapLevel | "All"> = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

const RoadmapExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedLevel, setSelectedLevel] = useState<RoadmapLevel | "All">(
    "All",
  );

  const [selectedRoadmapId, setSelectedRoadmapId] = useState(
    roadmaps[0]?.id || "",
  );

  const [currentPage, setCurrentPage] = useState(1);

  const filteredRoadmaps = useMemo(() => {
    return roadmaps.filter((roadmap) => {
      const matchesCategory =
        selectedCategory === "All" || roadmap.category === selectedCategory;

      const matchesLevel =
        selectedLevel === "All" || roadmap.level.includes(selectedLevel);

      return matchesCategory && matchesLevel;
    });
  }, [selectedCategory, selectedLevel]);

  const totalPages = Math.ceil(filteredRoadmaps.length / ROADMAPS_PER_PAGE);

  const safeCurrentPage =
    totalPages > 0 ? Math.min(currentPage, totalPages) : 1;

  const visibleRoadmaps = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * ROADMAPS_PER_PAGE;

    return filteredRoadmaps.slice(startIndex, startIndex + ROADMAPS_PER_PAGE);
  }, [filteredRoadmaps, safeCurrentPage]);

  const selectedRoadmap =
    filteredRoadmaps.find((roadmap) => roadmap.id === selectedRoadmapId) ||
    filteredRoadmaps[0];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);

    const nextRoadmap = roadmaps.find(
      (roadmap) => category === "All" || roadmap.category === category,
    );

    if (nextRoadmap) {
      setSelectedRoadmapId(nextRoadmap.id);
    }
  };

  const handleLevelChange = (level: RoadmapLevel | "All") => {
    setSelectedLevel(level);
    setCurrentPage(1);

    const nextRoadmap = roadmaps.find(
      (roadmap) =>
        (selectedCategory === "All" || roadmap.category === selectedCategory) &&
        (level === "All" || roadmap.level.includes(level)),
    );

    if (nextRoadmap) {
      setSelectedRoadmapId(nextRoadmap.id);
    }
  };

  const handleRoadmapSelect = (roadmapId: string) => {
    setSelectedRoadmapId(roadmapId);

    const roadmapIndex = filteredRoadmaps.findIndex(
      (roadmap) => roadmap.id === roadmapId,
    );

    if (roadmapIndex !== -1) {
      const nextPage = Math.floor(roadmapIndex / ROADMAPS_PER_PAGE) + 1;

      setCurrentPage(nextPage);
    }
  };

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    const firstRoadmap = filteredRoadmaps[(page - 1) * ROADMAPS_PER_PAGE];

    if (firstRoadmap) {
      setSelectedRoadmapId(firstRoadmap.id);
    }

    document.getElementById("roadmap-explorer")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="roadmap-explorer"
      className="border-y border-slate-200 bg-white"
    >
      <div className="px-6 py-14 xl:px-30 lg:py-20">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              Roadmap Explorer
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Find a path that matches your direction.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Filter the roadmap library by domain and experience level, then
              open a roadmap to see the complete learning journey.
            </p>
          </div>

          <div className="shrink-0 border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
              Available Roadmaps
            </p>

            <p className="mt-1 text-xl font-semibold text-slate-950">
              {filteredRoadmaps.length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-9 w-full max-w-full overflow-hidden border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
            {/* Domain */}
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#A41034] text-[10px] font-bold text-white">
                  01
                </span>

                <p className="min-w-0 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Choose a domain
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-wrap">
                {resourceCategories.map((category) => {
                  const active = selectedCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleCategoryChange(category)}
                      className={`min-w-0 border px-3 py-2 text-xs font-semibold transition-colors sm:px-4 lg:w-auto lg:shrink-0 ${
                        active
                          ? "border-[#A41034] bg-[#A41034] text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Experience */}
            <div className="min-w-0 lg:w-auto">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-slate-950 text-[10px] font-bold text-white">
                  02
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Experience
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:flex">
                {levels.map((level) => {
                  const active = selectedLevel === level;

                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => handleLevelChange(level)}
                      className={`min-w-0 border px-4 py-2.5 text-xs font-semibold transition-colors ${
                        active
                          ? "border-slate-950 bg-slate-950 text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {level}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Directory */}
        {visibleRoadmaps.length > 0 ? (
          <>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {visibleRoadmaps.map((roadmap) => {
                const Icon = ROADMAP_ICONS[roadmap.icon] || FiMap;

                const active = selectedRoadmap?.id === roadmap.id;

                return (
                  <article
                    key={roadmap.id}
                    className={`group relative overflow-hidden border bg-white transition-all duration-300 ${
                      active
                        ? "border-[#A41034] shadow-lg shadow-[#A41034]/5"
                        : "border-slate-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
                    }`}
                  >
                    {/* Top accent */}
                    <div
                      className={`h-1 w-full ${
                        active ? "bg-[#A41034]" : "bg-slate-100"
                      }`}
                    />

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className={`flex h-11 w-11 items-center justify-center ${
                            active
                              ? "bg-[#A41034] text-white"
                              : "bg-slate-50 text-[#A41034]"
                          }`}
                        >
                          <Icon size={19} />
                        </div>

                        <span className="border border-slate-200 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                          {roadmap.steps.length} Steps
                        </span>
                      </div>

                      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#A41034]">
                        {roadmap.category}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
                        {roadmap.title}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                        {roadmap.description}
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <div className="border border-slate-100 bg-slate-50 p-3">
                          <p className="text-[10px] uppercase tracking-[0.08em] text-slate-400">
                            Duration
                          </p>

                          <div className="mt-1 flex items-center gap-1.5">
                            <FiClock size={12} className="text-[#A41034]" />

                            <span className="text-xs font-semibold text-slate-700">
                              {roadmap.estimatedDuration}
                            </span>
                          </div>
                        </div>

                        <div className="border border-slate-100 bg-slate-50 p-3">
                          <p className="text-[10px] uppercase tracking-[0.08em] text-slate-400">
                            Level
                          </p>

                          <span className="mt-1 block truncate text-xs font-semibold text-slate-700">
                            {roadmap.level.join(" / ")}
                          </span>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {roadmap.technologies.slice(0, 4).map((technology) => (
                          <span
                            key={technology}
                            className="bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500"
                          >
                            {technology}
                          </span>
                        ))}

                        {roadmap.technologies.length > 4 && (
                          <span className="bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-400">
                            +{roadmap.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRoadmapSelect(roadmap.id)}
                        className={`mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-3 text-xs font-semibold transition-colors ${
                          active
                            ? "bg-[#A41034] text-white hover:bg-[#8f0e2d]"
                            : "border border-slate-200 bg-white text-slate-700 hover:border-[#A41034] hover:text-[#A41034]"
                        }`}
                      >
                        {active ? "Roadmap Selected" : "View Roadmap"}

                        <FiArrowRight size={14} />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  Showing{" "}
                  <span className="font-semibold text-slate-700">
                    {(safeCurrentPage - 1) * ROADMAPS_PER_PAGE + 1}
                  </span>{" "}
                  –{" "}
                  <span className="font-semibold text-slate-700">
                    {Math.min(
                      safeCurrentPage * ROADMAPS_PER_PAGE,
                      filteredRoadmaps.length,
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-slate-700">
                    {filteredRoadmaps.length}
                  </span>{" "}
                  roadmaps
                </p>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => changePage(safeCurrentPage - 1)}
                    disabled={safeCurrentPage === 1}
                    aria-label="Previous page"
                    className="inline-flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <FiChevronLeft size={16} />
                  </button>

                  {Array.from(
                    {
                      length: totalPages,
                    },
                    (_, index) => index + 1,
                  ).map((page) => {
                    const active = page === safeCurrentPage;

                    return (
                      <button
                        key={page}
                        type="button"
                        onClick={() => changePage(page)}
                        aria-current={active ? "page" : undefined}
                        className={`inline-flex h-9 min-w-9 items-center justify-center border px-3 text-xs font-semibold transition-colors ${
                          active
                            ? "border-[#A41034] bg-[#A41034] text-white"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onClick={() => changePage(safeCurrentPage + 1)}
                    disabled={safeCurrentPage === totalPages}
                    aria-label="Next page"
                    className="inline-flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <FiChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="mt-8 border border-slate-200 bg-slate-50 px-6 py-16 text-center">
            <FiMap size={28} className="mx-auto text-slate-300" />

            <h3 className="mt-4 text-xl font-semibold text-slate-950">
              No roadmaps match your filters.
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Try another domain or experience level.
            </p>
          </div>
        )}

        {/* Selected Roadmap */}
        {selectedRoadmap && (
          <div className="mt-12 border border-slate-200 bg-white">
            {/* Summary */}
            <div className="border-b border-slate-200 bg-slate-950 px-6 py-8 text-white sm:px-8 lg:px-10">
              <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#dfa0b0]">
                    <FiBookOpen size={14} />
                    Learning Journey
                  </div>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {selectedRoadmap.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {selectedRoadmap.description}
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap gap-2">
                  <div className="border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-slate-500">
                      Duration
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {selectedRoadmap.estimatedDuration}
                    </p>
                  </div>

                  <div className="border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-slate-500">
                      Steps
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {selectedRoadmap.steps.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Header */}
            <div className="border-b border-slate-200 px-6 py-7 sm:px-8 lg:px-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
                    Roadmap Flow
                  </p>

                  <h4 className="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                    Follow these stages in order
                  </h4>
                </div>

                <p className="text-xs text-slate-400">
                  Fundamentals → Practice → Projects → Advanced
                </p>
              </div>

              {/* Visual Step Flow */}
              <div className="mt-8 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex min-w-[720px] items-start">
                  {selectedRoadmap.steps.map((step, index) => {
                    const isLast = index === selectedRoadmap.steps.length - 1;

                    return (
                      <div key={step.id} className="flex flex-1 items-start">
                        <div className="min-w-0 flex-1 text-center">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center border-2 border-[#A41034] bg-[#A41034]/5 text-sm font-bold text-[#A41034]">
                            {String(step.step).padStart(2, "0")}
                          </div>

                          <p className="mx-auto mt-3 max-w-[130px] text-xs font-semibold leading-5 text-slate-700">
                            {step.title}
                          </p>
                        </div>

                        {!isLast && (
                          <div className="mt-6 h-px flex-1 bg-slate-200" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Detailed Journey */}
            <div className="divide-y divide-slate-200">
              {selectedRoadmap.steps.map((step, index) => (
                <div
                  key={step.id}
                  className="grid gap-7 px-6 py-7 sm:px-8 lg:grid-cols-[100px_minmax(0,1fr)_280px] lg:px-10"
                >
                  {/* Number */}
                  <div className="flex items-start gap-4 lg:block">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#A41034] text-sm font-bold text-white">
                      {String(step.step).padStart(2, "0")}
                    </div>

                    <div className="lg:mt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                        Stage
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-700">
                        {index + 1} / {selectedRoadmap.steps.length}
                      </p>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div>
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <h5 className="text-xl font-semibold tracking-tight text-slate-950">
                          {step.title}
                        </h5>

                        <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-400">
                          <FiClock size={12} />
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>

                    <div className="mt-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                        Skills
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {step.skills.map((skill) => (
                          <span
                            key={skill}
                            className="border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-slate-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Resources / Project */}
                  <div className="border border-slate-200 bg-slate-50 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#A41034]">
                      Focus
                    </p>

                    <div className="mt-3 space-y-2.5">
                      {step.resources.slice(0, 4).map((resource) => (
                        <div key={resource} className="flex items-start gap-2">
                          <FiCheck
                            size={13}
                            className="mt-1 shrink-0 text-[#A41034]"
                          />

                          <span className="text-xs leading-5 text-slate-600">
                            {resource}
                          </span>
                        </div>
                      ))}
                    </div>

                    {step.project && (
                      <div className="mt-5 border-t border-slate-200 pt-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#A41034]">
                          Build
                        </p>

                        <p className="mt-1 text-sm font-semibold leading-6 text-slate-800">
                          {step.project}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoadmapExplorer;
