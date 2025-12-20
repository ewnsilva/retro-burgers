import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: 'pt' | 'en') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('retroburguers-language', lng);
  };

  return {
    t,
    language: i18n.language,
    changeLanguage,
  };
};
