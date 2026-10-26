import { useEffect, useState } from 'react'
import { getContactMedia, type ContactMedia } from '../services/contactMediaRepository'

export function useContactMedia() {
  const [media, setMedia] = useState<ContactMedia | null>(null)

  useEffect(() => {
    let active = true
    getContactMedia().then((result) => {
      if (active) setMedia(result)
    })
    return () => { active = false }
  }, [])

  return media
}
