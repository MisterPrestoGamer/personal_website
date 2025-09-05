import styles from './footer.module.css'

export default function Footer(){
    return (
        <div className={styles.footer}>
            <div className={styles.contactInfo}>contact info</div>
            <div className={styles.portrait}>portrait</div>
        </div>
    )
}