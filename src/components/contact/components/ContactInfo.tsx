import React from "react";
import {
  FiBookOpen,
  FiBriefcase,
  FiCheck,
  FiHeadphones,
} from "react-icons/fi";

import { contactChannels } from "../data/contactData";

const ContactInfo = () => {
  const getIcon = (icon: string) => {
    if (icon === "book") {
      return <FiBookOpen size={18} />;
    }

    if (icon === "briefcase") {
      return <FiBriefcase size={18} />;
    }

    return <FiHeadphones size={18} />;
  };

  return (
    <section className="self-start">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
        Before You Send
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        Start with what you need.
      </h2>

      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
        You do not need to know exactly what to ask. Share your goal or
        question and choose the area that best matches your requirement.
      </p>

      <div className="mt-7 space-y-3">
        {contactChannels.map((channel) => (
          <div
            key={channel.id}
            className="group border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-slate-50 text-[#A41034]">
                {getIcon(channel.icon)}
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-slate-950">
                  {channel.title}
                </h3>

                <p className="mt-1.5 text-sm leading-6 text-slate-500">
                  {channel.description}
                </p>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#A41034]">
                  {channel.action}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* What to include */}
      <div className="mt-6 border border-slate-200 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
          Helpful to include
        </p>

        <div className="mt-4 space-y-3">
          {[
            "What you are trying to achieve",
            "The course or program you are considering",
            "Any specific question or requirement",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
                <FiCheck size={12} />
              </span>

              <p className="text-sm leading-5 text-slate-600">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;