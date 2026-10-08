import Image from "next/image";
import React from "react";
import heroImage from "@/assets/images/home-hero.png";
import {
  FiArrowDown,
  FiArrowRight,
  FiBookOpen,
  FiBriefcase,
  FiHeadphones,
  FiMessageCircle,
} from "react-icons/fi";

const ContactHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Black shadow */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      {/* Readability gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/45" />

      {/* Bottom shadow */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="px-6 xl:px-30">
        <div className="flex min-h-[590px] items-center py-16 sm:min-h-[620px] sm:py-20 lg:min-h-[650px] lg:py-24">
          <div className="w-full max-w-4xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
              <FiMessageCircle size={15} />
              Contact Eklavya
            </div>

            {/* Heading */}
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Have a question?
              <br />
              Let&apos;s find the right way forward.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8 lg:text-lg">
              Ask us about courses, learning paths, admissions, student
              support or partnerships. Tell us what you are looking for and
              we&apos;ll help you understand the next step.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-[#A41034] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
              >
                Send an Enquiry
                <FiArrowDown size={16} />
              </a>

              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                Read FAQs
                <FiArrowRight size={16} />
              </a>
            </div>

            {/* Quick contact categories */}
            <div className="mt-10 grid max-w-3xl grid-cols-1 border border-white/15 bg-black/25 backdrop-blur-sm sm:grid-cols-3">
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4 sm:border-b-0 sm:border-r">
                <FiBookOpen
                  size={18}
                  className="shrink-0 text-white/70"
                />

                <div>
                  <p className="text-xs font-semibold text-white">
                    Courses
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/55">
                    Programs & admissions
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4 sm:border-b-0 sm:border-r">
                <FiHeadphones
                  size={18}
                  className="shrink-0 text-white/70"
                />

                <div>
                  <p className="text-xs font-semibold text-white">
                    Student Support
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/55">
                    Existing learners
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-4">
                <FiBriefcase
                  size={18}
                  className="shrink-0 text-white/70"
                />

                <div>
                  <p className="text-xs font-semibold text-white">
                    Partnerships
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/55">
                    Institutions & businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;