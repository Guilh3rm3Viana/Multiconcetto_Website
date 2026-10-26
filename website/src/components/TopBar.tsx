import { useEffect, useState } from 'react'
import { navigation } from '../data/navigation'
import './TopBar.css'

export default function TopBar() {
  const [isSolid, setIsSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const updateBar = () => {
      const hero = document.getElementById('inicio')
      setIsSolid(!hero || hero.getBoundingClientRect().bottom <= 140)
    }
    updateBar()
    window.addEventListener('scroll', updateBar, { passive: true })
    window.addEventListener('resize', updateBar)
    return () => {
      window.removeEventListener('scroll', updateBar)
      window.removeEventListener('resize', updateBar)
    }
  }, [])

  return (
    <header className={`top-bar ${isSolid || menuOpen ? 'top-bar--solid' : 'top-bar--glass'}`}>
      <div className="top-bar__inner">
        <a className="top-bar__brand" href="/" aria-label="Multiconcetto — início" onClick={() => setMenuOpen(false)}>
          Multiconcetto
        </a>
        <button
          className="top-bar__toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <nav id="primary-navigation" className={`top-bar__nav ${menuOpen ? 'top-bar__nav--open' : ''}`} aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
