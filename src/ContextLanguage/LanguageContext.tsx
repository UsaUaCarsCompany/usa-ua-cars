'use client'
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react'

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
  const [language, setLanguage] = useState<string>(() => {
    // Зчитуємо значення 'language' з localStorage, якщо воно є
    const storedLanguage = localStorage.getItem('language')
    return storedLanguage || 'ua' // Повертаємо 'ua', якщо значення в localStorage відсутнє
  })

  const switchLanguage = (): void => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === 'ua' ? 'ru' : 'ua'
      // Зберігаємо нове значення 'language' в localStorage
      localStorage.setItem('language', newLanguage)
      return newLanguage
    })
  }

  useEffect(() => {
    // Оновлюємо localStorage, коли змінюється значення 'language'
    localStorage.setItem('language', language)
  }, [language])

  const contextValue: LanguageContextProps = { language, switchLanguage }

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}
