import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageType } from '../types';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageType;
    return savedLanguage || 'fr';
  });

  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const frTranslations = await import('../locales/fr.json');
        const enTranslations = await import('../locales/en.json');
        
        setTranslations({
          fr: frTranslations,
          en: enTranslations
        });
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };

    loadTranslations();
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string): string => {
    if (!translations[language]) return key;
    
    return translations[language][key] || key;
  };

  const changeLanguage = (lang: LanguageType) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};