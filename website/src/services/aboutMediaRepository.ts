import team from '../../../Fotos/Quem Somos/Equipa.jpg'
import mission from '../../../Fotos/Quem Somos/QS 2.jpg'
import afterSales from '../../../Fotos/Quem Somos/QS 5.jpg'
import footer from '../../../Fotos/Quem Somos/QS 4.jpg'

export type AboutMedia = {
  team: string
  mission: string
  afterSales: string
  footer: string
}

export async function getAboutMedia(): Promise<AboutMedia> {
  return { team, mission, afterSales, footer }
}
