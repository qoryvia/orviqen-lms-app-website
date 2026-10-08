"use client";

import React, { FormEvent, useState } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
} from "react-icons/fi";

import {
  contactReasons,
  contactTopics,
} from "../data/contactData";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  topic: "",
  reason: "",
  message: "",
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData(initialFormData);
  };

  if (submitted) {
    return (
      <section
        id="contact-form"
        className="border border-slate-200 bg-white"
      >
        <div className="flex min-h-[560px] flex-col items-center justify-center px-6 py-12 text-center sm:px-10">
          <div className="flex h-16 w-16 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
            <FiCheckCircle size={30} />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Enquiry Received
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Thank you for reaching out.
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Your details have been recorded. Our team can review your enquiry
            and follow up with the appropriate information.
          </p>

          <button
            type="button"
            onClick={resetForm}
            className="mt-7 inline-flex items-center gap-2 border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
          >
            Send Another Enquiry
            <FiArrowRight size={15} />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact-form"
      className="scroll-mt-24 border border-slate-200 bg-white"
    >
      {/* Form heading */}
      <div className="border-b border-slate-200 px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
          Send an Enquiry
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Tell us what you need.
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
          A few details will help us understand your question and direct it to
          the right area.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-6 sm:p-8"
      >
        {/* Personal details */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              placeholder="Your full name"
              className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#A41034] focus:ring-1 focus:ring-[#A41034]/15"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#A41034] focus:ring-1 focus:ring-[#A41034]/15"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              placeholder="Your phone number"
              className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#A41034] focus:ring-1 focus:ring-[#A41034]/15"
            />
          </div>

          <div>
            <label
              htmlFor="organization"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500"
            >
              Organization
              <span className="ml-1 font-normal normal-case tracking-normal text-slate-400">
                (optional)
              </span>
            </label>

            <input
              id="organization"
              name="organization"
              type="text"
              value={formData.organization}
              onChange={handleChange}
              autoComplete="organization"
              placeholder="College, company or organization"
              className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#A41034] focus:ring-1 focus:ring-[#A41034]/15"
            />
          </div>
        </div>

        {/* Enquiry classification */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="topic"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500"
            >
              Enquiry Type
            </label>

            <div className="relative">
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className="w-full appearance-none border border-slate-200 bg-white px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition-colors focus:border-[#A41034] focus:ring-1 focus:ring-[#A41034]/15"
              >
                <option value="">Select an option</option>

                {contactTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-slate-200 bg-slate-50">
                <FiChevronDown
                  size={15}
                  className="text-slate-400"
                />
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="reason"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500"
            >
              What do you need help with?
            </label>

            <div className="relative">
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full appearance-none border border-slate-200 bg-white px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition-colors focus:border-[#A41034] focus:ring-1 focus:ring-[#A41034]/15"
              >
                <option value="">Choose a reason</option>

                {contactReasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-slate-200 bg-slate-50">
                <FiChevronDown
                  size={15}
                  className="text-slate-400"
                />
              </span>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell us about your question, goals or requirement..."
            className="w-full resize-none border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#A41034] focus:ring-1 focus:ring-[#A41034]/15"
          />
        </div>

        {/* Submit */}
        <div className="border-t border-slate-200 pt-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-md">
              <div className="flex items-start gap-2">
                <FiCheck
                  size={14}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />

                <p className="text-xs leading-5 text-slate-400">
                  Please do not include passwords, financial details or other
                  sensitive account information.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#A41034] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
            >
              Submit Enquiry
              <FiArrowRight size={16} />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;