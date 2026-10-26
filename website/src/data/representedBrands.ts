export const representedBrands = [
  {
    slug: 'arkimueble',
    name: 'Arkimueble',
    detailPath: '/representadas/arkimueble',
    photoAlt: 'Sala de estar exterior junto a uma piscina ao anoitecer',
    logoPlacement: 'left',
  },
  {
    slug: 'romero',
    name: 'Romero',
    detailPath: '/representadas/romero',
    photoAlt: 'Mesas e cadeiras Romero num espaço de restauração',
    logoPlacement: 'left',
  },
  {
    slug: 'exportjunc',
    name: 'Exportjunk',
    detailPath: '/representadas/exportjunc',
    photoAlt: 'Conjunto de mesa e cadeiras de madeira num terraço',
    logoPlacement: 'center',
  },
  {
    slug: 'roco',
    name: 'ROCO',
    detailPath: '/representadas/roco',
    photoAlt: 'Sofá e cadeirão ROCO com mesas de centro numa sala de estar',
    logoPlacement: 'right',
  },
  {
    slug: 'nardi',
    name: 'Nardi',
    detailPath: '/representadas/nardi',
    photoAlt: 'Espreguiçadeiras brancas ao lado de uma piscina',
    logoPlacement: 'left',
  },
  {
    slug: 'ezpeleta',
    name: 'Ezpeleta',
    detailPath: '/representadas/ezpeleta',
    photoAlt: 'Espreguiçadeiras e guarda-sóis num terraço junto à piscina',
    logoPlacement: 'left',
  },
  {
    slug: 'lmm',
    name: 'LMM',
    detailPath: '/representadas/lmm',
    photoAlt: 'Mesa de vidro e cadeiras estofadas LMM numa sala de jantar luminosa',
    logoPlacement: 'left',
  },
] as const

export type RepresentedBrand = (typeof representedBrands)[number]
export type RepresentedBrandSlug = RepresentedBrand['slug']
