import styles from "./App.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import HomePage from "../homePage/homePage";
import AboutMe from "../aboutMe/aboutMe";
import { Outlet } from "react-router";
import { useState } from "react";

export default function App() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={styles.app}>
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />
      <Outlet context={{ dm: darkmode }} />
      <Footer darkmode={darkmode} />
    </div>
  );
}
