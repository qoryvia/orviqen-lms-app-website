// src/features/auth/auth.selectors.ts

import type { RootState } from "@/lib/redux/store";

/* =========================================================
   AUTH ROOT
========================================================= */

export const selectAuth = (state: RootState) => state.auth;

/* =========================================================
   USER
========================================================= */

export const selectCurrentUser = (state: RootState) => state.auth.user;

/* =========================================================
   TOKEN
========================================================= */

export const selectAccessToken = (state: RootState) => state.auth.accessToken;

/* =========================================================
   AUTH STATUS
========================================================= */

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectAuthStatus = (state: RootState) => state.auth.status;

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectAuthMessage = (state: RootState) => state.auth.message;

/* =========================================================
   MFA
========================================================= */

export const selectMfaRequired = (state: RootState) => state.auth.mfaRequired;

export const selectMfaChallengeToken = (state: RootState) =>
  state.auth.mfaChallengeToken;

export const selectMfaSetup = (state: RootState) => state.auth.mfaSetup;

/* =========================================================
   VERIFICATION
========================================================= */

export const selectEmailVerificationSent = (state: RootState) =>
  state.auth.emailVerificationSent;

export const selectPhoneVerificationSent = (state: RootState) =>
  state.auth.phoneVerificationSent;

/* =========================================================
   PASSWORD
========================================================= */

export const selectPasswordResetRequested = (state: RootState) =>
  state.auth.passwordResetRequested;

/* =========================================================
   SESSIONS
========================================================= */

export const selectSessions = (state: RootState) => state.auth.sessions;

export const selectSessionsLoading = (state: RootState) =>
  state.auth.sessionsLoading;
