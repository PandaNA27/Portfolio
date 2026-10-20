/* =====================================================================
   EDIT THIS FILE TO FILL IN YOUR PORTFOLIO
   ---------------------------------------------------------------------
   Every card and page on the site comes from this file.
   Project options:
   - thumb:   path to an image, e.g. "assets/3d/elixir-props.jpg"
              (leave out to show a pastel placeholder)
   - video:   optional. A YouTube ID ("dQw4w9WgXcQ"), "vimeo:123456789",
              "gdrive:FILE_ID" (Google Drive, shared as "anyone with the link"),
              "tiktok:VIDEO_ID" (the number at the end of a TikTok video link)
              or a local .mp4 ("img/x.mp4")
   - images:  optional extra images shown under the project
   - link:    optional link (itch.io, YouTube ...)
   - hue:     angle of the placeholder gradient (0-360) until you add a thumb
   - fit:     "contain" to show the whole image (logos) instead of filling the box
   - pixel:   true for pixel art, keeps it crisp when scaled up
   - placeholder: text shown in the box when there's no image yet,
              e.g. "In development". With a link, the box opens that link.
   Game options: cover = the image on its card (wide images work best)
   A field or game with no projects shows "coming soon" placeholders.
   ===================================================================== */

/* Games you've worked on: the top row on the monitor.
   - logo: path to a logo image (transparent PNG/SVG works best).
           Leave null to show the title as a placeholder logo. */
const GAMES = [
  { title: "Longevity of the Elixir House", logo: null,
    role: "Project Manager · Programmer · 3D Artist", year: "2026", platform: "PC · Unreal Engine",
    team: "Team · Final year project", hue: 20,
    cover: "img/elixir/cover.jpg",
    link: "https://uowmgames.itch.io/dong-nan-xi-bei-studio-fyp-game",
    desc: "A job simulation game where you sell pills to unique customers in a cultivation academy, " +
      "and learn more about Chinese cultivation along the way. I created all of the 3D models, " +
      "built most of the Blueprints, did some of the script programming, and managed the project.",
    projects: [
      { title: "Cover page", thumb: "img/elixir/cover.jpg", tags: ["In development"] },
      { title: "Logo", thumb: "img/elixir/logo.png", fit: "contain", tags: ["Game logo"] },
    ] },
  { title: "Rough Waters", logo: null,
    role: "Lead Programmer · Core Systems · Gameplay", year: "2025", platform: "Mobile · Unity",
    team: "Team · Student project", hue: 200,
    cover: "img/rough-waters/cover.jpg",
    link: "https://uowmgames.itch.io/rough-waters",
    desc: "A 3D mobile 4X turn-based strategy game set in a post-flood world ruled by mutated sea " +
      "creatures and massive trees. Explore flooded territories, unlock resources and expand your " +
      "empire while facing the Kraken and rival factions. I led the programming team, built the " +
      "core systems and co-programmed the gameplay.",
    projects: [
      { title: "Exploring the map", thumb: "img/rough-waters/map.jpg", tags: ["Gameplay"] },
      { title: "Claiming territory", thumb: "img/rough-waters/territory.jpg", tags: ["Gameplay"] },
      { title: "Training units", thumb: "img/rough-waters/units.jpg", tags: ["Core systems", "UI"] },
      { title: "Tech tree", thumb: "img/rough-waters/tech-tree.jpg", tags: ["Core systems"] },
    ] },
  { title: "Welcome Adventurer", logo: null,
    role: "UI Programmer", year: "2025", platform: "PC · Unity",
    team: "Team · Student project", hue: 120,
    cover: "img/welcome-adventurer/cover.jpg",
    link: "https://uowmgames.itch.io/welcome-adventurer",
    desc: "A 2D single-player static shooter where you play as a maid looking after her master's " +
      "mansion, until a group of adventurers decide to ruin her peaceful day by stealing the " +
      "treasure. I did all of the programming behind the UI.",
    projects: [
      { title: "Start screen", thumb: "img/welcome-adventurer/start.jpg", tags: ["UI"] },
      { title: "Defending the treasure", thumb: "img/welcome-adventurer/combat.jpg", tags: ["Gameplay", "HUD"] },
      { title: "Night market shop", thumb: "img/welcome-adventurer/night-market.jpg", tags: ["UI", "Shop system"] },
    ] },
  { title: "Cheryl's Choice", logo: null,
    role: "Solo developer · Pixel artist", year: "2024", platform: "PC / Web · Stencyl",
    team: "Student project", hue: 330,
    cover: "img/cheryls-choice/cover.png", pixel: true,
    link: "https://pandana27.itch.io/cheryls-choice",
    desc: "A narrative-driven 2D side-scrolling adventure about the complex bond between a mother " +
      "and her daughter, where your choices shape Cheryl's journey and its ending. I made the " +
      "whole game on my own, including the pixel art environments and characters.",
    projects: [
      { title: "Keying in the code", thumb: "img/cheryls-choice/keypad.png", pixel: true, tags: ["Puzzle", "Pixel art"] },
      { title: "The diner", thumb: "img/cheryls-choice/diner.png", pixel: true, tags: ["Pixel art environment"] },
      { title: "The hospital", thumb: "img/cheryls-choice/hospital.png", pixel: true, tags: ["Pixel art environment"] },
    ] },
];

const SITE = {
  alias: "Ashley",
  tagline: "Game Programmer & 3D Artist",
  year: "2026",
};

/* The Summary section between the monitor and About.
   - stats:      big numbers (n) with a short label
   - strip:      images that scroll slowly across the page
   - highlights: cards that open a game or field page when clicked.
                 link is "#/game/<name>" or "#/field/<id>" */
const SUMMARY = {
  heading: "A quick look at what I make",
  intro: "From leading a team's code to modelling every asset in a game and cutting client ads " +
    "during my internship, I like working right where code and art meet.",
  stats: [
    { n: 4, label: "Games worked on" },
    { n: 3, label: "Game engines", note: "Unreal · Unity · Stencyl" },
    { n: 6, label: "Motion & video pieces" },
    { n: 1, label: "Industry internship" },
  ],
  strip: [
    "img/rough-waters/cover.jpg", "img/3d/frog-full.jpg", "img/welcome-adventurer/cover.jpg",
    "img/3d/smaragd-1.jpg", "img/elixir/cover.jpg", "img/3d/well-full.jpg",
    "img/welcome-adventurer/combat.jpg", "img/3d/clock-render.png", "img/rough-waters/map.jpg",
    "img/cheryls-choice/diner.png",
  ],
  highlights: [
    { title: "Lead programmer", img: "img/rough-waters/tech-tree.jpg",
      text: "Led the programming team and built the core systems for Rough Waters, a 3D mobile 4X strategy game.",
      link: "#/game/rough-waters" },
    { title: "Every 3D model", img: "img/elixir/cover.jpg",
      text: "Created all of the 3D models for our final year game, Longevity of the Elixir House.",
      link: "#/game/longevity-of-the-elixir-house" },
    { title: "Internship ads", icon: "play",
      text: "Made motion graphics and video ads for clients during my internship.",
      link: "#/field/motion-video" },
    { title: "A whole game, solo", img: "img/cheryls-choice/diner.png", pixel: true,
      text: "Made Cheryl's Choice entirely on my own, including all of the pixel art.",
      link: "#/game/cheryl-s-choice" },
  ],
};

const ABOUT = {
  intro:
    "I'm an aspiring Game Developer who works across code and art. I started out in " +
    "3D Modelling and Animation, then dived into Game Development, and I love building " +
    "interactive worlds that pull players in. I always try to be a little better than I " +
    "was the day before. :D",
  // A little bit of you, without personal details:
  currently: [
    { k: "making",   v: "Longevity of the Elixir House, my final year project" },
    { k: "playing",  v: "Action-packed shooters and complex strategy games" },
  ],
  facts: [
    "I'm happily an indoor person: gaming and reading books are my favourite ways to unwind",
    "I balance the screen time with trips to the gym",
    "My background is in 3D modelling and animation, mostly in Maya",
  ],
};

const SECTIONS = [
  {
    id: "motion-video",
    title: "Motion Graphics & Video Editing",
    blurb:
      "Animated graphics, motion design and video edits with an eye for pacing, built on a background in animation principles.",
    tools: ["Adobe After Effects", "Adobe Illustrator", "Adobe Photoshop", "CapCut"],
    projects: [
      { title: "Short-form edits on TikTok", tags: ["CapCut", "Short-form"], hue: 330,
        link: "https://www.tiktok.com/@ashwydoesthisndat",
        placeholder: "Watch on TikTok ↗",
        placeholderIcon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.5 3c.4 2.3 1.9 3.9 4.2 4.1v3.2c-1.6 0-3-.5-4.2-1.3v6.3a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .9.1v3.3a2.6 2.6 0 1 0 1.8 2.4V3h3.1z"/></svg>',
        desc: "Short-form videos I edit and post on TikTok." },
      { title: "Motion Graphic Reel", tags: ["After Effects", "Motion graphics", "Student project"],
        video: "gdrive:1hwvlUk5vfleWVTGtIUlfOeoUd0JM4fag",
        desc: "This video was made as a student project during my diploma years. It showcases what I can do with motion graphics." },
      { title: "HAPiMOMS", tags: ["Motion graphics", "Video editing"],
        video: "gdrive:1bVUTb76c0G1DHXpfxqTr2lZgbJZ4F3FJ",
        desc: "This video was made during my internship and it was for an advertisement for the company's clients." },
      { title: "HAPiHEROS", tags: ["Motion graphics", "Video editing"],
        video: "gdrive:12_BhdaORItw7wE_6huPvnHuO0X8Cj6Ez",
        desc: "This video was made during my internship and it was for an advertisement for the company's clients." },
      { title: "HAPiFAM", tags: ["Motion graphics", "Video editing"],
        video: "gdrive:1LI-Z85bem0gXgh64rkri-GjJ87_MOo6t",
        desc: "This video was made during my internship and it was for an advertisement for the company's clients." },
      { title: "HapiMama Handbook reel", tags: ["Motion graphics", "Video editing"],
        video: "gdrive:1Ry8iqPDlXfMhIjsiAxyHsSiF8DPMtGLM",
        desc: "This video was made during my internship and it was for an advertisement for the company's clients." },
      { title: "Merdeka", tags: ["After Effects", "Motion graphics", "Instagram"],
        video: "gdrive:1lGh1tXChPn6aPLK1ScA8vJPDEVGyJb5D",
        desc: "This was a short motion graphic reel made during my internship for my internship company's Instagram post." },
    ],
  },
  {
    id: "3d-modelling",
    title: "3D Modelling",
    blurb:
      "Game-ready 3D assets modelled in Maya and textured in Substance Painter, Mudbox and Photoshop, backed by a diploma in 3D modelling and animation.",
    tools: ["Maya", "Substance Painter", "Mudbox", "Adobe Photoshop"],
    projects: [
      { title: "Alarm clock", tags: ["Maya", "High poly"], hue: 200,
        thumb: "img/3d/clock-render.png", images: ["img/3d/clock-wireframe.png"],
        desc: "A high-poly alarm clock modelled in Autodesk Maya, shown in grey shade and wireframe." },
      { title: "Smaragd", tags: ["Maya", "Character"], hue: 160,
        thumb: "img/3d/smaragd-1.jpg", images: ["img/3d/smaragd-2.jpg", "img/3d/smaragd-wireframe.png"],
        desc: "A character model of Smaragd from the film Up and Away, built in Autodesk Maya, shown in wireframe from the front and three-quarter views." },
      { title: "Frog warrior", tags: ["Mudbox", "Character texturing"], hue: 210,
        thumb: "img/3d/frog-full.jpg", images: ["img/3d/frog-face.jpg", "img/3d/frog-armour.jpg"],
        desc: "Character texturing in Mudbox, with close-ups of the scar on the frog's face and the details on its armour and sword." },
      { title: "Wishing well", tags: ["Photoshop", "Object texturing"], hue: 120,
        thumb: "img/3d/well-full.jpg", images: ["img/3d/well-roof.jpg", "img/3d/well-detail.jpg"],
        desc: "Object texturing done in Adobe Photoshop, with close-ups of the roof tiles and the well." },
      { title: "Longevity of the Elixir House", year: "2026", tags: ["Maya", "Substance Painter", "Unreal Engine"], hue: 20,
        link: "https://uowmgames.itch.io/dong-nan-xi-bei-studio-fyp-game",
        placeholder: "In development ✿",
        desc: "I created all of the 3D models in our final year game. Renders coming soon." },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    blurb:
      "Gameplay, core systems and UI in Unity and Unreal Engine, from leading a team's codebase to building small games on my own.",
    tools: ["Unity (C#)", "Unreal Engine", "Blueprints", "Stencyl"],
    projects: [
      { title: "Rough Waters", year: "2025", tags: ["Unity", "Lead programmer", "Core systems"], hue: 200,
        thumb: "img/rough-waters/tech-tree.jpg",
        link: "https://uowmgames.itch.io/rough-waters",
        desc: "Led the programming team on a 3D mobile 4X strategy game, built the core systems and co-programmed the gameplay." },
      { title: "Welcome Adventurer", year: "2025", tags: ["Unity", "UI programming"], hue: 120,
        thumb: "img/welcome-adventurer/night-market.jpg",
        link: "https://uowmgames.itch.io/welcome-adventurer",
        desc: "Programmed all of the UI for a 2D static shooter." },
      { title: "Longevity of the Elixir House", year: "2026", tags: ["Unreal Engine", "Blueprints"], hue: 20,
        thumb: "img/elixir/cover.jpg",
        link: "https://uowmgames.itch.io/dong-nan-xi-bei-studio-fyp-game",
        desc: "Built most of the Blueprints and some of the scripting for our final year job simulation game." },
      { title: "Cheryl's Choice", year: "2024", tags: ["Stencyl", "Solo"], hue: 330,
        thumb: "img/cheryls-choice/keypad.png", pixel: true,
        link: "https://pandana27.itch.io/cheryls-choice",
        desc: "A narrative side-scroller I made entirely on my own." },
    ],
  },
];
