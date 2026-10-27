export const panels = [
  { id: 'home', label: 'Home', number: '01' },
  { id: 'about', label: 'About', number: '02' },
  { id: 'applications', label: 'Apps', number: '03' },
  {
    id: 'all-projects',
    label: 'All work',
    number: '04',
    hiddenFromNav: true,
    navigationId: 'applications',
  },
  { id: 'skills', label: 'Skills', number: '05' },
  { id: 'contact', label: 'Contact', number: '06' },
];
