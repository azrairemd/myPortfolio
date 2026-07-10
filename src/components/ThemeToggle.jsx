import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Temayı değiştir"
      style={{
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-strong)',
        background: 'var(--surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text)',
        transition: 'background 0.2s, transform 0.2s',
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.9)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}
