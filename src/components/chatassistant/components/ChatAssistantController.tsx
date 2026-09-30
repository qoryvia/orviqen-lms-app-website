"use client";

import React, { useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi";

import ChatAssistant from "./ChatAssistant";
import { useAppContext } from "@/context/AppContext";

const ChatAssistantController = () => {
  const {
    isChatAssistantOpen,
    openChatAssistant,
    closeChatAssistant,
  } = useAppContext();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (!isChatAssistantOpen) {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.paddingRight = "";

      return;
    }

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight =
        previousBodyPaddingRight;
    };
  }, [isChatAssistantOpen]);

  return (
    <>
      {isChatAssistantOpen && (
        <>
          {/* Dark backdrop */}
          <button
            type="button"
            aria-label="Close Eklavya Assistant"
            onClick={closeChatAssistant}
            className="fixed inset-0 z-[9998] cursor-default border-0 bg-black/55 p-0 backdrop-blur-[1px]"
          />

          {/* Assistant */}
          <div className="fixed inset-0 z-[9999] flex items-end justify-end sm:inset-auto sm:bottom-6 sm:right-6">
            <ChatAssistant
              floating
              onClose={closeChatAssistant}
            />
          </div>
        </>
      )}

      {!isChatAssistantOpen && (
        <button
          type="button"
          onClick={openChatAssistant}
          aria-label="Open Eklavya Assistant"
          className="fixed bottom-5 right-5 z-[9998] flex h-14 w-14 items-center justify-center rounded-full bg-[#A41034] text-white shadow-[0_12px_35px_rgba(164,16,52,0.25)] transition hover:-translate-y-0.5 hover:bg-[#8f0e2d] focus:outline-none focus:ring-2 focus:ring-[#A41034]/40 focus:ring-offset-2"
        >
          <FiMessageCircle size={23} />
        </button>
      )}
    </>
  );
};

export default ChatAssistantController;