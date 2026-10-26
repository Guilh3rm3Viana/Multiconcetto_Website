import arkimueblePhoto from '../../../Fotos/Otimizadas/Representadas_Parceiros/RP 1.png.webp'
import arkimuebleLogo from '../../../Fotos/Representadas_Parceiros/Logo Arkimueble.png'
import romeroPhoto from '../../../Fotos/Otimizadas/Representadas_Parceiros/RP 2.jpg.webp'
import romeroLogo from '../../../Fotos/Representadas_Parceiros/Logo Romero White.png'
import exportjuncPhoto from '../../../Fotos/Otimizadas/Representadas_Parceiros/RP 3.png.webp'
import exportjuncLogo from '../../../Fotos/Representadas_Parceiros/Logo Exportjunc.png'
import rocoPhoto from '../../../Fotos/Otimizadas/Representadas_Parceiros/RP 6.png.webp'
import rocoLogo from '../../../Fotos/Roco/Logo.jpg'
import nardiPhoto from '../../../Fotos/Otimizadas/Representadas_Parceiros/RP 4.jpg.webp'
import nardiLogo from '../../../Fotos/Representadas_Parceiros/Logo Nardi.jpg'
import ezpeletaPhoto from '../../../Fotos/Otimizadas/Representadas_Parceiros/RP 5.jpg.webp'
import ezpeletaLogo from '../../../Fotos/Representadas_Parceiros/Logo Ezpeleta.jpg'
import lmmPhoto from '../../../Fotos/Otimizadas/Representadas_Parceiros/RP 7.png.webp'
import lmmLogo from '../../../Fotos/LMM/Logo.jpg'
import footerPhoto from '../../../Fotos/Otimizadas/Página Inicial/PI 7.jpg.webp'
import type { RepresentedBrandSlug } from '../data/representedBrands'

type BrandMedia = { photo: string; logo: string }

export type RepresentedMedia = {
  brands: Record<RepresentedBrandSlug, BrandMedia>
  footer: string
}

export async function getRepresentedMedia(): Promise<RepresentedMedia> {
  return {
    brands: {
      arkimueble: { photo: arkimueblePhoto, logo: arkimuebleLogo },
      romero: { photo: romeroPhoto, logo: romeroLogo },
      exportjunc: { photo: exportjuncPhoto, logo: exportjuncLogo },
      roco: { photo: rocoPhoto, logo: rocoLogo },
      nardi: { photo: nardiPhoto, logo: nardiLogo },
      ezpeleta: { photo: ezpeletaPhoto, logo: ezpeletaLogo },
      lmm: { photo: lmmPhoto, logo: lmmLogo },
    },
    footer: footerPhoto,
  }
}
