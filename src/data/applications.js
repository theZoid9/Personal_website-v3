export const applications = [
  {
    id: 'code-to-move',
    type: 'CODING PUZZLE GAME',
    title: 'Code to Move',
    description:
      'A programming puzzle game where you write code to guide an agent through mazes, clear missions and unlock the skill tree.',
    image: '/img/previews/code-to-move-1.webp',
    screenshots: [
      '/img/previews/code-to-move-1.webp',
      '/img/previews/code-to-move-2.webp',
      '/img/previews/code-to-move-3.webp',
    ],
    imageAlt: 'Code to Move (Algorithm Prison) code editor and maze puzzle',
    stack: ['Next.js', 'React', 'JavaScript'],
    href: 'https://code-to-move.onrender.com/',
    action: 'Play the game',
    tone: 'mint',
    category: 'Web',
    caseStudy: {
      role: 'Web application and interactive gameplay.',
      challenge:
        'Turn programming instructions into visible agent movement, mission objectives and a clear progression path.',
      result:
        'A live browser game with a code editor, maze simulation, execution logs and an unlockable skill tree.',
    },
  },
  {
    id: 'place-marker',
    type: 'MOBILE APP CONCEPT',
    title: 'Place Marker',
    description:
      'A pocket-sized map concept for saving favourite spots and quickly switching between places.',
    stack: ['Mobile UI', 'Maps', 'React'],
    tone: 'peach',
    category: 'Mobile',
    caseStudy: {
      role: 'Concept exploration within this portfolio.',
      challenge: 'Design goal: make saved places easy to find through a compact map interface.',
      result:
        'An interface mockup showing map pins, a saved-place card and navigation. This is a concept, not a released mobile application.',
    },
  },
  {
    id: 'data-wrangling',
    type: 'DATA APPLICATION',
    title: 'Data wrangling',
    description: 'A notebook-led exploration of cleaning, transforming and understanding data.',
    image: '/img/previews/data-wrangling-1.webp',
    animation: '/img/data_wrangle.gif',
    screenshots: [1, 2, 3].map((number) => '/img/previews/data-wrangling-' + number + '.webp'),
    imageAlt: 'Data wrangling notebook preview',
    stack: ['Python', 'Jupyter', 'Data cleaning'],
    href: 'https://github.com/theZoid9/Data-wrangling',
    action: 'Explore repository',
    tone: 'blue',
    category: 'Data',
    caseStudy: {
      role: 'Contribution details to be added.',
      challenge:
        'Project focus: clean and transform data in a notebook so the exploration can be followed step by step.',
      result:
        'A notebook project with a preview and source repository. Dataset findings and measured improvements have not been added.',
    },
  },
  {
    id: 'snaaake',
    type: '3D WEB EXPERIMENT',
    title: 'Snaaake — 3D',
    description: 'A familiar arcade game reimagined as a playful, browser-based 3D experience.',
    image: '/img/previews/snaaake-1.webp',
    animation: '/img/snake.gif',
    screenshots: [1, 2, 3].map((number) => '/img/previews/snaaake-' + number + '.webp'),
    imageAlt: 'Three dimensional Snaaake game preview',
    stack: ['Three.js', 'JavaScript', 'CSS'],
    href: 'https://snakethreejs.onrender.com',
    action: 'Play the game',
    tone: 'lavender',
    category: 'Games',
    caseStudy: {
      role: 'Contribution details to be added.',
      challenge:
        'Project focus: translate familiar Snake gameplay into a browser-based 3D presentation.',
      result:
        'A playable browser experiment with a game preview. Player feedback and performance measurements have not been added.',
    },
  },
];

export const applicationCategories = [
  'All',
  ...new Set(applications.map(({ category }) => category)),
];
