import styles from './homePage.module.css'

export default function HomePage(){
    return (
        <div className={styles.homePage}>
            <h2 className={styles.title}>Homepage</h2>
            <div className={styles.descrition}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis recusandae, incidunt ipsam quasi at quaerat fugit quo aperiam eos et quae iste debitis consectetur reiciendis nihil labore adipisci perspiciatis.
            </div>
        </div>
    )
}