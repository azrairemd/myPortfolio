import { motion } from 'framer-motion'
import { timeline } from '../data/content.js'

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          yolculuk
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          Zaman çizelgesi
        </motion.h2>

        <div style={{ position: 'relative', paddingLeft: 28 }}>
          <div
            style={{
              position: 'absolute',
              left: 5,
              top: 8,
              bottom: 8,
              width: 1,
              background: 'var(--border-strong)',
            }}
          />
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ position: 'relative', paddingBottom: 44 }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: -28,
                  top: 6,
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  background: 'var(--accent-2)',
                  boxShadow: '0 0 0 4px var(--bg)',
                }}
              />
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent-2)', marginBottom: 6 }}>
                {item.date}
              </p>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-faint)', marginBottom: 8 }}>{item.place}</p>
              <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: 540 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
