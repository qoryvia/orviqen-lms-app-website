import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiCode,
  FiFolder,
  FiGlobe,
  FiPlayCircle,
} from "react-icons/fi";

const LearningToolkit = () => {
  const tools = [
    {
      icon: FiBookOpen,
      title: "Learn",
      description:
        "Use structured courses and documentation to understand concepts.",
    },
    {
      icon: FiCode,
      title: "Practice",
      description:
        "Write code and solve problems until concepts become comfortable.",
    },
    {
      icon: FiFolder,
      title: "Build",
      description:
        "Turn concepts into portfolio projects and real applications.",
    },
    {
      icon: FiGlobe,
      title: "Explore",
      description:
        "Read articles and explore technologies beyond your current path.",
    },
  ];

  return (
    <section className="border-y border-slate-200 bg-slate-950">
      <div className="px-6 py-14 xl:px-30 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="flex h-10 w-10 items-center justify-center bg-[#A41034] text-white">
              <FiPlayCircle size={18} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#d8899d]">
              Build Your Learning System
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Don&apos;t just collect resources. Use them in a sequence.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              The best learning experience combines structured study,
              deliberate practice, project work and reflection.
            </p>

            <Link
              href="/courses"
              className="mt-7 inline-flex items-center gap-2 bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
            >
              Explore Learning Paths
              <FiArrowRight size={15} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <div
                  key={tool.title}
                  className="border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center bg-white/5 text-[#d8899d]">
                    <Icon size={17} />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-white">
                    {tool.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {tool.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningToolkit;