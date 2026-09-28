"use client";

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface AppContextValue {
  isChatAssistantOpen: boolean;
  openChatAssistant: () => void;
  closeChatAssistant: () => void;
  toggleChatAssistant: () => void;
  setChatAssistantOpen: (open: boolean) => void;
}

const AppContext = createContext<
  AppContextValue | undefined
>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({
  children,
}: AppProviderProps) => {
  const [isChatAssistantOpen, setIsChatAssistantOpen] =
    useState(false);

  const openChatAssistant = useCallback(() => {
    setIsChatAssistantOpen(true);
  }, []);

  const closeChatAssistant = useCallback(() => {
    setIsChatAssistantOpen(false);
  }, []);

  const toggleChatAssistant = useCallback(() => {
    setIsChatAssistantOpen((current) => !current);
  }, []);

  const setChatAssistantOpen = useCallback(
    (open: boolean) => {
      setIsChatAssistantOpen(open);
    },
    []
  );

  const value = useMemo(
    () => ({
      isChatAssistantOpen,
      openChatAssistant,
      closeChatAssistant,
      toggleChatAssistant,
      setChatAssistantOpen,
    }),
    [
      isChatAssistantOpen,
      openChatAssistant,
      closeChatAssistant,
      toggleChatAssistant,
      setChatAssistantOpen,
    ]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppContext must be used inside AppProvider"
    );
  }

  return context;
};