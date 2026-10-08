// src/features/auth/auth.thunks.ts

import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { authApi } from "@/services/api/auth.api";

import type {
  AuthResult,
  ChangePasswordPayload,
  ForgotPasswordPayload,
  LoginPayload,
  MfaDisablePayload,
  MfaEnablePayload,
  MfaSetupPayload,
  RegisterPayload,
  ResetPasswordPayload,
  SendEmailVerificationPayload,
  SendPhoneVerificationPayload,
  VerifyEmailPayload,
  VerifyLoginMfaPayload,
  VerifyPhonePayload,
  Session,
  User,
} from "./auth.types";

/* =========================================================
   ERROR HELPER
========================================================= */

export const getApiErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data as
      | {
          message?: string;
          error?: string;
        }
      | undefined;

    return (
      responseData?.message ??
      responseData?.error ??
      error.message ??
      "Something went wrong."
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong.";
};

/* =========================================================
   REGISTER
========================================================= */

export const register = createAsyncThunk<
  AuthResult,
  RegisterPayload,
  { rejectValue: string }
>(
  "auth/register",

  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.register(payload);
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   LOGIN
========================================================= */

export const login = createAsyncThunk<
  AuthResult,
  LoginPayload,
  { rejectValue: string }
>(
  "auth/login",

  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.login(payload);
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   VERIFY LOGIN MFA
========================================================= */

export const verifyLoginMfa = createAsyncThunk<
  AuthResult,
  VerifyLoginMfaPayload,
  { rejectValue: string }
>(
  "auth/verifyLoginMfa",

  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.verifyLoginMfa(payload);
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   REFRESH TOKEN
========================================================= */

export const refreshToken = createAsyncThunk<
  AuthResult,
  void,
  { rejectValue: string }
>(
  "auth/refreshToken",

  async (_, { rejectWithValue }) => {
    try {
      const result = await authApi.refreshToken();
      const accessToken =
        result.accessToken ?? result.tokens?.accessToken;

      if (!accessToken) {
        return rejectWithValue(
          "Refresh response did not include an access token.",
        );
      }

      return result;
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   LOGOUT
========================================================= */

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",

  async (_, { rejectWithValue }) => {
    try {
      await authApi.logout();
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   LOGOUT ALL
========================================================= */

export const logoutAll = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logoutAll",

  async (_, { rejectWithValue }) => {
    try {
      await authApi.logoutAll();
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   ME
========================================================= */

export const fetchMe = createAsyncThunk<User, void, { rejectValue: string }>(
  "auth/fetchMe",

  async (_, { rejectWithValue }) => {
    try {
      return await authApi.me();
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   CHANGE PASSWORD
========================================================= */

export const changePassword = createAsyncThunk<
  void,
  ChangePasswordPayload,
  { rejectValue: string }
>(
  "auth/changePassword",

  async (payload, { rejectWithValue }) => {
    try {
      await authApi.changePassword(payload);
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   SEND EMAIL VERIFICATION
========================================================= */

export const sendEmailVerification = createAsyncThunk<
  { message?: string },
  SendEmailVerificationPayload | undefined,
  { rejectValue: string }
>(
  "auth/sendEmailVerification",

  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.sendEmailVerification(payload);
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   VERIFY EMAIL
========================================================= */

export const verifyEmail = createAsyncThunk<
  AuthResult,
  VerifyEmailPayload,
  { rejectValue: string }
>(
  "auth/verifyEmail",

  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.verifyEmail(payload);
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   SEND PHONE VERIFICATION
========================================================= */

export const sendPhoneVerification = createAsyncThunk<
  { message?: string },
  SendPhoneVerificationPayload | undefined,
  { rejectValue: string }
>(
  "auth/sendPhoneVerification",

  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.sendPhoneVerification(payload);
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   VERIFY PHONE
========================================================= */

export const verifyPhone = createAsyncThunk<
  AuthResult,
  VerifyPhonePayload,
  { rejectValue: string }
>(
  "auth/verifyPhone",

  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.verifyPhone(payload);
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   FORGOT PASSWORD
========================================================= */

export const forgotPassword = createAsyncThunk<
  { message?: string },
  ForgotPasswordPayload,
  { rejectValue: string }
>(
  "auth/forgotPassword",

  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.forgotPassword(payload);
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   RESET PASSWORD
========================================================= */

export const resetPassword = createAsyncThunk<
  { message?: string },
  ResetPasswordPayload,
  { rejectValue: string }
>(
  "auth/resetPassword",

  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.resetPassword(payload);
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   MFA SETUP
========================================================= */

export const setupMfa = createAsyncThunk<
  AuthResult,
  MfaSetupPayload | undefined,
  { rejectValue: string }
>(
  "auth/setupMfa",

  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.mfaSetup(payload);
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   MFA ENABLE
========================================================= */

export const enableMfa = createAsyncThunk<
  AuthResult,
  MfaEnablePayload,
  { rejectValue: string }
>(
  "auth/enableMfa",

  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.mfaEnable(payload);
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   MFA DISABLE
========================================================= */

export const disableMfa = createAsyncThunk<
  { message?: string },
  MfaDisablePayload,
  { rejectValue: string }
>(
  "auth/disableMfa",

  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.mfaDisable(payload);
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   GET SESSIONS
========================================================= */

export const fetchSessions = createAsyncThunk<
  Session[],
  void,
  { rejectValue: string }
>(
  "auth/fetchSessions",

  async (_, { rejectWithValue }) => {
    try {
      return await authApi.getSessions();
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);

/* =========================================================
   DELETE SESSION
========================================================= */

export const deleteSession = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>(
  "auth/deleteSession",

  async (sessionId, { rejectWithValue }) => {
    try {
      await authApi.deleteSession(sessionId);

      return sessionId;
    } catch (error) {
      return rejectWithValue(getApiErrorMessage(error));
    }
  },
);
