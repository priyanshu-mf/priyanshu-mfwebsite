'use client'

import { useEffect, useState } from 'react'
import type { Theme } from '@/types'

const THEME_KEY = 'story-mf-theme'
const DEFAULT_THEME: Theme = 'galaxy'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      document.documentElement.setAttribute('data-theme', DEFAULT_THEME)
    }
    setMounted(true)
  }, [])

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return { theme, updateTheme, mounted }
}
