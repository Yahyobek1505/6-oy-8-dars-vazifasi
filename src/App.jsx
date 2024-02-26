import style from "./App.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import React, { useState, useEffect } from "react";
import "./Spinner.css";
const Spinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change 3000 to the desired duration in milliseconds

    return () => clearTimeout(timeout);
  }, []);


function App() {
  return (
  <>
  <div className={style.main}>
    <div className={style.container}>
      <Header/>
      <Hero/>
    </div>
  </div>
 
  </>
  )

}

export default App;
