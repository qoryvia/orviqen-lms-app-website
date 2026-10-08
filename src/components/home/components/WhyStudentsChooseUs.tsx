import React from "react";
import {
  LuUsersRound,
  LuTrophy,
  LuArrowRight,
} from "react-icons/lu";
import { SlGraduation } from "react-icons/sl";
import { SlControlPlay } from "react-icons/sl";
const WhyStudentsChooseUs = () => {
  const stats = [
    {
      icon: SlGraduation ,
      value: "50,000+",
      label: "Students Enrolled",
    },
    {
      icon: SlControlPlay ,
      value: "1,200+",
      label: "Online Courses",
    },
    {
      icon: LuUsersRound,
      value: "250+",
      label: "Expert Instructors",
    },
    {
      icon: LuTrophy,
      value: "98%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="bg-[#A51C30] py-8 sm:py-10 lg:py-11">
      <div className="px-6 xl:px-30">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1.95fr] lg:gap-10">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/75 sm:text-[10px]">
              Why Choose LearnHub?
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[26px]">
              Learn Smarter. Achieve More.
            </h2>

            <p className="mt-2 max-w-md text-[11px] leading-5 text-white/80 sm:text-xs sm:leading-5">
              We provide high-quality courses, expert guidance, and a
              supportive learning community to help you grow.
            </p>

            <a
              href="#lead"
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                bg-white
                px-4
                py-2.5
                text-[10px]
                font-semibold
                text-[#A51C30]
                transition-colors
                hover:bg-slate-100
                sm:px-5
                sm:py-2.5
                sm:text-[11px]
              "
            >
              Start Learning Today
              <LuArrowRight size={13} />
            </a>
          </div>

          {/* =====================================================
              RIGHT STATS
          ====================================================== */}
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`
                    flex
                    min-h-[120px]
                    flex-col
                    items-center
                    justify-center
                    px-4
                    text-center
                    sm:min-h-[135px]
                    sm:px-5
                    lg:min-h-[145px]
                    ${
                      index !== stats.length - 1
                        ? "border-r border-white/15"
                        : ""
                    }
                    ${
                      index < 2
                        ? "border-b border-white/15 sm:border-b-0"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="flex h-9 w-9 items-center justify-center text-white sm:h-10 sm:w-10">
                    <Icon
                      size={50}
                      strokeWidth={1.4}
                      className="sm:size-[36px]"
                    />
                  </div>

                  {/* Value */}
                  <div className="mt-3 text-xl font-semibold leading-none text-white sm:text-2xl lg:text-[23px]">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <p className="mt-2 text-[9px] font-medium text-white/75 sm:text-[10px]">
                    {stat.label}
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

export default WhyStudentsChooseUs;