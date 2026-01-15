import styles from "./App.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import HomePage from "../homePage/homePage";
import AboutMe from "../aboutMe/aboutMe";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { Stars } from "lucide-react";

export default function App() {
  const [darkmode, setDarkmode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    function placeStars() {
      const app = document.querySelector(".app");
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

    function shootingStar() {


      let side = Math.ceil(Math.random() * 4);
      const app = document.querySelector('.app');
      const star = document.createElement("div");
      star.textContent = "*";
      star.classList = "shootingStar";
      let starSize = "40px";
      let starPos = [50, 50];
      switch (side) {
        case 1:
          starPos[0] = Math.ceil(Math.random() * 100);
          starPos[1] = -2;
          break;
        case 2:
          starPos[0] = -2;
          starPos[1] = Math.ceil(Math.random() * 100);
          break;
        case 3:
          starPos[0] = Math.ceil(Math.random() * 100);
          starPos[1] = 98;
          break;
        case 4: 
          starPos[0] = 98;
          starPos[1] = Math.ceil(Math.random() * 100);
          break;
      }

      let cssColor = "rgb(255, 255, 255)";
      star.style.top = `${starPos[0]}%`;
      star.style.left = `${starPos[1]}%`;
      star.style.fontSize = starSize;
      star.style.rotate = `${Math.floor(Math.random() * 360)}deg`;
      let num = Math.ceil(Math.random() * 200) -1;
      if (num < 6) {
        cssColor = `rgb(246,14,14)`;
      } else if (num > 190) {
        cssColor = `rgb(0,69,138)`;
      } else if (num > 55 && num < 75) {
        cssColor = `rgb(178, 79, 38)`;
      } else {
        cssColor = `rgb(251, 237, 208)`;
      }
      star.style.color = cssColor;
      console.log(cssColor);
      star.style.animation;
      app.appendChild(star);
      async function moveStar(){
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        const ms = Math.ceil(Math.random() * 5);
        const skew = Math.ceil(Math.random() * 10) / 10;
        const isSkewNeg = Math.random() * 1 > 0.5 ? true : false
        for (let i = 0; i < 100; i++) {
          switch (side) {
            case 1:
              isSkewNeg ? starPos[0] -= skew : starPos[0] += skew;
              starPos[1] += 1;
              star.style.top = `${starPos[0]}%`;
              star.style.left = `${starPos[1]}%`;
              break;
            case 2:
              isSkewNeg ? starPos[1] -= skew : starPos[1] += skew;
              starPos[0] += 1;
              star.style.top = `${starPos[0]}%`;
              star.style.left = `${starPos[1]}%`
              break;
            case 3:
              isSkewNeg ? starPos[0] -= skew : starPos[0] += skew;
              starPos[1] -= 1;
              star.style.top = `${starPos[0]}%`;
              star.style.left = `${starPos[1]}%`;
              break;
            case 4: 
              isSkewNeg ? starPos[1] -= skew : starPos[1] += skew;
              starPos[0] -= 1;
              star.style.top = `${starPos[0]}%`;
              star.style.left = `${starPos[1]}%`;
              break;
          }

          await delay(ms);
        }
      }
       moveStar();
      
      
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setDarkmode(event.matches);
      });

    if (darkmode) {
      placeStars();
      shootingStar();
    }

    return () => {
      for (let element of document.querySelectorAll(".star")) {
        element.remove();
      }
      document.querySelector('.shootingStar').remove();
    };
  }, [darkmode]);

  return (
    <div className={`${styles.app} app`}>
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />
      <Outlet context={{ dm: darkmode }} />
      <Footer darkmode={darkmode} />
    </div>
  );
}
