import styles from './About.module.css'
import { useIntersection } from '../hooks/useIntersection'
import profileImg from '../pics/profile.jpg'

const CHIPS = [
  'Georgia Tech · CS',
  'Dev Tools',
  'Full Stack',
  'AI / LLM',
  'Startups',
]

function FilmFrame() {
  return (
    <>
      <div className={styles.corner} data-pos="tl" />
      <div className={styles.corner} data-pos="tr" />
      <div className={styles.corner} data-pos="bl" />
      <div className={styles.corner} data-pos="br" />
    </>
  )
}

export default function About() {
  const [ref, visible] = useIntersection()

  return (
    <section
      className={`${styles.section} ${visible ? styles.visible : ''}`}
      id="about"
      ref={ref}
    >
      <div className={styles.inner}>
        <div className={styles.label}>ABOUT</div>

        <div className={styles.grid}>
          {/* ── Left col ── */}
          <div className={styles.textCol}>
            <p className={styles.para}>
              Hey Everyone! I'm Kishan, a fourth year CS student at Georgia Tech who cares more about building tools than actually studying. These days I'm really into dev tools and consumer tech, so I have built projects focused on that. Recently I built Daimon, a daemon that watches you files and summarizes them in real time!
            </p>
            <p className={styles.para}>
              I've interned at places like UiPath and Motorola Solutions, co-founded 2 startups, and built more side projects than I can count. The bottom line is simple, I just really love integrating AI into tools that can help groups of people (right now its developers) 
            </p>

            <div className={styles.chips}>
              {CHIPS.map(c => (
                <span key={c} className={styles.chip}>{c}</span>
              ))}
            </div>
          </div>

          {/* ── Right col ── */}
          <div className={styles.imgCol}>
            <div className={styles.imgBox}>
              <FilmFrame />
              <img src={profileImg} alt="Kishan Patel" className={styles.img} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
