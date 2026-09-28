"use client";

import React, { FormEvent, useState } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronDown,
} from "react-icons/fi";

import {
  contactReasons,
  contactTopics,
} from "../data/contactData";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    topic: "",
    reason: "",
    message: "",
  });

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

  if (submitted) {
    return (
      <section
        id="contact-form"
        className="border border-slate-200 bg-white p-6 sm:p-8 lg:p-10"
      >
        <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
          <div className="flex h-14 w-14 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
            <FiCheckCircle size={28} />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Enquiry Received
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Thank you for reaching out.
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Your enquiry has been recorded. Our team can review the
            information you submitted and follow up about your request.
          </p>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                organization: "",
                topic: "",
                reason: "",
                message: "",
              });
            }}
            className="mt-7 border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
          >
            Send Another Enquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact-form"
      className="border border-slate-200 bg-white"
    >
      <div className="border-b border-slate-200 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
          Send an Enquiry
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Tell us what you need.
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Provide a few details so your enquiry can be understood
          quickly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-6 sm:p-8"
      >
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
              placeholder="Your full name"
              className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#A41034]"
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
              placeholder="you@example.com"
              className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#A41034]"
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
              placeholder="Your phone number"
              className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#A41034]"
            />
          </div>

          <div>
            <label
              htmlFor="organization"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500"
            >
              Organization
            </label>

            <input
              id="organization"
              name="organization"
              type="text"
              value={formData.organization}
              onChange={handleChange}
              placeholder="College, company or organization"
              className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#A41034]"
            />
          </div>
        </div>

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
                className="w-full appearance-none border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-900 outline-none focus:border-[#A41034]"
              >
                <option value="">Select an option</option>

                {contactTopics.map((topic) => (
                  <option
                    key={topic}
                    value={topic}
                  >
                    {topic}
                  </option>
                ))}
              </select>

              <FiChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
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
                className="w-full appearance-none border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-900 outline-none focus:border-[#A41034]"
              >
                <option value="">Choose a reason</option>

                {contactReasons.map((reason) => (
                  <option
                    key={reason}
                    value={reason}
                  >
                    {reason}
                  </option>
                ))}
              </select>

              <FiChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>
        </div>

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
            className="w-full resize-none border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#A41034]"
          />
        </div>

        <div className="border-t border-slate-200 pt-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-xs leading-5 text-slate-400">
              Please avoid sharing passwords, financial information or
              other sensitive account details through this form.
            </p>

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