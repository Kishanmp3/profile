import styles from './Experience.module.css'
import { useIntersection } from '../hooks/useIntersection'

const JOBS = [
  {
    company: 'ETE',
    role: 'Co-Founder & CTO',
    date: 'Aug 2025 — Present',
    desc: 'Co-founded a remote will-signing platform built on React, Supabase, and OpenSign. Engineered a live video co-signing flow where clients, witnesses, and lawyers execute documents in real time. Owned backend security, session integrity, and auth end to end while spending equal time pitching estate attorneys to validate the idea in the field.',
    link: 'https://etelegal.netlify.app',
  },
  {
    company: 'Southern Swing Golf',
    role: 'Software Engineer',
    date: 'Aug 2025 — Present',
    desc: 'Built a full-stack tournament platform with a real-time scoring engine, live leaderboards, and role-based access for organizers and players. Stack is React, Node.js, and Supabase. The challenge was making something technically solid that felt genuinely fun to use on a phone at a golf course.',
  },
  {
    company: 'Motorola Solutions',
    role: 'Systems Engineering Intern',
    date: 'May 2025 — Aug 2025',
    desc: 'Worked inside the infrastructure that keeps first responders connected. Focused on radio network coverage modeling, dispatch system reliability, and site performance analysis. The kind of systems where downtime is measured in lives, not SLA percentages.',
  },
  {
    company: 'UiPath',
    role: 'Software Engineering Intern',
    date: 'Jun 2024 — Aug 2024',
    desc: 'Built a feature flag system in React and GraphQL for safe enterprise rollouts, plus RPA and AI-powered automation tools that replaced manual workflows for real clients. Got a close look at how large organizations adopt software and how much friction good tooling can remove.',
  },
  {
    company: 'DataTorch',
    role: 'Software Engineering Intern',
    date: 'Jul 2023 — Apr 2024',
    desc: 'Migrated core frontend components from Vue to React and optimized GraphQL query patterns to reduce over-fetching across a platform serving thousands of users. Learned what scalable actually means when you\'re responsible for keeping things fast as the data grows.',
  },
  {
    company: 'The Robot Collective',
    role: 'SWE Research Intern',
    date: 'Jan 2023 — Dec 2023',
    desc: 'Worked on autonomous multi-robot systems using ROS, implementing A* and D* pathfinding for real navigation problems. Contributed to inter-robot communication protocols and power efficiency research. The feedback loop was unlike anything in web dev — you push a change and watch a physical machine decide whether to trust it.',
  },
]

function JobCard({ job, index }) {
  const [ref, visible] = useIntersection(0.12)

  return (
    <div
      className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
      ref={ref}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      <div className={styles.dot} />
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.date}>{job.date}</span>
          <span className={styles.metaDivider}>·</span>
          <span className={styles.role}>{job.role}</span>
        </div>
        <h3 className={styles.company}>
          {job.link ? (
            <a href={job.link} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
              {job.company}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ) : job.company}
        </h3>
        <p className={styles.desc}>{job.desc}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>EXPERIENCE</span>
          <div className={styles.rule} />
        </div>

        <div className={styles.timeline}>
          <div className={styles.line} />
          {JOBS.map((job, i) => (
            <JobCard key={job.company} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
