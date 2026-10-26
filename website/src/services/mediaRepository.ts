// Único ponto de acesso às fotografias. Uma futura API/BD pode substituir
// estas importações sem alterar os componentes da página.
import heroFirst from '../../../Fotos/Página Inicial/PI 1.jpg'
import heroSecond from '../../../Fotos/Página Inicial/Rotation 2.jpg'
import heroThird from '../../../Fotos/Página Inicial/Rotation 3.jpg'
import founders from '../../../Fotos/Página Inicial/PI 2.png'
import living from '../../../Fotos/Página Inicial/PI 3.jpg'
import outdoor from '../../../Fotos/Página Inicial/Outdoor - PDF.jpg'
import interiors from '../../../Fotos/Página Inicial/Interiors.jpg'
import restaurants from '../../../Fotos/Página Inicial/Restauração.jpg'
import hospitality from '../../../Fotos/Página Inicial/Hotelaria.jpg'
import catalogue from '../../../Fotos/Página Inicial/PI 4.jpg'
import aluminium from '../../../Fotos/Página Inicial/Aluminio.jpg'
import wood from '../../../Fotos/Página Inicial/Madeira.jpg'
import rope from '../../../Fotos/Página Inicial/Corda.jpg'
import polypropylene from '../../../Fotos/Página Inicial/PI 6.jpg'
import rattan from '../../../Fotos/Página Inicial/PI 5.jpg'
import footer from '../../../Fotos/Página Inicial/PI 7.jpg'

export type HomeMedia = {
  hero: string[]
  founders: string
  living: string
  categories: { outdoor: string; interiors: string; restaurants: string; hospitality: string }
  catalogue: string
  materials: { aluminium: string; wood: string; rope: string; polypropylene: string; rattan: string }
  footer: string
}

export async function getHomeMedia(): Promise<HomeMedia> {
  return {
    hero: [heroFirst, heroSecond, heroThird],
    founders,
    living,
    categories: { outdoor, interiors, restaurants, hospitality },
    catalogue,
    materials: { aluminium, wood, rope, polypropylene, rattan },
    footer,
  }
}
