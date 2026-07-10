import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/content.js'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          seçilmiş işler
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          Projeler
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(p)}
              onKeyDown={(e) => (e.key === 'Enter' ? setSelected(p) : null)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover="hover"
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 3fr auto',
                gap: 24,
                alignItems: 'center',
                padding: '32px 20px',
                borderTop: '1px solid var(--border)',
                borderBottom: i === projects.length - 1 ? '1px solid var(--border)' : 'none',
                position: 'relative',
                cursor: 'pointer',
              }}
              className="project-row"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0 }}>
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 'var(--radius-sm)',
                      objectFit: 'cover',
                      border: '1px solid var(--border)',
                      flexShrink: 0,
                    }}
                  />
                )}
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800 }}>{p.title}</h3>
              </div>

              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, marginBottom: 10 }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-faint)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                variants={{ hover: { x: 4, y: -4 } }}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-strong)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={18} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <style>{`
          @media (max-width: 760px) {
            .project-row { grid-template-columns: 1fr !important; gap: 12px !important; }
          }
        `}</style>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(4px)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '100%',
                maxWidth: 560,
                maxHeight: '85vh',
                overflowY: 'auto',
                background: 'var(--bg)',
                border: '1px solid var(--border-strong)',
                borderRadius: 'var(--radius-lg)',
                padding: 40,
                position: 'relative',
                boxShadow: 'var(--shadow)',
              }}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Kapat"
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-strong)',
                  background: 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={16} />
              </button>

              {selected.image && (
                <img
                  src={selected.image}
                  alt={selected.title}
                  style={{
                    width: '100%',
                    height: 220,
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    marginBottom: 24,
                  }}
                />
              )}

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, marginBottom: 16, paddingRight: 40 }}>
                {selected.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
                {selected.longDescription || selected.description}
              </p>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
                {selected.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-faint)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {selected.demoUrl && (
                  <a
                    href={selected.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '13px 22px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--text)',
                      color: 'var(--bg)',
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                    }}
                  >
                    Canlı Demo <ExternalLink size={14} />
                  </a>
                )}
                {selected.codeUrl && (
                  <a
                    href={selected.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '13px 22px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-strong)',
                      color: 'var(--text)',
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                    }}
                  >
                    <Github size={16} /> Kodu Gör
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
