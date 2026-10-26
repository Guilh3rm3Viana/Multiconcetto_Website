import { useEffect, useState } from 'react'
import { getExportjunkMedia, type ExportjunkMedia } from '../services/exportjunkMediaRepository'

export function useExportjunkMedia() {
  const [media, setMedia] = useState<ExportjunkMedia | null>(null)

  useEffect(() => {
    let active = true
    getExportjunkMedia().then((result) => {
      if (active) setMedia(result)
    })
    return () => { active = false }
  }, [])

  return media
}
