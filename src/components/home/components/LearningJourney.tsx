import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { learningJourney } from "../data/homeData";

const LearningJourney = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="px-6 xl:px-30">
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {learningJourney.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="border border-slate-200 bg-white p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#A51C30] text-white">
                    <Icon size={21} />
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-slate-200 pt-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold text-slate-950">
              Build skills step by step instead of collecting random courses.
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Your roadmap should have a clear next step.
            </p>
          </div>

          <a
            href="#lead"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#A51C30]"
          >
            Find your next step
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;