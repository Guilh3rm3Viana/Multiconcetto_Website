import hero from '../../../Fotos/Otimizadas/Arkimueble/Foto 9.jpg.webp'
import introduction from '../../../Fotos/Otimizadas/Arkimueble/Foto 3.jpg.webp'
import catalogue from '../../../Fotos/Otimizadas/Arkimueble/Foto 8.jpg.webp'
import aluminium from '../../../Fotos/Otimizadas/Arkimueble/Foto 10.jpg.webp'
import wood from '../../../Fotos/Otimizadas/Arkimueble/Foto 2.jpg.webp'
import polyesterRope from '../../../Fotos/Otimizadas/Arkimueble/Foto 1.jpg.webp'
import rattan from '../../../Fotos/Otimizadas/Arkimueble/Foto 6.jpg.webp'
import officialSite from '../../../Fotos/Otimizadas/Arkimueble/Foto 11.jpg.webp'
import parasols from '../../../Fotos/Otimizadas/Arkimueble/Foto 4.jpg.webp'
import restaurants from '../../../Fotos/Otimizadas/Arkimueble/Foto 5.jpg.webp'
import footer from '../../../Fotos/Otimizadas/Arkimueble/Foto 12.jpg.webp'

export type ArkimuebleMedia = {
  hero: string
  introduction: string
  catalogue: string
  officialSite: string
  footer: string
  materials: {
    aluminium: string
    wood: string
    polyesterRope: string
    rattan: string
    parasols: string
    restaurants: string
  }
}

export async function getArkimuebleMedia(): Promise<ArkimuebleMedia> {
  return {
    hero,
    introduction,
    catalogue,
    officialSite,
    footer,
    materials: { aluminium, wood, polyesterRope, rattan, parasols, restaurants },
  }
}
