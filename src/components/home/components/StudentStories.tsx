import React from "react";
import {
  FiMessageCircle,
  FiStar,
  FiUsers,
} from "react-icons/fi";

const studentStories = [
  {
    name: "Aman Kumar",
    role: "Full Stack Learner",
    quote:
      "The biggest difference was having a clear roadmap. I knew what to learn next instead of jumping between random tutorials.",
  },
  {
    name: "Priya Singh",
    role: "Data Analytics Learner",
    quote:
      "The project-based approach helped me understand how SQL, dashboards and business questions connect together.",
  },
  {
    name: "Rahul Verma",
    role: "Cybersecurity Learner",
    quote:
      "The structured path made security concepts easier to follow and gave me a direction for practical learning.",
  },
  {
    name: "Neha Sharma",
    role: "Data Science Learner",
    quote:
      "Learning became much easier when Python, statistics and machine learning were taught as connected skills instead of separate topics.",
  },
  {
    name: "Arjun Mehta",
    role: "AI & Machine Learning Learner",
    quote:
      "The practical projects helped me understand why models work and how AI concepts are actually used in applications.",
  },
  {
    name: "Sneha Gupta",
    role: "Full Stack Learner",
    quote:
      "I used to feel overwhelmed by the number of technologies developers need to know. The learning path helped me focus on one step at a time.",
  },
  {
    name: "Vikas Yadav",
    role: "Cloud & DevOps Learner",
    quote:
      "Understanding Linux, Docker and deployment together gave me a much clearer picture of how modern applications actually run.",
  },
  {
    name: "Anjali Verma",
    role: "Data Analytics Learner",
    quote:
      "The exercises felt connected to real business problems, which made learning dashboards and data analysis much more meaningful.",
  },
  {
    name: "Rohit Singh",
    role: "Cybersecurity Learner",
    quote:
      "Instead of only reading about security concepts, I started thinking about how they apply to real systems and applications.",
  },
];

const StudentStories = () => {
  return (
    <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="px-6 xl:px-30">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 border border-[#A51C30]/15 bg-[#A51C30]/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A51C30]">
            <FiUsers />
            Student Stories
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            What learners say about their journey.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Hear how structured learning, practical projects and clear
            direction have helped students make progress toward their goals.
          </p>
        </div>

        {/* Student Stories */}
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 md:snap-none lg:grid-cols-3 xl:grid-cols-4">
          {studentStories.map((story) => (
            <article
              key={story.name}
              className="w-[82vw] shrink-0 snap-start border border-slate-200 bg-white p-6 sm:w-[360px] md:w-auto md:shrink"
            >
              <div className="flex items-center gap-1 text-[#A51C30]">
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
                  {story.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentStories;