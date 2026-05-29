'use client'

import { useEffect, useState } from 'react'
import { Lang } from '@/lib/siteContent'

export default function useLang() {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('wedding-lang') as Lang | null
    if (saved) setLang(saved)

    const onStorage = () => {
      const current = localStorage.getItem('wedding-lang') as Lang | null
      if (current) setLang(current)
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener('language-change', onStorage)

    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('language-change', onStorage)
    }
  }, [])

  return lang
}