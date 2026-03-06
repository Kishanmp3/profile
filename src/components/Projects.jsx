import styles from './Projects.module.css'
import { useIntersection } from '../hooks/useIntersection'
import imgDaimon from '../pics/daimon.png'
import imgRasync from '../pics/rasync.png'
import imgCozy from '../pics/cozyarchives.png'
import imgEcho from '../pics/echoboard.png'

const PROJECTS = [
  {
    name: 'Daimon',
    summary: 'A Go daemon that watches your files in real time, diffs changes without Git, and uses Claude AI to write you a plain-English summary of your coding session. Local dashboard, zero cloud, ships via a single curl command.',
    stack: ['Go', 'Claude API', 'React', 'SQLite', 'CLI'],
    link: 'https://daimonai.netlify.app',
    img: imgDaimon,
    flip: false,
  },
  {
    name: 'RAsync',
    summary: 'A full-stack housing management platform for students, RAs, and admins. Handles announcements, incidents, roommate agreements, anonymous feedback, calendars, and direct messaging — all role-aware so each user sees exactly what they need. Built to replace the chaos of group chats and email threads in campus housing.',
    stack: ['React', 'Supabase', 'Role-Based Access', 'Full Stack'],
    link: 'https://rasync.netlify.app',
    img: imgRasync,
    flip: true,
  },
  {
    name: 'Cozy Archives',
    summary: 'A journaling app built around an infinite canvas where notes and memories live as draggable nodes in a visual tree. Encrypted entries, habit streaks, and animated depth layers — exploring your history feels like navigating a map, not scrolling a list.',
    stack: ['React', 'Supabase', 'Interactive Canvas', 'Encrypted Journaling'],
    link: 'https://cozy-archive.netlify.app',
    img: imgCozy,
    flip: false,
  },
  {
    name: 'EchoBoard',
    summary: 'An AI survey platform that turns open-ended responses into charts and insights on demand. Ask it "summarize themes" or "show standout responses" and it builds the visualization for you. No manual analysis.',
    stack: ['React', 'Node.js', 'OpenAI API', 'Data Visualization'],
    link: null,
    img: imgEcho,
    flip: true,
  },
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

function ProjectCard({ project }) {
  const [ref, visible] = useIntersection(0.1)

  const cardClass = [
    styles.card,
    project.flip  ? styles.flip  : '',
    project.empty ? styles.empty : '',
    visible       ? styles.cardVisible : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={cardClass} ref={ref}>
      {/* Image area */}
      <div className={styles.imgWrap}>
        <div className={styles.imgBox}>
          <FilmFrame />
          {project.img
            ? <img src={project.img} alt={project.name} className={styles.img} />
            : <span className={styles.imgLabel}>[ {project.name} ]</span>
          }
        </div>
      </div>

      {/* Info area */}
      <div className={styles.info}>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.summary}>{project.summary}</p>

        <div className={styles.stack}>
          {project.stack.map(t => (
            <span key={t} className={styles.stackTag}>{t}</span>
          ))}
        </div>

        {!project.empty && project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View project
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>PROJECTS</span>
          <div className={styles.rule} />
        </div>

        <div className={styles.list}>
          {PROJECTS.map(p => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
