import styles from  '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={"mainTitle"}>Quick Note</h1>
        <h2 className={"text"}>Never forget what you want to remember</h2>
      </div>
      <div className={styles.buttonSection}>
        <Link href="/login">
          <button className={styles.startButton}>Start Now</button>
        </Link>
        
      </div>
    </div>
  )
}
