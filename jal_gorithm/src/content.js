export const profile = {
  name: 'JALGORITHM',
  wordmark: 'JALGORITHM',
  handle: '@jalgorithm',
  role: 'Full-stack developer · UI/UX',
  thesis: 'I build interfaces that move.',
  thesisAccent: 'move.',
  roleLine: 'Full-stack developer · UI/UX · Pasig City, PH',
  tagline:
    'Fourth-year Information Technology student at Pamantasan ng Lungsod ng Pasig, designing and building motion-rich web experiences with React, Next.js, and GSAP.',
  status: 'Open for internships & freelance',
  availability: 'Available for work',
  location: 'Pasig City, PH',
  coordinates: '14.58°N · 121.06°E',
  timezone: 'Asia/Manila',
  email: 'hello@jalgorithm.dev',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'school', label: 'School' },
  { id: 'contact', label: 'Contact' },
]

export const marqueeItems = [
  'React',
  'Next.js',
  'TypeScript',
  'GSAP',
  'Motion',
  'Tailwind',
  'Figma',
  'Node.js',
  'UI/UX',
  'Design systems',
  'Vite',
  'Git',
  'Accessibility',
]

export const heroCode = [
  { text: 'const jalgorithm = {' },
  { text: "  role: 'front-end engineer'," },
  { text: "  stack: ['react', 'next.js', 'gsap']," },
  { text: "  focus: 'motion + ui/ux'," },
  { text: "  status: 'available'," },
  { text: '}' },
]

export const about = {
  lead: 'I design and build interfaces that feel alive — clear, fast, and quietly expressive.',
  paragraphs: [
    'I am a fourth-year Information Technology student at Pamantasan ng Lungsod ng Pasig, focused on modern front-end engineering: React, Next.js, and the motion systems that make interfaces feel natural.',
    'My work sits where development meets design. I care about easing curves, accessible layouts, and maintainable components as much as the visual result.',
    'Right now I am looking for internships and freelance projects where I can ship real interfaces and keep raising the bar on craft.',
  ],
  facts: [
    { label: 'Name', value: 'Jalgorithm' },
    { label: 'Based in', value: 'Pasig City, Philippines' },
    { label: 'School', value: 'Pamantasan ng Lungsod ng Pasig' },
    { label: 'Year', value: '4th year, BS Information Technology' },
    { label: 'Focus', value: 'Front-end · UI/UX · Motion' },
    { label: 'Status', value: 'Open for internships & freelance' },
  ],
  now: [
    { label: 'Building', value: 'Motion-rich React interfaces' },
    { label: 'Learning', value: 'GSAP, design systems, and WebGL' },
    { label: 'Reading', value: 'Interaction design and type' },
  ],
  principles: [
    {
      title: 'Motion with meaning',
      text: 'Every transition should explain a state, a relationship, or a hierarchy.',
    },
    {
      title: 'Accessible by default',
      text: 'Keyboard paths, reduced motion, and contrast are part of the design, not a patch.',
    },
    {
      title: 'Ship the craft',
      text: 'Details are the product: spacing, easing, copy, and the last 10%.',
    },
  ],
}

export const skillGroups = [
  {
    label: 'Front-end',
    note: 'The core',
    items: [
      { name: 'React', note: 'Core' },
      { name: 'Next.js', note: 'Core' },
      { name: 'TypeScript', note: 'Daily' },
      { name: 'JavaScript (ES6+)', note: 'Core' },
      { name: 'HTML5 / CSS3', note: 'Core' },
    ],
  },
  {
    label: 'Styling & Motion',
    note: 'The feel',
    items: [
      { name: 'Tailwind CSS', note: 'Daily' },
      { name: 'GSAP + ScrollTrigger', note: 'Core' },
      { name: 'Motion / Framer Motion', note: 'Core' },
      { name: 'CSS keyframe animation', note: 'Core' },
      { name: 'Responsive design', note: 'Core' },
    ],
  },
  {
    label: 'UI/UX Design',
    note: 'The thinking',
    items: [
      { name: 'Figma', note: 'Daily' },
      { name: 'Wireframing', note: 'Daily' },
      { name: 'Prototyping', note: 'Core' },
      { name: 'Design systems', note: 'Learning' },
    ],
  },
  {
    label: 'Tools & Backend',
    note: 'The support',
    items: [
      { name: 'Node.js', note: 'Learning' },
      { name: 'Git / GitHub', note: 'Daily' },
      { name: 'REST APIs', note: 'Daily' },
      { name: 'Vite / npm', note: 'Daily' },
    ],
  },
]

export const projects = [
  {
    title: 'AlgoVis',
    subtitle: 'Algorithm visualizer',
    year: '2026',
    blurb:
      'Interactive visualizer for sorting and pathfinding algorithms, rendered on canvas with step-by-step playback controls and complexity notes.',
    tags: ['React', 'TypeScript', 'Canvas API'],
    link: '#',
    status: 'Template',
    plate: 'sort',
    accent: 'primary',
    featured: true,
  },
  {
    title: 'JStore',
    subtitle: 'POS web app',
    year: '2025',
    blurb:
      'Point-of-sale and inventory dashboard for a campus store: product catalog, cart flow, receipts, and daily sales reporting.',
    tags: ['Next.js', 'Tailwind', 'Supabase'],
    link: '#',
    status: 'Template',
    plate: 'grid',
    accent: 'green',
  },
  {
    title: 'Schedula',
    subtitle: 'Smart timetable',
    year: '2025',
    blurb:
      'Class scheduling tool that builds conflict-free timetables from course data and exports them straight to calendar.',
    tags: ['React', 'Node.js', 'REST API'],
    link: '#',
    status: 'Template',
    plate: 'path',
    accent: 'sandy',
  },
  {
    title: 'MotionLab',
    subtitle: 'UI component playground',
    year: '2024',
    blurb:
      'A playground of animated interface components: reveals, marquees, and magnetic buttons, built to study motion choreography.',
    tags: ['React', 'Motion', 'CSS'],
    link: '#',
    status: 'Template',
    plate: 'wave',
    accent: 'red',
  },
]

export const experience = [
  {
    period: '2025 – Present',
    role: 'Freelance Web Developer',
    org: 'Independent',
    blurb:
      'Designing and building responsive, animated websites for small businesses and student organizations.',
    status: 'Template',
  },
  {
    period: '2024 – 2025',
    role: 'Web Development Officer',
    org: 'IT Society, Pamantasan ng Lungsod ng Pasig',
    blurb:
      'Maintained the organization site and ran hands-on React and UI/UX sessions for members.',
    status: 'Template',
  },
  {
    period: '2024',
    role: 'Hackathon Participant',
    org: 'Campus Hackathon',
    blurb:
      'Built a working web prototype in 24 hours with a three-person team, from idea to demo.',
    status: 'Template',
  },
]

export const school = {
  name: 'Pamantasan ng Lungsod ng Pasig',
  degree: 'BS Information Technology',
  yearLabel: '4th Year',
  expected: 'Expected graduation 2027',
  status: 'Ongoing',
  progress: 0.82,
  progressLabel: '4th year · on track',
  coursework: [
    'Web Systems & Technologies',
    'Object-Oriented Programming',
    'Data Structures & Algorithms',
    'Database Management',
    'UI/UX Design',
    'Software Engineering',
  ],
  note: 'Course list is a template; adjust to your actual curriculum.',
}

export const socials = [
  { label: 'GitHub', href: '#', icon: 'github' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'Email', href: 'mailto:hello@jalgorithm.dev', icon: 'mail' },
]

export const footer = {
  credit: '© 2026 Jalgorithm · Pasig City, PH',
  built: 'Built with React, GSAP & Motion',
}
