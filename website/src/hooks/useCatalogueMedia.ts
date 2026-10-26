import { useEffect, useState } from 'react'
import { getCatalogueMedia, type CatalogueMedia } from '../services/catalogueMediaRepository'

export function useCatalogueMedia() {
  const [media, setMedia] = useState<CatalogueMedia | null>(null)

  useEffect(() => {
    let active = true
    getCatalogueMedia().then((result) => {
      if (active) setMedia(result)
    })
    return () => { active = false }
  }, [])

  return media
}
