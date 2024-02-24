import style from "./App.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
