import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { profile } from '../data/content.js'

function generateFakeWeeks() {
  const weeks = []
  for (let w = 0; w < 52; w++) {
    const days = []
    for (let d = 0; d < 7; d++) {
      days.push(Math.floor(Math.random() * 5))
    }
    weeks.push(days)
  }
  return weeks
}

const levelColor = ['var(--surface)', 'color-mix(in srgb, var(--accent-2) 25%, var(--surface))', 'color-mix(in srgb, var(--accent-2) 50%, var(--surface))', 'color-mix(in srgb, var(--accent-2) 75%, var(--surface))', 'var(--accent-2)']

export default function GithubContributions() {
  const weeks = generateFakeWeeks()

  return (
    <section style={{ background: 'var(--bg-elev)' }}>
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          açık kaynak
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 12 }}
        >
          GitHub katkıları
        </motion.h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 40, fontSize: 15 }}>
          Örnek veri gösteriliyor — <code style={{ fontFamily: 'var(--font-mono)' }}>src/components/GithubContributions.jsx</code> içinden gerçek katkı verine bağlayabilirsin.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            gap: 4,
            overflowX: 'auto',
            padding: 24,
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--surface)',
          }}
        >
          {weeks.map((days, wi) => (
            <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {days.map((level, di) => (
                <div
                  key={di}
                  title={`${level} katkı`}
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: 3,
                    background: levelColor[level],
                  }}
                />
              ))}
            </div>
          ))}
        </motion.div>

        <a
          href={profile.github}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginTop: 24,
            fontSize: 14,
            color: 'var(--text-muted)',
          }}
        >
          <Github size={16} /> github.com/{profile.githubUsername}
        </a>
      </div>
    </section>
  )
}
