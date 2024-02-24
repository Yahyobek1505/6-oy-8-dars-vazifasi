import React from 'react'
import img from "../../assets/Group 1.png"
import emoji from "../../assets/Emoji.png"
import style from "./index.module.css";
function Hero() {
  return (
    <div className={style.mainSection}>
  <div className={style.title}>
  <h2>Hi <span className={style.emoji}><img src={emoji} alt="" /></span></h2>
<h2>I'm Charles,</h2>
<h2>Front-end Developer</h2>
<div className={style.desc}>
     <p>I design and develop experiences that make people's lives simpler through Web and Mobile apps. I work with FIgma , HTML5, CSS3, JavaScript, React, ReactNative and Flutter.</p>
     </div>
     <div className={style.links}>
      <button className={style.hireMe}>HERE ME</button>
      <button className={style.projects}>SEE MY PROJECTS</button>
     </div>
  </div>
     <div className={style.heroImg}>
     <img src={img} alt="" />
     </div>
  </div>
  )
}

export default Hero

