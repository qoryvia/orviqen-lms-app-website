import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiClock,
  FiCheckCircle,
  FiBookOpen,
  FiLayers,
} from "react-icons/fi";

const featuredPrograms = [
  {
    title: "Full Stack Development",
    level: "Beginner to Advanced",
    duration: "6–9 Months",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
    description:
      "Build modern web applications from frontend to backend with real-world projects, APIs, databases and deployment.",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "SQL", "Git"],
    href: "#lead",
    featured: true,
  },
  {
    title: "Data Science",
    level: "Beginner to Advanced",
    duration: "5–8 Months",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    description:
      "Learn Python, statistics, visualization and machine learning through practical projects.",
    skills: ["Python", "Pandas", "NumPy", "ML", "Statistics"],
    href: "#lead",
  },
  {
    title: "Data Analytics",
    level: "Beginner to Job Ready",
    duration: "4–6 Months",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    description:
      "Turn raw data into useful business insights using analytics, dashboards and reporting.",
    skills: ["Excel", "SQL", "Python", "Power BI", "Dashboards"],
    href: "#lead",
  },
  {
    title: "AI & Machine Learning",
    level: "Intermediate to Advanced",
    duration: "5–8 Months",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=85",
    description:
      "Learn how intelligent systems are built using machine learning, deep learning and practical AI applications.",
    skills: ["Python", "ML", "Deep Learning", "NLP", "AI"],
    href: "#lead",
  },
  {
    title: "Cybersecurity",
    level: "Beginner to Advanced",
    duration: "5–8 Months",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85",
    description:
      "Develop practical security skills across Linux, networking, web security and ethical hacking.",
    skills: ["Linux", "Networking", "Web Security", "Pentesting"],
    href: "#lead",
  },
  {
    title: "Cloud & DevOps",
    level: "Beginner to Advanced",
    duration: "4–6 Months",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
    description:
      "Understand deployment, cloud infrastructure, automation, CI/CD and modern application operations.",
    skills: ["Linux", "Docker", "AWS", "CI/CD", "Monitoring"],
    href: "#lead",
  },
];

const FeaturedPrograms = () => {
  return (
    <section
      id="programs"
      className="bg-[#f7f6f3] py-14 sm:py-16 lg:py-20"
    >
      <div className="px-6 xl:px-30">
        {/* Section Intro */}
        <div className="flex flex-col gap-5 border-b border-slate-200 pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 border border-[#A51C30]/15 bg-[#A51C30]/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A51C30]">
              <FiBookOpen />
              Featured Programs
            </div>

            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Build skills for the work you want to do.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Practical learning paths built around in-demand technologies,
              projects and real-world problem solving.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <FiLayers className="text-[#A51C30]" />
            <span>6 career-focused learning paths</span>
          </div>
        </div>

        {/* Program Cards */}
        <div
          className="
            mt-7 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 md:snap-none
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {featuredPrograms.map((program, index) => (
            <article
              key={program.title}
              className={`group flex w-[84vw] shrink-0 snap-start flex-col overflow-hidden border bg-white transition-colors duration-200 sm:w-[380px] md:w-auto md:shrink ${
                program.featured
                  ? "border-[#A51C30]/30 shadow-[0_12px_35px_rgba(15,23,42,0.07)]"
                  : "border-slate-200 hover:border-slate-300 hover:shadow-[0_12px_35px_rgba(15,23,42,0.07)]"
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden sm:h-60">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                {/* Level */}
                <div className="absolute left-4 top-4">
                  <span className="bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-900 shadow-sm">
                    {program.level}
                  </span>
                </div>

                {/* Program Number */}
                <div className="absolute bottom-4 left-4 text-xs font-semibold tracking-[0.16em] text-white/70">
                  0{index + 1}
                </div>

                {/* Featured */}
                {program.featured && (
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-[#A51C30] px-2.5 py-1 text-[11px] font-semibold text-white">
                      Popular
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

                {/* Duration */}
                <div className="mt-4 flex items-center gap-2 border-y border-slate-100 py-3 text-xs font-medium text-slate-500">
                  <FiClock className="text-[#A51C30]" />
                  {program.duration}
                </div>

                {/* Skills */}
                <div className="mt-4">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Core Skills
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {program.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-5">
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-950 transition-colors hover:text-[#A51C30]"
                  >
                    Explore program
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Scroll Hint */}
        <div className="mt-3 text-xs text-slate-400 md:hidden">
          Swipe to explore programs →
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <FiCheckCircle className="text-[#A51C30]" />
                Need help choosing a program?
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Tell us your goals and we&apos;ll help you choose a suitable
                learning path.
              </p>
            </div>

            <a
              href="#lead"
              className="inline-flex items-center justify-center gap-2 bg-[#A51C30] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#8E1829]"
            >
              Get Program Guidance
              <FiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;