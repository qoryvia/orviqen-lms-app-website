import React from "react";
import {
  FiBookOpen,
  FiBriefcase,
  FiHeadphones,
} from "react-icons/fi";

import { contactChannels } from "../data/contactData";

const ContactInfo = () => {
  const getIcon = (icon: string) => {
    if (icon === "book") {
      return <FiBookOpen size={19} />;
    }

    if (icon === "briefcase") {
      return <FiBriefcase size={19} />;
    }

    return <FiHeadphones size={19} />;
  };

  return (
    <section>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
          Get in Touch
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Start with the right conversation.
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
          Choose the type of help you need and use the enquiry form to
          tell us what you&apos;re looking for.
        </p>
      </div>

      <div className="mt-7 space-y-4">
        {contactChannels.map((channel) => (
          <div
            key={channel.id}
            className="border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
                {getIcon(channel.icon)}
              </div>

              <div className="min-w-0">
                <h3 className="text-base font-semibold text-slate-950">
                  {channel.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {channel.description}
                </p>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#A41034]">
                  {channel.action}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 border border-[#A41034]/15 bg-[#A41034]/5 p-5">
        <p className="text-sm font-semibold text-slate-950">
          Prefer to start online?
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Send your requirements through the form and include as much
          context as possible so the enquiry can be routed appropriately.
        </p>
      </div>
    </section>
  );
};

export default ContactInfo;