import React from "react";
import style from "./index.module.css";
import Mode from "../Mode";
import { useTranslation, Trans } from "react-i18next";
import LanguageSelect from "../../../language.jsx";
import "../../i18n";
function Header() {
  const { t } = useTranslation();
  return (
    <div className={style.header}>
      <div className={style.logo}>
      </div>
      <ul className={style.nav}>
        <li>
          <a href="#">{t("AboutMe")}</a>
        </li>
        <li>
          <a href="#">{t("Contact")}</a>
        </li>
        <li>
          <a href="#">{t("Projects")}</a>
        </li>
        <li>
          <a href="#">{t("Skills")}</a>
        </li>
        <LanguageSelect></LanguageSelect>
        <Mode />
      </ul>
    </div>
  );
}

export default Header;
