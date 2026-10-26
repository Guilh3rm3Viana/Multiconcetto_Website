// O Vite inclui os descodificadores do PDF.js com URLs válidos também no build.
const wasmFiles = import.meta.glob<string>('/node_modules/pdfjs-dist/wasm/*.wasm', {
  eager: true,
  import: 'default',
  query: '?url',
})

export class PdfBinaryDataFactory {
  async fetch({ kind, filename }: { kind: string; filename: string }): Promise<Uint8Array> {
    const url = kind === 'wasmUrl' ? wasmFiles[`/node_modules/pdfjs-dist/wasm/${filename}`] : undefined
    if (!url) throw new Error(`Recurso do PDF.js indisponível: ${filename}`)

    const response = await fetch(url)
    if (!response.ok) throw new Error(`Não foi possível carregar ${filename}`)

    return new Uint8Array(await response.arrayBuffer())
  }
}
