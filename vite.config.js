import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cp, copyFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))

const pageEntries = [
  'index.html',
  'about.html',
  'services.html',
  'work.html',
  'case-studies.html',
  'experience.html',
  'team.html',
  'contact.html',
  'social.html',
]

const copyRuntimeStaticAssets = {
  name: 'copy-runtime-static-assets',
  apply: 'build',
  async writeBundle(outputOptions) {
    const outputDir = outputOptions.dir ?? join(rootDir, 'dist')
    const outputAssetsDir = join(outputDir, 'assets')

    await cp(join(rootDir, 'assets'), outputAssetsDir, {
      recursive: true,
      filter: (source) => !/\.(?:js|css)$/i.test(source),
    })
    await copyFile(
      join(rootDir, 'assets/page-meta.js'),
      join(outputAssetsDir, 'page-meta.js'),
    )
  },
}

export default defineConfig({
  plugins: [react(), copyRuntimeStaticAssets],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pageEntries.map((page) => [
          page.replace('.html', ''),
          fileURLToPath(new URL(page, import.meta.url)),
        ]),
      ),
    },
  },
})
