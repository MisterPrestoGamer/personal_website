import styles from './header.module.css';
import { Link } from 'react-router';
import { Moon, Sun } from 'lucide-react';
export default function Header() {
  return (
    <div className={styles.header}>
      <h1 id={styles.title}>miles' website</h1>
      <Link className={styles.aboutMe} to="aboutMe">
        About Me
      </Link>
      <button className={styles.themeChangeBtn}>
        <Moon />
      </button>
    </div>
  );
}
