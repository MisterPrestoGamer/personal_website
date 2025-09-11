import styles from "./footer.module.css";

export default function Footer({ darkmode }) {
  return (
    <div className={darkmode ? `${styles.footer} altDarkmode` : styles.footer}>
      <div className={styles.contactInfo}>contact info</div>
      <div className={styles.portrait}>portrait</div>
    </div>
  );
}
