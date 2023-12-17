import {useContext, useState} from 'react';
import {LocaleContext, ThemeContext} from '../contexts/index.jsx';

const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return [value, onChangeHandler];
};

const useLocale = (enText, idText) => {
  const {locale} = useContext(LocaleContext);
  return locale !== 'en' ? idText : enText;
};

const useTheme = () => {
  const {theme} = useContext(ThemeContext);

  const bgColor = theme === 'dark' ? 'bg-dark-containerBackgroundColor' : 'bg-light-containerBackgroundColor';
  const textColor = theme === 'dark' ? 'text-dark-textColor' : 'text-light-textColor';
  const borderColor = theme === 'dark' ? 'border-dark-textColor' : 'border-light-textColor';
  const ringColor = theme === 'dark' ? 'ring-dark-textColor' : 'ring-light-textColor';

  return {bgColor, textColor, borderColor, ringColor};
};

export {useInput, useLocale, useTheme};