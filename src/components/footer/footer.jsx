import styles from "./footer.module.css";
import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

const EMAIL = 'milesnelwork1@gmail.com'

export default function Footer({ darkmode }) {
  const [recentlyCoppied, setRecentlyCoppied] = useState(false);
  async function setClipboard() {
    await navigator.clipboard.writeText(EMAIL);
    if (recentlyCoppied) return;
    setRecentlyCoppied(true);
    setTimeout(()=>{
      setRecentlyCoppied(false);
    }, 1500)
  }

  return (
    <div className={darkmode ? `${styles.footer} altDarkmode` : styles.footer}>
      <div className={styles.contactInfo}>
        <div className={styles.email} onClick={setClipboard}>
        <div >
          milesnelwork1@gmail.com
          
        </div>
        {recentlyCoppied ? <CopyCheck size={"1.5vh"} /> : <Copy size={"1.5vh"} />}
        </div>

        <a
          className={styles.github}
          href="https://github.com/MisterPrestoGamer"
          target="_blank"
        >
          github
        </a>
      </div>
    </div>
  );
}
