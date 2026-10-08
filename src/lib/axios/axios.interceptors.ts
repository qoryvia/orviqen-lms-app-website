// src/lib/axios/axios.interceptors.ts

import type {
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

import { apiClient } from "./axios.instance";

export interface AxiosAuthInterceptorHandlers {
  getAccessToken: () => string | null;

  refreshAccessToken: () => Promise<string | null>;

  onRefreshFailure: () => void;
}

interface RetryableRequest
  extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

let isConfigured = false;

let refreshPromise: Promise<string | null> | null = null;

export const setupAxiosInterceptors = ({
  getAccessToken,
  refreshAccessToken,
  onRefreshFailure,
}: AxiosAuthInterceptorHandlers) => {
  if (isConfigured) {
    return;
  }

  isConfigured = true;

  /* =======================================================
     REQUEST INTERCEPTOR
  ======================================================== */

  apiClient.interceptors.request.use(
    (config) => {
      const token = getAccessToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  /* =======================================================
     RESPONSE INTERCEPTOR
  ======================================================== */

  apiClient.interceptors.response.use(
    (response) => {
      return response;
    },

    async (error: AxiosError) => {
      const originalRequest =
        error.config as RetryableRequest | undefined;

      if (!originalRequest) {
        return Promise.reject(error);
      }

      const status = error.response?.status;

      /*
       * Only refresh on 401.
       */
      if (status !== 401) {
        return Promise.reject(error);
      }

      /*
       * Prevent endless retry loops.
       */
      if (originalRequest._retry) {
        onRefreshFailure();

        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        /*
         * If another request is already refreshing,
         * reuse the same promise.
         */
        if (!refreshPromise) {
          refreshPromise = refreshAccessToken();
        }

        const newAccessToken =
          await refreshPromise;

        refreshPromise = null;

        if (!newAccessToken) {
          onRefreshFailure();

          return Promise.reject(error);
        }

        originalRequest.headers.Authorization =
          `Bearer ${newAccessToken}`;

        return apiClient(originalRequest);
      } catch (refreshError) {
        refreshPromise = null;

        onRefreshFailure();

        return Promise.reject(refreshError);
      }
    }
  );
};