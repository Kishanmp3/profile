import styles from './Footer.module.css'

const LINKS = [
  { label: 'GitHub',   href: 'https://github.com',      external: true  },
  { label: 'LinkedIn', href: 'https://linkedin.com',     external: true  },
  { label: 'Resume',   href: '/resume.pdf',              external: true  },
  { label: 'Email',    href: 'mailto:kishan@example.com', external: false },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.rule} />
      <div className={styles.inner}>
        <div className={styles.links}>
          {LINKS.map((link, i) => (
            <span key={link.label} className={styles.linkWrap}>
              <a
                href={link.href}
                className={styles.link}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
              {i < LINKS.length - 1 && (
                <span className={styles.sep} aria-hidden="true">·</span>
              )}
            </span>
          ))}
        </div>

        <p className={styles.copy}>
          © Kishan Patel &nbsp;·&nbsp;{' '}
          <span className={styles.accent}>Built with intention</span>
        </p>
      </div>
    </footer>
  )
}
