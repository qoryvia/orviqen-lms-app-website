"use client";

import React, {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import {
  FiAlertCircle,
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiEye,
  FiEyeOff,
  FiLoader,
  FiLock,
  FiMail,
  FiShield,
} from "react-icons/fi";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

import {
  clearAuthError,
  clearMfaState,
} from "@/features/auth/auth.slice";

import {
  selectAuthError,
  selectAuthStatus,
  selectIsAuthenticated,
  selectMfaRequired,
  selectMfaChallengeToken,
} from "@/features/auth/auth.selectors";

import {
  login,
  verifyLoginMfa,
} from "@/features/auth/auth.thunks";

import heroImage from "@/assets/images/home-hero.png";

const CRIMSON = "#A41034";

interface LoginFormState {
  email: string;
  password: string;
}

interface LoginFormErrors {
  email?: string;
  password?: string;
}

interface MfaFormState {
  code: string;
}

interface MfaFormErrors {
  code?: string;
}

const initialLoginForm: LoginFormState = {
  email: "",
  password: "",
};

const initialMfaForm: MfaFormState = {
  code: "",
};

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
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

  const reduxMfaRequired = useAppSelector(
    selectMfaRequired
  );

  const reduxMfaChallengeToken =
    useAppSelector(
      selectMfaChallengeToken
    );

  const [form, setForm] =
    useState<LoginFormState>(
      initialLoginForm
    );

  const [errors, setErrors] =
    useState<LoginFormErrors>({});

  const [touched, setTouched] =
    useState({
      email: false,
      password: false,
    });

  const [mfaForm, setMfaForm] =
    useState<MfaFormState>(
      initialMfaForm
    );

  const [mfaErrors, setMfaErrors] =
    useState<MfaFormErrors>({});

  const [mfaTouched, setMfaTouched] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [localMfaRequired, setLocalMfaRequired] =
    useState(false);

  const [
    localChallengeToken,
    setLocalChallengeToken,
  ] = useState<string | null>(null);

  const isLoading =
    authStatus === "loading";

  const isMfaRequired =
    localMfaRequired ||
    reduxMfaRequired;

  const challengeToken =
    localChallengeToken ??
    reduxMfaChallengeToken;

  const registrationSuccess =
    searchParams.get("registered") ===
    "true";

  /* =========================================================
     CLEAR OLD AUTH ERROR
  ========================================================== */

  useEffect(() => {
    dispatch(clearAuthError());

    dispatch(clearMfaState());
  }, [dispatch]);

  /* =========================================================
     REDIRECT WHEN ALREADY AUTHENTICATED
  ========================================================== */

  useEffect(() => {
    if (
      isAuthenticated &&
      !isMfaRequired
    ) {
      router.push("/dashboard");
    }
  }, [
    isAuthenticated,
    isMfaRequired,
    router,
  ]);

  /* =========================================================
     LOGIN FIELD VALIDATION
  ========================================================== */

  const validateLoginField = (
    field: keyof LoginFormState,
    value: string
  ): string | undefined => {
    switch (field) {
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

      case "password":
        if (!value) {
          return "Password is required.";
        }

        break;
    }

    return undefined;
  };

  const updateLoginField = (
    field: keyof LoginFormState,
    value: string
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (touched[field]) {
      const fieldError =
        validateLoginField(
          field,
          value
        );

      setErrors((previous) => ({
        ...previous,
        [field]: fieldError,
      }));
    }

    if (authError) {
      dispatch(clearAuthError());
    }
  };

  const handleLoginBlur = (
    field: keyof LoginFormState
  ) => {
    setTouched((previous) => ({
      ...previous,
      [field]: true,
    }));

    const fieldError =
      validateLoginField(
        field,
        form[field]
      );

    setErrors((previous) => ({
      ...previous,
      [field]: fieldError,
    }));
  };

  const validateLoginForm = (): boolean => {
    const newErrors: LoginFormErrors = {};

    (
      Object.keys(form) as Array<
        keyof LoginFormState
      >
    ).forEach((field) => {
      const fieldError =
        validateLoginField(
          field,
          form[field]
        );

      if (fieldError) {
        newErrors[field] =
          fieldError;
      }
    });

    setErrors(newErrors);

    setTouched({
      email: true,
      password: true,
    });

    return (
      Object.keys(newErrors).length === 0
    );
  };

  /* =========================================================
     LOGIN
  ========================================================== */

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!validateLoginForm()) {
      return;
    }

    try {
      const result = await dispatch(
        login({
          email: form.email.trim(),
          password: form.password,
        })
      ).unwrap();

      const requiresMfa = Boolean(
        result.requiresMfa ??
          result.mfaRequired
      );

      if (requiresMfa) {
        const returnedChallenge =
          result.challengeToken ??
          result.mfaChallengeToken ??
          null;

        setLocalMfaRequired(true);

        setLocalChallengeToken(
          returnedChallenge
        );

        setMfaForm(
          initialMfaForm
        );

        setMfaErrors({});

        setMfaTouched(false);

        return;
      }

      /*
       * Normal login completed.
       */
      router.push("/dashboard");
    } catch {
      /*
       * Error is already available
       * through Redux.
       */
    }
  };

  /* =========================================================
     MFA VALIDATION
  ========================================================== */

  const validateMfa = (): boolean => {
    if (!mfaForm.code.trim()) {
      setMfaErrors({
        code: "Verification code is required.",
      });

      setMfaTouched(true);

      return false;
    }

    if (
      !/^\d{6}$/.test(
        mfaForm.code.trim()
      )
    ) {
      setMfaErrors({
        code:
          "Enter the 6-digit verification code.",
      });

      setMfaTouched(true);

      return false;
    }

    setMfaErrors({});
    setMfaTouched(true);

    return true;
  };

  /* =========================================================
     MFA VERIFY
  ========================================================== */

  const handleMfaSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!validateMfa()) {
      return;
    }

    if (!challengeToken) {
      setMfaErrors({
        code:
          "Your verification session has expired. Please login again.",
      });

      return;
    }

    try {
      await dispatch(
        verifyLoginMfa({
          challengeToken,
          code: mfaForm.code.trim(),
        })
      ).unwrap();

      router.push("/dashboard");
    } catch {
      /*
       * Error is available through Redux.
       */
    }
  };

  /* =========================================================
     BACK TO LOGIN
  ========================================================== */

  const handleBackToLogin = () => {
    setLocalMfaRequired(false);

    setLocalChallengeToken(null);

    setMfaForm(initialMfaForm);

    setMfaErrors({});

    setMfaTouched(false);

    dispatch(clearMfaState());

    dispatch(clearAuthError());
  };

  return (
    <section className="relative isolate overflow-hidden rounded-sm">
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
          OVERLAY
      ========================================================= */}
      <div className="absolute inset-0 -z-10 bg-slate-950/60" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/75 via-slate-900/55 to-[#A41034]/35" />

      {/* ========================================================
          CONTENT
      ========================================================= */}
      <div className="flex min-h-[calc(100vh-110px)] items-center justify-center px-4 py-8 sm:px-6 lg:py-10">
        <div className="w-full max-w-[500px]">

          {/* ====================================================
              CARD
          ===================================================== */}
          <div className="border border-white/20 bg-white/[0.97] p-6 shadow-2xl backdrop-blur-md sm:p-8">

            {/* ==================================================
                REGISTRATION SUCCESS
            =================================================== */}
            {registrationSuccess &&
              !isMfaRequired && (
                <div className="mb-5 flex items-start gap-3 border border-emerald-200 bg-emerald-50 px-4 py-3">
                  <FiCheck
                    size={17}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />

                  <div>
                    <p className="text-xs font-semibold text-emerald-700">
                      Account created successfully
                    </p>

                    <p className="mt-1 text-xs leading-5 text-emerald-600">
                      You can now sign in to
                      your Eklavya Education
                      account.
                    </p>
                  </div>
                </div>
              )}

            {/* ==================================================
                LOGIN
            =================================================== */}
            {!isMfaRequired ? (
              <>
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-7 w-1"
                      style={{
                        backgroundColor:
                          CRIMSON,
                      }}
                    />

                    <div>
                      <p
                        className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                        style={{
                          color: CRIMSON,
                        }}
                      >
                        Welcome Back
                      </p>

                      <h1 className="mt-1 font-serif text-3xl font-bold tracking-[-0.03em] text-slate-900">
                        Sign in to your account
                      </h1>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Continue your Eklavya Education
                    learning journey.
                  </p>
                </div>

                {/* API Error */}
                {authError && (
                  <div className="mb-5 flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3">
                    <FiAlertCircle
                      size={17}
                      className="mt-0.5 shrink-0 text-red-600"
                    />

                    <div>
                      <p className="text-xs font-semibold text-red-700">
                        Sign in failed
                      </p>

                      <p className="mt-1 text-xs leading-5 text-red-600">
                        {authError}
                      </p>
                    </div>
                  </div>
                )}

                {/* Login Form */}
                <form
                  onSubmit={handleLogin}
                  noValidate
                  className="space-y-4"
                >
                  {/* Email */}
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
                        autoFocus
                        value={form.email}
                        onChange={(event) =>
                          updateLoginField(
                            "email",
                            event.target.value
                          )
                        }
                        onBlur={() =>
                          handleLoginBlur(
                            "email"
                          )
                        }
                        placeholder="jane.doe@example.com"
                        aria-invalid={Boolean(
                          errors.email
                        )}
                        className={`h-11 w-full border bg-white pl-9 pr-3 text-sm text-slate-900 outline-none transition ${
                          errors.email
                            ? "border-red-400 focus:border-red-500"
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

                  {/* Password */}
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-xs font-semibold text-slate-700"
                      >
                        Password
                      </label>

                      <Link
                        href="/forgot-password"
                        className="text-[11px] font-medium text-slate-500 transition-colors hover:text-[#A41034]"
                      >
                        Forgot password?
                      </Link>
                    </div>

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
                        autoComplete="current-password"
                        value={form.password}
                        onChange={(event) =>
                          updateLoginField(
                            "password",
                            event.target.value
                          )
                        }
                        onBlur={() =>
                          handleLoginBlur(
                            "password"
                          )
                        }
                        placeholder="Enter your password"
                        aria-invalid={Boolean(
                          errors.password
                        )}
                        className={`h-11 w-full border bg-white pl-9 pr-11 text-sm text-slate-900 outline-none transition ${
                          errors.password
                            ? "border-red-400 focus:border-red-500"
                            : "border-slate-200 focus:border-[#A41034]"
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(
                            (previous) =>
                              !previous
                          )
                        }
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                      >
                        {showPassword ? (
                          <FiEyeOff size={16} />
                        ) : (
                          <FiEye size={16} />
                        )}
                      </button>
                    </div>

                    {touched.password &&
                      errors.password && (
                        <p className="mt-1 text-[11px] text-red-600">
                          {errors.password}
                        </p>
                      )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group mt-2 flex h-11 w-full items-center justify-center gap-2 text-sm font-semibold text-white transition-all disabled:cursor-not-allowed disabled:opacity-60"
                    style={{
                      backgroundColor:
                        CRIMSON,
                    }}
                  >
                    {isLoading ? (
                      <>
                        <FiLoader
                          size={16}
                          className="animate-spin"
                        />

                        Signing in...
                      </>
                    ) : (
                      <>
                        Sign in

                        <FiArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </form>

                {/* Register */}
                <div className="mt-5 border-t border-slate-100 pt-4 text-center">
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Dont have an account?{" "}
                    <Link
                      href="/register"
                      className="font-semibold hover:underline"
                      style={{
                        color: CRIMSON,
                      }}
                    >
                      Create an account
                    </Link>
                  </p>
                </div>
              </>
            ) : (
              /* ==================================================
                 MFA VERIFICATION
              =================================================== */
              <>
                {/* Header */}
                <div className="mb-6">
                  <button
                    type="button"
                    onClick={handleBackToLogin}
                    className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-[#A41034]"
                  >
                    <FiArrowLeft
                      size={14}
                    />

                    Back to login
                  </button>

                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                      style={{
                        backgroundColor:
                          CRIMSON,
                      }}
                    >
                      <FiShield
                        size={18}
                      />
                    </span>

                    <div>
                      <p
                        className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                        style={{
                          color: CRIMSON,
                        }}
                      >
                        Security Verification
                      </p>

                      <h1 className="mt-1 font-serif text-2xl font-bold tracking-[-0.03em] text-slate-900">
                        Verify your identity
                      </h1>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    Enter the 6-digit verification
                    code from your authenticator
                    application to continue.
                  </p>
                </div>

                {/* API Error */}
                {authError && (
                  <div className="mb-5 flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3">
                    <FiAlertCircle
                      size={17}
                      className="mt-0.5 shrink-0 text-red-600"
                    />

                    <div>
                      <p className="text-xs font-semibold text-red-700">
                        Verification failed
                      </p>

                      <p className="mt-1 text-xs leading-5 text-red-600">
                        {authError}
                      </p>
                    </div>
                  </div>
                )}

                {/* MFA Form */}
                <form
                  onSubmit={
                    handleMfaSubmit
                  }
                  noValidate
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="mfaCode"
                      className="mb-1.5 block text-xs font-semibold text-slate-700"
                    >
                      Verification code
                    </label>

                    <input
                      id="mfaCode"
                      name="mfaCode"
                      type="text"
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      autoFocus
                      maxLength={6}
                      value={mfaForm.code}
                      onChange={(event) => {
                        const value =
                          event.target.value
                            .replace(
                              /\D/g,
                              ""
                            )
                            .slice(0, 6);

                        setMfaForm({
                          code: value,
                        });

                        if (
                          mfaTouched
                        ) {
                          setMfaErrors(
                            value.length ===
                              6
                              ? {}
                              : {
                                  code:
                                    "Enter the 6-digit verification code.",
                                }
                          );
                        }

                        if (authError) {
                          dispatch(
                            clearAuthError()
                          );
                        }
                      }}
                      placeholder="000000"
                      aria-invalid={Boolean(
                        mfaErrors.code
                      )}
                      className={`h-12 w-full border bg-white px-4 text-center text-lg font-semibold tracking-[0.35em] text-slate-900 outline-none transition ${
                        mfaErrors.code
                          ? "border-red-400 focus:border-red-500"
                          : "border-slate-200 focus:border-[#A41034]"
                      }`}
                    />

                    {mfaTouched &&
                      mfaErrors.code && (
                        <p className="mt-1 text-[11px] text-red-600">
                          {mfaErrors.code}
                        </p>
                      )}

                    <p className="mt-2 text-[11px] text-slate-400">
                      Enter the code generated by
                      your authenticator app.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={
                      isLoading
                    }
                    className="group flex h-11 w-full items-center justify-center gap-2 text-sm font-semibold text-white transition-all disabled:cursor-not-allowed disabled:opacity-60"
                    style={{
                      backgroundColor:
                        CRIMSON,
                    }}
                  >
                    {isLoading ? (
                      <>
                        <FiLoader
                          size={16}
                          className="animate-spin"
                        />

                        Verifying...
                      </>
                    ) : (
                      <>
                        Verify & Continue

                        <FiArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;