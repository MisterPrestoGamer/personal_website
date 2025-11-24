import styles from "./aboutMe.module.css";
import { Link, useOutletContext } from "react-router";

export default function AboutMe() {
  const darkmode = useOutletContext().dm;
  return (
    <div className={darkmode ? `${styles.aboutMe} darkmode` : styles.aboutMe}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.description}>
        Hi my name is Miles, I'm a 20yr old self-taught full stack webdev based out of Berkshire, England.
      </div>
    </div>
  );
}
