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
  'echoes-of-wisdom': '/images/echoesOfKingdom.png'
};

const content = fs.readFileSync('src/data/games.js', 'utf8');
const lines = content.split('\n');

let currentSlug = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // match slug: 'X'
  const slugMatch = line.match(/slug:\s*['"](.*?)['"]/);
  if (slugMatch) {
    currentSlug = slugMatch[1];
  }
  
  // match heroImage: ''
  if (line.match(/heroImage:\s*['"].*?['"]/)) {
    if (coverMap[currentSlug]) {
      lines[i] = line.replace(/heroImage:\s*['"].*?['"]/, `heroImage: '${coverMap[currentSlug]}'`);
    } else {
        // Just in case we missed one
        if (!line.includes('relatedGames')) {
          console.log('Missed cover for slug:', currentSlug);
        }
    }
  }
}

fs.writeFileSync('src/data/games.js', lines.join('\n'));
console.log('Done mapping game covers!');
