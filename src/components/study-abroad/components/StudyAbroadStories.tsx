import React from "react";
import {
  FiMessageCircle,
  FiStar,
  FiUsers,
} from "react-icons/fi";

import { studentStories } from "../data/studyAbroadData";

const StudyAbroadStories = () => {
  return (
    <section className="bg-slate-50 py-12 sm:py-14 lg:py-16">
      <div className="px-6 xl:px-30">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            <FiUsers />
            Student Stories
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            From plans to possibilities.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Every international education journey is different. These stories
            reflect the importance of having clarity at each stage.
          </p>
        </div>

        <div className="mt-7 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0 md:snap-none">
          {studentStories.map((story) => (
            <article
              key={story.name}
              className="w-[82vw] shrink-0 snap-start border border-slate-200 bg-white p-6 sm:w-[360px] md:w-auto"
            >
              <div className="flex items-center gap-1 text-[#A41034]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FiStar key={index} size={14} />
                ))}
              </div>

              <FiMessageCircle
                className="mt-5 text-slate-200"
                size={30}
              />

              <p className="mt-4 text-sm leading-7 text-slate-700">
                “{story.quote}”
              </p>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-950">
                  {story.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {story.program} · {story.destination}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-3 text-xs text-slate-400 md:hidden">
          Swipe to explore stories →
        </p>
      </div>
    </section>
  );
};

export default StudyAbroadStories;