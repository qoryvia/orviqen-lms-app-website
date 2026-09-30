"use client";

import React from "react";

import {
  BsRobot,
} from "react-icons/bs";

interface ChatEmptyStateProps {
  suggestions: string[];
  onSuggestion: (
    value: string,
  ) => void;
}

const ChatEmptyState = ({
  suggestions,
  onSuggestion,
}: ChatEmptyStateProps) => {
  return (
    <div className="pb-6 pt-4">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A41034] text-white shadow-[0_8px_24px_rgba(164,16,52,0.16)]">
          <BsRobot
            size={25}
          />
        </div>

        <h2 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">
          How can I help?
        </h2>

        <p className="mt-1 max-w-[320px] text-xs leading-5 text-slate-400">
          Explore Eklavya courses,
          learning paths, pricing,
          technical skills and
          career options.
        </p>
      </div>

      <div className="mt-7">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            Try asking
          </span>

          <span className="text-[9px] text-slate-300">
            Eklavya Assistant
          </span>
        </div>

        <div className="grid gap-2">
          {suggestions.map(
            (suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() =>
                  onSuggestion(
                    suggestion,
                  )
                }
                className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-left text-sm leading-5 text-slate-600 transition hover:border-[#A41034]/25 hover:bg-slate-50 hover:text-slate-950"
              >
                {suggestion}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatEmptyState;