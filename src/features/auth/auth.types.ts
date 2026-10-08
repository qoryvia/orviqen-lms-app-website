// src/features/auth/auth.types.ts

export interface User {
  id: string;
  email: string;

  firstName?: string;
  lastName?: string;
  name?: string;

  phone?: string;

  avatar?: string | null;

  role?: string;
  roles?: string[];

  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  isMfaEnabled?: boolean;

  createdAt?: string;
  updatedAt?: string;

  [key: string]: unknown;
}

export interface AuthTokens {
  accessToken: string;
}

export interface Session {
  id: string;
  userId?: string;
  device?: string;
  browser?: string;
  operatingSystem?: string;
  ipAddress?: string;
  location?: string;
  createdAt?: string;
  lastActiveAt?: string;
  expiresAt?: string;
  current?: boolean;
  [key: string]: unknown;
}

export interface MfaSetupData {
  secret?: string;
  qrCode?: string;
  qrCodeUrl?: string;
  otpauthUrl?: string;

  [key: string]: unknown;
}

/* =========================================================
   API RESPONSE
========================================================= */

export interface AuthResult {
  user?: User;

  accessToken?: string;

  tokens?: AuthTokens;

  requiresMfa?: boolean;
  mfaRequired?: boolean;

  challengeToken?: string;
  mfaChallengeToken?: string;

  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;

  message?: string;

  data?: unknown;

  [key: string]: unknown;
}

export interface ApiMessageResponse {
  message?: string;

  [key: string]: unknown;
}

/* =========================================================
   REQUEST PAYLOADS
========================================================= */

export interface RegisterPayload {
  firstName?: string;
  lastName?: string;

  name?: string;

  email: string;
  phone?: string;

  password: string;

  confirmPassword?: string;

  [key: string]: unknown;
}

export interface LoginPayload {
  identifier?: string;
  email?: string;
  phone?: string;
  password: string;
}

export interface VerifyLoginMfaPayload {
  challengeToken?: string;
  mfaChallengeToken?: string;

  code: string;
  otp?: string;
}

export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
  confirmPassword?: string;
}

export interface SendEmailVerificationPayload {
  email?: string;
}

export interface VerifyEmailPayload {
  token: string;
  email?: string;
}

export interface SendPhoneVerificationPayload {
  phone?: string;
}

export interface VerifyPhonePayload {
  code: string;
  otp?: string;
  phone?: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  token: string;
  newPassword: string;
  confirmPassword?: string;
}

export interface MfaSetupPayload {
  password?: string;
}

export interface MfaEnablePayload {
  code: string;
  otp?: string;
}

export interface MfaDisablePayload {
  code?: string;
  otp?: string;
  password?: string;
}

/* =========================================================
   REDUX STATE
========================================================= */

export type AuthStatus = "idle" | "loading" | "succeeded" | "failed";

export interface AuthState {
  user: User | null;

  accessToken: string | null;

  isAuthenticated: boolean;

  status: AuthStatus;
  error: string | null;

  message: string | null;

  /* MFA */
  mfaRequired: boolean;
  mfaChallengeToken: string | null;

  mfaSetup: MfaSetupData | null;

  /* Verification */
  emailVerificationSent: boolean;
  phoneVerificationSent: boolean;

  /* Sessions */
  sessions: Session[];
  sessionsLoading: boolean;

  /* Password */
  passwordResetRequested: boolean;
}
