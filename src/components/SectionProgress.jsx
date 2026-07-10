import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'top', label: 'Giriş' },
  { id: 'about', label: 'Hakkımda' },
  { id: 'stack', label: 'Teknolojiler' },
  { id: 'projects', label: 'Projeler' },
  { id: 'certificates', label: 'Sertifikalar' },
  { id: 'timeline', label: 'Zaman Çizelgesi' },
  { id: 'contact', label: 'İletişim' },
]

export default function SectionProgress() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === entry.target.id)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="section-progress"
      style={{
        position: 'fixed',
        right: 28,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--text-faint)',
        }}
      >
        {String(active + 1).padStart(2, '0')}
      </span>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            style={{ display: 'block', padding: 4 }}
          >
            <motion.span
              animate={{
                height: i === active ? 22 : 6,
                background: i === active ? 'var(--accent)' : 'var(--border-strong)',
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'block',
                width: 6,
                borderRadius: 999,
              }}
            />
          </a>
        ))}
      </div>

      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--text-faint)',
        }}
      >
        {String(sections.length).padStart(2, '0')}
      </span>

      <style>{`
        @media (max-width: 900px) {
          .section-progress { display: none; }
        }
      `}</style>
    </div>
  )
}
