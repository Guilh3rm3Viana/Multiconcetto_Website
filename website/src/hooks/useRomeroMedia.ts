import { useEffect, useState } from 'react'
import { getRomeroMedia, type RomeroMedia } from '../services/romeroMediaRepository'

export function useRomeroMedia() {
  const [media, setMedia] = useState<RomeroMedia | null>(null)

  useEffect(() => {
    let active = true
    getRomeroMedia().then((result) => {
      if (active) setMedia(result)
    })
    return () => { active = false }
  }, [])

  return media
}
