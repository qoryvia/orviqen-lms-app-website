// src/providers/AppProviders.tsx

"use client";

import React, {
  useEffect,
  useRef,
} from "react";

import ReduxProvider from "@/lib/redux/provider";

import {
  setupAxiosInterceptors,
} from "@/lib/axios";

import {
  store,
} from "@/lib/redux/store";

import {
  refreshToken,
} from "@/features/auth/auth.thunks";

import {
  clearAuth,
  hydrateAuth,
} from "@/features/auth/auth.slice";

interface AppProvidersProps {
  children: React.ReactNode;
}

const AuthInterceptorSetup = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    store.dispatch(hydrateAuth());

    setupAxiosInterceptors({
      /* ---------------------------------------------------
         GET CURRENT ACCESS TOKEN
      ---------------------------------------------------- */

      getAccessToken: () => {
        return store.getState().auth.accessToken;
      },

      /* ---------------------------------------------------
         REFRESH ACCESS TOKEN
      ---------------------------------------------------- */

      refreshAccessToken: async () => {
        const result =
          await store
            .dispatch(refreshToken())
            .unwrap();

        return (
          result.accessToken ??
          result.tokens?.accessToken ??
          null
        );
      },

      /* ---------------------------------------------------
         REFRESH FAILURE
      ---------------------------------------------------- */

      onRefreshFailure: () => {
        store.dispatch(clearAuth());
      },
    });
  }, []);

  return null;
};

const AppProviders = ({
  children,
}: AppProvidersProps) => {
  return (
    <ReduxProvider>
      <AuthInterceptorSetup />

      {children}
    </ReduxProvider>
  );
};

export default AppProviders;