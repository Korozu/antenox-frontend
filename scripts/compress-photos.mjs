import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const PHOTOS_DIR = 'public/photos/concerts'
const MAX_SIZE = 1200
const WEBP_QUALITY = 80

async function compressDir(dir) {
  const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png)$/i.test(f))

  for (const file of files) {
    const inputPath = path.join(dir, file)
    const ext = path.extname(file)
    const baseName = path.basename(file, ext)
    const outputPath = path.join(dir, baseName + '.webp')

    if (fs.existsSync(outputPath)) {
      console.log(`⏭  Déjà converti : ${baseName}.webp`)
      continue
    }

    const sizeBefore = fs.statSync(inputPath).size

    await sharp(inputPath)
      .resize(MAX_SIZE, MAX_SIZE, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath)

    const sizeAfter = fs.statSync(outputPath).size
    const reduction = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(0)
    console.log(`✅ ${file} → ${baseName}.webp  (${(sizeBefore/1024/1024).toFixed(2)}MB → ${(sizeAfter/1024/1024).toFixed(2)}MB, -${reduction}%)`)

    fs.unlinkSync(inputPath)
    console.log(`🗑  Supprimé : ${file}`)
  }
}

function updateMarkdownPaths(contentDir) {
  if (!fs.existsSync(contentDir)) return

  const entries = fs.readdirSync(contentDir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(contentDir, entry.name)
    if (entry.isDirectory()) {
      updateMarkdownPaths(fullPath)
    } else if (entry.name.endsWith('.md')) {
      let content = fs.readFileSync(fullPath, 'utf-8')
      const updated = content.replace(/\.(jpg|jpeg|png)/gi, '.webp')
      if (updated !== content) {
        fs.writeFileSync(fullPath, updated, 'utf-8')
        console.log(`📝 Mis à jour : ${fullPath}`)
      }
    }
  }
}

async function main() {
  if (!fs.existsSync(PHOTOS_DIR)) {
    console.log('Aucun dossier photos trouvé :', PHOTOS_DIR)
    return
  }

  const albumDirs = fs.readdirSync(PHOTOS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => path.join(PHOTOS_DIR, d.name))

  if (albumDirs.length === 0) {
    console.log('Aucun album trouvé dans', PHOTOS_DIR)
    return
  }

  for (const dir of albumDirs) {
    console.log(`\n📁 Traitement : ${dir}`)
    await compressDir(dir)
  }

  updateMarkdownPaths('content/photos')

  console.log('\n🎉 Compression terminée !')
}

main().catch(err => { console.error(err); process.exit(1) })
