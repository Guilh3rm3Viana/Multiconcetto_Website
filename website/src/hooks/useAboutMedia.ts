import { useEffect, useState } from 'react'
import { getAboutMedia, type AboutMedia } from '../services/aboutMediaRepository'

export function useAboutMedia() {
  const [media, setMedia] = useState<AboutMedia | null>(null)

  useEffect(() => {
    let active = true
    getAboutMedia().then((result) => {
      if (active) setMedia(result)
    })
    return () => { active = false }
  }, [])

  return media
}
