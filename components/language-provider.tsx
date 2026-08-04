"use client";

import { Globe2 } from "lucide-react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "km";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  text: (english: string, khmer: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageStorageKey = "kmd-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(languageStorageKey);
    const preferred = saved === "km" || saved === "en" ? saved : navigator.language.toLowerCase().startsWith("km") ? "km" : "en";
    setLanguageState(preferred);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage: (nextLanguage) => {
      setLanguageState(nextLanguage);
      window.localStorage.setItem(languageStorageKey, nextLanguage);
    },
    text: (english, khmer) => language === "km" ? khmer : english
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export function LanguageSwitcher({ variant = "menu" }: { variant?: "menu" | "panel" }) {
  const { language, setLanguage, text } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "km" : "en");
  };

  if (variant === "panel") {
    return (
      <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-100 text-xs" aria-label={text("Choose language", "ជ្រើសរើសភាសា")}>
        <span className="flex items-center gap-2 text-neutral-700 font-medium">
          <Globe2 className="h-4 w-4 text-[#991b1b]" />
          <span>{text("Language", "ភាសា")}</span>
        </span>
        <button
          className="bg-white text-black border border-neutral-200 px-3 py-1.5 rounded-lg font-semibold hover:border-black transition"
          onClick={toggleLanguage}
          type="button"
        >
          {language === "en" ? "ខ្មែរ (KM)" : "English (EN)"}
        </button>
      </div>
    );
  }

  return (
    <button
      aria-label={text("Change language to Khmer", "ប្តូរទៅភាសាអង់គ្លេស")}
      className="flex h-8 items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 text-xs font-semibold text-neutral-800 transition hover:bg-neutral-100 hover:border-neutral-300"
      onClick={toggleLanguage}
      title={text("Switch language", "ប្តូរភាសា")}
      type="button"
    >
      <Globe2 className="h-3.5 w-3.5 text-[#991b1b]" />
      <span>{language === "en" ? "EN" : "ខ្មែរ"}</span>
    </button>
  );
}
