import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="uz">O'zbekcha</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
