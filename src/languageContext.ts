import { createContext } from 'react'

export type Language = 'en' | 'am'

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: (text: string) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
