import { useEffect, useState } from 'react'
import { getLmmMedia, type LmmMedia } from '../services/lmmMediaRepository'

export function useLmmMedia() {
  const [media, setMedia] = useState<LmmMedia | null>(null)

  useEffect(() => {
    let active = true
    getLmmMedia().then((result) => {
      if (active) setMedia(result)
    })
    return () => { active = false }
  }, [])

  return media
}
