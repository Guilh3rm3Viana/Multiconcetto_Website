import { useEffect, useState } from 'react'
import { getEzpeletaMedia, type EzpeletaMedia } from '../services/ezpeletaMediaRepository'

export function useEzpeletaMedia() {
  const [media, setMedia] = useState<EzpeletaMedia | null>(null)

  useEffect(() => {
    let active = true
    getEzpeletaMedia().then((result) => {
      if (active) setMedia(result)
    })
    return () => { active = false }
  }, [])

  return media
}
