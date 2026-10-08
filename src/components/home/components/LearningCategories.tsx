import React from "react";
import Link from "next/link";
import {
  FiCode,
  FiDatabase,
  FiBarChart2,
  FiShield,
  FiLock,
  FiCloud,
  FiCpu,
  FiBriefcase,
} from "react-icons/fi";

export const learningCategories = [
  {
    title: "Software Development",
    courses: "120+",
    description:
      "Build websites, web applications, mobile apps, APIs, backend systems and production-ready software.",
    icon: FiCode,
    href: "#software-development",
  },
  {
    title: "Data Science",
    courses: "80+",
    description:
      "Learn Python, statistics, machine learning, data visualization and practical data science workflows.",
    icon: FiDatabase,
    href: "#programs",
  },
  {
    title: "Data Analytics",
    courses: "70+",
    description:
      "Turn raw data into dashboards, reports, insights and business decisions using modern analytics tools.",
    icon: FiBarChart2,
    href: "#programs",
  },
  {
    title: "Cybersecurity",
    courses: "60+",
    description:
      "Understand networks, application security, security operations, vulnerabilities and defensive security.",
    icon: FiShield,
    href: "#programs",
  },
  {
    title: "Ethical Hacking",
    courses: "50+",
    description:
      "Learn penetration testing, web security, reconnaissance, vulnerability assessment and security testing.",
    icon: FiLock,
    href: "#programs",
  },
  {
    title: "Cloud & DevOps",
    courses: "45+",
    description:
      "Learn cloud infrastructure, CI/CD, containers, deployment, monitoring and modern DevOps workflows.",
    icon: FiCloud,
    href: "#programs",
  },
  {
    title: "AI & Machine Learning",
    courses: "40+",
    description:
      "Learn machine learning, deep learning, AI applications and practical intelligent systems.",
    icon: FiCpu,
    href: "#programs",
  },
  {
    title: "Career Programs",
    courses: "30+",
    description:
      "Move from learning to practical experience through projects, internships and apprenticeship programs.",
    icon: FiBriefcase,
    href: "#career-programs",
  },
];

const LearningCategories = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="px-6 xl:px-30">
        {/* Section Heading */}
        <div className="mb-9 flex items-center justify-center gap-3 sm:mb-11">
          <span className="h-0.5 w-8 bg-[#A51C30]/70 sm:w-12" />

          <h2 className="text-center text-xs font-bold uppercase tracking-[0.08em] text-slate-900 sm:text-sm">
            Browse Top Categories
          </h2>

          <span className="h-0.5 w-8 bg-[#A51C30]/70 sm:w-12" />
        </div>

        {/* Categories */}
        <div
          className="
            flex gap-8 overflow-x-auto pb-3
            snap-x snap-mandatory
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            sm:gap-10

            lg:grid
            lg:grid-cols-8
            lg:gap-5
            lg:overflow-visible
            lg:pb-0
            lg:snap-none
          "
        >
          {learningCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                href={category.href}
                key={category.title}
                className="
                  group flex w-[110px] shrink-0 snap-start
                  flex-col items-center text-center
                  transition-transform duration-300
                  hover:-translate-y-1

                  sm:w-[120px]

                  lg:w-full
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex h-16 w-16 items-center justify-center
                    text-[#A51C30]
                    transition-all duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon
                    size={42}
                    strokeWidth={1.5}
                    className="
                      transition-all duration-300
                      group-hover:text-[#A51C30]
                    "
                  />
                </div>

                {/* Category Title */}
                <h3
                  className="
                    mt-3 text-sm font-semibold
                    leading-5 text-slate-900
                    transition-colors duration-300
                    group-hover:text-[#A51C30]
                  "
                >
                  {category.title}
                </h3>

                {/* Course Count */}
                <p
                  className="
                    mt-1
                    text-[11px]
                    font-medium
                    leading-4
                    text-slate-500
                  "
                >
                  {category.courses} Courses
                </p>
              </Link>
            );
          })}
        </div>

        {/* Mobile Scroll Hint */}
        <p className="mt-5 text-center text-[11px] text-slate-400 lg:hidden">
          Swipe to explore more →
        </p>
      </div>
    </section>
  );
};

export default LearningCategories;