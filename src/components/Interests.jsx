import styles from './Interests.module.css'
import { useIntersection } from '../hooks/useIntersection'

const TAGS = {
  industries: [
    'Developer Tooling',
    'Legal',
    'EdTech',
    'Consumer Tech',
  ],
  technologies: [
    'AI / LLM Integration',
    'Agentic Systems',
    'CLI Tooling',
    'Real-Time Systems',
    'Data Visualization',
  ],
}

export default function Interests() {
  const [ref, visible] = useIntersection()

  return (
    <section
      className={`${styles.section} ${visible ? styles.visible : ''}`}
      ref={ref}
    >
      <div className={styles.inner}>
        <div className={styles.divider} />
        <div className={styles.label}>INTERESTS &amp; FOCUS AREAS</div>

        <div className={styles.rows}>
          <div className={styles.row}>
            <span className={styles.rowLabel}>Industries:</span>
            <div className={styles.tags}>
              {TAGS.industries.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <span className={styles.rowLabel}>Technologies:</span>
            <div className={styles.tags}>
              {TAGS.technologies.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
