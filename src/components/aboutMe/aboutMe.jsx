import styles from "./aboutMe.module.css";
import { Link, useOutletContext } from "react-router";

export default function AboutMe() {
  const darkmode = useOutletContext().dm;
  return (
    <div className={darkmode ? `${styles.aboutMe} darkmode` : styles.aboutMe}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.description}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facere
        odit veritatis molestiae a itaque nihil amet, maxime sed aliquam aliquid
        voluptatum similique commodi vel tempora quo, ea deleniti repudiandae?
      </div>
    </div>
  );
}
