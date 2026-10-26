import { useEffect, useState } from 'react'
import { getRepresentedMedia, type RepresentedMedia } from '../services/representedMediaRepository'

export function useRepresentedMedia() {
  const [media, setMedia] = useState<RepresentedMedia | null>(null)

  useEffect(() => {
    let active = true
    getRepresentedMedia().then((result) => {
      if (active) setMedia(result)
    })
    return () => { active = false }
  }, [])

  return media
}
