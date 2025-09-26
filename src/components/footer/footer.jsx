import styles from "./footer.module.css";
import { Copy } from "lucide-react";

export default function Footer({ darkmode }) {
  async function setClipboard(event) {
    const type = "text/plain";
    const clipboardItemData = {
      [type]: event.target.textContent,
    };
    const clipboardItem = new ClipboardItem(clipboardItemData);
    await navigator.clipboard.write([clipboardItem]);
  }

  return (
    <div className={darkmode ? `${styles.footer} altDarkmode` : styles.footer}>
      <div className={styles.contactInfo}>
        <button onClick={setClipboard} className={styles.email}>
          milesnelwork1@gmail.com
          <Copy size={"1.5vw"} />
        </button>

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
