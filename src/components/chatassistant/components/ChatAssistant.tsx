"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";

import {
  FiArrowUp,
  FiCheck,
  FiChevronDown,
  FiPhone,
  FiX,
} from "react-icons/fi";

import faviconicon from "@/assets/logos/favicon.png";

import {
  assistantCourses,
  assistantSuggestions,
  CHAT_ASSISTANT_CONFIG,
  createMessage,
  getCourseName,
} from "../data/chatAssistantData";

import type {
  AssistantConversationContext,
  ChatLead,
  ChatMessage,
  ChatSource,
  LeadStep,
} from "../data/chatAssistantData";

import { getLocalAssistantResponse } from "../engine/chatAssistantEngine";

import { submitChatLeadMock } from "../utils/chatLeadMock";

interface ChatAssistantProps {
  floating?: boolean;
  onClose?: () => void;
}

const INITIAL_CONTEXT: AssistantConversationContext = {
  lastTopic: "unknown",
};

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

  const [conversationContext, setConversationContext] =
    useState<AssistantConversationContext>(INITIAL_CONTEXT);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

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
  }, [messages, isTyping, showCourses]);

  useEffect(() => {
    const focusTimer = window.setTimeout(() => {
      textareaRef.current?.focus();
    }, 50);

    return () => {
      window.clearTimeout(focusTimer);
    };
  }, [isTyping, leadStep]);

  useEffect(() => {
    if (!floating) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [floating]);
  
  const handleAssistantLinkClick = () => {
  onClose?.();
};

  const addMessage = (
    role: ChatMessage["role"],
    content: string,
    sources: ChatSource[] = [],
  ) => {
    setMessages((current) => [
      ...current,
      createMessage(role, content, sources),
    ]);
  };

  const resizeTextarea = (element: HTMLTextAreaElement) => {
    element.style.height = "auto";
    element.style.height = `${Math.min(element.scrollHeight, 160)}px`;
  };

  const validatePhone = (phone: string) => {
    const digits = phone.replace(/\D/g, "");

    return digits.length >= 7 && digits.length <= 15;
  };

  const sendAssistantReply = (
    content: string,
    sources: ChatSource[] = [],
    callback?: () => void,
  ) => {
    setIsTyping(true);

    window.setTimeout(() => {
      addMessage("assistant", content, sources);

      setIsTyping(false);

      window.setTimeout(() => {
        textareaRef.current?.focus();
      }, 30);

      callback?.();
    }, 350);
  };

  const startLeadCapture = () => {
    if (isLeadSubmitted || isTyping || leadStep !== "idle") {
      return;
    }

    setLeadError("");
    setLeadStep("name");

    sendAssistantReply(
      "Sure. I can help you connect with the Eklavya team. What is your name?",
    );
  };

  const handleLeadConversation = (userMessage: string) => {
    if (leadStep === "name") {
      const name = userMessage.trim();

      if (name.length < 2) {
        sendAssistantReply("Please enter your name so I can continue.");
        return;
      }

      const nextLead: ChatLead = {
        ...lead,
        name,
      };

      setLead(nextLead);
      setLeadStep("phone");

      sendAssistantReply(
        `Thanks, ${name}. What phone number should our team use to contact you?`,
      );

      return;
    }

    if (leadStep === "phone") {
      if (!validatePhone(userMessage)) {
        sendAssistantReply(
          "Please enter a valid phone number so our team can contact you.",
        );
        return;
      }

      const nextLead: ChatLead = {
        ...lead,
        phone: userMessage.trim(),
      };

      setLead(nextLead);
      setLeadStep("course");
      setShowCourses(true);

      sendAssistantReply("Great. Which course are you interested in?");

      return;
    }

    if (leadStep === "course") {
      const selectedCourse = getCourseName(userMessage.trim());

      if (!selectedCourse) {
        setLeadError("Please select or enter a course.");
        return;
      }

      const finalLead: ChatLead = {
        name: lead.name.trim(),
        phone: lead.phone.trim(),
        course: selectedCourse.trim(),
      };

      if (!finalLead.name || !finalLead.phone || !finalLead.course) {
        setLeadError("Please complete all requested details.");
        return;
      }

      setLead(finalLead);
      setShowCourses(false);
      setLeadError("");
      setIsTyping(true);

      window.setTimeout(() => {
        /*
         * Final lead submission happens only here.
         *
         * No API.
         * No Axios.
         * No backend.
         * No partial logging.
         */
        submitChatLeadMock(finalLead);

        addMessage(
          "assistant",
          `Thanks, ${finalLead.name}. Your request for ${finalLead.course} has been recorded for follow-up.`,
        );

        setLeadStep("submitted");
        setIsLeadSubmitted(true);
        setIsTyping(false);

        window.setTimeout(() => {
          textareaRef.current?.focus();
        }, 30);
      }, 350);
    }
  };

  const processUserMessage = (rawMessage: string) => {
    const value = rawMessage.trim();

    if (!value || isTyping) {
      return;
    }

    setInput("");
    setLeadError("");

    const element = textareaRef.current;

    if (element) {
      element.style.height = "auto";
    }

    addMessage("user", value);

    /*
     * Active lead collection takes priority over
     * normal assistant processing.
     */
    if (leadStep !== "idle" && leadStep !== "submitted") {
      handleLeadConversation(value);
      return;
    }

    setShowCourses(false);
    setIsTyping(true);

    window.setTimeout(() => {
      const response = getLocalAssistantResponse(value, conversationContext);

      setConversationContext(response.nextContext);

      setMessages((current) => [
        ...current,
        createMessage("assistant", response.reply, response.sources),
      ]);

      setIsTyping(false);

      if (response.leadAction === "start") {
        setLeadStep("name");
      }

      window.setTimeout(() => {
        textareaRef.current?.focus();
      }, 30);
    }, 350);
  };

  const handleSend = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    processUserMessage(input);
  };

  const handleSuggestion = (suggestion: string) => {
    if (isTyping) {
      return;
    }

    processUserMessage(suggestion);
  };

  const handleCourseSelect = (courseId: string) => {
    if (isTyping) {
      return;
    }

    processUserMessage(courseId);
  };

  const handleTextareaChange = (value: string) => {
    setInput(value);

    const element = textareaRef.current;

    if (element) {
      resizeTextarea(element);
    }
  };

  const openWhatsApp = () => {
    const number = CHAT_ASSISTANT_CONFIG.whatsappNumber;

    if (!number || number === "YOUR_WHATSAPP_NUMBER") {
      return;
    }

    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(
      CHAT_ASSISTANT_CONFIG.whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const resetChat = () => {
    setMessages([
      createMessage("assistant", "Hi! What would you like to learn?"),
    ]);

    setInput("");

    setIsTyping(false);

    setLeadStep("idle");

    setLead({
      name: "",
      phone: "",
      course: "",
    });

    setLeadError("");

    setIsLeadSubmitted(false);

    setShowCourses(false);

    setConversationContext(INITIAL_CONTEXT);

    window.setTimeout(() => {
      textareaRef.current?.focus();
    }, 50);
  };

  const rootClass = floating
    ? "fixed inset-0 z-50 flex h-dvh w-full flex-col overflow-hidden rounded-none border-0 bg-white shadow-none sm:relative sm:inset-auto sm:h-[min(720px,calc(100dvh-88px))] sm:w-[420px] sm:rounded-2xl sm:border sm:border-slate-200 sm:shadow-[0_24px_80px_rgba(15,23,42,0.16)]"
    : "flex h-dvh w-full flex-col overflow-hidden rounded-none border-0 bg-white shadow-none sm:h-[680px] sm:rounded-2xl sm:border sm:border-slate-200 sm:shadow-sm";

  return (
    <div className={rootClass}>
      <header className="shrink-0 border-b border-slate-200 bg-white">
        <div className="flex h-[72px] items-center justify-between px-4 sm:h-[68px] sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center">
              <Image
                src={faviconicon}
                alt="Eklavya"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="truncate text-xl font-semibold text-slate-950 sm:text-sm">
                  {CHAT_ASSISTANT_CONFIG.title}
                </h1>

                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 sm:h-1.5 sm:w-1.5" />
              </div>

              <p className="mt-0.5 hidden truncate text-[10px] text-slate-400 md:block">
                {CHAT_ASSISTANT_CONFIG.subtitle}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={openWhatsApp}
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-emerald-600 transition hover:bg-emerald-50 sm:h-8 sm:w-8"
            >
              <FaWhatsapp size={19} />
            </button>

            <button
              type="button"
              onClick={openWhatsApp}
              aria-label="Contact"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-900 sm:h-8 sm:w-8"
            >
              <FiPhone size={17} />
            </button>

            {floating && onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close assistant"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-900 sm:h-8 sm:w-8"
              >
                <FiX size={17} />
              </button>
            )}
          </div>
        </div>
      </header>

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
                    <div className="max-w-[88%] rounded-2xl rounded-br-md bg-slate-100 px-4 py-3 text-base leading-7 text-slate-800 sm:max-w-[82%] sm:text-sm sm:leading-6">
                      {message.content}
                    </div>
                  ) : (
                    <div className="flex max-w-[94%] items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#A41034] text-white sm:h-7 sm:w-7">
                        <BsRobot size={15} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="whitespace-pre-wrap break-words text-base leading-7 text-slate-700 sm:text-sm sm:leading-7">
                          {message.content}
                        </p>

                        {message.sources && message.sources.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {message.sources.map((source) => (
                              <Link
                                key={`${message.id}-${source.url}`}
                                href={source.url}
                                onClick={handleAssistantLinkClick}
                                className="group block rounded-xl border border-slate-200 bg-white px-3 py-3 transition hover:border-[#A41034]/20 hover:bg-slate-50"
                              >
                                <div className="flex items-center justify-between gap-3">
                                  <div className="min-w-0">
                                    <p className="truncate text-sm font-medium text-slate-800 sm:text-xs">
                                      {source.title}
                                    </p>

                                    {source.description && (
                                      <p className="mt-1 truncate text-xs text-slate-400">
                                        {source.description}
                                      </p>
                                    )}
                                  </div>

                                  <FiArrowUp
                                    size={13}
                                    className="shrink-0 rotate-45 text-slate-300 transition group-hover:text-[#A41034]"
                                  />
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#A41034] text-white sm:h-7 sm:w-7">
                  <BsRobot size={15} />
                </div>

                <div className="flex h-9 items-center gap-1">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-slate-300" />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-slate-300 [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-slate-300 [animation-delay:300ms]" />
                </div>
              </div>
            )}

            {messages.length === 1 && !isTyping && leadStep === "idle" && (
              <div className="pt-2">
                <p className="mb-3 text-sm font-medium text-slate-400">
                  Try asking
                </p>

                <div className="flex flex-wrap gap-2">
                  {assistantSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => handleSuggestion(suggestion)}
                      className="rounded-xl border border-slate-200 px-3 py-2 text-left text-xs leading-5 text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showCourses && leadStep === "course" && !isTyping && (
              <div className="ml-10">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-slate-400">
                    Select a course
                  </span>

                  <div className="h-px flex-1 bg-slate-100" />
                </div>

                <div className="mt-3 grid gap-2">
                  {assistantCourses.map((course) => (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => handleCourseSelect(course.id)}
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-3 text-left text-xs text-slate-600 transition hover:border-[#A41034]/30 hover:bg-slate-50 hover:text-slate-950"
                    >
                      <span>{course.name}</span>

                      <FiChevronDown
                        size={13}
                        className="-rotate-90 shrink-0 text-slate-300"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {leadError && (
              <div className="ml-10 text-xs leading-5 text-red-600">
                {leadError}
              </div>
            )}

            {isLeadSubmitted && (
              <div className="ml-10 flex items-center gap-2 text-xs text-emerald-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50">
                  <FiCheck size={12} />
                </span>
                Assistance request received.
              </div>
            )}

            <div ref={bottomRef} className="h-px w-full" aria-hidden="true" />
          </div>
        </div>
      </main>

      <footer className="shrink-0 border-t border-slate-200 bg-white p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:p-4">
        {!isLeadSubmitted && (
          <div className="mb-2 flex items-center justify-between px-1">
            <button
              type="button"
              onClick={startLeadCapture}
              disabled={isTyping || leadStep !== "idle"}
              className="text-xs font-semibold text-[#A41034] transition hover:text-[#8f0e2d] disabled:opacity-40"
            >
              Talk to an advisor
            </button>

            <span className="text-[10px] text-slate-400">
              {leadStep !== "idle" ? "Advisor details" : "Ask anything"}
            </span>
          </div>
        )}

        {isLeadSubmitted ? (
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <div className="flex min-w-0 items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <FiCheck size={13} />
              </span>

              <span className="text-xs text-slate-600">
                Your request has been received.
              </span>
            </div>

            <button
              type="button"
              onClick={resetChat}
              className="shrink-0 text-xs font-semibold text-[#A41034]"
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
              value={input}
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
              className="max-h-[160px] min-h-[46px] min-w-0 flex-1 resize-none bg-transparent px-4 py-3 text-sm leading-6 text-slate-700 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
            />

            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className="m-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white transition hover:bg-[#A41034] disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
            >
              <FiArrowUp size={16} />
            </button>
          </form>
        )}

        {!isLeadSubmitted && (
          <p className="mt-2 text-center text-[9px] leading-normal text-slate-400">
            Ask about courses, technologies, learning paths or careers.
          </p>
        )}
      </footer>
    </div>
  );
};

export default ChatAssistant;
