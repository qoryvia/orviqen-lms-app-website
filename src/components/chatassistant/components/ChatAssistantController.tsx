"use client";

import React from "react";
import {
  FiMessageCircle,
} from "react-icons/fi";

import ChatAssistant from "./ChatAssistant";
import { useAppContext } from "@/context/AppContext";

const ChatAssistantController = () => {
  const {
    isChatAssistantOpen,
    openChatAssistant,
    closeChatAssistant,
  } = useAppContext();

  return (
    <>
      {/* Assistant */}
      {isChatAssistantOpen && (
        <div className="fixed inset-0 z-[9999] sm:inset-auto sm:bottom-6 sm:right-6">
          <ChatAssistant
            floating
            onClose={closeChatAssistant}
          />
        </div>
      )}

      {/* Floating Launcher */}
      {!isChatAssistantOpen && (
        <button
          type="button"
          onClick={openChatAssistant}
          aria-label="Open chat assistant"
          className="fixed bottom-5 right-5 z-[9998] flex h-14 w-14 items-center justify-center rounded-full bg-[#A41034] text-white shadow-[0_12px_35px_rgba(164,16,52,0.3)] transition-all duration-200 hover:scale-105 hover:bg-[#8f0e2d] active:scale-95 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
        >
          <FiMessageCircle
            size={24}
            className="sm:hidden"
          />

          <FiMessageCircle
            size={27}
            className="hidden sm:block"
          />
        </button>
      )}
    </>
  );
};

export default ChatAssistantController;