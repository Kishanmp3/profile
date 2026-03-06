import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={`${styles.nameBlock} ${loaded ? styles.nameVisible : ''}`}>
        <h1 className={styles.nameFirst}>KISHAN</h1>
        <h1 className={styles.nameLast}>PATEL.</h1>
      </div>

      <div className={styles.ruleTop} />

      <div className={`${styles.terminal} ${loaded ? styles.terminalVisible : ''}`}>
        <div className={styles.line}>
          <span className={styles.prompt}>›</span>
          <span>cs @ georgia tech</span>
        </div>
        <div className={styles.line}>
          <span className={styles.prompt}>›</span>
          <span>prev:uipath · motorola solutions</span>
        </div>
        <div className={styles.line}>
          <span className={styles.prompt}>›</span>
          <span>builder. dev tools. obsessed with small teams tackleing big problems.</span>
          <span className={styles.cursor} aria-hidden="true" />
        </div>
      </div>

      <div className={styles.ruleBottom} />
    </section>
  )
}
