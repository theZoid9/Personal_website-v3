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
    screenshotSizes: [
      {
        width: 1440,
        height: 900,
      },
      {
        width: 1440,
        height: 900,
      },
      {
        width: 1440,
        height: 900,
      },
    ],
  },
  {
    id: 'what-to-cook',
    type: 'DINNER PICKER APP',
    title: 'What to Cook?',
    description:
      'A mobile-friendly dinner picker for choosing a main and side, with separate entry points for cooking and voting.',
    image: '/img/previews/what-to-cook-2.webp',
    screenshots: ['/img/previews/what-to-cook-2.webp', '/img/previews/what-to-cook-1.webp'],
    screenshotAlts: [
      'What to Cook dinner picker with main and side spin controls',
      'What to Cook entry screen with cooking and voting options',
    ],
    previewFormat: 'mobile',
    imageAlt: 'What to Cook mobile dinner picker',
    stack: ['JavaScript', 'Responsive UI', 'Meal planning'],
    href: 'https://what-to-cook-7mqy.onrender.com/login',
    action: 'Open the app',
    tone: 'peach',
    category: 'Mobile',
    caseStudy: {
      role: 'Mobile-friendly web application and dinner selection interface.',
      challenge:
        'Make deciding what to cook quick and approachable, with clear cooking and voting entry points.',
      result:
        'A live responsive app with a main-and-side dinner picker and a simple name-based entry flow.',
    },
    screenshotSizes: [
      {
        width: 780,
        height: 1688,
      },
      {
        width: 780,
        height: 1688,
      },
    ],
  },
  {
    id: 'data-wrangling',
    type: 'DATA APPLICATION',
    title: 'Data wrangling',
    description: 'A notebook-led exploration of cleaning, transforming and understanding data.',
    image: '/img/previews/data-wrangling-1.webp',
    animation: '/img/data_wrangle.gif',
    screenshots: [
      '/img/previews/data-wrangling-1.webp',
      '/img/previews/data-wrangling-2.webp',
      '/img/previews/data-wrangling-3.webp',
    ],
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
    screenshotSizes: [
      {
        width: 1920,
        height: 1080,
      },
      {
        width: 1920,
        height: 1080,
      },
      {
        width: 1920,
        height: 1080,
      },
    ],
  },
  {
    id: 'floating-library',
    type: '3D BOOK MANAGEMENT',
    title: 'Floating Library',
    description:
      'An interactive 3D bookshelf where you orbit floating covers, explore book details and manage your reading collection.',
    image: '/img/previews/floating-library-1.webp',
    screenshots: [
      '/img/previews/floating-library-1.webp',
      '/img/previews/floating-library-2.webp',
      '/img/previews/floating-library-3.webp',
    ],
    screenshotAlts: [
      'Floating Library 3D collection of book covers',
      'Floating Library add-book form with cover and PDF or EPUB uploads',
      'Floating Library book details with reading and save controls',
    ],
    imageAlt: 'Floating Library interactive 3D book collection',
    stack: ['Three.js', 'JavaScript', 'WebGL'],
    href: 'https://book-management-pwjx.onrender.com/',
    action: 'Explore the library',
    tone: 'lavender',
    category: '3D',
    caseStudy: {
      role: 'Interactive 3D library and book management interface.',
      challenge:
        'Make a book collection browsable in 3D while keeping book details, reading and collection tools easy to reach.',
      result:
        'A live library with orbit and zoom controls, book detail panels, a reading view and an add-book form for covers and PDF or EPUB files.',
    },
    screenshotSizes: [
      {
        width: 1440,
        height: 960,
      },
      {
        width: 1440,
        height: 960,
      },
      {
        width: 1440,
        height: 960,
      },
    ],
  },
  {
    id: 'algoscope',
    type: 'ALGORITHM VISUALIZER',
    title: 'AlgoScope',
    description:
      'An interactive learning tool for exploring data structures and algorithms in 2D and 3D, with guided code steps, execution traces and recursive call stacks.',
    image: '/img/previews/algoscope-1.webp',
    screenshots: [
      '/img/previews/algoscope-1.webp',
      '/img/previews/algoscope-2.webp',
      '/img/previews/algoscope-3.webp',
    ],
    screenshotAlts: [
      'AlgoScope linked-list visualization with operation controls and code panel',
      'AlgoScope 3D boxes during a step-by-step append operation',
      'AlgoScope Fibonacci walkthrough with highlighted code, call stack and execution trace',
    ],
    imageAlt: 'AlgoScope visual data structures and algorithms',
    stack: ['JavaScript', 'Data structures', '3D visualization'],
    href: 'https://algoscope-hsyz.onrender.com/',
    action: 'Explore AlgoScope',
    tone: 'blue',
    category: 'Web',
    caseStudy: {
      role: 'Interactive algorithm lessons and visual learning interface.',
      challenge:
        'Keep visual data structures, highlighted source code and execution traces synchronized so each operation is easy to follow.',
      result:
        'A live visualizer with linked lists, stacks, queues, algorithm lessons, 2D and 3D views, and guided recursive walkthroughs.',
    },
    screenshotSizes: [
      {
        width: 1440,
        height: 960,
      },
      {
        width: 1440,
        height: 960,
      },
      {
        width: 1440,
        height: 960,
      },
    ],
  },
];

export const applicationCategories = [
  'All',
  ...new Set(applications.map(({ category }) => category)),
];
