import React from 'react'
import style from "./index.module.css";
import Lang from '../Language';
import Mode from '../Mode';
function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <h2>JackDev</h2>
      </div>
      <ul className={style.nav}>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Project</a></li>
        <li><a href="#">Contact</a></li>
      <Lang/>
      <Mode/>
      </ul>
    </div>
  )
}

export default Header
