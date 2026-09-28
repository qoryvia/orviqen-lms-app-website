"use client";
import { FaWhatsapp } from "react-icons/fa";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import faviconicon from "@/assets/logos/favicon.png";

import {
  FiArrowUp,
  FiCheck,
  FiChevronDown,
  FiMessageCircle,
  FiPhone,
  FiX,
} from "react-icons/fi";

import {
  assistantCourses,
  assistantSuggestions,
  CHAT_ASSISTANT_CONFIG,
  ChatLead,
  ChatMessage,
  getAssistantAnswer,
  getCourseName,
  LeadStep,
} from "../data/chatAssistantData";

import { submitChatLead } from "../utils/chatAssistantApi";
import Image from "next/image";
import { BsRobot } from "react-icons/bs";

interface ChatAssistantProps {
  floating?: boolean;
  onClose?: () => void;
}

const getCurrentTime = () =>
  new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

const createMessage = (
  role: ChatMessage["role"],
  content: string,
): ChatMessage => ({
  id: `${role}-${Date.now()}-${Math.random()}`,
  role,
  content,
  createdAt: getCurrentTime(),
});

const ChatAssistant = ({ floating = false, onClose }: ChatAssistantProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage("assistant", "Hi! What would you like to learn?"),
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [leadStep, setLeadStep] = useState<LeadStep>("idle");

  const [lead, setLead] = useState<ChatLead>({
    name: "",
    phone: "",
    course: "",
  });

  const [leadError, setLeadError] = useState("");

  const [isLeadSubmitted, setIsLeadSubmitted] = useState(false);

  const [showCourses, setShowCourses] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  /*
   * Always keep the latest conversation visible.
   */
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [messages, isTyping]);

  const addMessage = (role: ChatMessage["role"], content: string) => {
    setMessages((current) => [...current, createMessage(role, content)]);
  };

  const reply = (content: string) => {
    setIsTyping(true);

    window.setTimeout(() => {
      addMessage("assistant", content);
      setIsTyping(false);
    }, 450);
  };

  const startLeadCapture = () => {
    if (isLeadSubmitted || isTyping) {
      return;
    }

    setLeadError("");
    setLeadStep("name");

    reply("Sure. I can connect you with our team. What is your name?");
  };

  const validatePhone = (phone: string) => {
    const digits = phone.replace(/\D/g, "");

    return digits.length >= 7 && digits.length <= 15;
  };

  const handleLeadConversation = async (userMessage: string) => {
    if (leadStep === "name") {
      const name = userMessage.trim();

      if (name.length < 2) {
        reply("Please enter your name so I can continue.");
        return;
      }

      const nextLead = {
        ...lead,
        name,
      };

      setLead(nextLead);
      setLeadStep("phone");

      reply(
        `Thanks, ${name}. What phone number should our team use to contact you?`,
      );

      return;
    }

    if (leadStep === "phone") {
      if (!validatePhone(userMessage)) {
        reply("Please enter a valid phone number so our team can contact you.");
        return;
      }

      const nextLead = {
        ...lead,
        phone: userMessage.trim(),
      };

      setLead(nextLead);
      setLeadStep("course");
      setShowCourses(true);

      reply("Great. Which course are you interested in?");

      return;
    }

    if (leadStep === "course") {
      const selectedCourse = userMessage.trim();

      const nextLead = {
        ...lead,
        course: selectedCourse,
      };

      setLead(nextLead);
      setShowCourses(false);
      setIsTyping(true);
      setLeadError("");

      try {
        await submitChatLead({
          lead: nextLead,
          messages: [...messages, createMessage("user", selectedCourse)],
        });

        setLeadStep("submitted");
        setIsLeadSubmitted(true);

        addMessage(
          "assistant",
          `Done. I've recorded your request for ${getCourseName(
            selectedCourse,
          )}. Our team can now contact you using the details you provided.`,
        );
      } catch (error) {
        console.error("Chat assistant lead error:", error);

        setLeadError(
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your request.",
        );

        addMessage(
          "assistant",
          "I couldn't submit your request right now. Please try again.",
        );
      } finally {
        setIsTyping(false);
      }
    }
  };

  const handleSend = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const value = input.trim();

    if (!value || isTyping) {
      return;
    }

    setInput("");
    setShowCourses(false);
    setLeadError("");

    addMessage("user", value);

    if (leadStep !== "idle" && leadStep !== "submitted") {
      await handleLeadConversation(value);
      return;
    }

    reply(getAssistantAnswer(value));
  };

  const handleSuggestion = (suggestion: string) => {
    if (isTyping) {
      return;
    }

    setInput(suggestion);

    window.setTimeout(() => {
      textareaRef.current?.focus();
    }, 0);
  };

  const handleCourseSelect = (courseId: string) => {
    if (isTyping) {
      return;
    }

    setInput(courseId);

    window.setTimeout(() => {
      textareaRef.current?.focus();
    }, 0);
  };

  const handleTextareaChange = (value: string) => {
    setInput(value);

    const element = textareaRef.current;

    if (!element) {
      return;
    }

    element.style.height = "auto";
    element.style.height = `${Math.min(element.scrollHeight, 160)}px`;
  };

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${
      CHAT_ASSISTANT_CONFIG.whatsappNumber
    }?text=${encodeURIComponent(CHAT_ASSISTANT_CONFIG.whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  /*
   * Mobile:
   * - Full viewport
   * - No rounded corners
   * - No borders/shadow
   *
   * Desktop:
   * - Returns to compact card layout
   */
  const rootClass = floating
    ? "fixed inset-0 z-50 flex h-dvh w-full flex-col overflow-hidden rounded-none border-0 bg-white shadow-none sm:relative sm:inset-auto sm:h-[min(720px,calc(100dvh-88px))] sm:w-[420px] sm:rounded-2xl sm:border sm:border-slate-200 sm:shadow-[0_24px_80px_rgba(15,23,42,0.16)]"
    : "flex h-dvh w-full flex-col overflow-hidden rounded-none border-0 bg-white shadow-none sm:h-[680px] sm:rounded-2xl sm:border sm:border-slate-200 sm:shadow-sm";

  return (
    <div className={rootClass}>
      {/* Header */}
      <header className="shrink-0 border-b border-slate-200 bg-white">
        <div className="flex h-[72px] items-center justify-between px-4 sm:h-[68px] sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src={faviconicon} alt="logo" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="truncate text-base font-semibold text-slate-950 sm:text-sm">
                  {CHAT_ASSISTANT_CONFIG.title}
                </h1>

                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 sm:h-1.5 sm:w-1.5" />
              </div>

              <p className="mt-0.5 truncate text-base text-slate-400 sm:text-[10px]">
                {CHAT_ASSISTANT_CONFIG.subtitle}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={openWhatsApp}
              aria-label="Open WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-900 sm:h-8 sm:w-8"
            >
              <FiPhone size={18} className="sm:hidden" />

              <FiPhone size={14} className="hidden sm:block" />
            </button>

            <button
              type="button"
              onClick={openWhatsApp}
              aria-label="Open WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-emerald-600 transition hover:bg-emerald-50 hover:text-emerald-700 sm:h-8 sm:w-8"
            >
              <FaWhatsapp size={21} className="sm:hidden" />

              <FaWhatsapp size={17} className="hidden sm:block" />
            </button>

            {floating && onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close assistant"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-900 sm:h-8 sm:w-8"
              >
                <FiX size={19} className="sm:hidden" />

                <FiX size={15} className="hidden sm:block" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Conversation */}
      <main className="min-h-0 flex-1 overflow-y-auto bg-white px-4 py-6 sm:px-5 sm:py-5">
        <div className="mx-auto w-full max-w-3xl">
          <div className="space-y-6 sm:space-y-5">
            {messages.map((message) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={message.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  {isUser ? (
                    <div className="max-w-[88%] rounded-2xl rounded-br-md bg-slate-100 px-4 py-3 text-base leading-7 text-slate-800 sm:max-w-[82%] sm:px-4 sm:py-3 sm:text-sm sm:leading-6">
                      {message.content}
                    </div>
                  ) : (
                    <div className="flex max-w-[92%] items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#A41034] text-white sm:h-7 sm:w-7">
                        <BsRobot size={17} className="sm:hidden" />

                        <BsRobot size={15} className="hidden sm:block" />
                      </div>

                      <div className="min-w-0">
                        <p className="whitespace-pre-wrap break-words text-base leading-7 text-slate-700 sm:text-sm sm:leading-7">
                          {message.content}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing */}
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#A41034] text-[11px] font-bold text-white sm:h-7 sm:w-7 sm:text-[10px]">
                  O
                </div>

                <div className="flex h-9 items-center gap-1">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-slate-300 sm:h-1.5 sm:w-1.5" />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-slate-300 [animation-delay:150ms] sm:h-1.5 sm:w-1.5" />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-slate-300 [animation-delay:300ms] sm:h-1.5 sm:w-1.5" />
                </div>
              </div>
            )}

            {/* Suggestions */}
            {messages.length === 1 && !isTyping && leadStep === "idle" && (
              <div className="pt-2">
                <p className="mb-3 text-base font-medium text-slate-400 sm:mb-2 sm:text-[10px]">
                  Try asking
                </p>

                <div className="flex flex-wrap gap-2.5 sm:gap-2">
                  {assistantSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => handleSuggestion(suggestion)}
                      className="rounded-xl border border-slate-200 px-4 py-3 text-left text-base leading-6 text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 sm:px-3 sm:py-2 sm:text-[11px] sm:leading-normal"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Course Selector */}
            {showCourses && leadStep === "course" && !isTyping && (
              <div className="ml-10 sm:ml-10">
                <div className="flex items-center gap-2">
                  <span className="text-base font-medium text-slate-400 sm:text-[10px]">
                    Select a course
                  </span>

                  <div className="h-px flex-1 bg-slate-100" />
                </div>

                <div className="mt-3 grid gap-2 sm:mt-2 sm:gap-1.5">
                  {assistantCourses.map((course) => (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => handleCourseSelect(course.id)}
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left text-base leading-6 text-slate-600 transition hover:border-[#A41034]/30 hover:bg-slate-50 hover:text-slate-950 sm:px-3 sm:py-2.5 sm:text-xs sm:leading-normal"
                    >
                      <span className="min-w-0">{course.name}</span>

                      <FiChevronDown
                        size={16}
                        className="-rotate-90 shrink-0 text-slate-300 sm:h-3 sm:w-3"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Lead Error */}
            {leadError && (
              <div className="ml-10 text-base leading-6 text-red-600 sm:text-xs sm:leading-normal">
                {leadError}
              </div>
            )}

            {/* Lead Completed */}
            {isLeadSubmitted && (
              <div className="ml-10 flex items-center gap-2 text-base text-emerald-700 sm:text-[11px]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 sm:h-5 sm:w-5">
                  <FiCheck size={13} />
                </span>
                Assistance request received.
              </div>
            )}

            <div ref={bottomRef} className="h-px w-full" aria-hidden="true" />
          </div>
        </div>
      </main>

      {/* Composer */}
      <footer className="shrink-0 border-t border-slate-200 bg-white p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:p-4">
        {!isLeadSubmitted && (
          <div className="mb-3 flex items-center justify-between px-1 sm:mb-2">
            <button
              type="button"
              onClick={startLeadCapture}
              disabled={isTyping}
              className="text-base font-semibold text-[#A41034] transition hover:text-[#8f0e2d] disabled:opacity-40 sm:text-[10px]"
            >
              Talk to an advisor
            </button>

            <span className="text-base text-slate-400 sm:text-[9px]">
              {leadStep !== "idle" ? "Advisor details" : "Ask anything"}
            </span>
          </div>
        )}

        {isLeadSubmitted ? (
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3.5 sm:px-4 sm:py-3">
            <div className="flex min-w-0 items-center gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 sm:h-7 sm:w-7">
                <FiCheck size={14} />
              </span>

              <span className="text-base leading-6 text-slate-600 sm:text-xs sm:leading-normal">
                Your request has been received.
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                setLead({
                  name: "",
                  phone: "",
                  course: "",
                });

                setLeadStep("idle");
                setIsLeadSubmitted(false);
                setLeadError("");
                setShowCourses(false);
                setInput("");
                setMessages([
                  createMessage(
                    "assistant",
                    "Hi! What would you like to learn?",
                  ),
                ]);
              }}
              className="shrink-0 text-base font-semibold text-[#A41034] sm:text-[10px]"
            >
              New chat
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSend}
            className="relative flex items-end rounded-2xl border border-slate-300 bg-white transition focus-within:border-slate-400 focus-within:shadow-sm"
          >
            <textarea
              ref={textareaRef}
              rows={1}
              value={
                leadStep === "course" &&
                assistantCourses.some((course) => course.id === input)
                  ? getCourseName(input)
                  : input
              }
              onChange={(event) => handleTextareaChange(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  handleSend();
                }
              }}
              disabled={isTyping}
              placeholder={
                leadStep === "name"
                  ? "Enter your name..."
                  : leadStep === "phone"
                    ? "Enter your phone number..."
                    : leadStep === "course"
                      ? "Select or type a course..."
                      : "Message the assistant..."
              }
              className="max-h-[160px] min-h-[52px] min-w-0 flex-1 resize-none bg-transparent px-4 py-3.5 text-base leading-7 text-slate-700 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60 sm:min-h-[46px] sm:px-4 sm:py-3 sm:text-sm sm:leading-6"
            />

            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className="m-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white transition hover:bg-[#A41034] disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 sm:h-9 sm:w-9"
            >
              <FiArrowUp size={18} className="sm:hidden" />

              <FiArrowUp size={16} className="hidden sm:block" />
            </button>
          </form>
        )}

        {!isLeadSubmitted && (
          <p className="mt-3 text-center text-base leading-6 text-slate-400 sm:mt-2 sm:text-[9px] sm:leading-normal">
            Ask about courses, roadmaps, skills or careers.
          </p>
        )}
      </footer>
    </div>
  );
};

export default ChatAssistant;
