import { useEffect, useState } from 'react'
import { getNardiMedia, type NardiMedia } from '../services/nardiMediaRepository'

export function useNardiMedia() {
  const [media, setMedia] = useState<NardiMedia | null>(null)

  useEffect(() => {
    let active = true
    getNardiMedia().then((result) => {
      if (active) setMedia(result)
    })
    return () => { active = false }
  }, [])

  return media
}
