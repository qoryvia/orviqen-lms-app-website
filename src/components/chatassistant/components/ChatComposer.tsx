"use client";

import React, {
  FormEvent,
  useEffect,
  useRef,
} from "react";

import {
  FiArrowUp,
} from "react-icons/fi";

interface ChatComposerProps {
  value: string;
  isThinking: boolean;
  leadStep: string;
  onChange: (
    value: string,
  ) => void;
  onSubmit: () => void;
  onRegisterFocus: (
    focus: () => void,
  ) => void;
}

const ChatComposer = ({
  value,
  isThinking,
  leadStep,
  onChange,
  onSubmit,
  onRegisterFocus,
}: ChatComposerProps) => {
  const textareaRef =
    useRef<HTMLTextAreaElement | null>(
      null,
    );

  const resizeTextarea =
    () => {
      const element =
        textareaRef.current;

      if (!element) {
        return;
      }

      element.style.height =
        "auto";

      element.style.height = `${Math.min(
        element.scrollHeight,
        180,
      )}px`;
    };

  const focusTextarea =
    () => {
      textareaRef.current?.focus();
    };

  useEffect(() => {
    onRegisterFocus(
      focusTextarea,
    );
  }, [
    onRegisterFocus,
  ]);

  useEffect(() => {
    resizeTextarea();
  }, [
    value,
  ]);

  useEffect(() => {
    const timer =
      window.setTimeout(
        () => {
          focusTextarea();
        },
        80,
      );

    return () => {
      window.clearTimeout(
        timer,
      );
    };
  }, [
    isThinking,
    leadStep,
  ]);

  const handleSubmit = (
    event: FormEvent,
  ) => {
    event.preventDefault();

    onSubmit();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    /*
     * Enter:
     * Send
     *
     * Shift + Enter:
     * New line
     */
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();

      onSubmit();
    }
  };

  const placeholder =
    leadStep === "name"
      ? "Enter your name..."
      : leadStep === "phone"
        ? "Enter your phone number..."
        : leadStep === "course"
          ? "Enter your course..."
          : "Ask anything...";

  return (
    <form
      onSubmit={
        handleSubmit
      }
      className="rounded-[20px] border border-slate-300 bg-white transition focus-within:border-slate-400 focus-within:shadow-[0_5px_24px_rgba(15,23,42,0.06)]"
    >
      <div className="flex items-end gap-2 p-1.5">
        <textarea
          ref={textareaRef}
          autoFocus
          rows={1}
          value={value}
          onChange={(event) => {
            onChange(
              event.target.value,
            );

            window.requestAnimationFrame(
              resizeTextarea,
            );
          }}
          onKeyDown={
            handleKeyDown
          }
          placeholder={
            placeholder
          }
          className="max-h-[180px] min-h-[48px] min-w-0 flex-1 resize-none overflow-y-auto bg-transparent px-3 py-3 text-[15px] leading-6 text-slate-700 outline-none placeholder:text-slate-400 sm:text-sm"
        />

        <button
          type="submit"
          disabled={
            !value.trim() ||
            isThinking
          }
          aria-label="Send message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white transition hover:bg-[#A41034] disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
        >
          <FiArrowUp
            size={17}
          />
        </button>
      </div>

      <div className="flex items-center justify-between px-3 pb-2">
        <span className="text-[9px] leading-4 text-slate-400">
          Enter to send · Shift + Enter
          for a new line
        </span>

        {isThinking && (
          <span className="text-[9px] text-slate-400">
            Preparing...
          </span>
        )}
      </div>
    </form>
  );
};

export default ChatComposer;