import fs from 'fs';

const coverMap = {
  'skyward-sword': '/images/skywardSword.png',
  'the-minish-cap': '/images/theMinishCap.jpg',
  'ocarina-of-time': '/images/ocarinaOfTime.png',
  'majoras-mask': '/images/MajorasMask.png',
  'twilight-princess': '/images/twilightPrincess.png',
  'four-swords-adventures': '/images/fourSwordsAdventures.png',
  'a-link-to-the-past': '/images/aLinkToThePast.png',
  'links-awakening': '/images/aLinksAwakening.png',
  'oracle-of-seasons': '/images/oracleOfSeasons.png',
  'oracle-of-ages': '/images/oracleOfAges.png',
  'a-link-between-worlds': '/images/aLinkBetweenWorlds.png',
  'tri-force-heroes': '/images/TriForceHeroes.png',
  'the-legend-of-zelda': '/images/theLegendOfZeldaNes.png',
  'zelda-ii-the-adventure-of-link': '/images/zelda2TheAdventureOfLink.png',
  'the-wind-waker': '/images/theWindWaker.png',
  'phantom-hourglass': '/images/phantomHourglass.png',
  'spirit-tracks': '/images/spiritTracks.png',
  'breath-of-the-wild': '/images/breathOfTheWild.png',
  'tears-of-the-kingdom': '/images/tearsOfTheKingdom.png',
  'echoes-of-wisdom': '/images/echoesOfKingdom.png',
  // some might have 3D appended like 'ocarina-of-time-3d'
  'ocarina-of-time-3d': '/images/ocarinaOfTime.png',
  'majoras-mask-3d': '/images/MajorasMask.png',
  'the-wind-waker-hd': '/images/theWindWaker.png',
  'twilight-princess-hd': '/images/twilightPrincess.png',
  'skyward-sword-hd': '/images/skywardSword.png',
  'links-awakening-switch': '/images/aLinksAwakening.png'
};

const content = fs.readFileSync('src/data/games.js', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Look for lines that define a relatedGame object, e.g. { relation: '...', slug: '...', ... }
  // They usually have `slug:` on the same line, and `src:` on the same line.
  if (line.includes('slug:')) {
    const slugMatch = line.match(/slug:\s*['"](.*?)['"]/);
    if (slugMatch) {
      const slug = slugMatch[1];
      if (coverMap[slug]) {
        // Replace whatever is in src: '...' with the mapped cover image
        if (line.match(/src:\s*['"].*?['"]/)) {
          lines[i] = line.replace(/src:\s*['"].*?['"]/, `src: '${coverMap[slug]}'`);
        } else {
          // If for some reason it doesn't have a src, we can append it before the closing brace
          lines[i] = line.replace(/\s*\}\s*$/, `, src: '${coverMap[slug]}' }`);
        }
      }
    }
  }
}

fs.writeFileSync('src/data/games.js', lines.join('\n'));
console.log('Done mapping related games images!');
