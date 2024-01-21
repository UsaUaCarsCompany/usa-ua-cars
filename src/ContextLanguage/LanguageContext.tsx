'use client'
import React, { createContext, useContext, ReactNode, useState } from 'react'

interface LanguageContextProps {
  language: string
  switchLanguage: () => void
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('ua')

  const switchLanguage = (): void => {
    setLanguage((prevLanguage) => (prevLanguage === 'ua' ? 'ru' : 'ua'))
  }

  const contextValue: LanguageContextProps = { language, switchLanguage }

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}
