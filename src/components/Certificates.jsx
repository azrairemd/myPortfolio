import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certificates } from '../data/content.js'

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          eğitim &amp; belgeler
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          Sertifikalar
        </motion.h2>

        {certificates.length === 0 ? (
          <p style={{ color: 'var(--text-faint)', fontSize: 15 }}>Yakında eklenecek.</p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {certificates.map((c, i) => (
              <motion.div
                key={c.title + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 26,
                  background: 'var(--surface)',
                }}
              >
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.title}
                    style={{
                      width: '100%',
                      height: 140,
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border)',
                      marginBottom: 16,
                    }}
                  />
                ) : (
                  <Award size={20} style={{ color: 'var(--accent-2)', marginBottom: 14 }} />
                )}
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6, lineHeight: 1.3 }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 4 }}>{c.issuer}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>{c.date}</p>

                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      marginTop: 16,
                      fontSize: 13,
                      color: 'var(--text)',
                      borderTop: '1px solid var(--border)',
                      paddingTop: 14,
                      width: '100%',
                    }}
                  >
                    Sertifikayı görüntüle <ExternalLink size={13} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
