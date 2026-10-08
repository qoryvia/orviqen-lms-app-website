// src/features/auth/auth.slice.ts

import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type {
  AuthResult,
  AuthState,
  User,
} from "./auth.types";

import {
  getStoredAccessToken,
  getStoredUser,
  persistAuth,
  clearStoredAuth,
} from "./auth.storage";

import {
  register,
  login,
  verifyLoginMfa,
  refreshToken,
  logout,
  logoutAll,
  fetchMe,
  changePassword,
  sendEmailVerification,
  verifyEmail,
  sendPhoneVerification,
  verifyPhone,
  forgotPassword,
  resetPassword,
  setupMfa,
  enableMfa,
  disableMfa,
  fetchSessions,
  deleteSession,
} from "./auth.thunks";

/* =========================================================
   HELPERS
========================================================= */

const getTokens = (result?: AuthResult) => {
  if (!result) {
    return { accessToken: undefined };
  }

  return {
    accessToken:
      result.accessToken ??
      result.tokens?.accessToken,
  };
};

const getMfaRequired = (
  result?: AuthResult
): boolean => {
  return Boolean(
    result?.requiresMfa ??
      result?.mfaRequired
  );
};

const getMfaChallengeToken = (
  result?: AuthResult
): string | null => {
  return (
    result?.challengeToken ??
    result?.mfaChallengeToken ??
    null
  );
};

const initialState: AuthState = {
  user: getStoredUser(),
  accessToken: getStoredAccessToken(),
  isAuthenticated:
    Boolean(getStoredAccessToken()),
  status: "idle",
  error: null,
  message: null,
  mfaRequired: false,
  mfaChallengeToken: null,
  mfaSetup: null,
  emailVerificationSent: false,
  phoneVerificationSent: false,
  sessions: [],
  sessionsLoading: false,
  passwordResetRequested: false,
};

/* =========================================================
   SLICE
========================================================= */

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    /* -----------------------------------------------------
       Clear Error
    ----------------------------------------------------- */

    clearAuthError: (state) => {
      state.error = null;
    },

    /* -----------------------------------------------------
       Clear Message
    ----------------------------------------------------- */

    clearAuthMessage: (state) => {
      state.message = null;
    },

    /* -----------------------------------------------------
       Clear MFA
    ----------------------------------------------------- */

    clearMfaState: (state) => {
      state.mfaRequired = false;
      state.mfaChallengeToken = null;
    },

    /* -----------------------------------------------------
       Set Access Token
       Used by Axios refresh interceptor.
    ----------------------------------------------------- */

    setAccessToken: (
      state,
      action: PayloadAction<string>
    ) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;

      persistAuth({
        accessToken: action.payload,
      });
    },

    /* -----------------------------------------------------
       Update User
    ----------------------------------------------------- */

    setUser: (
      state,
      action: PayloadAction<User | null>
    ) => {
      state.user = action.payload;

      if (action.payload) {
        persistAuth({
          user: action.payload,
        });
      }
    },

    /* -----------------------------------------------------
       Hydrate From Storage
    ----------------------------------------------------- */

    hydrateAuth: (state) => {
      state.user = getStoredUser();

      state.accessToken =
        getStoredAccessToken();

      state.isAuthenticated =
        Boolean(state.accessToken);
    },

    /* -----------------------------------------------------
       Clear Authentication
    ----------------------------------------------------- */

    clearAuth: (state) => {
      state.user = null;

      state.accessToken = null;

      state.isAuthenticated = false;

      state.mfaRequired = false;
      state.mfaChallengeToken = null;

      state.mfaSetup = null;

      state.sessions = [];

      state.error = null;
      state.message = null;

      clearStoredAuth();
    },
  },

  extraReducers: (builder) => {
    /* =====================================================
       REGISTER
    ===================================================== */

    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.message = null;
      })

      .addCase(
        register.fulfilled,
        (state, action) => {
          state.status = "succeeded";

          const result = action.payload;

          const { accessToken } = getTokens(result);

          if (accessToken) {
            state.accessToken = accessToken;
            state.isAuthenticated = true;
          }

          if (result.user) {
            state.user = result.user;
          }

          state.message =
            result.message ?? null;

          state.error = null;

          persistAuth({
            accessToken,
            user: result.user,
          });
        }
      )

      .addCase(
        register.rejected,
        (state, action) => {
          state.status = "failed";
          state.error =
            action.payload ??
            "Registration failed.";
        }
      );

    /* =====================================================
       LOGIN
    ===================================================== */

    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.message = null;
      })

      .addCase(
        login.fulfilled,
        (state, action) => {
          state.status = "succeeded";

          const result = action.payload;

          const mfaRequired =
            getMfaRequired(result);

          state.mfaRequired =
            mfaRequired;

          state.mfaChallengeToken =
            mfaRequired
              ? getMfaChallengeToken(result)
              : null;

          const { accessToken } = getTokens(result);

          if (!mfaRequired) {
            if (accessToken) {
              state.accessToken =
                accessToken;
            }

            if (result.user) {
              state.user = result.user;
            }

            state.isAuthenticated =
              Boolean(
                accessToken ??
                  state.accessToken
              );

            persistAuth({
              accessToken,
              user: result.user,
            });
          }

          state.message =
            result.message ?? null;
        }
      )

      .addCase(
        login.rejected,
        (state, action) => {
          state.status = "failed";
          state.error =
            action.payload ??
            "Login failed.";

          state.mfaRequired = false;
          state.mfaChallengeToken = null;
        }
      );

    /* =====================================================
       VERIFY LOGIN MFA
    ===================================================== */

    builder
      .addCase(
        verifyLoginMfa.pending,
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      )

      .addCase(
        verifyLoginMfa.fulfilled,
        (state, action) => {
          state.status = "succeeded";

          const result = action.payload;

          const { accessToken } = getTokens(result);

          if (accessToken) {
            state.accessToken =
              accessToken;
          }

          if (result.user) {
            state.user = result.user;
          }

          state.isAuthenticated =
            Boolean(
              accessToken ??
                state.accessToken
            );

          state.mfaRequired = false;
          state.mfaChallengeToken = null;

          state.message =
            result.message ?? null;

          persistAuth({
            accessToken,
            user: result.user,
          });
        }
      )

      .addCase(
        verifyLoginMfa.rejected,
        (state, action) => {
          state.status = "failed";
          state.error =
            action.payload ??
            "MFA verification failed.";
        }
      );

    /* =====================================================
       REFRESH TOKEN
    ===================================================== */

    builder
      .addCase(
        refreshToken.fulfilled,
        (state, action) => {
          const result = action.payload;

          const { accessToken } = getTokens(result);

          if (accessToken) {
            state.accessToken =
              accessToken;
          }

          if (result.user) {
            state.user = result.user;
          }

          state.isAuthenticated =
            Boolean(
              accessToken ??
                state.accessToken
            );

          persistAuth({
            accessToken,
            user: result.user,
          });
        }
      )

      .addCase(
        refreshToken.rejected,
        (state) => {
          state.user = null;

          state.accessToken = null;

          state.isAuthenticated = false;
          clearStoredAuth();
        }
      );

    /* =====================================================
       LOGOUT
    ===================================================== */

    builder
      .addCase(
        logout.fulfilled,
        (state) => {
          state.user = null;

          state.accessToken = null;

          state.isAuthenticated = false;

          state.mfaRequired = false;
          state.mfaChallengeToken = null;

          state.sessions = [];

          state.status = "idle";

          clearStoredAuth();
        }
      )

      .addCase(
        logout.rejected,
        (state, action) => {
          state.user = null;

          state.accessToken = null;

          state.isAuthenticated = false;

          state.error =
            action.payload ??
            "Logout completed locally.";
          
          clearStoredAuth();
        }
      );

    /* =====================================================
       LOGOUT ALL
    ===================================================== */

    builder
      .addCase(
        logoutAll.fulfilled,
        (state) => {
          state.user = null;

          state.accessToken = null;

          state.isAuthenticated = false;

          state.sessions = [];

          state.status = "idle";

          clearStoredAuth();
        }
      )

      .addCase(
        logoutAll.rejected,
        (state, action) => {
          state.user = null;

          state.accessToken = null;

          state.isAuthenticated = false;

          state.sessions = [];

          state.error =
            action.payload ??
            "Logout completed locally.";

          clearStoredAuth();
        }
      );

    /* =====================================================
       ME
    ===================================================== */

    builder
      .addCase(
        fetchMe.pending,
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      )

      .addCase(
        fetchMe.fulfilled,
        (state, action) => {
          state.status = "succeeded";

          state.user = action.payload;
          state.isAuthenticated = true;

          persistAuth({
            user: action.payload,
          });
        }
      )

      .addCase(
        fetchMe.rejected,
        (state, action) => {
          state.status = "failed";

          state.error =
            action.payload ??
            "Unable to fetch user.";

          state.user = null;

          state.accessToken = null;

          state.isAuthenticated = false;

          clearStoredAuth();
        }
      );

    /* =====================================================
       CHANGE PASSWORD
    ===================================================== */

    builder
      .addCase(
        changePassword.pending,
        (state) => {
          state.status = "loading";
          state.error = null;
          state.message = null;
        }
      )

      .addCase(
        changePassword.fulfilled,
        (state) => {
          state.status = "succeeded";

          state.message =
            "Password changed successfully.";
        }
      )

      .addCase(
        changePassword.rejected,
        (state, action) => {
          state.status = "failed";

          state.error =
            action.payload ??
            "Unable to change password.";
        }
      );

    /* =====================================================
       EMAIL VERIFICATION
    ===================================================== */

    builder
      .addCase(
        sendEmailVerification.fulfilled,
        (state, action) => {
          state.emailVerificationSent =
            true;

          state.message =
            action.payload?.message ??
            "Verification email sent.";
        }
      )

      .addCase(
        sendEmailVerification.rejected,
        (state, action) => {
          state.error =
            action.payload ??
            "Unable to send verification email.";
        }
      );

    /* =====================================================
       VERIFY EMAIL
    ===================================================== */

    builder.addCase(
      verifyEmail.fulfilled,
      (state, action) => {
        const result =
          action.payload;

        if (result.user) {
          state.user = {
            ...state.user,
            ...result.user,
          } as User;

          persistAuth({
            user: state.user,
          });
        }

        state.message =
          result.message ??
          "Email verified successfully.";

        state.error = null;
      }
    );

    builder.addCase(
      verifyEmail.rejected,
      (state, action) => {
        state.error =
          action.payload ??
          "Email verification failed.";
      }
    );

    /* =====================================================
       PHONE VERIFICATION
    ===================================================== */

    builder
      .addCase(
        sendPhoneVerification.fulfilled,
        (state, action) => {
          state.phoneVerificationSent =
            true;

          state.message =
            action.payload?.message ??
            "Phone verification code sent.";
        }
      )

      .addCase(
        sendPhoneVerification.rejected,
        (state, action) => {
          state.error =
            action.payload ??
            "Unable to send phone verification.";
        }
      );

    builder.addCase(
      verifyPhone.fulfilled,
      (state, action) => {
        const result =
          action.payload;

        if (result.user) {
          state.user = {
            ...state.user,
            ...result.user,
          } as User;

          persistAuth({
            user: state.user,
          });
        }

        state.message =
          result.message ??
          "Phone verified successfully.";
      }
    );

    builder.addCase(
      verifyPhone.rejected,
      (state, action) => {
        state.error =
          action.payload ??
          "Phone verification failed.";
      }
    );

    /* =====================================================
       FORGOT PASSWORD
    ===================================================== */

    builder
      .addCase(
        forgotPassword.fulfilled,
        (state, action) => {
          state.passwordResetRequested =
            true;

          state.message =
            action.payload?.message ??
            "Password reset instructions sent.";
        }
      )

      .addCase(
        forgotPassword.rejected,
        (state, action) => {
          state.passwordResetRequested =
            false;

          state.error =
            action.payload ??
            "Unable to request password reset.";
        }
      );

    /* =====================================================
       RESET PASSWORD
    ===================================================== */

    builder
      .addCase(
        resetPassword.fulfilled,
        (state, action) => {
          state.message =
            action.payload?.message ??
            "Password reset successfully.";

          state.passwordResetRequested =
            false;
        }
      )

      .addCase(
        resetPassword.rejected,
        (state, action) => {
          state.error =
            action.payload ??
            "Unable to reset password.";
        }
      );

    /* =====================================================
       MFA SETUP
    ===================================================== */

    builder
      .addCase(
        setupMfa.pending,
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      )

      .addCase(
        setupMfa.fulfilled,
        (state, action) => {
          state.status = "succeeded";

          const result =
            action.payload;

          state.mfaSetup =
            result as AuthState["mfaSetup"];

          state.message =
            result.message ?? null;
        }
      )

      .addCase(
        setupMfa.rejected,
        (state, action) => {
          state.status = "failed";

          state.error =
            action.payload ??
            "Unable to setup MFA.";
        }
      );

    /* =====================================================
       MFA ENABLE
    ===================================================== */

    builder
      .addCase(
        enableMfa.fulfilled,
        (state, action) => {
          const result =
            action.payload;

          if (result.user) {
            state.user = {
              ...state.user,
              ...result.user,
            } as User;

            persistAuth({
              user: state.user,
            });
          } else if (state.user) {
            state.user = {
              ...state.user,
              isMfaEnabled: true,
            };

            persistAuth({
              user: state.user,
            });
          }

          state.message =
            result.message ??
            "MFA enabled successfully.";
        }
      )

      .addCase(
        enableMfa.rejected,
        (state, action) => {
          state.error =
            action.payload ??
            "Unable to enable MFA.";
        }
      );

    /* =====================================================
       MFA DISABLE
    ===================================================== */

    builder
      .addCase(
        disableMfa.fulfilled,
        (state, action) => {
          if (state.user) {
            state.user = {
              ...state.user,
              isMfaEnabled: false,
            };

            persistAuth({
              user: state.user,
            });
          }

          state.mfaSetup = null;

          state.message =
            action.payload?.message ??
            "MFA disabled successfully.";
        }
      )

      .addCase(
        disableMfa.rejected,
        (state, action) => {
          state.error =
            action.payload ??
            "Unable to disable MFA.";
        }
      );

    /* =====================================================
       SESSIONS
    ===================================================== */

    builder
      .addCase(
        fetchSessions.pending,
        (state) => {
          state.sessionsLoading = true;
          state.error = null;
        }
      )

      .addCase(
        fetchSessions.fulfilled,
        (state, action) => {
          state.sessionsLoading = false;
          state.sessions =
            action.payload;
        }
      )

      .addCase(
        fetchSessions.rejected,
        (state, action) => {
          state.sessionsLoading = false;

          state.error =
            action.payload ??
            "Unable to fetch sessions.";
        }
      );

    /* =====================================================
       DELETE SESSION
    ===================================================== */

    builder
      .addCase(
        deleteSession.fulfilled,
        (state, action) => {
          state.sessions =
            state.sessions.filter(
              (session) =>
                session.id !==
                action.payload
            );

          state.message =
            "Session deleted successfully.";
        }
      )

      .addCase(
        deleteSession.rejected,
        (state, action) => {
          state.error =
            action.payload ??
            "Unable to delete session.";
        }
      );
  },
});

/* =========================================================
   ACTIONS
========================================================= */

export const {
  clearAuthError,
  clearAuthMessage,
  clearMfaState,
  setAccessToken,
  setUser,
  hydrateAuth,
  clearAuth,
} = authSlice.actions;

/* =========================================================
   REDUCER
========================================================= */

export default authSlice.reducer;