// src/features/auth/auth.storage.ts

import type { User } from "./auth.types";

const ACCESS_TOKEN_KEY = "eklavya_access_token";
const USER_KEY = "eklavya_auth_user";

const isBrowser = () =>
  typeof window !== "undefined";

const notifyAuthStorageChange = (): void => {
  if (isBrowser()) {
    window.dispatchEvent(
      new Event("auth-storage-change"),
    );
  }
};

/* =========================================================
   ACCESS TOKEN
========================================================= */

export const getStoredAccessToken = (): string | null => {
  if (!isBrowser()) return null;

  return localStorage.getItem(
    ACCESS_TOKEN_KEY
  );
};

export const setStoredAccessToken = (
  token: string
): void => {
  if (!isBrowser()) return;

  localStorage.setItem(
    ACCESS_TOKEN_KEY,
    token
  );

  notifyAuthStorageChange();
};

export const removeStoredAccessToken = (): void => {
  if (!isBrowser()) return;

  localStorage.removeItem(
    ACCESS_TOKEN_KEY
  );

  notifyAuthStorageChange();
};

/* =========================================================
   USER
========================================================= */

export const getStoredUser = (): User | null => {
  if (!isBrowser()) return null;

  const user =
    localStorage.getItem(USER_KEY);

  if (!user) return null;

  try {
    return JSON.parse(user) as User;
  } catch {
    return null;
  }
};

export const setStoredUser = (
  user: User
): void => {
  if (!isBrowser()) return;

  localStorage.setItem(
    USER_KEY,
    JSON.stringify(user)
  );
};

export const removeStoredUser = (): void => {
  if (!isBrowser()) return;

  localStorage.removeItem(USER_KEY);
};

/* =========================================================
   AUTH
========================================================= */

export const persistAuth = ({
  accessToken,
  user,
}: {
  accessToken?: string | null;
  user?: User | null;
}) => {
  if (accessToken) {
    setStoredAccessToken(accessToken);
  }

  if (user) {
    setStoredUser(user);
  }
};

export const clearStoredAuth = (): void => {
  removeStoredAccessToken();
  removeStoredUser();
};