// =============================================================
// games.js — Central data store for all Zelda games
// Hyrule Codex
// =============================================================

export const games = [

  // ── PRE-SPLIT ERA ──────────────────────────────────────────

  {
  slug: 'skyward-sword',
  title: 'The Legend of Zelda: Skyward Sword',
  year: 2011,
  platform: 'Wii',
  platformHistory: [
    { 
      platform: 'Nintendo Switch', 
      year: 2021, 
      note: 'Remastered as "Skyward Sword HD" featuring 60fps, high-definition graphics, and the addition of button-only controls alongside the original motion controls.' 
    }
  ],
  category: 'Masterpiece',
  heroImage: '',
  tagline: '"The legend of the Zelda universe begins here."',
  synopsis: [
    "In the floating city of Skyloft, high above an impenetrable barrier of clouds, a young knight-in-training named Link lives a peaceful life. This tranquility is shattered when his closest friend, Zelda, is swept beneath the clouds by a dark tornado. Guided by Fi, the mysterious spirit of the Goddess Sword, Link must descend to the forgotten Surface—a dangerous, untamed land—to rescue her.",
    "As Link explores the Surface, he uncovers the ancient history of the Goddess Hylia and her battle against the Demon King. His journey becomes a quest not just to save Zelda, but to forge the legendary Master Sword and unlock his destiny as the chosen hero. The narrative ultimately reveals the origins of the entire Zelda timeline, establishing the eternal cycle of light and darkness."
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Hidemaro Fujibayashi',
    producer: 'Eiji Aonuma'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'The Chosen Hero',
      desc: "A sleepy but courageous student at the Knight Academy in Skyloft. He is chosen by the Goddess Hylia to wield the Goddess Sword and descend to the Surface to protect Zelda and defeat the rising evil.",
      src: ''
    },
    {
      name: 'Zelda',
      role: 'Mortal Reincarnation of Hylia',
      desc: "Link's childhood friend whose cheerful demeanor hides a grand destiny. She must awaken to her true identity as the mortal reincarnation of the Goddess Hylia to maintain the seal on Demise.",
      src: ''
    },
    {
      name: 'Fi',
      role: 'Spirit of the Goddess Sword',
      desc: "An analytical, AI-like spirit residing within the Goddess Sword. Created by Hylia, she guides Link with logical probability assessments and serves as his constant companion.",
      src: ''
    },
    {
      name: 'Groose',
      role: 'Knight Academy Bully turned Ally',
      desc: "Initially an arrogant rival to Link who harbors a crush on Zelda. He follows Link to the Surface, undergoing significant character growth to become a crucial and brave ally in the fight against Demise.",
      src: ''
    }
  ],
  timeline: { 
    era: 'era-of-origins', 
    eraLabel: 'Era of Origins' 
  },
  relatedGames: [
    { 
      relation: 'Chronological Successor', 
      slug: 'the-legend-of-zelda-the-minish-cap', 
      title: 'The Legend of Zelda: The Minish Cap', 
      src: '' 
    }
  ],
  villain: {
    name: 'Demise',
    desc: "The primordial Demon King who sought to conquer the world and claim the Triforce. Though sealed away by Hylia in the ancient past, he breaks free. Upon his defeat, his lingering hatred establishes a curse that dooms the bloodline of the Goddess and the spirit of the Hero to an eternal cycle of conflict.",
    tags: ['demon-king', 'origin-of-evil', 'the-imprisoned'],
    src: ''
  },
  mechanics: [
    { 
      name: 'Wii MotionPlus Swordplay', 
      desc: "Combat heavily relies on 1:1 motion tracking, requiring players to swing the controller at specific angles to bypass enemy defenses and solve environmental puzzles." 
    },
    { 
      name: 'Stamina Meter', 
      desc: "A green gauge that depletes when running, climbing, or performing heavy attacks. It introduced resource management to movement, later heavily expanded upon in Breath of the Wild." 
    },
    { 
      name: 'Sailcloth', 
      desc: "A parachute-like item given to Link by Zelda, used to safely descend from great heights and catch updrafts. It serves as the mechanical precursor to the Paraglider." 
    }
  ],
  regions: [
    { 
      name: 'Skyloft & The Sky', 
      desc: "A series of floating islands above the cloud barrier. It serves as the game's central hub world where Link can upgrade gear, buy potions, and interact with citizens." 
    },
    { 
      name: 'Faron Woods', 
      desc: "A lush, forested region on the Surface home to the Kikwi tribe. It houses the Skyview Temple and Lake Floria." 
    },
    { 
      name: 'Eldin Volcano', 
      desc: "A mountainous, lava-filled region inhabited by the subterranean Mogma race. It features the Earth Temple and the Fire Sanctuary." 
    },
    { 
      name: 'Lanayru Desert', 
      desc: "A vast wasteland that was once a technologically advanced, lush region. Link uses Timeshift Stones to temporarily revert small areas to their past, verdant states, interacting with the ancient robot inhabitants." 
    }
  ],
  trivia: [
    "The game's main musical theme, 'Ballad of the Goddess', is a reverse arrangement of 'Zelda's Lullaby'.",
    "Skyward Sword is the first game in the series to feature a fully upgradable equipment system, allowing players to enhance shields, potions, and items using bugs and monster parts.",
    "The Hylian language seen throughout the game can be fully translated into English characters, unlike in many previous games where the text was often gibberish."
  ],
  soundtrack: [
    { 
      title: 'Ballad of the Goddess', 
      url: 'https://www.youtube.com/results?search_query=Skyward+Sword+Ballad+of+the+Goddess+OST',
      note: "The sweeping main theme that represents Hylia and Skyloft's legacy, famous for reversing an iconic melody from Ocarina of Time." 
    },
    { 
      title: "Fi's Theme", 
      url: 'https://www.youtube.com/results?search_query=Skyward+Sword+Fi+Theme+OST',
      note: "A clinical yet deeply melancholic melody that plays during interactions with Fi, climaxing emotionally during her final farewell." 
    },
    { 
      title: 'Romance in the Air', 
      url: 'https://www.youtube.com/results?search_query=Skyward+Sword+Romance+in+the+Air+OST',
      note: "A gentle, romantic tune that plays during the early moments between Link and Zelda, establishing their deep emotional bond before the tragedy." 
    }
  ],
  relatedTheoryTags: ['demise-curse', 'master-sword', 'goddess-hylia'],
  stats: { 
    metacritic: 93, 
    avgPlaytime: 45.5, 
    salesApprox: 4150000
  }
},

  {
  slug: 'the-minish-cap',
  title: 'The Legend of Zelda: The Minish Cap',
  year: 2004,
  platform: 'Game Boy Advance',
  platformHistory: [
    { platform: 'Wii U (Virtual Console)', year: 2014, note: 'Digital re-release via the Wii U Virtual Console emulating the original GBA cartridge.' },
    { platform: 'Nintendo Switch (Nintendo Classics / GBA app)', year: 2023, note: 'Added to the Game Boy Advance library available through Nintendo Switch Online + Expansion Pack.' }
  ],
  category: 'Classic',
  heroImage: '',
  tagline: '"A hat\u2019s tale, a hero\u2019s trial."', // VERIFICAR - no official English tagline is consistently documented for this title; phrased to evoke the plot without claiming to be an official marketing quote.
  synopsis: [
    'During the annual Picori Festival in Hyrule Town, a sword-fighting tournament is held to commemorate the legend of the Picori, a race of tiny beings said to have gifted Hyrule the Picori Blade and Light Force generations earlier to seal away evil. The festival\u2019s reigning champion, a mysterious swordsman named Vaati, shatters the Picori Blade and unleashes chaos, turning Princess Zelda to stone in the process. With the kingdom\u2019s only line of defense broken, the elderly Minish craftsman Ezlo, magically bonded to Link\u2019s head as a living cap, guides the young hero on a quest to reforge the blade into the legendary Four Sword.',
    'To restore the blade, Link must shrink down to Minish size using hidden portals scattered across Hyrule, exploring a world made vast and unfamiliar from a tiny perspective. Along the way he recovers the four Elements sealed within ancient shrines, uncovers the deep bond and rivalry between Ezlo and Vaati, and confronts the truth behind the Minish, the origin of the Four Sword, and the corrupting lure of the Light Force. The journey culminates in a confrontation atop Hyrule Castle, where Link must master the sword\u2019s power to split into four copies of himself to defeat the wind sorcerer Vaati and save both Zelda and the kingdom.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Hidemaro Fujibayashi',
    producer: 'Keiji Inafune' // VERIFICAR - Nintendo credits also list Shigeru Miyamoto and Eiji Aonuma in supervisory/producing roles on the series side; Inafune is documented as Capcom-side producer.
  },
  protagonists: [
    {
      name: 'Link',
      role: 'The Hero of Hyrule',
      desc: 'A young boy chosen to wield the shattered Picori Blade. Guided by Ezlo, he learns to shrink to Minish size and eventually to split into four copies of himself using the reforged Four Sword.',
      src: ''
    },
    {
      name: 'Princess Zelda',
      role: 'Princess of Hyrule',
      desc: 'Turned to stone by Vaati after the Picori Blade shatters. Her condition drives the urgency of Link\u2019s quest, and she plays a supporting role once restored near the story\u2019s end.',
      src: ''
    },
    {
      name: 'Ezlo',
      role: 'The Minish Cap',
      desc: 'An ill-tempered but wise Minish elder cursed into the form of a talking cap worn by Link. He grants Link the ability to shrink and serves as mentor, guide, and comic relief throughout the adventure.',
      src: ''
    }
  ],
  timeline: { era: 'era-of-origins', eraLabel: 'Era of Origins' },
  relatedGames: [
    { relation: 'Related Legend (Four Sword lore)', slug: 'four-swords', title: 'The Legend of Zelda: Four Swords', src: '' },
    { relation: 'Related Legend (Four Sword lore)', slug: 'four-swords-adventures', title: 'The Legend of Zelda: Four Swords Adventures', src: '' },
    { relation: 'Later Era (same branch)', slug: 'a-link-to-the-past', title: 'The Legend of Zelda: A Link to the Past', src: '' }
  ],
  villain: {
    name: 'Vaati',
    desc: 'Once Ezlo\u2019s apprentice among the Minish, Vaati grew resentful and obsessed with the Light Force, a wish-granting power said to be sealed within Hyrule. His jealousy and hunger for power led him to betray and curse Ezlo, shatter the Picori Blade to break Hyrule\u2019s ancient seal, and turn Princess Zelda to stone. His transformation from a curious, gifted Minish into a wind-wielding sorcerer establishes him as the origin point for one of the series\u2019 most recurring antagonists, later reappearing in Four Swords and Four Swords Adventures.',
    tags: ['Sorcerer', 'Wind Magic', 'Betrayal']
  },
  mechanics: [
    { name: 'Minish Portals', desc: 'Hidden entrances scattered throughout Hyrule that shrink Link down to the size of the Minish, transforming familiar areas into vast, hazard-filled micro-worlds full of secrets.' },
    { name: 'The Four Sword', desc: 'The reforged legendary blade that allows Link to split into four identical copies of himself, enabling cooperative-style puzzles and combat solved entirely in single-player.' },
    { name: 'Kinstone Fusion', desc: 'A system where Link fuses matching Kinstone pieces with NPCs and hidden markers across the world, unlocking new areas, items, and story content as a reward.' },
    { name: 'Ezlo\u2019s Cap Abilities', desc: 'Beyond shrinking Link, Ezlo grants context-sensitive abilities over the course of the story, such as gliding short distances, that expand traversal options.' }
  ],
  regions: [
    { name: 'Hyrule Town', desc: 'The bustling central hub of the game, home to the Picori Festival grounds, shops, and many Kinstone-fusion NPCs; also the site of Vaati\u2019s initial attack.' },
    { name: 'Minish Woods', desc: 'A dense forest bordering Hyrule Town that serves as the gateway into the Minish-sized world and houses the Deepwood Shrine.' },
    { name: 'Mount Crenel', desc: 'A snow-capped peak housing the Cave of Flames dungeon, notable for its shifting elemental hazards at Minish scale.' },
    { name: 'Hyrule Castle', desc: 'The seat of royal power and the site of the game\u2019s final confrontation, where Link faces Vaati\u2019s true, monstrous form.' }
  ],
  trivia: [
    'The Minish Cap was developed by Capcom\u2019s Flagship studio, the same team behind Four Swords and Four Swords Adventures, and was directed by Hidemaro Fujibayashi, who would later direct Skyward Sword and Breath of the Wild.',
    'It was the last mainline Zelda title released for the original Game Boy Advance hardware.',
    'Approximately 70 percent of the game\u2019s soundtrack consists of rearranged music from earlier Zelda titles, blended with new original compositions.',
    'The game was named the Game Boy Advance Game of the Year for 2005 by GameSpot.'
  ],
  soundtrack: [
    { title: 'Hyrule Town Theme', url: 'https://youtube.com/watch?v=uVSHlTEuRYk', note: 'A bright, bustling melody that reflects the liveliness of the game\u2019s central hub during the Picori Festival.' },
    { title: 'Vaati\u2019s Theme', url: 'https://youtube.com/watch?v=NfNt4ESwAUA', note: 'A tense, unsettling motif underscoring the sorcerer\u2019s menace and his growing corruption throughout the story.' },
    { title: 'Minish Woods', url: 'https://youtube.com/watch?v=PydqkG0xRZo', note: 'A whimsical, curious theme that captures the wonder of shrinking down into a hidden miniature world.' }
  ],
  relatedTheoryTags: ['four-sword', 'vaati', 'minish', 'light-force'],
  stats: { metacritic: 89, avgPlaytime: null, salesApprox: null }
},

  {
  slug: 'ocarina-of-time',
  title: 'The Legend of Zelda: Ocarina of Time',
  year: 1998,
  platform: 'Nintendo 64',
  platformHistory: [
    { platform: 'GameCube', year: 2003, note: 'Bundled as a bonus disc (with the Master Quest variant) via promotions tied to The Wind Waker and Zelda: Collector\'s Edition.' },
    { platform: 'Wii', year: 2007, note: 'Re-released digitally on the Virtual Console.' },
    { platform: 'Nintendo 3DS', year: 2011, note: 'Full remake titled "Ocarina of Time 3D" with upgraded 3D visuals, gyroscopic aiming, and the Master Quest included.' },
    { platform: 'Wii U', year: 2015, note: 'Re-released digitally on the Virtual Console.' },
    { platform: 'Nintendo Switch', year: 2021, note: 'Made available through the Nintendo Switch Online + Expansion Pack N64 app.' }
  ],
  category: 'Masterpiece',
  heroImage: '',
  tagline: '"It\'s dangerous to go alone... but this time, you won\'t be a child forever."', // VERIFICAR - paraphrased, not an official confirmed in-game quote
  synopsis: [
    'In the kingdom of Hyrule, a young boy without a fairy named Link is summoned by the Great Deku Tree, guardian spirit of the Kokiri Forest, who has been cursed by a dark force. Before succumbing, the Deku Tree reveals that Link is destined to stop Ganondorf, the ambitious leader of the Gerudo, who seeks to obtain the sacred relic known as the Triforce and plunge Hyrule into darkness. Entrusted with the Kokiri\'s Emerald, Link is sent to Hyrule Castle, where he meets Princess Zelda and learns of a prophecy involving three Spiritual Stones and the Ocarina of Time, the keys to the Sacred Realm where the Triforce resides.',
    'Racing against Ganondorf, Link gathers the Spiritual Stones from the Gorons of Death Mountain and the Zoras of Lake Hylia, but arrives at the Temple of Time too late: Ganondorf follows him into the Sacred Realm and claims the Triforce of Power for himself, corrupting the realm and transforming into the Great King of Evil. Link, having drawn the Master Sword before he was ready, is sealed away for seven years, awakening as an adult in a Hyrule now ravaged by Ganondorf\'s tyranny. Guided by the sage Rauru and Princess Zelda (disguised as the Sheikah warrior Sheik), Link travels through time with the Ocarina of Time, awakening the six sages and purifying the ancient temples, culminating in a final confrontation with Ganondorf atop his crumbling tower and within the collapsing Ganon\'s Castle.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Shigeru Miyamoto, Yoshiaki Koizumi, Toru Osawa', // VERIFICAR - directorial credits for OoT are shared/complex
    producer: 'Shigeru Miyamoto'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'The Hero of Time',
      desc: 'A boy raised among the Kokiri who discovers he is not one of them and is chosen by destiny to wield the Master Sword and prevent Ganondorf from claiming the Triforce.',
      src: ''
    },
    {
      name: 'Princess Zelda',
      role: 'Princess of Hyrule / Sheik',
      desc: 'Heir to the royal family who foresees Ganondorf\'s betrayal and disguises herself as the Sheikah Sheik to guide adult Link while hiding from Ganondorf\'s forces.',
      src: ''
    }
  ],
  timeline: { era: 'child-era-timeline', eraLabel: 'Child Era Timeline' }, // VERIFICAR - OoT is the branching point of the official timeline (splits into three paths); it is conventionally grouped here alongside Majora's Mask, but this categorization is a simplification
  relatedGames: [
    { relation: 'Direct Sequel', slug: 'majoras-mask', title: 'The Legend of Zelda: Majora\'s Mask', src: '' },
    { relation: 'Prequel (Era of Origins)', slug: 'skyward-sword', title: 'The Legend of Zelda: Skyward Sword', src: '' },
    { relation: 'Remake', slug: 'ocarina-of-time-3d', title: 'The Legend of Zelda: Ocarina of Time 3D', src: '' }
  ],
  villain: {
    name: 'Ganondorf',
    desc: 'The sole male born to the Gerudo in a century, Ganondorf rose to become their leader and set his sights on Hyrule\'s legendary Triforce, driven by ambition and a desire to rule. He infiltrates the royal family\'s trust, manipulates events to trigger the destruction of the Kokiri Forest and Hyrule Castle Town, and ultimately follows Link into the Sacred Realm, where his imbalanced heart causes the Triforce to split, leaving him with only the Triforce of Power. This transforms him into the demonic Ganon, whose tyranny defines the game\'s second half.',
    tags: ['Gerudo', 'Triforce of Power', 'Ganon']
  },
  mechanics: [
    { name: 'Ocarina of Time', desc: 'A magical musical instrument used to play songs that warp Link across the map, change the time of day, alter the weather, and trigger story events; it is central to both puzzle-solving and time travel.' },
    { name: 'Child/Adult Time Travel', desc: 'Link can shift between his child and adult forms by placing or removing the Master Sword from the Pedestal of Time, altering which areas, items, and NPC interactions are accessible.' },
    { name: 'Z-Targeting (Lock-On)', desc: 'An analog-stick lock-on system that lets Link focus on enemies and objects, enabling precise combat, item throwing, and navigation; it became a foundational mechanic for later 3D action games.' },
    { name: 'Equipment Item Slots (C-Buttons)', desc: 'Link can assign items like the bow, bombs, boomerang, and hookshot to the C-buttons for quick access, encouraging players to solve dungeon puzzles by swapping tools on the fly.' }
  ],
  regions: [
    { name: 'Kokiri Forest', desc: 'Link\'s home, a secluded woodland inhabited by the eternally young Kokiri, gateway to the Lost Woods and the Sacred Forest Meadow.' },
    { name: 'Hyrule Field', desc: 'The vast central overworld connecting all of Hyrule\'s regions, patrolled by Peahats, Stalchildren, and later Ganondorf\'s forces.' },
    { name: 'Death Mountain', desc: 'The volcanic home of the Gorons, containing the Dodongo\'s Cavern and Fire Temple, threatened early on by Ganondorf\'s interference with the Goron elder Darunia.' },
    { name: 'Zora\'s Domain and Lake Hylia', desc: 'The aquatic realm of the Zora people, home to Princess Ruto and the Water Temple, and site of Lake Hylia\'s ecosystem which suffers when Ganondorf drains it.' },
    { name: 'Gerudo Valley and Desert', desc: 'Ganondorf\'s homeland, home to the all-female Gerudo tribe, the Gerudo Training Ground, and the Spirit Temple.' }
  ],
  trivia: [
    'Ocarina of Time was the first entry in The Legend of Zelda series to be rendered in fully 3D graphics.',
    'The game received a perfect or near-perfect score from numerous outlets at launch, including a 99 on Metacritic, and topped several "greatest games of all time" lists for years afterward.',
    'The iconic "Elite Beat" combat lock-on system introduced in this game, Z-Targeting, influenced the control schemes of many later 3D action-adventure titles.',
    'The game\'s development team, led within Nintendo EAD, reused and adapted several assets and lessons from Super Mario 64, including the analog camera and movement systems.',
    'A special "Master Quest" version featuring mirrored dungeons and increased difficulty was later bundled as a bonus with certain releases of The Wind Waker and other promotions.'
  ],
  soundtrack: [
    { title: 'Zelda\'s Lullaby', url: 'https://youtube.com/watch?v=gPm3aIaf6Ok', note: 'A recurring melody tied to the royal family of Hyrule, used to open doors and access areas connected to Zelda\'s legacy.' },
    { title: 'Song of Storms', url: 'https://youtube.com/watch?v=UtgHZaq0EGs', note: 'A haunting, rain-summoning tune taught by the mysterious Windmill Man, later revealed to have a darker backstory involving stolen time.' },
    { title: 'Gerudo Valley', url: 'https://youtube.com/watch?v=0hEYvdMoF2g', note: 'A flamenco-inspired theme representing the Gerudo people, widely remembered as one of the series\' most iconic musical motifs.' },
    { title: 'Ganondorf\'s Theme', url: 'https://youtube.com/watch?v=NZWHr_Ovwwk', note: 'An ominous, brass-driven leitmotif that recurs whenever Ganondorf\'s presence or influence looms over the story.' }
  ],
  relatedTheoryTags: ['triforce', 'ganondorf', 'master-sword', 'timeline-split'],
  stats: { metacritic: 99, avgPlaytime: null, salesApprox: null } // VERIFICAR - avgPlaytime and salesApprox omitted for lack of confident, up-to-date figures
},

  // ── CHILD TIMELINE ─────────────────────────────────────────

  {
  slug: 'majoras-mask',
  title: 'The Legend of Zelda: Majora\'s Mask',
  year: 2000,
  platform: 'Nintendo 64',
  platformHistory: [
    { platform: 'GameCube', year: 2003, note: 'Re-released as a bonus disc through select promotions, similar to Ocarina of Time.' }, // VERIFICAR - confirm exact promotion details
    { platform: 'Wii', year: 2009, note: 'Re-released digitally on the Virtual Console.' },
    { platform: 'Wii U', year: 2015, note: 'Re-released digitally on the Virtual Console.' },
    { platform: 'Nintendo 3DS', year: 2015, note: 'Full remake titled "Majora\'s Mask 3D" with updated visuals, revised boss battles, and quality-of-life changes.' },
    { platform: 'Nintendo Switch', year: 2021, note: 'Made available through the Nintendo Switch Online + Expansion Pack N64 app.' }
  ],
  category: 'Masterpiece',
  heroImage: '',
  tagline: '"You\'ve met with a terrible fate, haven\'t you?"',
  synopsis: [
    'Shortly after the events of Ocarina of Time, Link rides through the Lost Woods searching for a lost friend when he is ambushed by the mischievous Skull Kid, who is wearing a sinister, sentient artifact called Majora\'s Mask and is accompanied by two fairies, Tatl and Tael. The Skull Kid steals Link\'s horse Epona and his ocarina, transforms him into a Deku Scrub, and flees into a strange, decaying version of Hyrule known as Termina. Trapped in this new world, Link learns that the Skull Kid, empowered by the mask\'s dark magic, has set the moon on a collision course with Clock Town, with only three days remaining before impact.',
    'Aided by Tatl, who is separated from her twin Tael and forced to accompany Link, and the mysterious Happy Mask Salesman who demands the return of his stolen mask, Link uses the recovered Ocarina of Time to relive the same three days over and over with the Song of Time. As he searches for a way to stop the moon, Link transforms using the magical masks of three fallen heroes, becomes a Deku, Goron, and Zora to save the regions of Termina, and confronts the sorrow, grief, and unfinished business of the people trapped in the cursed cycle. In the climax, Link enters the moon itself to face the being possessing Majora\'s Mask, ultimately freeing the Skull Kid and the fairies from its dark influence and saving Termina.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Eiji Aonuma', // VERIFICAR - Aonuma is widely credited as director, though development was a joint effort under Miyamoto's supervision
    producer: 'Shigeru Miyamoto, Eiji Aonuma'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'The Hero of Time',
      desc: 'Still searching for his lost friend after the events of Ocarina of Time, Link is pulled into the parallel world of Termina, where he must relive the same three days to prevent the moon from destroying Clock Town.',
      src: ''
    },
    {
      name: 'Tatl',
      role: 'Fairy Companion',
      desc: 'A fairy separated from her twin brother Tael by the Skull Kid, who reluctantly guides and assists Link throughout his journey in Termina.',
      src: ''
    }
  ],
  timeline: { era: 'child-era-timeline', eraLabel: 'Child Era Timeline' },
  relatedGames: [
    { relation: 'Direct Sequel', slug: 'majoras-mask', title: 'The Legend of Zelda: Majora\'s Mask', src: '' }, // VERIFICAR - self-reference left by template pattern, should likely be removed or corrected
    { relation: 'Direct Prequel', slug: 'ocarina-of-time', title: 'The Legend of Zelda: Ocarina of Time', src: '' },
    { relation: 'Remake', slug: 'majoras-mask-3d', title: 'The Legend of Zelda: Majora\'s Mask 3D', src: '' }
  ],
  villain: {
    name: 'Majora',
    desc: 'An ancient, malevolent entity bound within a cursed mask, said to have been used in forbidden rituals so dangerous it was sealed away. After being discarded, the mask was found by the Skull Kid, whose loneliness and resentment made him vulnerable to its corrupting influence, granting him immense power at the cost of his free will. Majora\'s true motivations remain deliberately ambiguous and chaotic, driven less by conquest than by a desire to spread despair, culminating in its attempt to crash the moon into Termina.',
    tags: ['majoras-mask', 'skull-kid', 'termina']
  },
  mechanics: [
    { name: 'Three-Day Cycle', desc: 'Link relives the same 72 in-game hours repeatedly, resetting the world (but not his key items and masks) each time he plays the Song of Time, requiring careful planning around NPC schedules and events.' },
    { name: 'Transformation Masks', desc: 'Link can transform into a Deku Scrub, a Goron, or a Zora using masks obtained from fallen souls, each granting unique abilities essential for exploring Termina\'s regions and solving puzzles.' },
    { name: 'Song of Time and Time-Manipulating Songs', desc: 'Ocarina songs let Link slow time, skip to dawn, or reset the three-day cycle, forming the backbone of the game\'s puzzle and pacing structure.' },
    { name: 'Bomber\'s Notebook', desc: 'A journal that tracks the schedules and side quests of Termina\'s many NPCs across the three-day cycle, helping players keep track of the game\'s intricate, time-sensitive storylines.' }
  ],
  regions: [
    { name: 'Clock Town', desc: 'The central hub of Termina, built around a giant clock tower counting down to the moon\'s impact, and home to the Carnival of Time.' },
    { name: 'Woodfall', desc: 'A swamp region afflicted by a curse, home to the Deku Palace and the source of Termina\'s Deku transformation mask, ruled by the deceased Deku Butler\'s lost son.' },
    { name: 'Snowhead', desc: 'A frozen mountain region suffering an unnatural eternal winter, home to the Gorons and tied to the tragic fate of the Goron hero Darmani.' },
    { name: 'Great Bay', desc: 'A coastal region whose waters are poisoned, home to the Zora and the tragic story of the Zora guitarist Mikau.' },
    { name: 'Ikana Canyon', desc: 'A haunted, cursed valley of the dead ruled by the spirit of King Igos du Ikana, steeped in themes of grief, war, and unresolved history.' }
  ],
  trivia: [
    'Majora\'s Mask was developed in about a year using the Ocarina of Time engine and assets, an unusually fast turnaround credited to director Eiji Aonuma and producer Shigeru Miyamoto\'s team.',
    'The game is known for its darker, more melancholic tone compared to Ocarina of Time, exploring themes of grief, loss, and impending doom through its many side characters.',
    'The transformation masks were partly inspired by the desire to reuse Link\'s character model in creative new ways within the short development window.',
    'Majora\'s Mask introduced the Bomber\'s Notebook and the three-day time loop, mechanics that were considered highly unconventional for the series at the time of release.'
  ],
  soundtrack: [
    { title: 'Song of Healing', url: 'https://youtube.com/watch?v=XDX4ZwUeOok', note: 'A somber, iconic melody that heals tormented souls and grants Link their masks, reused memorably throughout the Zelda series in later games.' },
    { title: 'Clock Town Themes (Day 1-3)', url: 'https://youtube.com/watch?v=jGuvOD7z3nU', note: 'The town\'s background music grows increasingly frantic and desperate as the three-day countdown to the moon\'s impact progresses.' },
    { title: 'Majora\'s Mask (Moon\'s Theme)', url: 'https://youtube.com/watch?v=Mm9_7mDccSs', note: 'An unsettling, dissonant theme associated with the ever-present moon looming over Clock Town, reinforcing the game\'s tone of dread.' }
  ],
  relatedTheoryTags: ['majoras-mask', 'termina', 'skull-kid', 'timeline-split'],
  stats: { metacritic: 95, avgPlaytime: null, salesApprox: null } // VERIFICAR - avgPlaytime and salesApprox omitted for lack of confident, up-to-date figures
},

  {
  slug: 'twilight-princess',
  title: 'The Legend of Zelda: Twilight Princess',
  year: 2006,
  platform: 'Wii', // VERIFICAR - Twilight Princess launched simultaneously on both Wii and Nintendo GameCube in most regions; Wii is generally treated as the primary/lead version, but the GameCube release was not a later port, so this choice is a simplification
  platformHistory: [
    { platform: 'Nintendo GameCube', year: 2006, note: 'Released the same year as a simultaneous, non-motion-control version rather than a later port.' }, // VERIFICAR - see platform note above
    { platform: 'Wii U', year: 2016, note: 'Remastered as "Twilight Princess HD" with upgraded visuals, amiibo functionality, and a redesigned item management system.' }
  ],
  category: 'Masterpiece',
  heroImage: '',
  tagline: '"When the world is bathed in the half light of dusk, strange things begin to happen."',
  synopsis: [
    'In the pastoral village of Ordon, the young ranch hand Link is asked to deliver a gift to Hyrule Castle when a mysterious dark twilight sweeps across the land, transforming him into a wolf and pulling him into a shadowy alternate dimension. Trapped in wolf form, Link is aided by Midna, an imp-like being who guides him and reveals that the twilight is spreading from the ruined Hyrule as the sinister Zant, self-proclaimed King of the Twilight, seizes control of the Twilight Realm and its people, the Twili. To restore the light and reclaim his human form, Link must journey through Hyrule\'s provinces, banishing twilight from each region with the aid of a group of monkeys, the Sky Book, and the true Light Spirits.',
    'As Link restores light to Hyrule\'s lands, he uncovers a deeper conspiracy: the depraved wizard Zant was granted his terrifying power by Ganondorf, the King of Evil, who was resurrected and exiled to the Twilight Realm years earlier following his execution. Alongside Princess Zelda, who sacrificed her life force to save Midna, and Midna herself, revealed to be the true, cursed ruler of the Twili, Link confronts Zant and then Ganondorf in a climactic battle that spans horseback duels, sword fights, and a final confrontation as both Wolf Link and swordsman, ultimately freeing Hyrule and the Twilight Realm from Ganondorf\'s corruption.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Eiji Aonuma',
    producer: 'Shigeru Miyamoto'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'The Hero\'s Shade\'s Successor / Wolf Link',
      desc: 'A humble goat herder from Ordon Village who is drawn into the Twilight Realm\'s crisis, gaining the ability to transform into a wolf and trained by the spectral Hero\'s Shade in advanced swordsmanship.',
      src: ''
    },
    {
      name: 'Midna',
      role: 'Twilight Imp / True Princess of the Twili',
      desc: 'A sarcastic, imp-like figure who accompanies Link throughout his journey, later revealed to be the rightful ruler of the Twili people, cursed and overthrown by Zant.',
      src: ''
    }
  ],
  timeline: { era: 'adult-era-timeline', eraLabel: 'Adult Era Timeline' },
  relatedGames: [
    { relation: 'Same Era', slug: 'four-swords-adventures', title: 'The Legend of Zelda: Four Swords Adventures', src: '' },
    { relation: 'Remaster', slug: 'twilight-princess-hd', title: 'The Legend of Zelda: Twilight Princess HD', src: '' }
  ],
  villain: {
    name: 'Ganondorf',
    desc: 'Executed by Hyrule\'s sages for his past crimes against the kingdom, Ganondorf survives his execution due to the Triforce of Power and is banished to the Twilight Realm. There he manipulates the ambitious sorcerer Zant, granting him god-like power over twilight magic in exchange for serving as his puppet ruler, allowing Ganondorf to orchestrate the corruption of Hyrule from the shadows while avoiding direct exposure until the story\'s climax.',
    tags: ['ganondorf', 'triforce-of-power', 'twilight-realm']
  },
  mechanics: [
    { name: 'Wolf Link Transformation', desc: 'Within the Twilight Realm or its encroaching shadow, Link transforms into a wolf with heightened senses, allowing him to dig, sense hidden trails, and later fight using unique wolf-based combat with Midna riding on his back.' },
    { name: 'Midna\'s Twilight Powers', desc: 'Midna grants Link special abilities such as warping between marked locations and, later, using a giant spectral hand to grab and move objects, tying puzzle design to her Twili magic.' },
    { name: 'Hidden Skills', desc: 'Taught by the ghostly Hero\'s Shade at hidden gravesites, these techniques (such as the Helm Splitter and Mortal Draw) expand Link\'s swordplay far beyond his basic sword slash.' },
    { name: 'Spinner and Dominion Rod', desc: 'Late-game items that let Link grind along rails at high speed or remotely control ancient statues, used to solve some of the game\'s most elaborate dungeon puzzles.' }
  ],
  regions: [
    { name: 'Ordon Village', desc: 'Link\'s quiet home, a ranching community nestled in the southern woods of Hyrule, whose peace is shattered when its children are kidnapped at the story\'s outset.' },
    { name: 'Hyrule Castle Town', desc: 'The kingdom\'s capital, left desolate and overrun by monsters under the twilight\'s influence, later restored as Link banishes the darkness.' },
    { name: 'Zora\'s Domain and Lake Hylia', desc: 'The frozen homeland of the Zora, tragically struck by the death of their king, and the drained lake that once served as their central waterway.' },
    { name: 'Snowpeak', desc: 'A mountain summit reachable only by treacherous icy paths, home to the Yeti couple Yeto and Yeta and the Snowpeak Ruins dungeon.' },
    { name: 'Twilight Realm', desc: 'The dimension bordering Hyrule from which the story\'s darkness originates, home to the Twili people and Midna\'s true domain before Zant\'s coup.' }
  ],
  trivia: [
    'Twilight Princess was originally intended for the GameCube but was delayed and adapted to also launch on the Wii, becoming a launch-window title that introduced motion-controlled swordplay to the series.',
    'The Wii version mirrors the game world horizontally compared to the GameCube version so that Link, primarily controlled via motion controls, would swing his sword with his right hand as originally designed.',
    'The game features the Hero\'s Shade, a spectral character later confirmed in supplementary material to be linked to the hero of Ocarina of Time, tying Twilight Princess to the earlier game\'s legacy.',
    'Twilight Princess was later remastered in high definition for the Wii U in 2016, adding amiibo functionality and a redesigned inventory system using the GamePad.'
  ],
  soundtrack: [
    { title: 'Hyrule Field Theme', url: 'https://youtube.com/watch?v=t6JgG__XbRA', note: 'A sweeping orchestral theme accompanying Link\'s horseback rides across Hyrule\'s open plains, considered a fan-favorite motif of the game.' },
    { title: 'Midna\'s Lament', url: 'https://youtube.com/watch?v=FUQKP0pt8Mg', note: 'A melancholic piece tied to Midna\'s personal sacrifice and hidden sorrow throughout the story.' },
    { title: 'Ganondorf Battle Theme', url: 'https://youtube.com/watch?v=r5lEBdJ6Z90', note: 'An intense, dramatic theme underscoring the final horseback and swordfight confrontations with Ganondorf.' }
  ],
  relatedTheoryTags: ['ganondorf', 'twilight-realm', 'triforce', 'heros-shade'],
  stats: { metacritic: 95, avgPlaytime: null, salesApprox: null } // VERIFICAR - avgPlaytime and salesApprox omitted for lack of confident, up-to-date figures
},

  {
  slug: 'four-swords-adventures',
  title: 'The Legend of Zelda: Four Swords Adventures',
  year: 2004,
  platform: 'Nintendo GameCube',
  platformHistory: [],
  category: 'Spin-off',
  heroImage: '',
  tagline: '"A hero divided is a hero multiplied."', // VERIFICAR - paraphrased summary of the game's premise, not a confirmed official in-game quote
  synopsis: [
    'Years after sealing away the Four Sword, which once split its wielder into four to defeat the Wind Mage Vaati, Princess Zelda senses a dark presence stirring in Hyrule and travels with Link to the Four Sword Sanctuary to investigate. Before Zelda can act, she and the other maidens of Hyrule are turned to stone by a mysterious force, and Link, driven by urgency, draws the Four Sword despite the ancient warning that it also releases whatever evil it seals. In doing so, he splits into four identical Links and inadvertently frees Vaati, who has waited within the blade for another chance to conquer Hyrule.',
    'Traveling across Hyrule\'s regions with his three doubles, Link fights through Vaati\'s forces to rescue the petrified maidens and collect Force Gems, uncovering along the way that Vaati has also resurrected Ganon in a bid to seize even greater power. As the divided heroes journey from the Kingdom of Hyrule to the Realm of the Heavens and beyond, they must contend with both Vaati\'s ambition and Ganon\'s betrayal of his own ally, culminating in confrontations with both villains before Link reunites into a single hero and reseals the evil within the Four Sword once more.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Eiji Aonuma', // VERIFICAR - director credit for this specific title is less consistently documented compared to mainline entries
    producer: 'Shigeru Miyamoto'
  },
  protagonists: [
    {
      name: 'Link (Four Links)',
      role: 'The Hero, split into Four',
      desc: 'Upon drawing the Four Sword, Link splits into four identical copies (traditionally colored green, red, blue, and violet) who must cooperate to solve puzzles, defeat enemies, and free Hyrule from Vaati\'s renewed threat.',
      src: ''
    },
    {
      name: 'Princess Zelda',
      role: 'Princess of Hyrule',
      desc: 'One of the maidens turned to stone by Vaati\'s dark magic at the story\'s outset, whose rescue drives much of Link\'s early motivation across the game\'s stages.',
      src: ''
    }
  ],
  timeline: { era: 'adult-era-timeline', eraLabel: 'Adult Era Timeline' }, // VERIFICAR - officially placed in the Child/Downfall-adjacent branch per Hyrule Historia's timeline chart; grouping it here follows common simplified categorization near Twilight Princess and A Link to the Past
  relatedGames: [
    { relation: 'Direct Sequel', slug: 'four-swords', title: 'The Legend of Zelda: Four Swords', src: '' },
    { relation: 'Same Era', slug: 'a-link-to-the-past', title: 'The Legend of Zelda: A Link to the Past', src: '' },
    { relation: 'Same Era', slug: 'twilight-princess', title: 'The Legend of Zelda: Twilight Princess', src: '' }
  ],
  villain: {
    name: 'Vaati',
    desc: 'A Wind Mage born from the corruption of a Minish tribesman\'s heart, Vaati was previously sealed within the Four Sword after his defeat by a past hero. Freed once more when Link draws the blade, he seeks to conquer Hyrule and reclaim the power he lost, going so far as to resurrect Ganon as a pawn in his scheme, only for the alliance between the two villains to fracture as each seeks ultimate power for himself.',
    tags: ['vaati', 'four-sword', 'ganon']
  },
  mechanics: [
    { name: 'Four Sword Splitting', desc: 'Drawing the Four Sword divides Link into four separate, simultaneously controllable copies, forming the core of the game\'s cooperative multiplayer design as well as its single-player puzzle mechanics.' },
    { name: 'Force Gems', desc: 'Collectible gems scattered throughout each stage that both score points for competitive multiplayer play and power the Links\' combined strength in certain puzzles and battles.' },
    { name: 'Multiplayer Cooperation and Competition', desc: 'Up to four players, each using a Game Boy Advance connected to the GameCube, could control one Link each, working together to solve stage puzzles while also competing for the most Force Gems.' },
    { name: 'Shadow Link Sections', desc: 'Certain missions and side content unlock a competitive four-player battle mode in which players control corrupted Shadow Link duplicates fighting one another directly.' }
  ],
  regions: [
    { name: 'Hyrule', desc: 'The game\'s opening stages, tying the story back to the countryside and castle grounds familiar from A Link to the Past.' },
    { name: 'Kingdom of Hyrule (Fields and Forests)', desc: 'Early overworld stages where Link and his doubles begin rescuing maidens and battling Vaati\'s minions.' },
    { name: 'Death Mountain', desc: 'A volcanic late-stage region posing environmental hazards and challenging puzzle-based dungeons for the four Links to overcome together.' },
    { name: 'Realm of the Heavens / Vaati\'s Realm', desc: 'The final, otherworldly stages where Link confronts Vaati and, subsequently, Ganon in the story\'s climactic battles.' }
  ],
  trivia: [
    'Four Swords Adventures required a Nintendo GameCube–Game Boy Advance link cable, letting each player use their Game Boy Advance screen to view exclusive information invisible to the others.',
    'The game serves as a direct narrative sequel to the Game Boy Advance title Four Swords, continuing the story of Vaati\'s imprisonment within the Four Sword.',
    'It was one of the few Zelda titles built primarily around four-player cooperative and competitive multiplayer, a structure the series would not revisit in quite the same form for many years.',
    'Ganon\'s appearance in this game marked one of the rare instances where he and another major villain, Vaati, share the antagonist role within the same story.'
  ],
  soundtrack: [
    { title: 'Hyrule Field Theme', url: 'https://youtube.com/watch?v=XPomruVzbHI', note: 'An upbeat overworld theme accompanying the four Links as they explore the opening stages of the adventure.' },
    { title: 'Vaati\'s Theme', url: 'https://youtube.com/watch?v=6OWmbzaFfUA', note: 'A tense, foreboding motif associated with Vaati\'s presence and growing power throughout the story.' }
  ],
  relatedTheoryTags: ['vaati', 'four-sword', 'ganon', 'timeline-split'],
  stats: { metacritic: 82, avgPlaytime: null, salesApprox: null } // VERIFICAR - metacritic figure recalled with moderate confidence; avgPlaytime and salesApprox omitted for lack of reliable figures
},

  // ── FALLEN HERO TIMELINE ───────────────────────────────────

  {
  slug: 'a-link-to-the-past',
  title: 'The Legend of Zelda: A Link to the Past',
  year: 1991,
  platform: 'Super Nintendo Entertainment System',
  platformHistory: [
    { platform: 'Game Boy Advance', year: 2002, note: 'Re-released as "A Link to the Past & Four Swords," bundling the original game with the new multiplayer title Four Swords.' },
    { platform: 'Wii', year: 2006, note: 'Re-released digitally on the Virtual Console.' },
    { platform: 'Wii U', year: 2014, note: 'Re-released digitally on the Virtual Console.' },
    { platform: 'Nintendo Switch', year: 2019, note: 'Made available through the Nintendo Switch Online service\'s SNES library.' }
  ],
  category: 'Masterpiece',
  heroImage: '',
  tagline: '"It is said that when evil rules all, an entrance to another world will open."', // VERIFICAR - paraphrased summary of the game's opening narration, not an exact verified quote
  synopsis: [
    'In the kingdom of Hyrule, the young hero Link is awakened one stormy night by a telepathic plea from Princess Zelda, who is imprisoned within the dungeons of Hyrule Castle by the dark wizard Agahnim. Rescuing her with the aid of his Uncle\'s sword and shield, Link learns that Agahnim, having seized control of the royal court, has been sacrificing the descendants of the Seven Sages to break the ancient seal on the Sacred Realm, formed generations earlier to imprison the Triforce and the evil that seeks it. Link sets out to gather the three magical Pendants of Virtue hidden across Hyrule in order to claim the legendary Master Sword and stop Agahnim before he can complete his ritual.',
    'Despite Link\'s efforts, Agahnim captures Zelda and drags her into the Sacred Realm, revealing his true purpose as a servant of the imprisoned Ganon, who seeks to use the Triforce\'s power to escape his ancient prison. Following Zelda into a corrupted mirror version of Hyrule known as the Dark World, Link must free the descendants of the Seven Sages, each transformed into monstrous forms by Ganon\'s magic, and restore their power in order to confront Agahnim once more and finally face Ganon himself, culminating in a battle to reclaim the Triforce and prevent the corruption of both worlds.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Takashi Tezuka', // VERIFICAR - directorial credit widely attributed to Tezuka, with Miyamoto in a supervising/producer capacity
    producer: 'Shigeru Miyamoto'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'Hero of Hyrule',
      desc: 'A young swordsman summoned by Princess Zelda\'s telepathic call, Link ventures into both Hyrule and its shadowy counterpart, the Dark World, to stop Agahnim and Ganon from claiming the Triforce.',
      src: ''
    },
    {
      name: 'Princess Zelda',
      role: 'Princess of Hyrule',
      desc: 'A descendant of the Seven Sages held captive by Agahnim at the story\'s start, later dragged into the Dark World, whose rescue and safety drive much of Link\'s quest.',
      src: ''
    }
  ],
  timeline: { era: 'fallen-hero-timeline', eraLabel: 'Fallen Hero Timeline' }, // VERIFICAR - per Hyrule Historia, A Link to the Past is placed on the "Hero is defeated" timeline branch (sometimes called the Fallen Hero/Downfall Timeline), alongside Links Awakening and the original Zelda games
  relatedGames: [
    { relation: 'Direct Sequel', slug: 'links-awakening', title: 'The Legend of Zelda: Link\'s Awakening', src: '' },
    { relation: 'Sequel (Downfall Timeline)', slug: 'a-link-between-worlds', title: 'The Legend of Zelda: A Link Between Worlds', src: '' },
    { relation: 'Same Era', slug: 'four-swords-adventures', title: 'The Legend of Zelda: Four Swords Adventures', src: '' }
  ],
  villain: {
    name: 'Ganon',
    desc: 'Once a thief who obtained the Triforce and was sealed within the Sacred Realm generations before the events of the game, Ganon manipulates the dark wizard Agahnim from his prison, using him as a proxy to break the ancient seal and sacrifice the descendants of the Seven Sages. His ultimate goal is to escape confinement, reclaim total control of the Triforce, and merge the corrupted Dark World with Hyrule itself.',
    tags: ['ganon', 'triforce', 'dark-world']
  },
  mechanics: [
    { name: 'Light World and Dark World', desc: 'Link can travel between Hyrule (the Light World) and its corrupted mirror dimension (the Dark World) using magic mirrors, with each world\'s geography influencing puzzles and secrets in the other.' },
    { name: 'Master Sword', desc: 'The legendary blade capable of repelling evil magic, obtainable only after Link collects the three Pendants of Virtue, marking a major turning point in the early game.' },
    { name: 'Magic Meter and Items', desc: 'Introduces a dedicated magic meter powering items like the Fire Rod, Ice Rod, and Cane of Byrna, expanding combat and puzzle-solving options beyond the original game\'s item set.' },
    { name: 'Bottles and Potions', desc: 'Collectible bottles let Link carry fairies, potions, and other consumables, a system that would become a series staple in future installments.' }
  ],
  regions: [
    { name: 'Hyrule Castle and Kakariko Village', desc: 'The story\'s starting areas, home to the besieged royal family and the town that quietly resists Agahnim\'s rule.' },
    { name: 'Death Mountain', desc: 'A dangerous, monster-infested peak in the Light World that also contains the entrance to the Dark World\'s counterpart region, Ganon\'s Tower.' },
    { name: 'Dark World', desc: 'A corrupted mirror version of Hyrule created by Ganon\'s influence, populated by the transformed Seven Sages and monstrous inhabitants, central to the game\'s second half.' },
    { name: 'Lost Woods and Master Sword Pedestal', desc: 'A maze-like forest hiding the pedestal where the Master Sword rests, accessible only once Link has proven himself worthy with the three Pendants.' }
  ],
  trivia: [
    'A Link to the Past introduced several conventions that became series staples, including the Light World/Dark World dual-map structure and the modern take on the Master Sword.',
    'The game was re-released in 2002 on the Game Boy Advance bundled with the original multiplayer title Four Swords, marking that game\'s debut.',
    'It is widely regarded as one of the most influential action-adventure games of the 16-bit era and consistently ranks among the highest-reviewed entries in the Zelda series.',
    'The game\'s box art and story elements helped formalize the modern image of Ganon as a demonic king, distinct from his appearance in the original NES Legend of Zelda.'
  ],
  soundtrack: [
    { title: 'Hyrule Field / Overworld Theme', url: 'https://youtube.com/watch?v=zLM0njRDPIw', note: 'The main overworld theme, later remixed and referenced throughout numerous future Zelda titles as one of the series\' most recognizable melodies.' },
    { title: 'Dark World Theme', url: 'https://youtube.com/watch?v=sslj06K-Nlw', note: 'A darker, more urgent variation of the overworld theme, reflecting the corrupted nature of the mirrored dimension.' },
    { title: 'Zelda\'s Lullaby', url: 'https://youtube.com/watch?v=Zzy7EgWBPf4', note: 'An early appearance of the melody later closely associated with the royal family of Hyrule in subsequent games.' } // VERIFICAR - confirm whether this specific melody's formal "Zelda's Lullaby" identity/naming originates here or is retroactively associated
  ],
  relatedTheoryTags: ['ganon', 'triforce', 'dark-world', 'master-sword'],
  stats: { metacritic: null, avgPlaytime: null, salesApprox: null } // VERIFICAR - pre-dates Metacritic; no reliable contemporary aggregate score exists, and playtime/sales figures not confidently sourced
},

  {
  slug: 'links-awakening',
  title: 'The Legend of Zelda: Link\'s Awakening',
  year: 1993,
  platform: 'Game Boy',
  platformHistory: [
    { platform: 'Game Boy Color', year: 1998, note: 'Re-released as "Link\'s Awakening DX," adding color graphics, a new Photo Shack side quest, and an exclusive color-based dungeon.' },
    { platform: 'Nintendo 3DS', year: 2011, note: 'Made available digitally through the Virtual Console.' },
    { platform: 'Nintendo Switch', year: 2019, note: 'Full remake with a reimagined "toy-like" diorama art style, an original dungeon-building mode called Chamber Dungeon, and updated mechanics.' }
  ],
  category: 'Masterpiece',
  heroImage: '',
  tagline: '"Even the hero of Hyrule needs a vacation now and then."', // VERIFICAR - paraphrased characterization, not a confirmed exact official quote
  synopsis: [
    'After the events of A Link to the Past, Link sets sail to train and clear his mind, but a violent storm wrecks his ship, leaving him stranded and unconscious on the shores of the mysterious Koholint Island. He awakens in the home of a young woman named Marin, who tells him that the only way to leave the island is to awaken the legendary Wind Fish, said to slumber within a giant egg atop Mt. Tamaranch, by collecting eight magical Instruments of the Sirens scattered across Koholint\'s dungeons.',
    'As Link ventures through Koholint\'s varied landscapes, battling owl-guided trials, strange nightmare creatures, and echoes of monsters from Hyrule\'s own history, he begins to uncover disturbing hints that the island and its inhabitants, including Marin herself, may not be what they seem. Despite an owl companion\'s warnings and the pleas of some islanders who fear what waking the Wind Fish might mean for their existence, Link presses on, ultimately confronting his own doubts and a final Nightmare guarding the Wind Fish\'s egg in a poignant, bittersweet conclusion to his journey.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Takashi Tezuka', // VERIFICAR - Tezuka is widely credited as director/lead, though the game began partly as an after-hours side project by the Link to the Past development team
    producer: 'Shigeru Miyamoto'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'Shipwrecked Hero',
      desc: 'Stranded on the unfamiliar Koholint Island after a shipwreck, Link seeks to awaken the Wind Fish and find a way home, only to uncover unsettling truths about the island\'s nature.',
      src: ''
    },
    {
      name: 'Marin',
      role: 'Island Resident',
      desc: 'A kind young woman who finds and nurses Link back to health after the shipwreck, dreaming of leaving Koholint Island to see the wider world, and who becomes central to the story\'s emotional core.',
      src: ''
    }
  ],
  timeline: { era: 'fallen-hero-timeline', eraLabel: 'Fallen Hero Timeline' },
  relatedGames: [
    { relation: 'Direct Sequel', slug: 'a-link-to-the-past', title: 'The Legend of Zelda: A Link to the Past', src: '' },
    { relation: 'Remake', slug: 'links-awakening-switch', title: 'The Legend of Zelda: Link\'s Awakening (Switch)', src: '' }
  ],
  villain: {
    name: 'N/A', // VERIFICAR - the game deliberately subverts the classic villain formula
    desc: 'Link\'s Awakening does not feature a classic villain in the mold of Ganon or Ganondorf; the island\'s antagonistic forces are the shapeshifting Nightmares, manifestations that guard the Wind Fish\'s egg and take the forms of monsters from Link\'s past, including a final form resembling Ganon himself. Their true nature is tied to the island\'s dreamlike existence rather than any singular evil mastermind, making the story\'s central conflict more introspective and philosophical than a typical good-versus-evil narrative.',
    tags: ['nightmares', 'wind-fish', 'koholint-island']
  },
  mechanics: [
    { name: 'Jumping (Roc\'s Feather)', desc: 'Introduces the ability to jump using the Roc\'s Feather, the first time platforming-style jumping was added to a top-down Zelda game, opening new possibilities for combat and puzzle design.' },
    { name: 'Trading Sequence', desc: 'A long chain of item trades with various Koholint Island NPCs, each exchange unlocking the next, culminating in an item essential to progressing through the game.' },
    { name: 'Instruments of the Sirens', desc: 'Eight magical instruments hidden within the island\'s dungeons that Link must collect and play to awaken the Wind Fish and ultimately resolve the story.' },
    { name: 'Ocarina and Songs', desc: 'A musical item Link acquires that lets him play a small set of songs with mechanical and narrative significance, foreshadowing later series entries built more heavily around music.' }
  ],
  regions: [
    { name: 'Mabe Village', desc: 'The peaceful village where Link washes ashore, home to Marin and Tarin, and the starting point of his journey across the island.' },
    { name: 'Mysterious Woods and Koholint\'s Forests', desc: 'Dense, secretive woodland areas hiding early dungeons and NPCs central to the game\'s trading sequence.' },
    { name: 'Mt. Tamaranch', desc: 'The mountain where the Wind Fish\'s egg rests, serving as the ultimate destination and endpoint of Link\'s quest to leave the island.' },
    { name: 'Turtle Rock and Eagle\'s Tower', desc: 'Among the island\'s later, more challenging dungeons, testing the full range of tools and abilities Link has gathered throughout his journey.' }
  ],
  trivia: [
    'Link\'s Awakening was the first Legend of Zelda game to release on a handheld console and the first not to take place in Hyrule.',
    'The game reportedly began development partly as an unofficial after-hours side project by members of the A Link to the Past team before being formally approved by Nintendo.',
    'It features numerous cameos from non-Zelda Nintendo franchises, including enemies and characters resembling those from the Mario series, such as Goombas and a boss resembling Mario himself.',
    'The 2019 Nintendo Switch remake gave the game an entirely new "diorama" visual style along with an original dungeon-creation mode called Chamber Dungeon.'
  ],
  soundtrack: [
    { title: 'Ballad of the Wind Fish', url: 'https://youtube.com/watch?v=RnTdqBq0eg8', note: 'The central melody of the game, sung by Marin and deeply tied to the story\'s bittersweet themes of dreams, longing, and impermanence.' },
    { title: 'Mabe Village Theme', url: 'https://youtube.com/watch?v=aAy0N6q44b8', note: 'A gentle, pastoral tune representing the peaceful island community where Link begins his journey.' },
    { title: 'Tal Tal Heights', url: 'https://youtube.com/watch?v=vtvtZT-PXGk', note: 'A wistful overworld theme accompanying exploration of the island\'s mountainous regions.' }
  ],
  relatedTheoryTags: ['koholint-island', 'wind-fish', 'nightmares', 'dream-theory'],
  stats: { metacritic: null, avgPlaytime: null, salesApprox: null } // VERIFICAR - pre-dates Metacritic; avgPlaytime and salesApprox not confidently sourced
},

  {
  slug: 'oracle-of-seasons',
  title: 'The Legend of Zelda: Oracle of Seasons',
  year: 2001,
  platform: 'Game Boy Color',
  platformHistory: [
    { platform: 'Nintendo 3DS', year: 2013, note: 'Made available digitally through the Virtual Console.' }
  ],
  category: 'Classic',
  heroImage: '',
  tagline: '"Nature\'s balance rests in the hands of a single hero."', // VERIFICAR - paraphrased summary, not a confirmed exact official quote
  synopsis: [
    'Pulled through a portal by the mysterious old woman Impa into the land of Holodrum, Link is summoned to help find the Oracle of Seasons, Din, who has vanished. He soon discovers that Din has been captured and imprisoned by the General of Darkness, Onox, who forces her to become the "Rod of Seasons," using her power to plunge Holodrum into chaotic, uncontrollable seasonal shifts and corrupt its once-peaceful land, all while secretly seeking to revive the imprisoned Ganon.',
    'Guided by the mysterious, dancing Maku Tree and joined along the way by the Subrosian tribe hidden beneath Holodrum, Link gathers the eight Essences of Nature to restore balance to the land\'s seasons and unlock the way to Onox\'s stronghold. As Link travels between the seasons of spring, summer, autumn, and winter using ancient Season Spirits, he ultimately confronts Onox in his castle, defeating him and rescuing Din just as the general\'s dark ritual threatens to succeed, though the specter of Ganon\'s resurrection lingers depending on the player\'s choices with the game\'s connected password system.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Hidemaro Fujibayashi', // VERIFICAR - Fujibayashi is credited as director on the Oracle games via developer Flagship/Capcom
    producer: 'Shigeru Miyamoto, Yoshiki Okamoto'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'Summoned Hero',
      desc: 'Pulled into Holodrum by Impa to rescue the Oracle of Seasons, Din, Link must restore the land\'s natural balance and stop General Onox from reviving Ganon.',
      src: ''
    },
    {
      name: 'Din, Oracle of Seasons',
      role: 'Oracle of Seasons',
      desc: 'The guardian spirit responsible for maintaining Holodrum\'s seasonal balance, captured by Onox and forcibly transformed into a tool of destruction, the Rod of Seasons.',
      src: ''
    }
  ],
  timeline: { era: 'child-era-timeline', eraLabel: 'Child Era Timeline' }, // VERIFICAR - Oracle games' exact timeline placement is debated; Hyrule Historia places them post-Link's Awakening but this simplified categorization may not perfectly reflect official chart nuance
  relatedGames: [
    { relation: 'Companion Game', slug: 'oracle-of-ages', title: 'The Legend of Zelda: Oracle of Ages', src: '' },
    { relation: 'Direct Sequel (via password link)', slug: 'the-minish-cap', title: 'The Legend of Zelda: The Minish Cap', src: '' } // VERIFICAR - relationship between Oracle games and Minish Cap connection is a commonly cited but loosely-canon link via passwords
  ],
  villain: {
    name: 'Onox',
    desc: 'Known as the General of Darkness, Onox is a powerful, armor-clad warlord who invades Holodrum seeking to sow chaos and revive the imprisoned Ganon. He captures the Oracle of Seasons, Din, and corrupts her power to throw Holodrum\'s seasons into disarray, ruling from his ever-shifting castle while his monstrous forces spread across the land.',
    tags: ['onox', 'oracle-of-seasons', 'ganon']
  },
  mechanics: [
    { name: 'Rod of Seasons', desc: 'A magical item allowing Link to change the season at designated Season Spirit locations, altering the environment to open new paths, reveal hidden items, or solve seasonal puzzles.' },
    { name: 'Password Link System', desc: 'Players could enter secret passwords generated by Oracle of Ages to unlock a special connected story and additional content in Oracle of Seasons, and vice versa.' },
    { name: 'Subrosia and the Underworld', desc: 'A hidden volcanic realm beneath Holodrum, home to the Subrosian people, accessible via specific portals and central to several trading and item-based side quests.' },
    { name: 'Essences of Nature', desc: 'Eight mystical relics scattered across Holodrum\'s dungeons that Link must recover to restore the seasons and unlock the path to Onox\'s castle.' }
  ],
  regions: [
    { name: 'Holodrum', desc: 'The primary overworld of the game, a lush kingdom whose four seasons are thrown into chaos by Onox\'s corruption of Din\'s power.' },
    { name: 'Subrosia', desc: 'A hidden underground volcanic realm beneath Holodrum, home to the reclusive, red-skinned Subrosian people and several optional trading sequences.' },
    { name: 'Onox\'s Castle', desc: 'The imposing, ever-relocating fortress from which Onox commands his forces and holds Din captive, serving as the game\'s final dungeon.' }
  ],
  trivia: [
    'Oracle of Seasons and its companion title, Oracle of Ages, were developed by Flagship, a studio partly composed of former Capcom staff working under Nintendo\'s supervision.',
    'The two Oracle games were designed to be played together via a password system, unlocking an extended, connected storyline and a special reward when both are completed.',
    'Oracle of Seasons focuses primarily on action-oriented dungeon design and combat, while its companion Oracle of Ages emphasizes puzzle-solving, reflecting an intentional design split between the two titles.',
    'The games were originally conceived as a trilogy alongside a third entry, but that third game\'s content was ultimately folded into the two released titles.'
  ],
  soundtrack: [
    { title: 'Holodrum Overworld Theme', url: 'https://youtube.com/watch?v=LyHdi1-4QDw', note: 'The main exploration theme, dynamically shifting in instrumentation depending on the current season Link has set.' },
    { title: 'Subrosia Theme', url: 'https://youtube.com/watch?v=eRMP9Lebj7k', note: 'A distinct, percussive theme reflecting the hidden volcanic realm\'s isolated, mysterious atmosphere.' }
  ],
  relatedTheoryTags: ['onox', 'oracle-series', 'ganon', 'essences-of-nature'],
  stats: { metacritic: 79, avgPlaytime: null, salesApprox: null } // VERIFICAR - metacritic figure recalled with moderate confidence; verify before publishing
},

  {
  slug: 'oracle-of-ages',
  title: 'The Legend of Zelda: Oracle of Ages',
  year: 2001,
  platform: 'Game Boy Color',
  platformHistory: [
    { platform: 'Nintendo 3DS', year: 2013, note: 'Made available digitally through the Virtual Console.' }
  ],
  category: 'Classic',
  heroImage: '',
  tagline: '"Time itself bends to those who seek to control it."', // VERIFICAR - paraphrased summary, not a confirmed exact official quote
  synopsis: [
    'Summoned once again by the mysterious Impa, Link is transported to the land of Labrynna to help the Oracle of Ages, Nayru, who has vanished under suspicious circumstances. He soon discovers that the sorceress Veran, the Sorceress of Shadows, has possessed Nayru\'s body and, using her power over the Harp of Ages, has begun manipulating Labrynna\'s past to twist its present into a dark, oppressive dictatorship ruled through history itself.',
    'Guided by the ancient Maku Tree of Labrynna and traveling between eras using the Harp of Ages at designated time portals, Link works to undo Veran\'s corruption of the past before it reshapes the present entirely, gathering the eight Essences of Time scattered across both eras. As Veran\'s manipulations escalate, Link discovers her true, larger scheme tied to reviving Ganon, ultimately confronting her directly to free Nayru from possession and restore Labrynna\'s true, undistorted history.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Hidemaro Fujibayashi', // VERIFICAR - Fujibayashi is credited as director on the Oracle games via developer Flagship/Capcom
    producer: 'Shigeru Miyamoto, Yoshiki Okamoto'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'Summoned Hero',
      desc: 'Called once more to a foreign land by Impa, Link must free the possessed Oracle of Ages, Nayru, from the grip of Veran and restore Labrynna\'s corrupted timeline.',
      src: ''
    },
    {
      name: 'Nayru, Oracle of Ages',
      role: 'Oracle of Ages',
      desc: 'The guardian spirit responsible for Labrynna\'s flow of time, possessed by the Sorceress of Shadows, Veran, and used against her will to twist the land\'s history.',
      src: ''
    }
  ],
  timeline: { era: 'child-era-timeline', eraLabel: 'Child Era Timeline' }, // VERIFICAR - Oracle games' exact timeline placement is debated; simplified categorization may not perfectly reflect official chart nuance
  relatedGames: [
    { relation: 'Companion Game', slug: 'oracle-of-seasons', title: 'The Legend of Zelda: Oracle of Seasons', src: '' },
    { relation: 'Direct Sequel (via password link)', slug: 'the-minish-cap', title: 'The Legend of Zelda: The Minish Cap', src: '' } // VERIFICAR - relationship between Oracle games and Minish Cap connection is a commonly cited but loosely-canon link via passwords
  ],
  villain: {
    name: 'Veran',
    desc: 'Known as the Sorceress of Shadows, Veran is a body-possessing witch who seizes control of the Oracle of Ages, Nayru, in order to exploit her power over the Harp of Ages. By manipulating key moments in Labrynna\'s past, she reshapes its present into a totalitarian nightmare, all in service of a larger, hidden plot to bring about Ganon\'s return.',
    tags: ['veran', 'oracle-of-ages', 'ganon']
  },
  mechanics: [
    { name: 'Harp of Ages', desc: 'A magical instrument allowing Link to travel between Labrynna\'s past and present at designated time portals, with changes made in the past directly affecting the corresponding location in the present.' },
    { name: 'Password Link System', desc: 'Players could enter secret passwords generated by Oracle of Seasons to unlock a special connected story and additional content in Oracle of Ages, and vice versa.' },
    { name: 'Essences of Time', desc: 'Eight mystical relics scattered across both eras of Labrynna that Link must recover to fully restore the timeline and progress toward Veran\'s stronghold.' },
    { name: 'Cross-Era Puzzle Design', desc: 'Many dungeons and overworld puzzles require Link to make changes in one era of Labrynna and observe or exploit the resulting effects in the other, forming the game\'s signature puzzle-solving structure.' }
  ],
  regions: [
    { name: 'Labrynna (Present)', desc: 'The primary overworld in its current timeline, showing the direct consequences of Veran\'s manipulations to the past.' },
    { name: 'Labrynna (Past)', desc: 'The historical version of Labrynna accessible via the Harp of Ages, where Link can alter key events to change the present.' },
    { name: 'Veran\'s Stronghold', desc: 'The corrupted seat of power from which Veran, in possession of Nayru, rules over Labrynna\'s twisted history.' }
  ],
  trivia: [
    'Oracle of Ages and its companion title, Oracle of Seasons, were developed by Flagship, a studio partly composed of former Capcom staff working under Nintendo\'s supervision.',
    'The two Oracle games were designed to be played together via a password system, unlocking an extended, connected storyline and a special reward when both are completed.',
    'Oracle of Ages emphasizes puzzle-solving and time-travel mechanics, while its companion Oracle of Seasons leans more heavily into action-oriented dungeon design, reflecting an intentional split in design philosophy between the two titles.',
    'The games were originally conceived as a trilogy alongside a third entry, but that third game\'s content was ultimately folded into the two released titles.'
  ],
  soundtrack: [
    { title: 'Labrynna Overworld Theme', url: 'https://youtube.com/watch?v=m6Qk6bylRI0', note: 'The main exploration theme, subtly shifting between its past and present-day arrangements to reflect the era Link currently occupies.' },
    { title: 'Veran\'s Theme', url: 'https://youtube.com/watch?v=FQkFHuzXy48', note: 'A tense, unsettling motif underscoring Veran\'s manipulative presence and her possession of Nayru throughout the story.' }
  ],
  relatedTheoryTags: ['veran', 'oracle-series', 'ganon', 'time-travel'],
  stats: { metacritic: 80, avgPlaytime: null, salesApprox: null } // VERIFICAR - metacritic figure recalled with moderate confidence; verify before publishing
},

  {
  slug: 'a-link-between-worlds',
  title: 'The Legend of Zelda: A Link Between Worlds',
  year: 2013,
  platform: 'Nintendo 3DS',
  platformHistory: [],
  category: 'Masterpiece',
  heroImage: '',
  tagline: '"A rift between worlds threatens to unravel them both."', // VERIFICAR - paraphrased summary, not a confirmed exact official quote
  synopsis: [
    'Generations after the events of A Link to the Past, a peaceful blacksmith\'s apprentice named Link living in Hyrule discovers a mysterious sorcerer named Yuga who has begun turning the Seven Sages into paintings using a strange power. Learning that Yuga seeks to resurrect the ancient demon Ganon and revive the long-lost kingdom of Lorule by using the sages\' captured power, Link is aided by a strange, talking rabbit-like merchant named Ravio, who lends him magical items to rent rather than find in dungeons.',
    'As Link pursues Yuga across Hyrule, he gains the unique ability to merge into walls as a living painting, allowing him to cross into Lorule, a decayed mirror world ruled by the desperate Princess Hilda, who has been secretly aiding Yuga in hopes of restoring her collapsing kingdom using Hyrule\'s Triforce. As Yuga\'s plan nears completion and he fuses with Ganon to become a terrifying new threat, Link, alongside Lorule\'s own version of Zelda, must decide the fate of both worlds and stop the destructive plan before Lorule\'s tragedy repeats itself in Hyrule.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Hiromasa Shikata', // VERIFICAR - Shikata is widely credited as director for this title
    producer: 'Eiji Aonuma'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'Blacksmith\'s Apprentice',
      desc: 'A humble apprentice living in Hyrule generations after A Link to the Past, who gains the unique ability to merge into walls and travel between Hyrule and the mirrored world of Lorule to stop Yuga\'s scheme.',
      src: ''
    },
    {
      name: 'Princess Hilda',
      role: 'Princess of Lorule',
      desc: 'The desperate ruler of the decaying kingdom of Lorule, who secretly collaborates with the sorcerer Yuga in a bid to steal Hyrule\'s Triforce and save her collapsing world.',
      src: ''
    }
  ],
  timeline: { era: 'fallen-hero-timeline', eraLabel: 'Fallen Hero Timeline' },
  relatedGames: [
    { relation: 'Direct Sequel', slug: 'a-link-to-the-past', title: 'The Legend of Zelda: A Link to the Past', src: '' },
    { relation: 'Spin-off', slug: 'tri-force-heroes', title: 'The Legend of Zelda: Tri Force Heroes', src: '' }
  ],
  villain: {
    name: 'Yuga',
    desc: 'A vain, theatrical sorcerer obsessed with beauty, Yuga seeks to capture the power of the Seven Sages by transforming them into paintings, ultimately intending to fuse with the resurrected demon Ganon to become a god-like being. His alliance with Lorule\'s Princess Hilda, who hopes to use his power to save her dying kingdom, drives much of the story\'s central conflict.',
    tags: ['yuga', 'lorule', 'ganon']
  },
  mechanics: [
    { name: 'Wall Merge', desc: 'Link\'s signature new ability, letting him flatten into a painting-like state and move along walls, used both to cross between Hyrule and Lorule and to solve environmental puzzles.' },
    { name: 'Item Rental System', desc: 'Rather than finding key items exclusively within dungeons, players can rent (and later purchase) nearly all major tools from the merchant Ravio early on, allowing dungeons to be tackled in a non-linear order.' },
    { name: 'Hyrule and Lorule', desc: 'A mirrored dual-world structure reminiscent of A Link to the Past\'s Light and Dark Worlds, with Lorule serving as a decayed, inverted reflection of Hyrule tied to its own tragic history.' },
    { name: 'Non-Linear Dungeon Order', desc: 'Thanks to the rental system, most of the game\'s dungeons can be completed in almost any order the player chooses, a significant structural departure from earlier Zelda titles.' }
  ],
  regions: [
    { name: 'Hyrule', desc: 'The game\'s primary overworld, geographically similar to its A Link to the Past counterpart but generations removed from those earlier events.' },
    { name: 'Lorule', desc: 'A decayed mirror world of Hyrule ruled by Princess Hilda, whose long-lost Triforce and troubled history directly parallel and threaten Hyrule\'s fate.' },
    { name: 'Lorule Castle', desc: 'The crumbling seat of Lorule\'s royal family and the setting for the game\'s climactic confrontations.' }
  ],
  trivia: [
    'A Link Between Worlds is a direct narrative sequel to A Link to the Past, taking place in the same Hyrule generations later, and reuses that game\'s overworld map layout in redesigned 3D form.',
    'The Wall Merge mechanic was designed specifically to take advantage of the Nintendo 3DS\'s stereoscopic 3D visuals, emphasizing depth perception in its puzzles.',
    'The item rental system, allowing players to tackle dungeons in nearly any order, was a deliberate departure from the traditional linear item-gating structure of earlier Zelda games.',
    'The game received widespread critical acclaim upon release, with many reviewers praising its blend of nostalgic callbacks and innovative new mechanics.'
  ],
  soundtrack: [
    { title: 'Lorule Theme', url: 'https://youtube.com/watch?v=s5HpTbWAWfk', note: 'A haunting, melancholic reinterpretation of Hyrule\'s familiar overworld motifs, reflecting Lorule\'s tragic, decayed state.' },
    { title: 'Yuga\'s Theme', url: 'https://youtube.com/watch?v=zffpKesyaxg', note: 'A flamboyant, theatrical piece reflecting Yuga\'s vain and dramatic personality throughout the story.' },
    { title: 'Hyrule Main Theme', url: 'https://youtube.com/watch?v=0QjRxzJaW2A', note: 'A reimagined take on the classic A Link to the Past overworld theme, updated for the 3DS while retaining its nostalgic core melody.' }
  ],
  relatedTheoryTags: ['lorule', 'ganon', 'triforce', 'wall-merge'],
  stats: { metacritic: 91, avgPlaytime: null, salesApprox: null } // VERIFICAR - avgPlaytime and salesApprox omitted for lack of confident, up-to-date figures
},

  {
  slug: 'tri-force-heroes',
  title: 'The Legend of Zelda: Tri Force Heroes',
  year: 2015,
  platform: 'Nintendo 3DS',
  platformHistory: [],
  category: 'Spin-off',
  heroImage: '',
  tagline: '"Fashion is the true power of the Triforce... or so it seems."', // VERIFICAR - paraphrased characterization of the game's tone, not a confirmed exact official quote
  synopsis: [
    'In the kingdom of Hytopia, a land whose people prize fashion and style above all else, disaster strikes when the witch Lady Maud curses Princess Styla with an unremovable, hideous outfit after a fit of jealousy. Desperate to free their princess, the royal wizard Madame Couture summons three heroes, each named Link, from a mysterious drifting fog to journey to the Drablands, a series of trial-filled towers, in search of the enchanted material needed to craft a cure.',
    'Equipped with a single, shared Triforce-shaped emblem called the Triforce of Courage — which the three Links must physically stack atop one another to power their abilities — the trio ventures through the Drablands\' cooperative trial towers, collecting materials and fending off monsters together. Their efforts culminate in a confrontation with Lady Maud, whose curse and motivations are ultimately overcome, restoring Princess Styla and Hytopia\'s fashionable peace.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure / Cooperative Multiplayer',
    director: 'Hiromasa Shikata', // VERIFICAR - Shikata is credited as director for this title, continuing from A Link Between Worlds
    producer: 'Eiji Aonuma'
  },
  protagonists: [
    {
      name: 'Three Links',
      role: 'Summoned Heroes',
      desc: 'Three separate incarnations of Link, summoned from a mysterious fog by Madame Couture, who must cooperate closely — including physically stacking atop one another — to complete the trials of the Drablands and save Princess Styla.',
      src: ''
    },
    {
      name: 'Princess Styla',
      role: 'Princess of Hytopia',
      desc: 'The ruler of Hytopia, cursed with a hideous, unremovable outfit by the jealous witch Lady Maud, whose plight sets the game\'s cooperative quest in motion.',
      src: ''
    }
  ],
  timeline: { era: 'fallen-hero-timeline', eraLabel: 'Fallen Hero Timeline' }, // VERIFICAR - Tri Force Heroes' timeline placement is only loosely implied and not firmly confirmed in official materials; grouped here near A Link Between Worlds as a simplification
  relatedGames: [
    { relation: 'Loosely Connected', slug: 'a-link-between-worlds', title: 'The Legend of Zelda: A Link Between Worlds', src: '' } // VERIFICAR - connection to A Link Between Worlds is stylistic/thematic rather than a confirmed direct narrative link
  ],
  villain: {
    name: 'Lady Maud',
    desc: 'A jealous witch whose envy of Princess Styla\'s beauty and status leads her to curse the princess with a hideous, unremovable outfit. Unlike the series\' typical world-conquering villains, Lady Maud\'s motivations are rooted in personal jealousy and vanity rather than a quest for power over the Triforce, fitting the game\'s lighter, fashion-obsessed tone.',
    tags: ['lady-maud', 'hytopia', 'drablands']
  },
  mechanics: [
    { name: 'Totem Stacking', desc: 'The three Links can physically stack on top of one another to form a totem pole, allowing the top player to reach high switches, ledges, and enemies inaccessible to a single character alone.' },
    { name: 'Cooperative Trial Towers', desc: 'The Drablands are structured as a series of standalone trial towers designed specifically for three players working together, rather than a traditional connected overworld and dungeon structure.' },
    { name: 'Costume/Outfit System', desc: 'Players craft and equip a wide variety of themed outfits using materials gathered from trials, each granting different stat bonuses and abilities relevant to specific challenges.' },
    { name: 'Emotes and Limited Communication', desc: 'Since players cannot use voice chat, the game relies on a set of preset emotes for players to communicate and coordinate during cooperative trials.' }
  ],
  regions: [
    { name: 'Hytopia', desc: 'The fashion-obsessed kingdom serving as the game\'s hub, home to Princess Styla, Madame Couture, and the three summoned Links.' },
    { name: 'The Drablands', desc: 'A mysterious, trial-filled realm connected to Hytopia by fog, containing the cooperative towers the three Links must complete to gather materials for the cure.' }
  ],
  trivia: [
    'Tri Force Heroes was designed from the ground up as a three-player cooperative experience, a first for the mainline Zelda spin-off lineup, requiring local or online multiplayer for its core Drablands content.',
    'The game features a single-player mode where the two absent Links are controlled by AI-driven dummy dolls called "Doppels," though the core design still centers on multiplayer cooperation.',
    'Its lighthearted tone and heavy emphasis on fashion and costumes set it apart tonally from most other entries in the Zelda series.',
    'The Totem Stacking mechanic, requiring players to physically balance atop one another, became one of the game\'s most distinctive and frequently discussed cooperative puzzle elements.'
  ],
  soundtrack: [
    { title: 'Hytopia Castle Theme', url: 'https://youtube.com/watch?v=-fuQesIVTBU', note: 'An upbeat, whimsical theme reflecting Hytopia\'s fashion-forward, lighthearted culture.' },
    { title: 'Drablands Theme', url: 'https://youtube.com/watch?v=Ho53dmli0F8', note: 'A more tense, rhythmic track accompanying the cooperative trial towers where the three Links face their challenges.' }
  ],
  relatedTheoryTags: ['hytopia', 'triforce-of-courage', 'multiplayer-zelda'],
  stats: { metacritic: 67, avgPlaytime: null, salesApprox: null } // VERIFICAR - metacritic figure recalled with moderate confidence; verify before publishing
},

  {
  slug: 'echoes-of-wisdom',
  title: 'The Legend of Zelda: Echoes of Wisdom',
  year: 2024,
  platform: 'Nintendo Switch',
  platformHistory: [],
  category: 'Masterpiece', // VERIFICAR - critical reception was very strong, but "Masterpiece" categorization is a subjective editorial judgment call given the game's relative recency
  heroImage: '',
  tagline: '"This time, it\'s up to Zelda to save the day."', // VERIFICAR - paraphrased marketing framing, not a confirmed exact in-game quote
  synopsis: [
    'Strange, swirling rifts begin appearing across Hyrule, swallowing people, places, and even Link himself into a mysterious void. When Princess Zelda investigates the disappearances alongside Link, she too is drawn into a rift, but is rescued by a fairy named Tri, who bestows upon her the mystical Tri Rod, a powerful artifact capable of creating "echoes," temporary copies of objects and creatures Zelda has previously encountered.',
    'With Link missing and Hyrule\'s castle town increasingly swallowed by the spreading rifts, Zelda takes up the mantle of hero herself, using the Tri Rod\'s echo-creation power to solve puzzles, traverse dungeons, and battle monsters by summoning beds, blocks, and even enemy creatures to her aid. As she investigates the source of the rifts, Zelda uncovers a connection to a strange, inverted realm and a mysterious being known as Null, ultimately confronting the entity responsible for unraveling the fabric of Hyrule in order to restore the kingdom and rescue those lost within the rifts, including Link.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Tomomi Sano, Satoshi Terada', // VERIFICAR - directorial credits for this title, produced under Eiji Aonuma's supervision
    producer: 'Eiji Aonuma'
  },
  protagonists: [
    {
      name: 'Princess Zelda',
      role: 'The Hero of Hyrule',
      desc: 'Taking on the role of playable hero for the first time in a mainline entry, Zelda wields the Tri Rod to create echoes of objects and creatures as she searches for a way to close the rifts consuming Hyrule and rescue the missing Link.',
      src: ''
    },
    {
      name: 'Tri',
      role: 'Fairy Companion',
      desc: 'A small, mysterious fairy-like being who saves Zelda from a rift and grants her the Tri Rod, guiding her throughout the quest to understand and stop the spreading rifts.',
      src: ''
    }
  ],
  timeline: { era: 'era-of-the-wilds', eraLabel: 'Era of the Wilds' }, // VERIFICAR - official timeline placement for this title has not been confirmed by Nintendo at time of writing; grouped here as a reasonable but unconfirmed placement given its modern, standalone presentation
  relatedGames: [
    { relation: 'Spiritual Successor (Gameplay)', slug: 'tears-of-the-kingdom', title: 'The Legend of Zelda: Tears of the Kingdom', src: '' } // VERIFICAR - connection is stylistic/mechanical (top-down echo/creation systems draw comparison to Ultrahand) rather than a confirmed narrative link
  ],
  villain: {
    name: 'Null',
    desc: 'A shadowy, enigmatic entity tied to the origin of the rifts consuming Hyrule, Null represents a force of erasure and inversion, manifesting as a dark reflection connected to the game\'s "Stillness" and rift mechanics. Its motivations are less about conquest in the traditional sense and more about unraveling and inverting Hyrule\'s existence, making it a distinct kind of antagonist compared to the series\' more overtly power-hungry villains.',
    tags: ['null', 'rifts', 'echoes']
  },
  mechanics: [
    { name: 'Echo Creation (Tri Rod)', desc: 'Zelda\'s central ability, letting her create temporary copies, or "echoes," of objects and defeated enemies she has previously scanned, using them creatively to solve puzzles, build platforms, and fight battles.' },
    { name: 'Swordfighter Form', desc: 'A limited-use transformation allowing Zelda to briefly wield a sword directly for melee combat, offering an alternative to relying solely on echoes during fights.' },
    { name: 'Rifts and Bind Ability', desc: 'Zelda can also bind to objects, moving them in tandem with her own movement, used alongside echoes to manipulate the environment and access new areas.' },
    { name: 'Still Water and Verticality', desc: 'Certain rift-affected areas introduce "Still Water" sections requiring specific echo combinations to cross, adding unique environmental puzzle variety throughout Hyrule.' }
  ],
  regions: [
    { name: 'Hyrule Castle Town', desc: 'The kingdom\'s capital, significantly affected early on by spreading rifts, serving as a central hub as Zelda investigates the growing crisis.' },
    { name: 'Hyrule Field', desc: 'The familiar overworld connecting Hyrule\'s various regions, now dotted with mysterious rifts leading into strange, altered spaces.' },
    { name: 'The Still World', desc: 'A dark, inverted mirror realm connected to the source of the rifts and to the being known as Null, central to the story\'s late-game revelations.' }
  ],
  trivia: [
    'Echoes of Wisdom marks the first mainline Legend of Zelda title in which Princess Zelda serves as the sole playable protagonist throughout the entire adventure.',
    'The game reuses a top-down visual style reminiscent of A Link Between Worlds, rendered with a similar "diorama-like" 3D aesthetic to Link\'s Awakening on Switch.',
    'The echo-creation mechanic drew comparisons from critics and players to the Ultrahand ability from Tears of the Kingdom, translated into a top-down 2D framework.',
    'The game was developed with involvement from Grezzo, the studio also responsible for the Ocarina of Time 3D, Majora\'s Mask 3D, and Link\'s Awakening Switch remakes.'
  ],
  soundtrack: [
    { title: 'Hyrule Field Theme', url: 'https://youtube.com/watch?v=f2eLhxDyY3o', note: 'A reimagined take on the classic overworld motif, adapted for Zelda\'s echo-focused adventure across a rift-torn Hyrule.' },
    { title: 'Zelda\'s Theme', url: 'https://youtube.com/watch?v=IceG5lxqlDE', note: 'A theme reflecting Zelda\'s growth into the role of active hero for the first time in a mainline title.' } // VERIFICAR - exact official title/naming of this track not fully confirmed
  ],
  relatedTheoryTags: ['echoes', 'null', 'zelda-as-hero', 'still-world'],
  stats: { metacritic: 87, avgPlaytime: null, salesApprox: null } // VERIFICAR - metacritic figure recalled with moderate confidence; avgPlaytime and salesApprox not confidently sourced
},

  {
  slug: 'the-legend-of-zelda',
  title: 'The Legend of Zelda',
  year: 1986,
  platform: 'Nintendo Entertainment System',
  platformHistory: [
    { platform: 'Family Computer Disk System', year: 1986, note: 'Original Japanese release predates the NES/Famicom cartridge version, on the Disk System peripheral.' }, // VERIFICAR - exact regional release sequencing between Disk System and NES cartridge versions
    { platform: 'Game Boy Advance', year: 2004, note: 'Re-released as part of the "Classic NES Series" cartridge line.' },
    { platform: 'Wii', year: 2006, note: 'Re-released digitally on the Virtual Console.' },
    { platform: 'Wii U', year: 2013, note: 'Re-released digitally on the Virtual Console.' },
    { platform: 'Nintendo Switch', year: 2018, note: 'Made available through the Nintendo Switch Online service\'s NES library.' }
  ],
  category: 'Classic',
  heroImage: '',
  tagline: '"It\'s dangerous to go alone! Take this."', // one of the most widely recognized lines associated with the game, spoken by the old man near the game's start
  synopsis: [
    'In the kingdom of Hyrule, the evil Prince of Darkness, Ganon, invades and steals the Triforce of Power, plunging the land into chaos. Before Ganon can capture her as well, Princess Zelda shatters the Triforce of Wisdom into eight fragments and hides them across Hyrule, instructing her nursemaid Impa to find a hero capable of recovering them before sending Impa out into the wilderness, where she is soon surrounded by Ganon\'s monsters.',
    'A young boy named Link rescues Impa and learns of Zelda\'s plight, setting out across Hyrule\'s dungeons and overworld to recover the eight scattered fragments of the Triforce of Wisdom. Exploring caves, forests, and graveyards largely at his own discretion thanks to the game\'s open, non-linear structure, Link gradually gathers each piece, culminating in a descent into Ganon\'s lair, where he must defeat the Prince of Darkness, reclaim the Triforce of Power, and rescue Princess Zelda from captivity.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Shigeru Miyamoto, Takashi Tezuka',
    producer: 'Shigeru Miyamoto'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'The Hero of Hyrule',
      desc: 'A young, unnamed boy in the original narrative (traditionally called Link) who sets out to recover the scattered fragments of the Triforce of Wisdom and rescue Princess Zelda from Ganon.',
      src: ''
    },
    {
      name: 'Princess Zelda',
      role: 'Princess of Hyrule',
      desc: 'The princess who shatters and hides the Triforce of Wisdom to keep it from Ganon before being captured, and whose rescue forms the ultimate goal of Link\'s quest.',
      src: ''
    }
  ],
  timeline: { era: 'fallen-hero-timeline', eraLabel: 'Fallen Hero Timeline' },
  relatedGames: [
    { relation: 'Direct Sequel', slug: 'zelda-ii-the-adventure-of-link', title: 'Zelda II: The Adventure of Link', src: '' },
    { relation: 'Same Era', slug: 'a-link-to-the-past', title: 'The Legend of Zelda: A Link to the Past', src: '' }
  ],
  villain: {
    name: 'Ganon',
    desc: 'The Prince of Darkness who invades Hyrule and steals the Triforce of Power at the story\'s outset, seeking to also capture the Triforce of Wisdom and Princess Zelda to gain total control over Hyrule. As the original antagonist of the series, Ganon establishes the archetype of the demonic, power-hungry villain that would recur, evolve, and be reinterpreted throughout nearly every subsequent Zelda title.',
    tags: ['ganon', 'triforce', 'hyrule']
  },
  mechanics: [
    { name: 'Open, Non-Linear Exploration', desc: 'Unlike many action games of its era, the original Legend of Zelda allowed players to explore Hyrule\'s overworld and tackle its nine dungeons in a largely non-linear order, a landmark design choice for its time.' },
    { name: 'Triforce of Wisdom Fragments', desc: 'Eight scattered pieces hidden within the game\'s dungeons that Link must recover before facing Ganon in the ninth and final dungeon.' },
    { name: 'Item-Based Progression', desc: 'Tools such as the boomerang, bombs, and various swords found within dungeons or purchased from shops gate access to new areas and abilities, establishing a core structural convention for the series.' },
    { name: 'Save Battery System', desc: 'The game notably included an internal battery allowing players to save their progress, a rare and technically significant feature for an NES cartridge at the time.' }
  ],
  regions: [
    { name: 'Hyrule Overworld', desc: 'The open world map connecting the game\'s forests, graveyards, lakes, and mountains, explorable largely at the player\'s own pace from the very beginning.' },
    { name: 'Death Mountain', desc: 'A dangerous volcanic region containing several of the game\'s later dungeons, including the path to Ganon\'s lair.' },
    { name: 'Spectacle Rock and Ganon\'s Lair', desc: 'The final, hidden dungeon location where Link ultimately confronts Ganon and reclaims the Triforce of Power.' }
  ],
  trivia: [
    'The Legend of Zelda was among the first console games to include a battery-backed save feature, allowing players to save their progress rather than relying on passwords.',
    'The game was originally released in Japan on the Famicom Disk System before being adapted to a gold-colored cartridge for its Western NES release, giving it a distinctive appearance among NES titles.',
    'Its open-world, non-linear design was highly unconventional for action games of its time and became a foundational influence on the entire Zelda series and countless later games.',
    'The game\'s soundtrack, composed by Koji Kondo, introduced the now-iconic overworld theme that has recurred in various forms throughout the series ever since.'
  ],
  soundtrack: [
    { title: 'Overworld Theme', url: 'https://youtube.com/watch?v=ukfppyAQ2uA', note: 'The series\' original, foundational overworld melody, composed by Koji Kondo and referenced or remixed in numerous later Zelda titles.' },
    { title: 'Dungeon Theme', url: 'https://youtube.com/watch?v=cMssCMqMHuk', note: 'The tense, exploratory theme accompanying Link\'s descent into Hyrule\'s many underground labyrinths.' }
  ],
  relatedTheoryTags: ['ganon', 'triforce', 'hyrule-origins'],
  stats: { metacritic: null, avgPlaytime: null, salesApprox: null } // VERIFICAR - pre-dates Metacritic; avgPlaytime and salesApprox not confidently sourced
},

  {
  slug: 'zelda-ii-the-adventure-of-link',
  title: 'Zelda II: The Adventure of Link',
  year: 1987,
  platform: 'Family Computer Disk System', // VERIFICAR - original Japanese release was on the Famicom Disk System; the NES cartridge version followed later in Western markets (1988)
  platformHistory: [
    { platform: 'Nintendo Entertainment System', year: 1988, note: 'Western cartridge release, adapting the original Famicom Disk System game.' },
    { platform: 'Game Boy Advance', year: 2004, note: 'Re-released as part of the "Classic NES Series" cartridge line.' },
    { platform: 'Wii', year: 2007, note: 'Re-released digitally on the Virtual Console.' },
    { platform: 'Wii U', year: 2014, note: 'Re-released digitally on the Virtual Console.' },
    { platform: 'Nintendo Switch', year: 2021, note: 'Made available through the Nintendo Switch Online service\'s NES library.' }
  ],
  category: 'Classic',
  heroImage: '',
  tagline: '"The seal that has kept the Triforce of Courage hidden is about to be broken."', // VERIFICAR - paraphrased summary, not a confirmed exact official quote
  synopsis: [
    'Some years after recovering the Triforce of Wisdom and defeating Ganon, Link discovers a strange mark on the back of his hand that begins to glow, drawing him to Impa, who reveals a hidden passage beneath Hyrule Castle. There, Link learns of Princess Zelda, an ancestor of the current princess, who was placed into an eternal sleep by a jealous prince seeking to steal the secret of the Triforce of Courage, the final piece needed to reunite the full power of the Triforce and awaken her from her enchanted slumber.',
    'Setting out across a vast, side-scrolling Hyrule filled with towns, mountains, and treacherous dungeons, Link must gather crystals to unseal the Great Palace where the Triforce of Courage awaits, all while remnants of Ganon\'s forces work to revive their fallen master using Link\'s own blood. Balancing overworld exploration with side-scrolling platforming combat and RPG-inspired experience-based leveling, Link ultimately reaches the Great Palace, thwarts the ritual to resurrect Ganon, claims the Triforce of Courage, and awakens the sleeping Princess Zelda.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure / Side-Scrolling RPG',
    director: 'Shigeru Miyamoto, Takashi Tezuka', // VERIFICAR - Yoshiaki Koizumi is also frequently cited among contributing designers on this title
    producer: 'Shigeru Miyamoto'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'The Hero of Hyrule',
      desc: 'Years after his first adventure, Link discovers his destiny to find the Triforce of Courage and awaken an ancestral Princess Zelda from her enchanted sleep, while thwarting Ganon\'s followers from resurrecting their master.',
      src: ''
    },
    {
      name: 'Princess Zelda (the Sleeping Princess)',
      role: 'Ancestral Princess of Hyrule',
      desc: 'An ancestor of the modern Hyrulean royal line, placed into an eternal magical sleep by a vengeful prince after refusing to reveal the secret of the Triforce, whose awakening is the ultimate goal of Link\'s quest.',
      src: ''
    }
  ],
  timeline: { era: 'fallen-hero-timeline', eraLabel: 'Fallen Hero Timeline' },
  relatedGames: [
    { relation: 'Direct Sequel', slug: 'the-legend-of-zelda', title: 'The Legend of Zelda', src: '' },
    { relation: 'Same Era', slug: 'a-link-to-the-past', title: 'The Legend of Zelda: A Link to the Past', src: '' }
  ],
  villain: {
    name: 'Ganon (Spirit/Remnant)',
    desc: 'Though slain in the original Legend of Zelda, Ganon\'s followers work throughout the game to resurrect him using Link\'s own spilled blood, making his lingering, unseen threat the driving force behind the game\'s antagonistic forces even without a direct physical confrontation with Ganon himself until the very end.',
    tags: ['ganon', 'triforce-of-courage', 'hyrule']
  },
  mechanics: [
    { name: 'Side-Scrolling Combat', desc: 'A major departure from the original game\'s top-down perspective, Zelda II shifts to side-scrolling, platforming-based sword combat whenever Link enters a town, dungeon, or encounters enemies on the overworld map.' },
    { name: 'Experience Point Leveling System', desc: 'Link gains experience points from defeating enemies, which can be allocated to increase his attack, magic, or life stats, introducing RPG-style character progression uncommon in the series before or after.' },
    { name: 'Magic Spells', desc: 'Learned from sages in various towns, spells such as Shield, Jump, and Fire grant Link new abilities essential for progressing through specific obstacles and battles.' },
    { name: 'Triforce of Courage and Crystals', desc: 'Link must collect crystals from the game\'s six palaces to unseal the Great Palace, where the final piece of the Triforce awaits alongside the sleeping princess.' }
  ],
  regions: [
    { name: 'Hyrule Overworld (Side-Scrolling)', desc: 'A vast, side-view map connecting Hyrule\'s towns, forests, and dungeons, representing a significant structural departure from the original game\'s top-down world.' },
    { name: 'The Great Palace', desc: 'The final, heavily guarded dungeon containing the Triforce of Courage and the sleeping Princess Zelda, accessible only after all six crystals are collected.' },
    { name: 'Death Mountain and Various Towns', desc: 'Numerous towns scattered across Hyrule where Link can learn spells, gather information, and rest, contributing to the game\'s more RPG-like structure.' }
  ],
  trivia: [
    'Zelda II: The Adventure of Link is notable within the mainline series for its shift to side-scrolling, platforming-based combat, a structural departure the series would not revisit in quite the same form.',
    'The game introduced an experience-point leveling system, a rare instance of traditional RPG mechanics being incorporated directly into a mainline Zelda title.',
    'It was originally released in Japan on the Famicom Disk System before later being adapted to a standard NES cartridge for Western release.',
    'Despite its divisive reception at the time for its major gameplay departures, the game has since gained a more mixed-to-positive reappraisal among long-time fans of the series.'
  ],
  soundtrack: [
    { title: 'Palace Theme', url: 'https://youtube.com/watch?v=W-VUVvvlQK8', note: 'A tense, driving theme accompanying Link\'s side-scrolling exploration and combat within the game\'s dungeons.' },
    { title: 'Overworld Theme', url: 'https://youtube.com/watch?v=RHS5jM6xBHo', note: 'The map-traversal theme, distinct from the original game\'s overworld melody, reflecting the sequel\'s different structural approach.' }
  ],
  relatedTheoryTags: ['ganon', 'triforce-of-courage', 'hyrule-origins'],
  stats: { metacritic: null, avgPlaytime: null, salesApprox: null } // VERIFICAR - pre-dates Metacritic; avgPlaytime and salesApprox not confidently sourced
},

  // ── ADULT TIMELINE ──────────────────────────────────────────

  {
  slug: 'the-wind-waker',
  title: 'The Legend of Zelda: The Wind Waker',
  year: 2002,
  platform: 'Nintendo GameCube',
  platformHistory: [
    { platform: 'Wii U', year: 2013, note: 'Remastered as "The Wind Waker HD" with upgraded visuals, faster sailing, and revised inventory management.' }
  ],
  category: 'Masterpiece',
  heroImage: '',
  tagline: '"On days when the wind blows hard, an old man sometimes tells a tale."',
  synopsis: [
    'On a small island in a vast, sprawling sea known as the Great Sea, a young boy named Link lives among the scattered islands that are all that remain of a long-flooded Hyrule, following an ancient tradition passed down through legend. When a giant bird drops a girl named Tetra, the tough young captain of a pirate crew, near his home, and later a monstrous bird abducts his younger sister Aryll mistaking her for Tetra, Link sets out across the Great Sea determined to rescue her from the clutches of the Ganon-controlled monster.',
    'Aided by Tetra\'s pirate crew and the King of Red Lions, a mysterious talking boat, Link discovers the truth of the flooded world: Hyrule lies preserved and submerged far below the sea, sealed away generations earlier by the goddesses after the previous Hero of Time failed to arrive in time to stop Ganon\'s first uprising. As Link gathers the Pearls of the Goddesses and later the fabled Triforce of Courage, he learns Tetra is in fact the descendant of the ancient Hyrulean royal line, and must ultimately descend into the sunken kingdom to reclaim the Master Sword, confront the resurfaced Ganon, and determine the fate of the drowned Hyrule once and for all.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Eiji Aonuma',
    producer: 'Shigeru Miyamoto'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'Islander Hero',
      desc: 'A young boy from a small island in the Great Sea who sets sail to rescue his kidnapped sister Aryll, uncovering the submerged truth of Hyrule and his own destiny as its chosen hero along the way.',
      src: ''
    },
    {
      name: 'Tetra',
      role: 'Pirate Captain / Princess Zelda',
      desc: 'The sharp-tongued, fearless captain of a pirate crew who accompanies Link on his journey, later revealed to be the last living descendant of the royal Hyrulean bloodline and the reincarnation of Princess Zelda.',
      src: ''
    }
  ],
  timeline: { era: 'adult-era-timeline', eraLabel: 'Adult Era Timeline' },
  relatedGames: [
    { relation: 'Direct Sequel', slug: 'phantom-hourglass', title: 'The Legend of Zelda: Phantom Hourglass', src: '' },
    { relation: 'Prequel', slug: 'ocarina-of-time', title: 'The Legend of Zelda: Ocarina of Time', src: '' },
    { relation: 'Remaster', slug: 'the-wind-waker-hd', title: 'The Legend of Zelda: The Wind Waker HD', src: '' }
  ],
  villain: {
    name: 'Ganon',
    desc: 'Resurfacing generations after his defeat at the hands of the Hero of Time failed to fully secure Hyrule\'s fate, Ganon reemerges from the flooded kingdom seeking the fabled Triforce, which he believes remains intact and capable of granting him the power to reshape the world. His pursuit of Tetra, unknowingly the last heir of the Hyrulean bloodline, and his descent back into the submerged ruins of Hyrule drive the story\'s central conflict toward its climax.',
    tags: ['ganon', 'great-sea', 'triforce']
  },
  mechanics: [
    { name: 'Wind Waker Baton', desc: 'A magical conducting baton allowing Link to control the wind\'s direction for sailing and to perform various songs with mechanical effects, such as warping between locations or summoning rain.' },
    { name: 'Sailing and the King of Red Lions', desc: 'Link explores the vast, open Great Sea aboard the sentient talking boat, the King of Red Lions, forming the game\'s central mode of overworld traversal between its many scattered islands.' },
    { name: 'Cel-Shaded Art Style', desc: 'A distinctive, cartoon-like visual style using cel-shading techniques, a significant stylistic departure from the more realistic look of Ocarina of Time and Majora\'s Mask.' },
    { name: 'Triforce Shard Hunt', desc: 'A notable late-game segment requiring Link to consult treasure charts and dive for scattered pieces of the Triforce of Courage across the Great Sea, a sequence often cited as needlessly padded in its original release.' }
  ],
  regions: [
    { name: 'Outset Island', desc: 'Link\'s peaceful home island where the story begins, and the site of his sister Aryll\'s kidnapping that sets the adventure in motion.' },
    { name: 'The Great Sea', desc: 'The vast, open ocean covering the submerged remains of Hyrule, dotted with numerous islands, each with its own culture, secrets, and challenges.' },
    { name: 'Forsaken Fortress', desc: 'Ganon\'s heavily guarded stronghold housing his monstrous forces, the site of Aryll\'s captivity and several pivotal story confrontations.' },
    { name: 'Hyrule (Sunken Kingdom)', desc: 'The preserved, submerged ruins of the original Hyrule, sealed away by the goddesses and accessible only in the game\'s climactic final act.' }
  ],
  trivia: [
    'The Wind Waker\'s distinctive cel-shaded art style was considered highly controversial among fans upon its initial reveal in 2001, but has since been widely praised for its timeless visual quality.',
    'The game was remastered in high definition for the Wii U in 2013 as "The Wind Waker HD," which also significantly increased sailing speed to address criticism of the original\'s pacing.',
    'The game reveals that the pirate captain Tetra is a reincarnation of Princess Zelda and the last descendant of Hyrule\'s royal bloodline, a twist considered one of the more memorable reveals in the series.',
    'The Wind Waker\'s ending leaves the fate of the drowned Hyrule kingdom deliberately ambiguous, directly setting up the story of its direct sequels, Phantom Hourglass and Spirit Tracks.'
  ],
  soundtrack: [
    { title: 'The Wind Waker (Title Theme)', url: 'https://youtube.com/watch?v=rBvAz3890-Y', note: 'The game\'s central, sweeping orchestral theme, closely associated with the vastness and adventure of the Great Sea.' },
    { title: 'Dragon Roost Island Theme', url: 'https://youtube.com/watch?v=ey8-WZIW69A', note: 'An upbeat, memorable theme representing the volcanic home of the Rito tribe, frequently cited as a fan-favorite track.' },
    { title: 'Ganondorf\'s Theme (Dragon Roost Reprise)', url: 'https://youtube.com/watch?v=8sRp5m5RGkE', note: 'A somber, reflective piece underscoring Ganondorf\'s more sympathetic, world-weary characterization in this particular story.' }
  ],
  relatedTheoryTags: ['ganon', 'great-sea', 'triforce', 'sunken-hyrule'],
  stats: { metacritic: 96, avgPlaytime: null, salesApprox: null } // VERIFICAR - avgPlaytime and salesApprox omitted for lack of confident, up-to-date figures
},

  {
  slug: 'phantom-hourglass',
  title: 'The Legend of Zelda: Phantom Hourglass',
  year: 2007,
  platform: 'Nintendo DS',
  platformHistory: [],
  category: 'Classic',
  heroImage: '',
  tagline: '"A ghost ship sails these waters, and those who board it are never seen again."', // VERIFICAR - paraphrased framing of the game's opening hook, not a confirmed exact official quote
  synopsis: [
    'Some time after the events of The Wind Waker, Link and Tetra\'s pirate crew encounter a ghostly derelict ship drifting through a foggy stretch of the Great Sea. When Tetra boards the mysterious vessel to investigate and vanishes without a trace, Link dives into the water after her, only to wash ashore on the unfamiliar Mercay Island, where he is aided by a tiny fairy named Ciela, who has lost her memory, and the eccentric old man Oshus.',
    'Guided by a mysterious chart and later the Ghost Ship Chart, Link sets sail across a new expanse of ocean aboard a small boat to track down the Ghost Ship and rescue Tetra, exploring the Temple of the Ocean King, whose corridors are patrolled by the deadly Phantoms and governed by a depleting sand timer from the titular Phantom Hourglass. Along the way, Link uncovers the machinations of Bellum, an ancient evil sealed beneath the Ocean King\'s temple, who has been slowly draining the Ocean King\'s power and orchestrating Tetra\'s abduction, culminating in a confrontation to free Tetra, restore the Ocean King, and defeat Bellum once and for all.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Daiki Iwamoto', // VERIFICAR - director credit for this specific title recalled with only moderate confidence
    producer: 'Eiji Aonuma'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'Islander Hero (Sequel to Wind Waker)',
      desc: 'Continuing his adventures on the Great Sea after The Wind Waker, Link dives after the vanished Tetra and finds himself on a new quest across uncharted waters to rescue her from the Ghost Ship and the ancient evil Bellum.',
      src: ''
    },
    {
      name: 'Ciela',
      role: 'Fairy Companion',
      desc: 'A small, memory-lost fairy who aids Link throughout his journey, later revealed to have a deeper connection to the Ocean King and the story\'s central mystery.',
      src: ''
    }
  ],
  timeline: { era: 'adult-era-timeline', eraLabel: 'Adult Era Timeline' },
  relatedGames: [
    { relation: 'Direct Prequel', slug: 'the-wind-waker', title: 'The Legend of Zelda: The Wind Waker', src: '' },
    { relation: 'Direct Sequel', slug: 'spirit-tracks', title: 'The Legend of Zelda: Spirit Tracks', src: '' }
  ],
  villain: {
    name: 'Bellum',
    desc: 'An ancient, parasitic sea demon sealed away beneath the Temple of the Ocean King generations earlier, Bellum has slowly been draining the Ocean King\'s power from within, weakening his ability to protect the seas. Its abduction of Tetra and manipulation of the Ghost Ship and Phantoms serve its larger goal of fully escaping its seal and unleashing chaos upon the ocean.',
    tags: ['bellum', 'ocean-king', 'phantom-hourglass']
  },
  mechanics: [
    { name: 'Touch-Screen Controls', desc: 'Nearly all actions, from movement to sword swings to item use, are controlled via stylus input on the Nintendo DS touch screen, a distinctive control scheme for the series.' },
    { name: 'Phantom Hourglass Timer', desc: 'Within the Temple of the Ocean King, a depleting sand timer forces Link to navigate its floors under time pressure, requiring repeated visits and route optimization across playthroughs.' },
    { name: 'Sea Chart Note-Taking', desc: 'Players can write directly on in-game sea charts using the stylus, marking routes, puzzle solutions, and treasure locations, a mechanic praised for its creative use of the DS hardware.' },
    { name: 'Ship Combat and Customization', desc: 'Link\'s boat, the S.S. Linebeck, can be upgraded and equipped with a cannon for direct combat against enemy ships while sailing.' }
  ],
  regions: [
    { name: 'Mercay Island', desc: 'The island where Link washes ashore after diving off Tetra\'s ship, home to Oshus and the starting point of his new quest.' },
    { name: 'Temple of the Ocean King', desc: 'A recurring, time-limited dungeon Link must repeatedly infiltrate throughout the game, home to the Phantom Hourglass and the weakened Ocean King himself.' },
    { name: 'The Ghost Ship', desc: 'The mysterious derelict vessel that abducts sailors, including Tetra, tied directly to Bellum\'s influence over the seas.' }
  ],
  trivia: [
    'Phantom Hourglass was the first Legend of Zelda game designed specifically for the Nintendo DS, built around stylus-based touch controls rather than traditional button input.',
    'The game is a direct narrative sequel to The Wind Waker, continuing the story of Link and Tetra\'s pirate crew on a newly charted sea.',
    'The recurring Temple of the Ocean King dungeon, requiring repeated timed visits, proved divisive among players and critics, with some praising its tension and others criticizing its repetition.',
    'The game reuses The Wind Waker\'s distinctive cel-shaded art style, adapted for the Nintendo DS\'s dual-screen hardware.'
  ],
  soundtrack: [
    { title: 'Temple of the Ocean King Theme', url: 'https://youtube.com/watch?v=ZL2clvFeurU', note: 'A tense, urgent track underscoring the time-pressured exploration of the game\'s central recurring dungeon.' },
    { title: 'Molida Island Theme', url: 'https://youtube.com/watch?v=dUol1YS8zkM', note: 'A cheerful, breezy theme representing one of the game\'s more relaxed island locales.' }
  ],
  relatedTheoryTags: ['bellum', 'ocean-king', 'great-sea', 'phantom-hourglass'],
  stats: { metacritic: 86, avgPlaytime: null, salesApprox: null } // VERIFICAR - metacritic figure recalled with moderate confidence; avgPlaytime and salesApprox not confidently sourced
},

  {
  slug: 'spirit-tracks',
  title: 'The Legend of Zelda: Spirit Tracks',
  year: 2009,
  platform: 'Nintendo DS',
  platformHistory: [],
  category: 'Classic',
  heroImage: '',
  tagline: '"A ghostly princess, a spectral train, and a kingdom bound by ancient tracks."', // VERIFICAR - paraphrased framing, not a confirmed exact official quote
  synopsis: [
    'A century after the events of Phantom Hourglass, in a New Hyrule built by descendants of the original Hyrulean people, a young engineer-in-training named Link dreams of one day driving a train across the kingdom\'s network of Spirit Tracks. When summoned to Hyrule Castle to receive his engineer\'s certificate, Link and Princess Zelda uncover that the tracks binding the ancient Demon King Malladus are mysteriously vanishing, and that Zelda\'s advisor, Chancellor Cole, is secretly working to revive Malladus using Zelda\'s own body as a vessel.',
    'After Zelda\'s physical body is left comatose by Cole\'s ritual, her spirit joins Link as a ghostly companion aboard the Spirit Train, giving her the unique ability to briefly possess Phantom armor and fight alongside him. Together, they journey across New Hyrule\'s four regions to restore the vanished Spirit Tracks and awaken the four Spirits sealed within the Tower of Spirits, all while racing to stop Cole and his ally Byrne from completing Malladus\'s resurrection and prevent the Demon King from once again threatening the kingdom.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure',
    director: 'Daiki Iwamoto', // VERIFICAR - director credit for this specific title recalled with only moderate confidence
    producer: 'Eiji Aonuma'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'Engineer-in-Training',
      desc: 'A young aspiring train engineer in New Hyrule who becomes entangled in a plot to revive the Demon King Malladus, teaming up with the spectral form of Princess Zelda to restore the Spirit Tracks and save the kingdom.',
      src: ''
    },
    {
      name: 'Princess Zelda',
      role: 'Spirit / Phantom Wielder',
      desc: 'Left in a comatose state after Chancellor Cole attempts to use her body as a vessel for Malladus, Zelda\'s spirit accompanies Link throughout the adventure, gaining the unique ability to possess Phantom armor and fight directly by his side.',
      src: ''
    }
  ],
  timeline: { era: 'adult-era-timeline', eraLabel: 'Adult Era Timeline' },
  relatedGames: [
    { relation: 'Direct Prequel', slug: 'phantom-hourglass', title: 'The Legend of Zelda: Phantom Hourglass', src: '' }
  ],
  villain: {
    name: 'Malladus',
    desc: 'An ancient Demon King who once waged war against Hyrule generations earlier, Malladus was defeated and sealed away by the Spirits of Light, his power bound within the network of Spirit Tracks. Chancellor Cole, secretly one of Malladus\'s own demonic followers in disguise, works throughout the game to erase the sealing tracks and resurrect the Demon King using Princess Zelda\'s body as a vessel, threatening to plunge New Hyrule back into the darkness of the original war.',
    tags: ['malladus', 'spirit-tracks', 'new-hyrule']
  },
  mechanics: [
    { name: 'Spirit Train Travel', desc: 'Link travels across New Hyrule\'s regions aboard a customizable train running along the Spirit Tracks, forming the game\'s primary mode of transportation and requiring players to manage speed, switches, and obstacles.' },
    { name: 'Zelda\'s Phantom Possession', desc: 'Princess Zelda\'s spirit can temporarily possess suits of Phantom armor within dungeons, allowing players to control her directly in a cooperative two-character puzzle and stealth dynamic alongside Link.' },
    { name: 'Touch-Screen Controls', desc: 'Continuing from Phantom Hourglass, most actions including sword combat, item use, and train operation are controlled via stylus input on the Nintendo DS touch screen.' },
    { name: 'Tower of Spirits (Recurring Dungeon)', desc: 'A tall, recurring central dungeon Link must revisit multiple times throughout the story, each time progressing further with new tools and abilities, echoing the Temple of the Ocean King\'s structure from Phantom Hourglass.' }
  ],
  regions: [
    { name: 'New Hyrule', desc: 'The kingdom rebuilt generations after the events of Phantom Hourglass, connected across its regions by the mystical network of Spirit Tracks.' },
    { name: 'Tower of Spirits', desc: 'The central recurring dungeon housing the sealed Spirits of Light, whose four seals must be restored to fully re-establish the Spirit Tracks and contain Malladus.' },
    { name: 'Snow Realm, Fire Realm, Ocean Realm, and Forest Realm', desc: 'The four distinct regional realms of New Hyrule, each home to its own culture, dungeon, and Spirit tied to the game\'s central sealing mechanism.' }
  ],
  trivia: [
    'Spirit Tracks is a direct narrative sequel to Phantom Hourglass, set a century later in a newly established "New Hyrule" built after the events of that game.',
    'The game introduced Princess Zelda as a semi-playable companion character for the first time in the series, allowing players to control her spirit possessing Phantom armor in certain sections.',
    'Like Phantom Hourglass, the game is built around Nintendo DS stylus and touch-screen controls, extending the control scheme to train operation as a new form of overworld travel.',
    'The game continues the cel-shaded art style first introduced in The Wind Waker and carried over through Phantom Hourglass.'
  ],
  soundtrack: [
    { title: 'Spirit Tracks Main Theme', url: 'https://youtube.com/watch?v=5W_bFLwB0WY', note: 'The game\'s central theme, often associated with the journey across New Hyrule\'s rail network.' },
    { title: 'Tower of Spirits Theme', url: 'https://youtube.com/watch?v=YKcWnvyrrGw', note: 'A tense, mysterious track accompanying Link\'s repeated ascents through the game\'s central recurring dungeon.' }
  ],
  relatedTheoryTags: ['malladus', 'new-hyrule', 'spirit-tracks', 'great-sea'],
  stats: { metacritic: 84, avgPlaytime: null, salesApprox: null } // VERIFICAR - metacritic figure recalled with moderate confidence; avgPlaytime and salesApprox not confidently sourced
},

  // ── CALAMITY / SKY ERA ─────────────────────────────────────

  {
  slug: 'breath-of-the-wild',
  title: 'The Legend of Zelda: Breath of the Wild',
  year: 2017,
  platform: 'Nintendo Switch', // VERIFICAR - launched simultaneously on both Nintendo Switch and Wii U; Switch is treated as the primary/lead platform per its status as the console's flagship launch title
  platformHistory: [
    { platform: 'Wii U', year: 2017, note: 'Released the same day as a simultaneous, final first-party title for the console rather than a later port.' } // VERIFICAR - see platform note above
  ],
  category: 'Masterpiece',
  heroImage: '',
  tagline: '"Open your eyes... Open your eyes, Link."',
  synopsis: [
    'A century after a catastrophic war in which the ancient Guardian and Divine Beast technology of Hyrule was corrupted by the malevolent Calamity Ganon, Link awakens from a mysterious hundred-year slumber within the Shrine of Resurrection, his memories fragmented and lost. Guided by a disembodied voice claiming to be Princess Zelda, he emerges into a ruined, overgrown Hyrule to learn that Ganon\'s dark influence still occupies the ruins of Hyrule Castle, and that Zelda herself has been single-handedly holding the Calamity at bay for a hundred years, awaiting Link\'s return.',
    'Given near-total freedom to explore Hyrule\'s vast, open world in any order, Link sets out to free the four Divine Beasts, ancient mechanical constructs once piloted by four legendary Champions, from Ganon\'s corruption, gradually recovering fragments of his lost memories along the way. As he uncovers the tragic story of the Champions\' fall a century earlier and rebuilds his strength with new Sheikah Slate technology, Link ultimately returns to a corrupted Hyrule Castle to confront Calamity Ganon directly, reuniting with Zelda to end the century-long cycle of destruction and begin restoring the kingdom.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure / Open World',
    director: 'Hidemaro Fujibayashi',
    producer: 'Eiji Aonuma'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'The Hero Reawakened',
      desc: 'Awakening from a hundred-year slumber with fragmented memories, Link must relearn his own past while exploring a ruined, open Hyrule, freeing the Divine Beasts, and ultimately confronting Calamity Ganon.',
      src: ''
    },
    {
      name: 'Princess Zelda',
      role: 'Princess of Hyrule / Sealing Power',
      desc: 'Having spent a century single-handedly containing Calamity Ganon within Hyrule Castle using her latent sealing power, Zelda guides Link telepathically throughout his journey, her backstory and struggles revealed gradually through memory sequences.',
      src: ''
    }
  ],
  timeline: { era: 'era-of-the-wilds', eraLabel: 'Era of the Wilds' },
  relatedGames: [
    { relation: 'Direct Sequel', slug: 'tears-of-the-kingdom', title: 'The Legend of Zelda: Tears of the Kingdom', src: '' },
    { relation: 'Prequel Spin-off', slug: 'hyrule-warriors-age-of-calamity', title: 'Hyrule Warriors: Age of Calamity', src: '' }
  ],
  villain: {
    name: 'Calamity Ganon',
    desc: 'A formless, ancient malice representing Ganon\'s corrupted essence, sealed for millennia but capable of resurging to plunge Hyrule into catastrophe once more. A century before the game\'s events, Calamity Ganon seized control of Hyrule\'s ancient Guardian and Divine Beast technology, slaughtering the Champions who piloted them and devastating the kingdom, and has since occupied Hyrule Castle, held back only by Princess Zelda\'s sealing power until Link\'s return.',
    tags: ['calamity-ganon', 'divine-beasts', 'hyrule-castle']
  },
  mechanics: [
    { name: 'Open-World Freedom', desc: 'Players can approach nearly every objective, including the final boss, in almost any order from the very start, exploring a fully traversable, physics-driven open world with minimal restrictions.' },
    { name: 'Sheikah Slate Runes', desc: 'A tablet-like device granting Link abilities such as Magnesis, Stasis, Cryonis, and remote bombs, forming the core toolkit for the game\'s physics- and chemistry-based puzzle and combat systems.' },
    { name: 'Weapon Durability', desc: 'Nearly all weapons, shields, and bows degrade with use and eventually break, encouraging players to constantly scavenge and experiment with a wide variety of equipment rather than relying on a single favorite.' },
    { name: 'Climbing and Stamina', desc: 'Link can climb almost any surface in the game world, limited by a depletable stamina wheel, fundamentally shaping exploration and traversal design throughout Hyrule.' }
  ],
  regions: [
    { name: 'Hyrule Field and Central Hyrule', desc: 'The ruined heart of the kingdom, dominated by the corrupted, looming silhouette of Hyrule Castle at its center.' },
    { name: 'Great Plateau', desc: 'The isolated, tutorial-focused starting region where Link awakens and first learns the Sheikah Slate\'s core abilities.' },
    { name: 'Hebra, Gerudo, Akkala, and Faron', desc: 'Among the game\'s many distinct climate-driven regions, each home to different peoples, wildlife, and a corresponding Divine Beast.' },
    { name: 'Hyrule Castle', desc: 'The corrupted seat of Calamity Ganon\'s power, serving as the game\'s optional final dungeon and climactic confrontation.' }
  ],
  trivia: [
    'Breath of the Wild launched simultaneously as both a Wii U title and the flagship launch game for the Nintendo Switch, marking a rare dual-console release for a mainline Zelda entry.',
    'The game\'s open-world design, physics engine, and "chemistry engine" for environmental interactions were widely praised and influenced numerous subsequent open-world titles across the industry.',
    'It received near-universal critical acclaim upon release and won numerous Game of the Year awards, including from The Game Awards 2017.',
    'The game deliberately removed many traditional Zelda conventions, such as fixed dungeon item unlocks and a strictly linear story order, in favor of emergent, player-driven exploration.'
  ],
  soundtrack: [
    { title: 'Main Theme (Hyrule Castle)', url: 'https://youtube.com/watch?v=yFYEzs6Gvsg', note: 'A sparse, piano-driven motif introduced early in the game, contrasting with the series\' traditionally more orchestral overworld themes to emphasize the desolation of the ruined kingdom.' },
    { title: 'Zelda\'s Lament', url: 'https://youtube.com/watch?v=3JtDLDmvSZY', note: 'A somber piano piece deeply tied to Zelda\'s personal struggles and grief throughout her memory-based flashback sequences.' },
    { title: 'Divine Beast Vah Ruta / Vah Medoh / Vah Naboris / Vah Rudania Themes', url: 'https://youtube.com/watch?v=hzk69ncSSso', note: 'Distinct musical motifs for each of the four Divine Beast dungeons, reflecting the personality and culture of the associated Champion and region.' }
  ],
  relatedTheoryTags: ['calamity-ganon', 'divine-beasts', 'sheikah-slate', 'hyrule-castle'],
  stats: { metacritic: 97, avgPlaytime: null, salesApprox: null } // VERIFICAR - avgPlaytime and salesApprox omitted for lack of confident, up-to-date figures
},

  {
  slug: 'tears-of-the-kingdom',
  title: 'The Legend of Zelda: Tears of the Kingdom',
  year: 2023,
  platform: 'Nintendo Switch',
  platformHistory: [],
  category: 'Masterpiece',
  heroImage: '',
  tagline: '"An ancient, malicious presence has awoken beneath Hyrule Castle."', // VERIFICAR - paraphrased framing of the game's opening premise, not a confirmed exact official quote
  synopsis: [
    'Years after the defeat of Calamity Ganon, Link and Princess Zelda investigate a mysterious, spreading corruption discovered deep beneath Hyrule Castle, where they encounter the preserved but decaying corpse of the ancient Demon King Ganondorf. As Ganondorf stirs back to life and unleashes a cataclysmic force that fractures the Master Sword and sends Link plummeting from the sky, Zelda vanishes into the chasm below, and Link awakens with a mysterious new power in his arm known as the Ministrone... more precisely, arm augmented by an ancient Zonai construct, setting him on a quest across a Hyrule now reshaped by floating sky islands and cavernous underground depths.',
    'As Link explores both the newly accessible Sky Islands and the perilous Depths beneath Hyrule, he gathers Zonai devices and ancient technology to combat the resurgent threat of Ganondorf, who has begun corrupting Hyrule\'s people and creatures with a virulent Gloom. Following Zelda\'s scattered traces through time and geography, Link uncovers her connection to the mythic Zonai civilization and an ancient secret linking her fate directly to the past, culminating in a climactic confrontation with the fully resurrected Ganondorf to save both Zelda and the kingdom from ruin.'
  ],
  codexEntry: {
    publisher: 'Nintendo',
    genre: 'Action-Adventure / Open World',
    director: 'Hidemaro Fujibayashi',
    producer: 'Eiji Aonuma'
  },
  protagonists: [
    {
      name: 'Link',
      role: 'The Hero of Hyrule',
      desc: 'Gifted with a mysterious new power in his right arm after a cataclysmic encounter beneath Hyrule Castle, Link explores a transformed Hyrule spanning sky, surface, and depths to find the missing Zelda and stop the resurgent Ganondorf.',
      src: ''
    },
    {
      name: 'Princess Zelda',
      role: 'Princess of Hyrule',
      desc: 'Vanishing into the chasm beneath Hyrule Castle after Ganondorf\'s awakening, Zelda\'s fate becomes intertwined with an ancient secret tied to the ancient Zonai civilization, uncovered gradually through geoglyphs and memories across the story.',
      src: ''
    }
  ],
  timeline: { era: 'era-of-the-wilds', eraLabel: 'Era of the Wilds' },
  relatedGames: [
    { relation: 'Direct Prequel', slug: 'breath-of-the-wild', title: 'The Legend of Zelda: Breath of the Wild', src: '' }
  ],
  villain: {
    name: 'Ganondorf',
    desc: 'The ancient Demon King and progenitor of many later incarnations of Ganon, sealed away generations before the game\'s events after a war against the ancient Zonai civilization and the sages who opposed him. Discovered as a mummified corpse beneath Hyrule Castle, Ganondorf is inadvertently revived, unleashing the corrupting Gloom across Hyrule as he seeks to reclaim the power he lost and enact revenge upon the descendants of those who once defeated him.',
    tags: ['ganondorf', 'zonai', 'gloom']
  },
  mechanics: [
    { name: 'Ultrahand', desc: 'A signature new ability letting Link grab, move, and fuse objects together to build custom vehicles, structures, and contraptions, forming the core of the game\'s emergent physics-based puzzle and combat design.' },
    { name: 'Fuse', desc: 'Allows Link to combine weapons and shields with materials found throughout the world, creating customized equipment with unique properties and significantly expanding upon the durability system introduced in Breath of the Wild.' },
    { name: 'Ascend', desc: 'Lets Link rise directly through solid ceilings to the surface above, offering a fast, intuitive method of vertical traversal unique to this game.' },
    { name: 'Sky Islands and the Depths', desc: 'Expands Hyrule\'s explorable space into three vertically stacked layers: the floating Sky Islands, the familiar surface world, and the vast, shadowy underground Depths.' }
  ],
  regions: [
    { name: 'Hyrule Surface', desc: 'The familiar overworld from Breath of the Wild, now reshaped by falling debris from the Sky Islands and new geological changes tied to the story.' },
    { name: 'The Sky Islands', desc: 'A newly explorable network of floating landmasses high above Hyrule, home to ancient Zonai ruins and ties to ancient shrines.' },
    { name: 'The Depths', desc: 'A vast, perpetually dark underground realm mirroring the surface map, filled with Gloom-corrupted enemies and hidden treasures.' },
    { name: 'Hyrule Castle (Fractured)', desc: 'The site of Ganondorf\'s reawakening, dramatically transformed and elevated into the sky by the game\'s opening cataclysm.' }
  ],
  trivia: [
    'Tears of the Kingdom is a direct sequel set several years after Breath of the Wild, reusing and dramatically expanding the same Hyrule map with new vertical layers.',
    'The game marks the first mainline Zelda title to feature Ganondorf, rather than a generic incarnation of "Ganon," as the primary antagonist since Twilight Princess.',
    'The Ultrahand and Fuse mechanics were praised for enabling highly creative, player-driven vehicle and weapon construction, drawing comparisons to sandbox and physics-based building games.',
    'The game received near-universal critical acclaim upon release, with numerous outlets awarding it perfect or near-perfect scores.'
  ],
  soundtrack: [
    { title: 'Main Theme (Tears of the Kingdom)', url: 'https://youtube.com/watch?v=2yuKMCPzokA', note: 'A sweeping orchestral theme reflecting the game\'s expanded scope across sky, surface, and depths.' },
    { title: 'Ganondorf\'s Theme', url: 'https://youtube.com/watch?v=IoybO37EztY', note: 'A menacing, choral-driven motif underscoring Ganondorf\'s ancient power and his resurgence as the game\'s central threat.' },
    { title: 'Zelda\'s Theme', url: 'https://youtube.com/watch?v=TP_jNqBU9WA', note: 'A reflective, melancholic piece tied to Zelda\'s personal sacrifice and connection to the ancient Zonai secret uncovered across the story.' }
  ],
  relatedTheoryTags: ['ganondorf', 'zonai', 'gloom', 'sky-islands'],
  stats: { metacritic: 96, avgPlaytime: null, salesApprox: null } // VERIFICAR - avgPlaytime and salesApprox omitted for lack of confident, up-to-date figures
},
];

// Helper: find a game by slug
export function getGameBySlug(slug) {
  return games.find((g) => g.slug === slug) || null;
}

// Helper: get all slugs (for routing / sitemap)
export function getAllSlugs() {
  return games.map((g) => g.slug);
}
