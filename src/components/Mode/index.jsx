import React from "react";
import style from "./index.module.css";
function Mode() {
  return (
    <>
      <span className={style.mode}>
        <i class="fa-solid fa-moon"></i>
        <i class="fa-regular fa-sun"></i> Dark
      </span>
    </>
  );
}

export default Mode;
