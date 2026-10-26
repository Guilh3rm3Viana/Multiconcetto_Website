import { useEffect, useState } from 'react'
import { getRocoMedia, type RocoMedia } from '../services/rocoMediaRepository'

export function useRocoMedia() {
  const [media, setMedia] = useState<RocoMedia | null>(null)

  useEffect(() => {
    let active = true
    getRocoMedia().then((result) => {
      if (active) setMedia(result)
    })
    return () => { active = false }
  }, [])

  return media
}
