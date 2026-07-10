import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg-elev)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.p
          className="eyebrow"
          style={{ justifyContent: 'center' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          iletişim
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(32px, 6vw, 64px)',
            lineHeight: 1.08,
            maxWidth: 700,
            margin: '0 auto 32px',
          }}
        >
          İletişim Adreslerim
        </motion.h2>

        <motion.a
          href={`mailto:${profile.email}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '16px 32px',
            borderRadius: 'var(--radius-sm)',
            background: 'var(--text)',
            color: 'var(--bg)',
            fontSize: 15,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
          }}
        >
          <Mail size={18} /> {profile.email}
        </motion.a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 40 }}>
          <SocialLink href={profile.github} icon={<Github size={18} />} />
          <SocialLink href={profile.linkedin} icon={<Linkedin size={18} />} />
        </div>
      </div>

      <footer style={{ marginTop: 100, borderTop: '1px solid var(--border)', paddingTop: 28 }}>
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 13,
            color: 'var(--text-faint)',
            flexWrap: 'wrap',
            gap: 10,
          }}
        >
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span style={{ fontFamily: 'var(--font-mono)' }}></span>
        </div>
      </footer>
    </section>
  )
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-strong)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon}
    </a>
  )
}
