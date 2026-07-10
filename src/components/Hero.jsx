import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/content.js'

const codeLines = [
  { indent: 0, text: 'const developer = {' },
  { indent: 1, text: `name: '${profile.name}',` },
  { indent: 1, text: `role: '${profile.role}',` },
  { indent: 1, text: "focus: ['product', 'craft']," },
  { indent: 1, text: 'available: true,' },
  { indent: 0, text: '}' },
]

export default function Hero() {
  const nameParts = profile.name.split(' ')

  return (
    <section
      id="top"
      style={{
        paddingTop: 150,
        paddingBottom: 60,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 110,
          right: 32,
          maxWidth: 260,
          textAlign: 'right',
          fontSize: 13,
          lineHeight: 1.6,
          color: 'var(--text-muted)',
        }}
        className="hero-meta"
      >
      </span>

      <div
        className="container hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
          gap: 56,
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div style={{ minWidth: 0 }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            merhaba, ben
          </motion.p>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              textTransform: 'uppercase',
              fontSize: 'clamp(32px, 5.4vw, 84px)',
              lineHeight: 0.98,
              letterSpacing: '-0.02em',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
            }}
          >
            {nameParts.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'block' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              letterSpacing: '0.04em',
              color: 'var(--text-faint)',
              marginTop: 20,
              textTransform: 'uppercase',
            }}
          >
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            style={{
              fontSize: 16,
              color: 'var(--text-muted)',
              maxWidth: 460,
              marginTop: 22,
              lineHeight: 1.6,
            }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ marginTop: 40 }}
          >
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '15px 26px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--text)',
                color: 'var(--bg)',
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Projelere göz at <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-elev)',
            boxShadow: 'var(--shadow)',
            overflow: 'hidden',
            minWidth: 0,
          }}
          className="hero-mockup"
        >
          <div
            style={{
              display: 'flex',
              gap: 6,
              padding: '14px 16px',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <span style={{ width: 9, height: 9, borderRadius: '50%', border: '1px solid var(--border-strong)' }} />
            <span style={{ width: 9, height: 9, borderRadius: '50%', border: '1px solid var(--border-strong)' }} />
            <span style={{ width: 9, height: 9, borderRadius: '50%', border: '1px solid var(--border-strong)' }} />
          </div>
          <div style={{ padding: '28px 26px', fontFamily: 'var(--font-mono)', fontSize: 13.5, lineHeight: 2, overflowWrap: 'break-word' }}>
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.08 }}
                style={{ paddingLeft: line.indent * 18, whiteSpace: 'pre-wrap', color: 'var(--text-muted)' }}
              >
                {line.text}
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ display: 'inline-block', width: 8, height: 15, background: 'var(--text)', marginTop: 4 }}
            />
          </div>
        </motion.div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: 32,
          fontSize: 12,
          color: 'var(--text-faint)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
        className="hero-caption"
      >      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-meta, .hero-caption { display: none; }
          .hero-mockup { order: -1; }
        }
      `}</style>
    </section>
  )
}
