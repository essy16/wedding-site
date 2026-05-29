'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { pages, Lang } from '@/lib/siteContent'

export default function Header() {
  const [lang, setLang] = useState<Lang>('en')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('wedding-lang') as Lang | null
    if (saved) setLang(saved)
  }, [])

  function toggleLang() {
    const next = lang === 'en' ? 'es' : 'en'
    setLang(next)
    localStorage.setItem('wedding-lang', next)
    window.dispatchEvent(new Event('language-change'))
  }

  return (
    <header className="siteHeader">
      <Link href="/" className="brand">
        N <span>&</span> R
      </Link>

      <nav className="mainNav">
        {pages.map((page) => (
          <Link key={page.href} href={page.href}>
            {page.label[lang]}
          </Link>
        ))}
      </nav>

      <div className="headerActions">
        <button className="langBtn" onClick={toggleLang}>
          {lang === 'en' ? 'ES' : 'EN'}
        </button>

        <button
          className="menuBtn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="mobileMenu">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              onClick={() => setMobileOpen(false)}
            >
              {page.label[lang]}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}