"use client";

import React, { createContext, useContext, ReactNode } from "react";
import en from "../../locales/en/common.json";
import ar from "../../locales/ar/common.json";

type Translations = typeof en;

const translations: Record<string, Translations> = { en, ar };

interface I18nContextType {
  t: (key: string) => string;
  locale: string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children, locale }: { children: ReactNode; locale: string }) {
  const t = (key: string) => {
    const keys = key.split(".");
    let current: any = translations[locale] || translations.en;
    
    for (const k of keys) {
      if (current && current[k]) {
        current = current[k];
      } else {
        return key;
      }
    }
    return current;
  };

  return (
    <I18nContext.Provider value={{ t, locale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
