"use client";

import React, {
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FiAlertCircle,
  FiArrowRight,
  FiCheck,
  FiEye,
  FiEyeOff,
  FiLoader,
  FiLock,
  FiMail,
  FiPhone,
  FiUser,
  FiX,
} from "react-icons/fi";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

import {
  selectAuthError,
  selectAuthStatus,
  selectIsAuthenticated,
} from "@/features/auth/auth.selectors";

import { register } from "@/features/auth/auth.thunks";

import heroImage from "@/assets/images/home-hero.png";

const CRIMSON = "#A41034";

interface RegisterFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

interface TouchedFields {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
  password: boolean;
  confirmPassword: boolean;
}

const initialForm: RegisterFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const initialTouched: TouchedFields = {
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
  password: false,
  confirmPassword: false,
};

const passwordRequirements = [
  {
    label: "At least 8 characters",
    requirement: "at least 8 characters",
    test: (password: string) => password.length >= 8,
  },
  {
    label: "One lowercase letter",
    requirement: "a lowercase letter",
    test: (password: string) => /[a-z]/.test(password),
  },
  {
    label: "One uppercase letter",
    requirement: "an uppercase letter",
    test: (password: string) => /[A-Z]/.test(password),
  },
  {
    label: "One number",
    requirement: "a number",
    test: (password: string) => /\d/.test(password),
  },
  {
    label: "One special character",
    requirement: "a special character",
    test: (password: string) => /[^A-Za-z0-9\s]/.test(password),
  },
];

const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(
    selectAuthStatus
  );

  const authError = useAppSelector(
    selectAuthError
  );

  const isAuthenticated = useAppSelector(
    selectIsAuthenticated
  );

  const [form, setForm] =
    useState<RegisterFormState>(initialForm);

  const [errors, setErrors] =
    useState<RegisterFormErrors>({});

  const [touched, setTouched] =
    useState<TouchedFields>(initialTouched);

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [registered, setRegistered] =
    useState(false);

  const isLoading =
    authStatus === "loading";

  const passwordsMatch =
    form.confirmPassword.length > 0 &&
    form.password === form.confirmPassword;

  const passwordMismatch =
    form.confirmPassword.length > 0 &&
    form.password !== form.confirmPassword;

  useEffect(() => {
    if (registered && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [
    registered,
    isAuthenticated,
    router,
  ]);

  /* =========================================================
     VALIDATION
  ========================================================== */

  const validateField = (
    field: keyof RegisterFormState,
    value: string,
    currentForm: RegisterFormState
  ): string | undefined => {
    switch (field) {
      case "firstName":
        if (!value.trim()) {
          return "First name is required.";
        }
        break;

      case "lastName":
        if (!value.trim()) {
          return "Last name is required.";
        }
        break;

      case "email":
        if (!value.trim()) {
          return "Email address is required.";
        }

        if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            value.trim()
          )
        ) {
          return "Enter a valid email address.";
        }
        break;

      case "phone":
        if (!value.trim()) {
          return "Phone number is required.";
        }
        break;

      case "password":
        if (!value) {
          return "Password is required.";
        }

        const unmetPasswordRequirements =
          passwordRequirements
            .filter(({ test }) => !test(value))
            .map(({ requirement }) => requirement);

        if (unmetPasswordRequirements.length > 0) {
          return `Password must include ${unmetPasswordRequirements.join(", ")}.`;
        }
        break;

      case "confirmPassword":
        if (!value) {
          return "Please confirm your password.";
        }

        if (value !== currentForm.password) {
          return "Passwords do not match.";
        }
        break;
    }

    return undefined;
  };

  const updateField = (
    field: keyof RegisterFormState,
    value: string
  ) => {
    const updatedForm = {
      ...form,
      [field]: value,
    };

    setForm(updatedForm);

    if (touched[field]) {
      const fieldError = validateField(
        field,
        value,
        updatedForm
      );

      setErrors((previous) => ({
        ...previous,
        [field]: fieldError,
      }));
    }

    /*
     * Keep confirm-password validation synchronized
     * when password changes.
     */
    if (
      field === "password" &&
      touched.confirmPassword
    ) {
      const confirmPasswordError =
        validateField(
          "confirmPassword",
          updatedForm.confirmPassword,
          updatedForm
        );

      setErrors((previous) => ({
        ...previous,
        confirmPassword:
          confirmPasswordError,
      }));
    }
  };

  const handleBlur = (
    field: keyof RegisterFormState
  ) => {
    setTouched((previous) => ({
      ...previous,
      [field]: true,
    }));

    const fieldError = validateField(
      field,
      form[field],
      form
    );

    setErrors((previous) => ({
      ...previous,
      [field]: fieldError,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: RegisterFormErrors = {};

    (
      Object.keys(form) as Array<
        keyof RegisterFormState
      >
    ).forEach((field) => {
      const fieldError = validateField(
        field,
        form[field],
        form
      );

      if (fieldError) {
        newErrors[field] = fieldError;
      }
    });

    setErrors(newErrors);

    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      password: true,
      confirmPassword: true,
    });

    return (
      Object.keys(newErrors).length === 0
    );
  };

  /* =========================================================
     SUBMIT
  ========================================================== */

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setRegistered(false);

    if (!validateForm()) {
      return;
    }

    try {
      await dispatch(
        register({
          firstName:
            form.firstName.trim(),

          lastName:
            form.lastName.trim(),

          email:
            form.email.trim(),

          phone:
            form.phone.trim(),

          password:
            form.password,
        })
      ).unwrap();

      setRegistered(true);

      router.push(
        "/login?registered=true"
      );
    } catch {
      /*
       * API error is already available
       * through Redux.
       */
    }
  };

  return (
    <section className="relative isolate  overflow-hidden rounded-sm">
      {/* ========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* ========================================================
          IMAGE OVERLAY
      ========================================================= */}
      <div className="absolute inset-0 -z-10 bg-slate-950/60" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/75 via-slate-900/55 to-[#A41034]/35" />

      {/* ========================================================
          CONTENT
      ========================================================= */}
      <div className="flex min-h-[calc(100vh-110px)] items-center justify-center px-4 py-8 sm:px-6 lg:py-10">
        <div className="w-full max-w-[560px]">
          <div className="border border-white/20 bg-white/[0.97] p-6 shadow-2xl backdrop-blur-md sm:p-8 lg:p-9">

            {/* ==================================================
                HEADER
            =================================================== */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span
                  className="h-7 w-1"
                  style={{
                    backgroundColor: CRIMSON,
                  }}
                />

                <div>
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                    style={{
                      color: CRIMSON,
                    }}
                  >
                    Get Started
                  </p>

                  <h1 className="mt-1 font-serif text-3xl font-bold tracking-[-0.03em] text-slate-900">
                    Create your account
                  </h1>
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your details to begin your
                Eklavya Education journey.
              </p>
            </div>

            {/* ==================================================
                API ERROR
            =================================================== */}
            {authError && (
              <div className="mb-5 flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3">
                <FiAlertCircle
                  size={17}
                  className="mt-0.5 shrink-0 text-red-600"
                />

                <div className="flex-1">
                  <p className="text-xs font-semibold text-red-700">
                    Registration failed
                  </p>

                  <p className="mt-1 text-xs leading-5 text-red-600">
                    {authError}
                  </p>
                </div>
              </div>
            )}

            {/* ==================================================
                FORM
            =================================================== */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4"
            >
              {/* ==================================================
                  FIRST + LAST NAME
              =================================================== */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1.5 block text-xs font-semibold text-slate-700"
                  >
                    First name
                  </label>

                  <div className="relative">
                    <FiUser
                      size={15}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      value={form.firstName}
                      onChange={(event) =>
                        updateField(
                          "firstName",
                          event.target.value
                        )
                      }
                      onBlur={() =>
                        handleBlur("firstName")
                      }
                      placeholder="Jane"
                      aria-invalid={Boolean(
                        errors.firstName
                      )}
                      className={`h-11 w-full border bg-white pl-9 pr-3 text-sm text-slate-900 outline-none transition ${
                        errors.firstName
                          ? "border-red-400"
                          : "border-slate-200 focus:border-[#A41034]"
                      }`}
                    />
                  </div>

                  {touched.firstName &&
                    errors.firstName && (
                      <p className="mt-1 text-[11px] text-red-600">
                        {errors.firstName}
                      </p>
                    )}
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1.5 block text-xs font-semibold text-slate-700"
                  >
                    Last name
                  </label>

                  <div className="relative">
                    <FiUser
                      size={15}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      value={form.lastName}
                      onChange={(event) =>
                        updateField(
                          "lastName",
                          event.target.value
                        )
                      }
                      onBlur={() =>
                        handleBlur("lastName")
                      }
                      placeholder="Doe"
                      aria-invalid={Boolean(
                        errors.lastName
                      )}
                      className={`h-11 w-full border bg-white pl-9 pr-3 text-sm text-slate-900 outline-none transition ${
                        errors.lastName
                          ? "border-red-400"
                          : "border-slate-200 focus:border-[#A41034]"
                      }`}
                    />
                  </div>

                  {touched.lastName &&
                    errors.lastName && (
                      <p className="mt-1 text-[11px] text-red-600">
                        {errors.lastName}
                      </p>
                    )}
                </div>
              </div>

              {/* ==================================================
                  EMAIL
              =================================================== */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <FiMail
                    size={15}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField(
                        "email",
                        event.target.value
                      )
                    }
                    onBlur={() =>
                      handleBlur("email")
                    }
                    placeholder="jane.doe@example.com"
                    aria-invalid={Boolean(
                      errors.email
                    )}
                    className={`h-11 w-full border bg-white pl-9 pr-3 text-sm text-slate-900 outline-none transition ${
                      errors.email
                        ? "border-red-400"
                        : "border-slate-200 focus:border-[#A41034]"
                    }`}
                  />
                </div>

                {touched.email &&
                  errors.email && (
                    <p className="mt-1 text-[11px] text-red-600">
                      {errors.email}
                    </p>
                  )}
              </div>

              {/* ==================================================
                  PHONE
              =================================================== */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Phone number
                </label>

                <div className="relative">
                  <FiPhone
                    size={15}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(event) =>
                      updateField(
                        "phone",
                        event.target.value
                      )
                    }
                    onBlur={() =>
                      handleBlur("phone")
                    }
                    placeholder="+1-555-0199"
                    aria-invalid={Boolean(
                      errors.phone
                    )}
                    className={`h-11 w-full border bg-white pl-9 pr-3 text-sm text-slate-900 outline-none transition ${
                      errors.phone
                        ? "border-red-400"
                        : "border-slate-200 focus:border-[#A41034]"
                    }`}
                  />
                </div>

                {touched.phone &&
                  errors.phone && (
                    <p className="mt-1 text-[11px] text-red-600">
                      {errors.phone}
                    </p>
                  )}
              </div>

              {/* ==================================================
                  PASSWORD
              =================================================== */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <FiLock
                    size={15}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    autoComplete="new-password"
                    value={form.password}
                    onChange={(event) =>
                      updateField(
                        "password",
                        event.target.value
                      )
                    }
                    onBlur={() =>
                      handleBlur("password")
                    }
                    placeholder="Create a password"
                    aria-invalid={Boolean(
                      errors.password
                    )}
                    className={`h-11 w-full border bg-white pl-9 pr-11 text-sm text-slate-900 outline-none transition ${
                      errors.password
                        ? "border-red-400"
                        : "border-slate-200 focus:border-[#A41034]"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (previous) => !previous
                      )
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? (
                      <FiEyeOff size={16} />
                    ) : (
                      <FiEye size={16} />
                    )}
                  </button>
                </div>

                <div className="mt-2">
                  <p className="mb-1.5 text-[11px] text-slate-500">
                    Use at least 8 characters, including:
                  </p>

                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                    {passwordRequirements.slice(1).map(
                      ({ label, test }) => {
                        const isValid = test(form.password);

                        return (
                          <li
                            key={label}
                            className={`flex items-center gap-1.5 text-[11px] ${
                              isValid
                                ? "text-emerald-600"
                                : "text-slate-400"
                            }`}
                          >
                            <span
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                                isValid
                                  ? "bg-emerald-100"
                                  : "bg-slate-100"
                              }`}
                            >
                              <FiCheck size={10} />
                            </span>
                            {label}
                          </li>
                        );
                      }
                    )}
                  </ul>

                  <p
                    className={`mt-1.5 flex items-center gap-1.5 text-[11px] ${
                      passwordRequirements[0].test(form.password)
                        ? "text-emerald-600"
                        : "text-slate-400"
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full ${
                        passwordRequirements[0].test(form.password)
                          ? "bg-emerald-100"
                          : "bg-slate-100"
                      }`}
                    >
                      <FiCheck size={10} />
                    </span>
                    {passwordRequirements[0].label}
                  </p>
                </div>

                {touched.password &&
                  errors.password && (
                    <p className="mt-1 text-[11px] text-red-600">
                      {errors.password}
                    </p>
                  )}
              </div>

              {/* ==================================================
                  CONFIRM PASSWORD
              =================================================== */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <FiLock
                    size={15}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    autoComplete="new-password"
                    value={form.confirmPassword}
                    onChange={(event) =>
                      updateField(
                        "confirmPassword",
                        event.target.value
                      )
                    }
                    onBlur={() =>
                      handleBlur(
                        "confirmPassword"
                      )
                    }
                    placeholder="Confirm your password"
                    aria-invalid={Boolean(
                      errors.confirmPassword
                    )}
                    className={`h-11 w-full border bg-white pl-9 pr-11 text-sm text-slate-900 outline-none transition ${
                      passwordMismatch
                        ? "border-red-400"
                        : passwordsMatch
                          ? "border-emerald-400"
                          : "border-slate-200 focus:border-[#A41034]"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (previous) => !previous
                      )
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff size={16} />
                    ) : (
                      <FiEye size={16} />
                    )}
                  </button>
                </div>

                {/* Password match status */}
                {passwordsMatch && (
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-emerald-600">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100">
                      <FiCheck size={10} />
                    </span>

                    Passwords match
                  </div>
                )}

                {passwordMismatch && (
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-red-600">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-100">
                      <FiX size={10} />
                    </span>

                    Passwords do not match
                  </div>
                )}

                {touched.confirmPassword &&
                  errors.confirmPassword &&
                  !passwordMismatch && (
                    <p className="mt-1 text-[11px] text-red-600">
                      {errors.confirmPassword}
                    </p>
                  )}
              </div>

              {/* ==================================================
                  SUBMIT
              =================================================== */}
              <button
                type="submit"
                disabled={isLoading}
                className="group mt-2 flex h-11 w-full items-center justify-center gap-2 text-sm font-semibold text-white transition-all disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  backgroundColor: CRIMSON,
                }}
              >
                {isLoading ? (
                  <>
                    <FiLoader
                      size={16}
                      className="animate-spin"
                    />

                    Creating account...
                  </>
                ) : (
                  <>
                    Create account

                    <FiArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            {/* ==================================================
                LOGIN
            =================================================== */}
            <div className="mt-5 border-t border-slate-100 pt-4 text-center">
              <p className="text-xs text-slate-500 sm:text-sm">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold hover:underline"
                  style={{
                    color: CRIMSON,
                  }}
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;