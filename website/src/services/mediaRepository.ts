// Único ponto de acesso às fotografias. Uma futura API/BD pode substituir
// estas importações sem alterar os componentes da página.
import heroFirst from '../../../Fotos/Otimizadas/Página Inicial/PI 1.jpg.webp'
import heroSecond from '../../../Fotos/Otimizadas/Página Inicial/Rotation 2.jpg.webp'
import heroThird from '../../../Fotos/Otimizadas/Página Inicial/Rotation 3.jpg.webp'
import founders from '../../../Fotos/Otimizadas/Página Inicial/PI 2.png.webp'
import living from '../../../Fotos/Otimizadas/Página Inicial/PI 3.jpg.webp'
import outdoor from '../../../Fotos/Otimizadas/Página Inicial/Outdoor - PDF.jpg.webp'
import interiors from '../../../Fotos/Otimizadas/Página Inicial/Interiors.jpg.webp'
import restaurants from '../../../Fotos/Otimizadas/Página Inicial/Restauração.jpg.webp'
import hospitality from '../../../Fotos/Otimizadas/Página Inicial/Hotelaria.jpg.webp'
import catalogue from '../../../Fotos/Otimizadas/Página Inicial/PI 4.jpg.webp'
import aluminium from '../../../Fotos/Otimizadas/Página Inicial/Aluminio.jpg.webp'
import wood from '../../../Fotos/Otimizadas/Página Inicial/Madeira.jpg.webp'
import rope from '../../../Fotos/Otimizadas/Página Inicial/Corda.jpg.webp'
import polypropylene from '../../../Fotos/Otimizadas/Página Inicial/PI 6.jpg.webp'
import rattan from '../../../Fotos/Otimizadas/Página Inicial/PI 5.jpg.webp'
import footer from '../../../Fotos/Otimizadas/Página Inicial/PI 7.jpg.webp'

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
