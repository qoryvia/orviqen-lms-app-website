"use client";

import React from "react";

import {
  BsRobot,
} from "react-icons/bs";

import {
  FiChevronDown,
  FiExternalLink,
  FiLink,
} from "react-icons/fi";

import {
  ChatMessage as ChatMessageData,
  ChatSource,
} from "../data/chatAssistantData";

interface ChatMessageProps {
  message: ChatMessageData;
  sources?: ChatSource[];
  sourcesOpen: boolean;
  onToggleSources: () => void;
}

const renderLinks = (
  content: string,
) => {
  const linkRegex =
    /(\[([^\]]+)\]\((https?:\/\/[^\s)]+)\))|(https?:\/\/[^\s]+)/g;

  const parts: React.ReactNode[] = [];

  let lastIndex = 0;

  for (const match of content.matchAll(
    linkRegex,
  )) {
    const index =
      match.index ?? 0;

    if (
      index >
      lastIndex
    ) {
      parts.push(
        <React.Fragment
          key={`text-${index}`}
        >
          {content.slice(
            lastIndex,
            index,
          )}
        </React.Fragment>,
      );
    }

    const markdownLabel =
      match[2];

    const markdownUrl =
      match[3];

    const rawUrl =
      match[4];

    const url =
      markdownUrl ||
      rawUrl;

    const label =
      markdownLabel ||
      rawUrl;

    if (url) {
      parts.push(
        <a
          key={`link-${index}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#A41034] underline decoration-[#A41034]/20 underline-offset-2 transition hover:text-[#8f0e2d]"
        >
          {label}
        </a>,
      );
    }

    lastIndex =
      index +
      match[0].length;
  }

  if (
    lastIndex <
    content.length
  ) {
    parts.push(
      <React.Fragment key="last-text">
        {content.slice(
          lastIndex,
        )}
      </React.Fragment>,
    );
  }

  return parts;
};

const ChatMessage = ({
  message,
  sources = [],
  sourcesOpen,
  onToggleSources,
}: ChatMessageProps) => {
  const isUser =
    message.role ===
    "user";

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[88%] rounded-[20px] rounded-br-md bg-slate-100 px-4 py-3 text-[15px] leading-7 text-slate-800 sm:max-w-[82%] sm:text-sm sm:leading-6">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex max-w-[96%] items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#A41034] text-white">
        <BsRobot
          size={15}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="whitespace-pre-wrap break-words text-[15px] leading-7 text-slate-700 sm:text-sm sm:leading-7">
          {renderLinks(
            message.content,
          )}
        </div>

        {sources.length >
          0 && (
          <div className="mt-3">
            <button
              type="button"
              onClick={
                onToggleSources
              }
              className="inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-400 transition hover:text-slate-700"
            >
              <FiLink
                size={11}
              />

              {sources.length ===
              1
                ? "Source"
                : `${sources.length} sources`}

              <FiChevronDown
                size={11}
                className={`transition-transform ${
                  sourcesOpen
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {sourcesOpen && (
              <div className="mt-2 grid gap-2">
                {sources.map(
                  (source) => (
                    <a
                      key={
                        source.url
                      }
                      href={
                        source.url
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 transition hover:border-slate-300 hover:bg-white"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[#A41034]">
                        <FiExternalLink
                          size={12}
                        />
                      </span>

                      <span className="min-w-0">
                        <span className="block truncate text-xs font-medium text-slate-700 group-hover:text-slate-950">
                          {
                            source.title
                          }
                        </span>

                        {source.description && (
                          <span className="mt-0.5 block truncate text-[10px] text-slate-400">
                            {
                              source.description
                            }
                          </span>
                        )}
                      </span>
                    </a>
                  ),
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;