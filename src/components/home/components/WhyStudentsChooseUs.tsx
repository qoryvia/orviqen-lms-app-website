import React from "react";
import {
  FiBookOpen,
  FiCode,
  FiGitBranch,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

const WhyStudentsChooseUs = () => {
  const points = [
    {
      icon: FiTarget,
      title: "Clear Learning Paths",
      description:
        "Students know what to learn, why it matters and what comes next.",
    },
    {
      icon: FiCode,
      title: "Practical Skills",
      description:
        "Concepts are connected to implementation, projects and real development tasks.",
    },
    {
      icon: FiGitBranch,
      title: "Industry Workflows",
      description:
        "Git, APIs, databases, testing, deployment and collaboration are part of the learning journey.",
    },
    {
      icon: FiBookOpen,
      title: "Structured Learning",
      description:
        "Learning is organized into focused paths instead of disconnected topics.",
    },
    {
      icon: FiUsers,
      title: "Career Direction",
      description:
        "Students can connect learning with internships, apprenticeships and career preparation.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="px-6 xl:px-30">

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="border border-slate-200 bg-white p-6"
              >
                <Icon size={24} className="text-[#A51C30]" />

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-[#A51C30] p-8 sm:p-10 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                For Students & Freshers
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Stop asking “What should I learn next?”
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
                Start with a structured roadmap based on your current level and
                your target career direction.
              </p>
            </div>

            <a
              href="#lead"
              className="inline-flex items-center justify-center bg-white px-6 py-4 text-sm font-semibold text-[#A51C30] transition hover:bg-slate-100"
            >
              Get My Roadmap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStudentsChooseUs;