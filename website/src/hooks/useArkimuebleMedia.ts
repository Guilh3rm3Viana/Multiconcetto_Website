import { useEffect, useState } from 'react'
import { getArkimuebleMedia, type ArkimuebleMedia } from '../services/arkimuebleMediaRepository'

export function useArkimuebleMedia() {
  const [media, setMedia] = useState<ArkimuebleMedia | null>(null)

  useEffect(() => {
    let active = true
    getArkimuebleMedia().then((result) => {
      if (active) setMedia(result)
    })
    return () => { active = false }
  }, [])

  return media
}
