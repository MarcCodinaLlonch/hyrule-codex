import fs from 'fs';
import ytSearch from 'yt-search';

(async () => {
  let content = fs.readFileSync('src/data/games.js', 'utf8');
  const lines = content.split('\n');
  
  let currentGame = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if line defines a game title
    const titleMatch = line.match(/^\s*title:\s*(['"])(.*?)\1,/);
    if (titleMatch) { 
      currentGame = titleMatch[2];
    }
    
    // Check if line is a soundtrack
    const trackMatch = line.match(/\{\s*title:\s*(['"])(.*?)\1,\s*note:/);
    if (trackMatch && !line.includes('url:')) {
      const trackTitle = trackMatch[2];
      console.log(`Searching for: ${currentGame} ${trackTitle} OST`);
      
      try {
        const r = await ytSearch(`${currentGame} ${trackTitle} OST`);
        if (r && r.videos && r.videos.length > 0) {
          const url = r.videos[0].url;
          console.log(`Found: ${url}`);
          lines[i] = line.replace(/title:\s*(['"])(.*?)\1,/, `title: $1$2$1, url: '${url}',`);
        } else {
          console.log(`No results for ${trackTitle}`);
        }
      } catch (err) {
        console.error(err);
      }
      
      // Add a small delay to avoid rate limits
      await new Promise(r => setTimeout(r, 500));
    }
  }
  
  fs.writeFileSync('src/data/games.js', lines.join('\n'));
  console.log("Done!");
})();
