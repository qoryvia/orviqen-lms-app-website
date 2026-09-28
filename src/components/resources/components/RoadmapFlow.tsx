import React from "react";
import {
  FiArrowDown,
  FiCheckCircle,
  FiCompass,
  FiFlag,
  FiMap,
  FiSearch,
} from "react-icons/fi";

const RoadmapFlow = () => {
  const flow = [
    {
      number: "01",
      icon: FiCompass,
      title: "Discover",
      description:
        "Identify the technology domain or role that interests you.",
    },
    {
      number: "02",
      icon: FiSearch,
      title: "Choose",
      description:
        "Select your starting level and open a roadmap.",
    },
    {
      number: "03",
      icon: FiMap,
      title: "Learn",
      description:
        "Follow concepts, technologies and projects in sequence.",
    },
    {
      number: "04",
      icon: FiCheckCircle,
      title: "Practice",
      description:
        "Build projects and solve problems to reinforce the concepts.",
    },
    {
      number: "05",
      icon: FiFlag,
      title: "Advance",
      description:
        "Move toward advanced projects, specialization and career preparation.",
    },
  ];

  return (
    <section className="bg-slate-50">
      <div className="px-6 py-14 xl:px-30 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            How To Use The Roadmaps
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            One simple flow from curiosity to capability.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            You do not need to know everything before you begin. Start with
            an interest, then use each step to decide what to learn next.
          </p>
        </div>

        <div className="mt-9 grid gap-3 lg:grid-cols-5">
          {flow.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="relative border border-slate-200 bg-white p-5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
                    <Icon size={18} />
                  </div>

                  <span className="text-xs font-bold text-slate-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-base font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                {index < flow.length - 1 && (
                  <FiArrowDown
                    size={16}
                    className="absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 text-[#A41034] lg:bottom-auto lg:left-auto lg:right-[-10px] lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:rotate-[-90deg]"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadmapFlow;