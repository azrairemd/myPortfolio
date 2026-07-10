import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import { profile } from '../data/content.js'

const links = [
  { href: '#about', label: 'Hakkımda' },
  { href: '#stack', label: 'Teknolojiler' },
  { href: '#projects', label: 'Projeler' },
  { href: '#certificates', label: 'Sertifikalar' },
  { href: '#timeline', label: 'Zaman Çizelgesi' },
  { href: '#contact', label: 'İletişim' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        background: scrolled ? 'color-mix(in srgb, var(--bg) 82%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition: 'all 0.35s var(--ease)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 76,
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 18,
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-strong)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {initials}
        </a>

        <nav
          style={{
            display: 'flex',
            gap: 32,
            fontSize: 14,
            color: 'var(--text-muted)',
          }}
          className="desktop-nav"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ transition: 'color 0.2s' }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <ThemeToggle />
          <button
            aria-label="Menüyü aç"
            onClick={() => setOpen((o) => !o)}
            className="mobile-only"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text)',
              display: 'none',
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              overflow: 'hidden',
              borderTop: '1px solid var(--border)',
              background: 'var(--bg)',
            }}
            className="mobile-menu"
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '20px 32px' }}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ padding: '14px 0', borderBottom: '1px solid var(--border)', fontSize: 15 }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-only { display: flex !important; align-items: center; justify-content: center; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none; }
        }
      `}</style>
    </header>
  )
}
