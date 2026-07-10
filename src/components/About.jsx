import { motion } from 'framer-motion'
import { about, profile } from '../data/content.js'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <section id="about">
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 0.9fr',
          gap: 60,
        }}
      >
        <div>
          <motion.p
            className="eyebrow"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            hakkımda
          </motion.p>
          <motion.h2
            className="section-title"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            style={{ marginBottom: 32 }}
          >
          </motion.h2>

          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.08 }}
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: 18,
                maxWidth: 560,
              }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: 32,
            background: 'var(--surface)',
            height: 'fit-content',
            alignSelf: 'start',
          }}
        >
          <Fact label="Konum" value={profile.location} />
          <Fact label="Odak" value="Backend & Product" />
          <Fact label="Durum" value="Yeni projelere açık" last />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #about .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function Fact({ label, value, last }) {
  return (
    <div style={{ paddingBottom: last ? 0 : 20, marginBottom: last ? 0 : 20, borderBottom: last ? 'none' : '1px solid var(--border)' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </p>
      <p style={{ fontSize: 16, fontWeight: 500 }}>{value}</p>
    </div>
  )
}
