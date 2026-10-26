import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createCanvas, loadImage } from '@napi-rs/canvas'

const websiteRoot = fileURLToPath(new URL('../', import.meta.url))
const photosRoot = resolve(websiteRoot, '../Fotos')
const servicesRoot = join(websiteRoot, 'src/services')
const photos = new Set()

// Optimized imports identify the originals to regenerate; other assets stay untouched.
for (const name of await readdir(servicesRoot)) {
  if (!/mediaRepository\.ts$/i.test(name)) continue
  const source = await readFile(join(servicesRoot, name), 'utf8')
  for (const match of source.matchAll(/from ['"]\.\.\/\.\.\/\.\.\/Fotos\/([^'"]+)['"]/g)) {
    if (!match[1].startsWith('Otimizadas/')) continue
    const original = match[1].slice('Otimizadas/'.length).replace(/\.webp$/, '')
    photos.add(original)
  }
}

let originalBytes = 0
let optimizedBytes = 0

for (const relativePath of [...photos].sort()) {
  const originalPath = join(photosRoot, relativePath)
  const outputPath = join(photosRoot, 'Otimizadas', `${relativePath}.webp`)
  const image = await loadImage(originalPath)
  const scale = Math.min(1, 1920 / image.width, 1920 / image.height)
  const width = Math.max(1, Math.round(image.width * scale))
  const height = Math.max(1, Math.round(image.height * scale))
  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')
  context.imageSmoothingEnabled = true
  context.imageSmoothingQuality = 'high'
  context.drawImage(image, 0, 0, width, height)
  const encoded = await canvas.encode('webp', 84)

  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, encoded)
  originalBytes += (await stat(originalPath)).size
  optimizedBytes += encoded.length
}

console.log(`${photos.size} fotografias geradas em Fotos/Otimizadas (WebP, qualidade 84, máximo 1920 px, sem ampliar).`)
console.log(`${(originalBytes / 1e6).toFixed(2)} MB → ${(optimizedBytes / 1e6).toFixed(2)} MB (${(100 * (1 - optimizedBytes / originalBytes)).toFixed(1)}% de redução).`)
