import team from '../../../Fotos/Otimizadas/Quem Somos/Equipa.jpg.webp'
import mission from '../../../Fotos/Otimizadas/Quem Somos/QS 2.jpg.webp'
import afterSales from '../../../Fotos/Otimizadas/Quem Somos/QS 5.jpg.webp'
import footer from '../../../Fotos/Otimizadas/Quem Somos/QS 4.jpg.webp'

export type AboutMedia = {
  team: string
  mission: string
  afterSales: string
  footer: string
}

export async function getAboutMedia(): Promise<AboutMedia> {
  return { team, mission, afterSales, footer }
}
