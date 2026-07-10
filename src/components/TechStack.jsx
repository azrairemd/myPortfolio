import { motion } from 'framer-motion'
import { techStack } from '../data/content.js'

export default function TechStack() {
  const categories = [...new Set(techStack.map((t) => t.category))]

  return (
    <section id="stack" style={{ background: 'var(--bg-elev)' }}>
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          araç kutusu
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          Teknolojiler
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {categories.map((cat) => (
            <div key={cat} style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--text-faint)',
                  width: 110,
                  flexShrink: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {cat}
              </span>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {techStack
                  .filter((t) => t.category === cat)
                  .map((t, i) => (
                    <motion.span
                      key={t.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      whileHover={{ y: -3, borderColor: 'var(--text)' }}
                      style={{
                        padding: '9px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-strong)',
                        fontSize: 14,
                        background: 'var(--surface)',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      {t.name}
                    </motion.span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
