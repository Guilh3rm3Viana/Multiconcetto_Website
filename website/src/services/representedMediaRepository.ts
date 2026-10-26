import arkimueblePhoto from '../../../Fotos/Representadas_Parceiros/RP 1.png'
import arkimuebleLogo from '../../../Fotos/Representadas_Parceiros/Logo Arkimueble.png'
import romeroPhoto from '../../../Fotos/Representadas_Parceiros/RP 2.jpg'
import romeroLogo from '../../../Fotos/Representadas_Parceiros/Logo Romero White.png'
import exportjuncPhoto from '../../../Fotos/Representadas_Parceiros/RP 3.png'
import exportjuncLogo from '../../../Fotos/Representadas_Parceiros/Logo Exportjunc.png'
import rocoPhoto from '../../../Fotos/Representadas_Parceiros/RP 6.png'
import rocoLogo from '../../../Fotos/Roco/Logo.jpg'
import nardiPhoto from '../../../Fotos/Representadas_Parceiros/RP 4.jpg'
import nardiLogo from '../../../Fotos/Representadas_Parceiros/Logo Nardi.jpg'
import ezpeletaPhoto from '../../../Fotos/Representadas_Parceiros/RP 5.jpg'
import ezpeletaLogo from '../../../Fotos/Representadas_Parceiros/Logo Ezpeleta.jpg'
import lmmPhoto from '../../../Fotos/Representadas_Parceiros/RP 7.png'
import lmmLogo from '../../../Fotos/LMM/Logo.jpg'
import footerPhoto from '../../../Fotos/Página Inicial/PI 7.jpg'
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
