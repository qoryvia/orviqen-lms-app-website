"use client";

import React, { FormEvent, useState } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronDown,
  FiFileText,
  FiUser,
} from "react-icons/fi";

import { applicationPrograms } from "../data/applyData";

interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  program: string;
  learningMode: string;
  startTime: string;
  goals: string;
}

const initialFormData: ApplicationFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  education: "",
  experience: "",
  program: "",
  learningMode: "",
  startTime: "",
  goals: "",
};

const ApplyForm = () => {
  const [formData, setFormData] =
    useState<ApplicationFormData>(
      initialFormData
    );

  const [submitted, setSubmitted] =
    useState(false);

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

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section
        id="application-form"
        className="border border-slate-200 bg-white"
      >
        <div className="flex min-h-[560px] flex-col items-center justify-center px-6 py-14 text-center sm:px-10">
          <div className="flex h-16 w-16 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
            <FiCheckCircle size={32} />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
            Application Submitted
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            Thank you for applying.
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Your application details have been recorded. The team can
            review your information and use it to understand your
            learning requirements.
          </p>

          <div className="mt-7 w-full max-w-md border border-slate-200 bg-slate-50 p-5 text-left">
            <div className="flex items-start gap-3">
              <FiFileText
                size={18}
                className="mt-0.5 shrink-0 text-[#A41034]"
              />

              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Selected program
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {applicationPrograms.find(
                    (program) =>
                      program.id === formData.program
                  )?.title || "Not specified"}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={resetForm}
            className="mt-7 border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
          >
            Submit Another Application
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="application-form"
      className="border border-slate-200 bg-white"
    >
      <div className="border-b border-slate-200 p-6 sm:p-8 lg:p-10">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#A41034]/5 text-[#A41034]">
            <FiUser size={19} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A41034]">
              Application Form
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Tell us about yourself.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              The more context you provide, the easier it is to understand
              your preferred learning path.
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-7 p-6 sm:p-8 lg:p-10"
      >
        {/* Personal Information */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
            Personal Information
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500"
              >
                First Name
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Your first name"
                className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#A41034]"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500"
              >
                Last Name
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Your last name"
                className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#A41034]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500"
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
                className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#A41034]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your phone number"
                className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#A41034]"
              />
            </div>
          </div>
        </div>

        {/* Background */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
            Your Background
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="education"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500"
              >
                Education
              </label>

              <div className="relative">
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none border border-slate-200 bg-white px-4 py-3.5 pr-11 text-sm text-slate-900 outline-none focus:border-[#A41034]"
                >
                  <option value="">
                    Select education level
                  </option>

                  <option value="school">
                    School Student
                  </option>

                  <option value="undergraduate">
                    Undergraduate
                  </option>

                  <option value="postgraduate">
                    Postgraduate
                  </option>

                  <option value="working-professional">
                    Working Professional
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>

                <FiChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="experience"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500"
              >
                Technical Experience
              </label>

              <div className="relative">
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none border border-slate-200 bg-white px-4 py-3.5 pr-11 text-sm text-slate-900 outline-none focus:border-[#A41034]"
                >
                  <option value="">
                    Select experience
                  </option>

                  <option value="none">
                    No experience
                  </option>

                  <option value="beginner">
                    Beginner
                  </option>

                  <option value="intermediate">
                    Intermediate
                  </option>

                  <option value="advanced">
                    Advanced
                  </option>

                  <option value="professional">
                    Professional
                  </option>
                </select>

                <FiChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Program */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
            Program Preference
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="program"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500"
              >
                Preferred Program
              </label>

              <div className="relative">
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none border border-slate-200 bg-white px-4 py-3.5 pr-11 text-sm text-slate-900 outline-none focus:border-[#A41034]"
                >
                  <option value="">
                    Choose a program
                  </option>

                  {applicationPrograms.map(
                    (program) => (
                      <option
                        key={program.id}
                        value={program.id}
                      >
                        {program.title}
                      </option>
                    )
                  )}
                </select>

                <FiChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="learningMode"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500"
              >
                Preferred Learning Mode
              </label>

              <div className="relative">
                <select
                  id="learningMode"
                  name="learningMode"
                  value={formData.learningMode}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none border border-slate-200 bg-white px-4 py-3.5 pr-11 text-sm text-slate-900 outline-none focus:border-[#A41034]"
                >
                  <option value="">
                    Choose a mode
                  </option>

                  <option value="online">
                    Online
                  </option>

                  <option value="self-paced">
                    Self-Paced
                  </option>

                  <option value="guided">
                    Guided Learning
                  </option>

                  <option value="not-sure">
                    Not Sure Yet
                  </option>
                </select>

                <FiChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="startTime"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500"
              >
                When would you like to start?
              </label>

              <div className="relative">
                <select
                  id="startTime"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none border border-slate-200 bg-white px-4 py-3.5 pr-11 text-sm text-slate-900 outline-none focus:border-[#A41034]"
                >
                  <option value="">
                    Select preferred start time
                  </option>

                  <option value="immediately">
                    As soon as possible
                  </option>

                  <option value="within-month">
                    Within the next month
                  </option>

                  <option value="one-three-months">
                    Within 1–3 months
                  </option>

                  <option value="later">
                    Later
                  </option>

                  <option value="not-sure">
                    Not sure yet
                  </option>
                </select>

                <FiChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div>
          <label
            htmlFor="goals"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500"
          >
            What do you want to achieve?
          </label>

          <textarea
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell us about your goals, interests, career plans or what you want to learn..."
            className="w-full resize-none border border-slate-200 bg-white px-4 py-3.5 text-sm leading-7 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#A41034]"
          />
        </div>

        {/* Submit */}
        <div className="border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-xs leading-5 text-slate-400">
              Please provide accurate information. Avoid sharing passwords,
              payment information or other sensitive account details.
            </p>

            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#A41034] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f0e2d]"
            >
              Submit Application
              <FiArrowRight size={16} />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ApplyForm;