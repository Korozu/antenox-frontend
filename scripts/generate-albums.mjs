import fs from 'fs';
import path from 'path';

const ALBUMS_SOURCE = './public/photos/concerts';
const CONTENT_DEST = './content/photos';

// Fonction pour mélanger un tableau (Fisher-Yates Shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function generate() {
    if (!fs.existsSync(CONTENT_DEST)) fs.mkdirSync(CONTENT_DEST, { recursive: true });

    const folders = fs.readdirSync(ALBUMS_SOURCE).filter(f =>
      fs.lstatSync(path.join(ALBUMS_SOURCE, f)).isDirectory()
    );

    for (const folder of folders) {
        const albumFolder = path.join(CONTENT_DEST, folder);
        const destPath = path.join(albumFolder, `${folder}.md`); // On l'appelle index.md ou page.md selon ton Contentlayer

        if (!fs.existsSync(albumFolder)) {
            fs.mkdirSync(albumFolder, { recursive: true });
        }

        const fullPath = path.join(ALBUMS_SOURCE, folder);
        const allFiles = fs.readdirSync(fullPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

        // Dédoublonner : si un .webp existe pour un .jpg, on garde uniquement le .webp
        const basenames = new Map();
        for (const file of allFiles) {
            const ext = path.extname(file).toLowerCase();
            const base = path.basename(file, ext);
            const existing = basenames.get(base);
            if (!existing || ext === '.webp') {
                basenames.set(base, file);
            }
        }
        const deduped = Array.from(basenames.values());

        const coverFile = deduped.find(f => path.basename(f, path.extname(f)).toLowerCase() === 'cover');
        let galleryFiles = shuffle(deduped);

        const finalCoverPath = coverFile
          ? `/photos/concerts/${folder}/${coverFile}`
          : `/photos/concerts/${folder}/${galleryFiles[0]}`;

        const imageList = galleryFiles.map(file => `/photos/concerts/${folder}/${file}`);

        // Lire les métadonnées existantes si le fichier existe déjà
        let venue = 'Unknown Venue';
        let date = new Date().toISOString().split('T')[0];
        let photographerName = 'Unknown Photographer';
        let photographerInstagram = '';

        if (fs.existsSync(destPath)) {
            const existing = fs.readFileSync(destPath, 'utf-8');
            const venueMatch = existing.match(/^venue:\s*"(.+)"/m);
            const dateMatch = existing.match(/^date:\s*"(.+)"/m);
            const nameMatch = existing.match(/name:\s*"(.+)"/m);
            const instaMatch = existing.match(/instagram:\s*"(.*)"/m);
            if (venueMatch) venue = venueMatch[1];
            if (dateMatch) date = dateMatch[1];
            if (nameMatch) photographerName = nameMatch[1];
            if (instaMatch) photographerInstagram = instaMatch[1];
        }

        const markdown = `---
title: "${folder}"
date: "${date}"
venue: "${venue}"
cover: "${finalCoverPath}"
photographer:
    name: "${photographerName}"
    instagram: "${photographerInstagram}"
photos:
${imageList.map(src => `  - "${src}"`).join('\n')}
---
`;

        fs.writeFileSync(destPath, markdown);
        console.log(`✨ Généré : ${folder} (${imageList.length} photos)`);
    }
}

generate();
