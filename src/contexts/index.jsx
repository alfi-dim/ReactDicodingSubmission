import React from 'react';

export const LocaleContext = React.createContext();
export const ThemeContext = React.createContext();

export const AppProvider = ({children}) => {
  const [locale, setLocale] = React.useState(localStorage.getItem('locale') || 'en');
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark');
  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'en' ? 'id' : 'en';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
    localStorage.setItem('locale', locale);
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
  return (
    <LocaleContext.Provider value={{locale, toggleLocale}}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  );
};