import styles from "./App.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import HomePage from "../homePage/homePage";
import AboutMe from "../aboutMe/aboutMe";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { Stars } from "lucide-react";

export default function App() {
  const [darkmode, setDarkmode] = useState(true);

  useEffect(() => {
    function placeStars() {
      let app = document.querySelector(".app");
      let starSize = "1px";
      let starPos = ["0vw", "0vw"];
      let starRotation = "0deg";
      let animationDelay = "0s";
      let cssColor = "rgb(255, 255, 255)";
      for (let i = 0; i < 200; i++) {
        let star = document.createElement("div");
        star.textContent = "*";
        star.classList = "star";
        starSize = `${Math.ceil(Math.random() * 10)}px`;
        starPos[0] = `${Math.ceil(Math.random() * 98)}%`;
        starPos[1] = `${Math.ceil(Math.random() * 98)}%`;
        starRotation = `${Math.floor(Math.random() * 360)}deg`;
        animationDelay = `${(Math.random() * 10).toFixed(2)}s`;
        if (i < 6) {
          cssColor = `rgba(246,14,14, ${(Math.random() * (1 - 0.5) + 0.5).toFixed(3)})`;
        } else if (i > 190) {
          cssColor = `rgba(0,69,138, ${(Math.random() * (1 - 0.5) + 0.5).toFixed(3)})`;
        } else if (i > 55 && i < 75) {
          cssColor = `rgba(178, 79, 38, ${(Math.random() * (1 - 0.5) + 0.5).toFixed(3)})`;
        } else {
          cssColor = `rgba(251, 237, 208, ${(Math.random() * (1 - 0.5) + 0.5).toFixed(3)})`;
        }
        star.style.top = starPos[0];
        star.style.left = starPos[1];
        star.style.fontSize = starSize;
        star.style.rotate = starRotation;
        star.style.animationDelay = animationDelay;
        star.style.color = cssColor;
        star.style.animation;
        app.appendChild(star);
      }
    }

    placeStars();
  }, []);

  return (
    <div className={`${styles.app} app`}>
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />
      <Outlet context={{ dm: darkmode }} />
      <Footer darkmode={darkmode} />
    </div>
  );
}
