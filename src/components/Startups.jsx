import styles from './Startups.module.css'
import { useIntersection } from '../hooks/useIntersection'

const STARTUPS = [
  {
    name: 'Hopper',
    type: 'CONTRACT',
    role: 'AI Automation Contractor',
    date: '',
    desc: 'Built AI-powered automation tools for a legal team\'s contract review workflow. Reduced manual review overhead by turning unstructured contract language into structured, queryable data.',
  },
  {
    name: 'BioprismAI',
    type: 'FOUNDING ENGINEER',
    role: 'Founding Engineer & AI Developer',
    date: '',
    desc: 'Joined as founding engineer and built the core product and infrastructure from the ground up. Architected the AI systems and technical foundation that the product runs on.',
  },
  {
    name: 'ETE',
    type: 'CO-FOUNDER',
    role: 'Co-Founder & CTO',
    date: 'Aug 2025 — Present',
    desc: 'Co-founded a remote will-signing platform built on React, Supabase, and OpenSign. Engineered a live video co-signing flow where clients, witnesses, and lawyers execute documents in real time. Owned backend security, session integrity, and auth end to end while spending equal time pitching estate attorneys to validate the idea in the field.',
    link: 'https://etelegal.netlify.app',
  },
  {
    name: 'RAsync',
    type: 'FOUNDER',
    role: 'Builder & Founder',
    date: '',
    desc: 'Built a full-stack housing management platform for students, RAs, and admins. Handles announcements, incidents, roommate agreements, anonymous feedback, calendars, and direct messaging — all role-aware so each user sees exactly what they need.',
    link: 'https://dormsync.vercel.app/',
  },
  {
    name: 'EchoBoard',
    type: 'CO-FOUNDER',
    role: 'Co-Founder',
    date: '',
    desc: 'An AI survey platform that turns open-ended responses into charts and insights on demand. Ask it "summarize themes" or "show standout responses" and it builds the visualization for you. No manual analysis.',
  },
  {
    name: 'DataTorch',
    type: 'STARTUP',
    role: 'Software Engineering Intern',
    date: 'Jul 2023 — Apr 2024',
    desc: 'Migrated core frontend components from Vue to React and optimized GraphQL query patterns to reduce over-fetching across a platform serving thousands of users. Learned what scalable actually means when you\'re responsible for keeping things fast as the data grows.',
  },
]

function StartupCard({ startup, index }) {
  const [ref, visible] = useIntersection(0.1)

  return (
    <div
      className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className={styles.num}>0{index + 1}</span>

      <div className={styles.cardTop}>
        <span className={styles.badge}>{startup.type}</span>
      </div>

      <h3 className={styles.name}>
        {startup.link ? (
          <a href={startup.link} target="_blank" rel="noopener noreferrer" className={styles.nameLink}>
            {startup.name}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        ) : startup.name}
      </h3>

      <p className={styles.role}>{startup.role}</p>
      <p className={styles.desc}>{startup.desc}</p>
    </div>
  )
}

export default function Startups() {
  return (
    <section className={styles.section} id="startups">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>STARTUPS</span>
          <div className={styles.rule} />
        </div>

        <div className={styles.grid}>
          {STARTUPS.map((s, i) => (
            <StartupCard key={s.name} startup={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
