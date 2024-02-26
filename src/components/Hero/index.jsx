import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from 'react-i18next';
import '../../i18n';
import img from "../../assets/Group 1.png"
import emoji from "../../assets/Emoji.png"
import style from "./index.module.css";

function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <div className={style.mainSection}>
  <div className={style.title}>
  <h2>{t("Heading")}<span className={style.emoji}><img src={emoji} alt="" /></span></h2>
<h2>{t("Title")}</h2>
<h2>{t("Job")}</h2>
<div className={style.desc}>
     <p>{t("Paragraph")}</p>
     </div>
     <div className={style.links}>
      <button className={style.hireMe}>{t("Hire")}</button>
      <button className={style.projects}>{t("See")}</button>
     </div>
  </div>
     <div className={style.heroImg}>
     <img src={img} alt="" />
     </div>
  </div>
  )
}

export default Hero

