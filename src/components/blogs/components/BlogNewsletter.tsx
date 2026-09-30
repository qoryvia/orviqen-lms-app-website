"use client";

import React, { useState } from "react";
import { FiArrowRight, FiCheckCircle, FiMail } from "react-icons/fi";

const BlogNewsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="bg-slate-950">
      <div className="px-6 py-14 xl:px-30 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <div className="flex h-10 w-10 items-center justify-center bg-[#A41034] text-white">
              <FiMail size={18} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#d8899d]">
              Stay Curious
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Get new ideas delivered to your inbox.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Receive occasional articles, practical guides and learning
              insights from the Eklavya team.
            </p>
          </div>

          {submitted ? (
            <div className="border border-white/10 bg-white/5 p-6 sm:min-w-[420px]">
              <div className="flex items-start gap-3">
                <FiCheckCircle
                  size={20}
                  className="mt-0.5 shrink-0 text-[#d8899d]"
                />

                <div>
                  <p className="text-sm font-semibold text-white">
                    You&apos;re on the list.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Thanks for subscribing to the Eklavya Journal.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full lg:w-[460px]">
              <label
                htmlFor="blog-email"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-400"
              >
                Email Address
              </label>

              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="blog-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="you@example.com"
                  className="min-w-0 flex-1 border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#A41034]"
                />

                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#A41034] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
                >
                  Subscribe
                  <FiArrowRight size={15} />
                </button>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                No daily spam. Just useful ideas and practical knowledge.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
