import hero from '../../../Fotos/Arkimueble/Foto 9.jpg'
import introduction from '../../../Fotos/Arkimueble/Foto 3.jpg'
import catalogue from '../../../Fotos/Arkimueble/Foto 8.jpg'
import aluminium from '../../../Fotos/Arkimueble/Foto 10.jpg'
import wood from '../../../Fotos/Arkimueble/Foto 2.jpg'
import polyesterRope from '../../../Fotos/Arkimueble/Foto 1.jpg'
import rattan from '../../../Fotos/Arkimueble/Foto 6.jpg'
import officialSite from '../../../Fotos/Arkimueble/Foto 11.jpg'
import parasols from '../../../Fotos/Arkimueble/Foto 4.jpg'
import restaurants from '../../../Fotos/Arkimueble/Foto 5.jpg'
import footer from '../../../Fotos/Arkimueble/Foto 12.jpg'

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
