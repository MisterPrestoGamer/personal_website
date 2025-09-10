import styles from "./header.module.css";
import { Link } from "react-router";
import { Moon, Sun } from "lucide-react";

export default function Header({ darkmode, setDarkmode }) {
  return (
    <div className={darkmode ? `${styles.header} darkmode` : styles.header}>
      <h1 id={styles.title}>
        <Link to="/">Miles Nelson</Link>
      </h1>
      <Link className={styles.aboutMe} to="aboutMe">
        About Me
      </Link>
      <button
        className={`${styles.themeChangeBtn} ${styles.btn}`}
        onClick={() => {
          darkmode ? setDarkmode(false) : setDarkmode(true);
        }}
      >
        {darkmode ? <Sun color="white" /> : <Moon />}
      </button>
    </div>
  );
}
