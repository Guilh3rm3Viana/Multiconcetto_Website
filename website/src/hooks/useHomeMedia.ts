import { useEffect, useState } from 'react'
import { getHomeMedia, type HomeMedia } from '../services/mediaRepository'

export function useHomeMedia() {
  const [media, setMedia] = useState<HomeMedia | null>(null)

  useEffect(() => {
    let active = true
    getHomeMedia().then((result) => {
      if (active) setMedia(result)
    })
    return () => { active = false }
  }, [])

  return media
}
