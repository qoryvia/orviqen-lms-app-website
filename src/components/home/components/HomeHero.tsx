import React from "react";
import Link from "next/link"
import {
  FiArrowRight,
  FiBookOpen,
  FiCheck,
  FiChevronDown,
  FiPhone,
  FiTarget,
  FiUser,
} from "react-icons/fi";
import heroImage from "../../../assets/images/home-hero.png";

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            `url('${heroImage.src}')`,
        }}
      />

      {/* Readability Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/35" />

      {/* Bottom Soft Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/30 to-transparent" />

      {/* Crimson Glow */}
      <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-[#A51C30]/10 blur-3xl" />

      <div className="relative px-6 py-16 sm:py-20 lg:py-24 xl:px-30">
        <div className="mx-auto max-w-[1700px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] xl:gap-20">
            {/* LEFT CONTENT */}
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-[#A51C30]/20 bg-white/80 px-4 py-2 text-sm font-semibold text-[#A51C30] backdrop-blur-sm">
                <FiTarget size={15} />
                Learn. Build. Practice. Grow.
              </div>

              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
                Build Skills That
                <span className="block text-[#A51C30]">
                  Move Your Career Forward.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Learn Software Development, Data Science, Data Analytics,
                Cybersecurity, Ethical Hacking, AI, Cloud and more through
                structured, practical and career-focused programs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#programs"
                  className="inline-flex items-center justify-center gap-2 bg-[#A51C30] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#A51C30]/20 transition hover:bg-[#8E1729]"
                >
                  Explore Courses
                  <FiArrowRight />
                </Link>

                <Link
                  href="#lead-form"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white/80 px-6 py-4 text-sm font-semibold text-slate-900 backdrop-blur-sm transition hover:border-[#A51C30] hover:text-[#A51C30]"
                >
                  Find Your Learning Path
                  <FiTarget />
                </Link>
              </div>

              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <span className="flex h-7 w-7 items-center justify-center bg-[#A51C30]/10 text-[#A51C30]">
                    <FiCheck size={14} />
                  </span>
                  Structured Learning
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <span className="flex h-7 w-7 items-center justify-center bg-[#A51C30]/10 text-[#A51C30]">
                    <FiCheck size={14} />
                  </span>
                  Practical Projects
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <span className="flex h-7 w-7 items-center justify-center bg-[#A51C30]/10 text-[#A51C30]">
                    <FiCheck size={14} />
                  </span>
                  Career Focused
                </div>
              </div>
            </div>

            {/* RIGHT LEAD FORM */}
            <div
              id="lead-form"
              className="relative z-10 border border-white/60 bg-white/95 shadow-2xl shadow-slate-900/15 backdrop-blur-md"
            >
<div className="border-b border-slate-100 px-6 py-6 sm:px-7">
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#A51C30]/10 text-[#A51C30]">
      <FiBookOpen size={19} />
    </div>

    <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
      Find Your Course
    </h2>
  </div>

  <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
    Tell us what you want to learn and we’ll help you choose the right path.
  </p>
</div>

              <form className="space-y-5 p-6 sm:p-7">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Name
                  </label>

                  <div className="relative">
                    <FiUser
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="h-12 w-full border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Phone Number
                  </label>

                  <div className="relative">
                    <FiPhone
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="h-12 w-full border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30]"
                    />
                  </div>
                </div>

                {/* Course Domain */}
                <div>
                  <label
                    htmlFor="course"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    What do you want to learn?
                  </label>

                  <div className="relative">
                    <select
                      id="course"
                      name="course"
                      defaultValue=""
                      required
                      className="h-12 w-full appearance-none border border-slate-200 bg-white px-4 pr-10 text-sm text-slate-700 outline-none transition focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30]"
                    >
                      <option value="" disabled>
                        Select course domain
                      </option>

                      <option value="software-development">
                        Software Development
                      </option>

                      <option value="web-development">Web Development</option>

                      <option value="mobile-development">
                        Mobile Development
                      </option>

                      <option value="data-science">Data Science</option>

                      <option value="data-analytics">Data Analytics</option>

                      <option value="ai-ml">AI &amp; Machine Learning</option>

                      <option value="cybersecurity">Cybersecurity</option>

                      <option value="ethical-hacking">Ethical Hacking</option>

                      <option value="cloud-devops">Cloud &amp; DevOps</option>

                      <option value="internship">Internship</option>

                      <option value="apprenticeship">Apprenticeship</option>
                    </select>

                    <FiChevronDown
                      size={17}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                  </div>
                </div>

                {/* CTA */}
                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center gap-2 bg-[#A51C30] px-6 text-sm font-semibold text-white transition hover:bg-[#8E1729]"
                >
                  Get Course Guidance
                  <FiArrowRight size={17} />
                </button>

                <p className="text-center text-xs leading-5 text-slate-400">
                  Our team will contact you regarding your selected learning
                  path.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
