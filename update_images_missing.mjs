import fs from 'fs';

const imageMap = {
  'Link': '/images/link.png',
  'Link (Four Links)': '/images/link.png',
  'Three Links': '/images/link.png',
  'Zelda': '/images/zelda.png',
  'Princess Zelda': '/images/zelda.png',
  'Princess Zelda (the Sleeping Princess)': '/images/zelda.png',
  'Ganondorf': '/images/ganondorf.png',
  'Ganon': '/images/ganonBeastForm.png',
  'Ganon (Spirit/Remnant)': '/images/ganonBeastForm.png',
  'Fi': '/images/fi.png',
  'Groose': '/images/groose.png',
  'Demise': '/images/demise.png',
  'Ezlo': '/images/ezlo.png',
  'Vaati': '/images/vaati.png',
  'Tatl': '/images/tatl&tael.png',
  'Ciela': '/images/tatl&tael.png',
  'Majora': '/images/majoraTheMask.png',
  'Midna': '/images/midna.png',
  'Marin': '/images/marin.png',
  'Din': '/images/dinOracle.png',
  'Din, Oracle of Seasons': '/images/dinOracle.png',
  'Onox': '/images/onox.png',
  'Nayru': '/images/naryuOracle.png',
  'Nayru, Oracle of Ages': '/images/naryuOracle.png',
  'Veran': '/images/veran.png',
  'Princess Hilda': '/images/princessHilda.png',
  'Yuga': '/images/yuga.png',
  'Princess Styla': '/images/princess.Styla.png',
  'Lady Maud': '/images/ladyMaud.png',
  'Tri': '/images/Tri.png',
  'Null': '/images/null.png',
  'Tetra': '/images/tetra.png',
  'Bellum': '/images/bellum.png',
  'Malladus': '/images/malladus.png',
  'Calamity Ganon': '/images/calamityGanon.png'
};

const content = fs.readFileSync('src/data/games.js', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  const nameMatch = line.match(/name:\s*['"](.*?)['"]/);
  if (nameMatch) {
    const currentName = nameMatch[1];
    
    if (imageMap[currentName]) {
      let hasSrc = false;
      let j = i + 1;
      // Look ahead in the current object block to see if src exists
      while (j < lines.length && !lines[j].match(/name:/) && !lines[j].match(/\},/) && !lines[j].match(/\{/)) {
        if (lines[j].includes('src:')) {
          hasSrc = true;
          lines[j] = lines[j].replace(/src:\s*['"].*?['"]/, `src: '${imageMap[currentName]}'`);
          break;
        }
        j++;
      }
      
      if (!hasSrc) {
        // inject src right after the name line
        const indentMatch = line.match(/^\s*/);
        const indent = indentMatch ? indentMatch[0] : '';
        lines.splice(i + 1, 0, `${indent}src: '${imageMap[currentName]}',`);
        i++; // skip the newly inserted line
      }
    }
  }
}

fs.writeFileSync('src/data/games.js', lines.join('\n'));
console.log('Done fixing missing images!');
