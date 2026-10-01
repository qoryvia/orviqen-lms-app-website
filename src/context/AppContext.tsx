"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

interface AppContextValue {
  isChatAssistantOpen: boolean;
  openChatAssistant: () => void;
  closeChatAssistant: () => void;
}

const AppContext = createContext< AppContextValue | undefined >(undefined);
interface AppProviderProps { children: ReactNode; }

export const AppProvider = ({children,}: AppProviderProps) => {

  const [isChatAssistantOpen, setIsChatAssistantOpen] = useState(false);
  const openChatAssistant = () => { setIsChatAssistantOpen(true);};
  const closeChatAssistant = () => { setIsChatAssistantOpen(false);};

  return (
    <AppContext.Provider value={{ isChatAssistantOpen, openChatAssistant, closeChatAssistant,}}>
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