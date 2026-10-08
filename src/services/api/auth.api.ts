// src/services/api/auth.api.ts

import { apiClient, authRefreshClient } from "@/lib/axios";

import type {
  ApiMessageResponse,
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
} from "@/features/auth/auth.types";

/* =========================================================
   RESPONSE UNWRAPPER
========================================================= */

const unwrapResponse = <T>(responseData: unknown): T => {
  if (
    responseData &&
    typeof responseData === "object" &&
    "data" in responseData
  ) {
    const data = (responseData as { data: unknown }).data;

    return data as T;
  }

  return responseData as T;
};

/* =========================================================
   AUTH API
========================================================= */

export const authApi = {
  /* ---------------------------------------------------------
     REGISTER
  --------------------------------------------------------- */

  register: async (payload: RegisterPayload): Promise<AuthResult> => {
    const response = await apiClient.post("/api/v1/auth/register", payload);

    return unwrapResponse<AuthResult>(response.data);
  },

  /* ---------------------------------------------------------
     LOGIN
  --------------------------------------------------------- */

  login: async (payload: LoginPayload): Promise<AuthResult> => {
    const response = await apiClient.post("/api/v1/auth/login", payload);

    return unwrapResponse<AuthResult>(response.data);
  },

  /* ---------------------------------------------------------
     MFA LOGIN VERIFICATION
  --------------------------------------------------------- */

  verifyLoginMfa: async (
    payload: VerifyLoginMfaPayload,
  ): Promise<AuthResult> => {
    const response = await apiClient.post(
      "/api/v1/auth/mfa/verify-login",
      payload,
    );

    return unwrapResponse<AuthResult>(response.data);
  },

  /* ---------------------------------------------------------
     REFRESH TOKEN

     Uses a separate axios instance to prevent an interceptor
     refresh loop.
  --------------------------------------------------------- */

  refreshToken: async (): Promise<AuthResult> => {
    const response = await authRefreshClient.post(
      "/api/v1/auth/refresh-token",
    );

    return unwrapResponse<AuthResult>(response.data);
  },

  /* ---------------------------------------------------------
     LOGOUT
  --------------------------------------------------------- */

  logout: async (): Promise<ApiMessageResponse> => {
    const response = await apiClient.post("/api/v1/auth/logout");

    return unwrapResponse<ApiMessageResponse>(response.data);
  },

  /* ---------------------------------------------------------
     LOGOUT ALL
  --------------------------------------------------------- */

  logoutAll: async (): Promise<ApiMessageResponse> => {
    const response = await apiClient.post("/api/v1/auth/logout-all");

    return unwrapResponse<ApiMessageResponse>(response.data);
  },

  /* ---------------------------------------------------------
     CURRENT USER
  --------------------------------------------------------- */

  me: async (): Promise<User> => {
    const response = await apiClient.get("/api/v1/auth/me");

    return unwrapResponse<User>(response.data);
  },

  /* ---------------------------------------------------------
     CHANGE PASSWORD
  --------------------------------------------------------- */

  changePassword: async (
    payload: ChangePasswordPayload,
  ): Promise<ApiMessageResponse> => {
    const response = await apiClient.patch(
      "/api/v1/auth/change-password",
      payload,
    );

    return unwrapResponse<ApiMessageResponse>(response.data);
  },

  /* ---------------------------------------------------------
     SEND EMAIL VERIFICATION
  --------------------------------------------------------- */

  sendEmailVerification: async (
    payload?: SendEmailVerificationPayload,
  ): Promise<ApiMessageResponse> => {
    const response = await apiClient.post(
      "/api/v1/auth/send-email-verification",
      payload ?? {},
    );

    return unwrapResponse<ApiMessageResponse>(response.data);
  },

  /* ---------------------------------------------------------
     VERIFY EMAIL
  --------------------------------------------------------- */

  verifyEmail: async (payload: VerifyEmailPayload): Promise<AuthResult> => {
    const response = await apiClient.post("/api/v1/auth/verify-email", payload);

    return unwrapResponse<AuthResult>(response.data);
  },

  /* ---------------------------------------------------------
     SEND PHONE VERIFICATION
  --------------------------------------------------------- */

  sendPhoneVerification: async (
    payload?: SendPhoneVerificationPayload,
  ): Promise<ApiMessageResponse> => {
    const response = await apiClient.post(
      "/api/v1/auth/send-phone-verification",
      payload ?? {},
    );

    return unwrapResponse<ApiMessageResponse>(response.data);
  },

  /* ---------------------------------------------------------
     VERIFY PHONE
  --------------------------------------------------------- */

  verifyPhone: async (payload: VerifyPhonePayload): Promise<AuthResult> => {
    const response = await apiClient.post("/api/v1/auth/verify-phone", payload);

    return unwrapResponse<AuthResult>(response.data);
  },

  /* ---------------------------------------------------------
     FORGOT PASSWORD
  --------------------------------------------------------- */

  forgotPassword: async (
    payload: ForgotPasswordPayload,
  ): Promise<ApiMessageResponse> => {
    const response = await apiClient.post(
      "/api/v1/auth/forgot-password",
      payload,
    );

    return unwrapResponse<ApiMessageResponse>(response.data);
  },

  /* ---------------------------------------------------------
     RESET PASSWORD
  --------------------------------------------------------- */

  resetPassword: async (
    payload: ResetPasswordPayload,
  ): Promise<ApiMessageResponse> => {
    const response = await apiClient.post(
      "/api/v1/auth/reset-password",
      payload,
    );

    return unwrapResponse<ApiMessageResponse>(response.data);
  },

  /* ---------------------------------------------------------
     MFA SETUP
  --------------------------------------------------------- */

  mfaSetup: async (payload?: MfaSetupPayload): Promise<AuthResult> => {
    const response = await apiClient.post(
      "/api/v1/auth/mfa/setup",
      payload ?? {},
    );

    return unwrapResponse<AuthResult>(response.data);
  },

  /* ---------------------------------------------------------
     MFA ENABLE
  --------------------------------------------------------- */

  mfaEnable: async (payload: MfaEnablePayload): Promise<AuthResult> => {
    const response = await apiClient.post("/api/v1/auth/mfa/enable", payload);

    return unwrapResponse<AuthResult>(response.data);
  },

  /* ---------------------------------------------------------
     MFA DISABLE
  --------------------------------------------------------- */

  mfaDisable: async (
    payload: MfaDisablePayload,
  ): Promise<ApiMessageResponse> => {
    const response = await apiClient.post("/api/v1/auth/mfa/disable", payload);

    return unwrapResponse<ApiMessageResponse>(response.data);
  },

  /* ---------------------------------------------------------
     SESSIONS
  --------------------------------------------------------- */

  getSessions: async (): Promise<Session[]> => {
    const response = await apiClient.get("/api/v1/auth/sessions");

    return unwrapResponse<Session[]>(response.data);
  },

  /* ---------------------------------------------------------
     DELETE SESSION
  --------------------------------------------------------- */

  deleteSession: async (sessionId: string): Promise<ApiMessageResponse> => {
    const response = await apiClient.delete(
      `/api/v1/auth/sessions/${sessionId}`,
    );

    return unwrapResponse<ApiMessageResponse>(response.data);
  },
};
