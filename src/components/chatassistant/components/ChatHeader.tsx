"use client";

import React from "react";

import Image from "next/image";

import {
  FiPlus,
  FiX,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

import faviconicon from "@/assets/logos/favicon.png";

interface ChatHeaderProps {
  isThinking: boolean;
  title: string;
  subtitle: string;
  onNewChat: () => void;
  onWhatsApp: () => void;
  onClose?: () => void;
}

const ChatHeader = ({
  isThinking,
  title,
  subtitle,
  onNewChat,
  onWhatsApp,
  onClose,
}: ChatHeaderProps) => {
  return (
    <header className="shrink-0 border-b border-slate-200 bg-white">
      <div className="flex h-[70px] items-center justify-between px-4 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
            <div className="absolute inset-0 rounded-xl bg-[#A41034]/5" />

            <Image
              src={faviconicon}
              alt="Eklavya"
              className="relative h-8 w-8 object-contain"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="truncate text-sm font-semibold tracking-tight text-slate-950">
                {title}
              </h1>

              <span
                className={`h-2 w-2 shrink-0 rounded-full ${
                  isThinking
                    ? "animate-pulse bg-amber-400"
                    : "bg-emerald-500"
                }`}
              />
            </div>

            <p className="mt-0.5 max-w-[220px] truncate text-[10px] text-slate-400">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={
              onWhatsApp
            }
            aria-label="Open WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-emerald-600 transition hover:bg-emerald-50 hover:text-emerald-700"
            title="WhatsApp"
          >
            <FaWhatsapp
              size={19}
            />
          </button>

          <button
            type="button"
            onClick={
              onNewChat
            }
            aria-label="New chat"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
            title="New chat"
          >
            <FiPlus
              size={18}
            />
          </button>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close assistant"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
              title="Close"
            >
              <FiX
                size={18}
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;