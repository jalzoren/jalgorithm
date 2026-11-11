/* ============================================================
   JALGORITHM — site content
   Source of truth: resume.md (Laurence James L. Flavier)
   ============================================================ */

export const profile = {
  name: 'JALGORITHM',
  fullName: 'Laurence James L. Flavier',
  wordmark: 'JALGORITHM',
  handle: '@jalgorithm',
  role: 'Front-end developer · UI/UX',
  thesis: 'I build interfaces that move.',
  thesisAccent: 'move.',
  roleLine: 'Front-end developer · UI/UX · Pasig City, PH',
  tagline:
    'BS Information Technology student at Pamantasan ng Lungsod ng Pasig with a focus on frontend architecture, UI/UX design, and backend systems — building interfaces that are fast, clean, and purposeful.',
  status: 'Open for internships & freelance',
  availability: 'Available for work',
  location: 'Pasig City, PH',
  coordinates: '14.58°N · 121.06°E',
  timezone: 'Asia/Manila',
  email: 'flavierlaurence01@gmail.com',
  phone: '0947 550 0689',
  linkedin: 'https://www.linkedin.com/in/laurence-james-flavier',
  github: 'https://github.com/jalzoren',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const marqueeItems = [
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'Tailwind',
  'Node.js',
  'Figma',
  'Supabase',
  'UI/UX',
  'REST APIs',
  'Electron',
  'Git',
  'MySQL',
]

export const heroCode = [
  { text: 'const jalgorithm = {' },
  { text: "  name:   'Laurence James Flavier'," },
  { text: "  stack:  ['react', 'next.js', 'python', 'node']," },
  { text: "  focus:  'frontend + ui/ux'," },
  { text: "  school: 'PLP – BS InfoTech'," },
  { text: "  status: 'available'," },
  { text: '}' },
]

export const about = {
  lead: 'I design and build interfaces that feel alive — clear, fast, and thoughtfully engineered.',
  paragraphs: [
    'I am a BS Information Technology student at Pamantasan ng Lungsod ng Pasig with a strong interest in web development and software testing. I have hands-on experience building web-based projects using HTML, JavaScript, and Python, with exposure to hardware/software setup and troubleshooting.',
    'My work sits at the intersection of frontend architecture and UI/UX. I care about component design, clean interfaces, and performant systems as much as the visual result. I also have solid backend experience: RESTful APIs, data models, auth, CRUD, and deployment-ready systems.',
    'I am currently looking for internships and freelance projects where I can ship real, impactful interfaces.',
  ],
  facts: [
    { label: 'Full name', value: 'Laurence James L. Flavier' },
    { label: 'Based in', value: 'Pasig City, Metro Manila' },
    { label: 'School', value: 'Pamantasan ng Lungsod ng Pasig' },
    { label: 'Degree', value: 'BS Information Technology' },
    { label: 'Focus', value: 'Frontend · UI/UX · Backend' },
    { label: 'Status', value: 'Open for internships & freelance' },
  ],
  now: [
    { label: 'Building', value: 'Frontend interfaces and small tools people actually use' },
    { label: 'Learning', value: 'Motion, accessibility, and component patterns' },
    { label: 'Reading', value: 'Interaction design and frontend architecture' },
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
    label: 'Frontend',
    note: 'The core',
    items: [
      { name: 'React.js', note: 'Core' },
      { name: 'Next.js', note: 'Core' },
      { name: 'TypeScript', note: 'Daily' },
      { name: 'JavaScript (ES6+)', note: 'Core' },
      { name: 'HTML / CSS', note: 'Core' },
      { name: 'Tailwind CSS', note: 'Daily' },
    ],
  },
  {
    label: 'Backend & Databases',
    note: 'The engine',
    items: [
      { name: 'Node.js', note: 'Daily' },
      { name: 'Express', note: 'Daily' },
      { name: 'Python', note: 'Core' },
      { name: 'PHP', note: 'Working' },
      { name: 'MySQL', note: 'Daily' },
      { name: 'PostgreSQL', note: 'Working' },
      { name: 'Supabase', note: 'Working' },
    ],
  },
  {
    label: 'UI/UX & Design',
    note: 'The thinking',
    items: [
      { name: 'Figma', note: 'Daily' },
      { name: 'Canva', note: 'Daily' },
      { name: 'Wireframing', note: 'Daily' },
      { name: 'Responsive design', note: 'Core' },
      { name: 'Design systems', note: 'Learning' },
    ],
  },
  {
    label: 'Tools & Other',
    note: 'The support',
    items: [
      { name: 'Git / GitHub', note: 'Daily' },
      { name: 'Electron.js', note: 'Working' },
      { name: 'Flutter', note: 'Learning' },
      { name: 'REST APIs', note: 'Daily' },
      { name: 'Project Management', note: 'Working' },
    ],
  },
]

export const projects = [
  {
    title: 'Demand Forecasting System',
    subtitle: 'Academic capstone · Supply chain',
    category: 'Forecasting system',
    blurb:
      'An XGBoost-powered demand forecasting system for micro-enterprise food service, designed to help reduce stock shortages.',
    description:
      'Academic capstone project at Pamantasan ng Lungsod ng Pasig. Built an XGBoost system that forecasts daily and weekly product demand to reduce stock shortages. It generates ingredient estimates, reorder recommendations, visual analytics, and automated alerts for supply chain planning. Forecast accuracy was evaluated to identify high- and low-demand products.',
    tags: ['XGBoost', 'Demand forecasting', 'Supply chain', 'Food service', 'Capstone'],
    link: 'https://github.com/jerimiahbitancor/Demand-Forecasting-System',
    status: 'Academic',
    plate: 'grid',
    accent: 'green',
    featured: true,
  },
  {
    title: 'Hospital Content Management System',
    subtitle: 'Healthcare · Content platform',
    category: 'Content platform',
    blurb:
      'A hospital website and admin panel for keeping services, doctors, announcements, and patient information up to date.',
    description:
      'A content management system for hospital staff paired with a public information website. Staff can manage announcements, news, events, careers, health tips, doctors, departments, media, and site settings; visitors can browse services and hospital information.',
    tags: ['JavaScript', 'PHP', 'Supabase', 'Healthcare'],
    link: 'https://github.com/jalzoren/SIA-CMS',
    status: 'GitHub',
    plate: 'grid',
    accent: 'primary',
    featured: true,
  },
  {
    title: 'Smart Attendance System',
    subtitle: 'Campus system · Analytics',
    category: 'Campus system',
    blurb:
      'A desktop system for logging student entry and exit, managing attendance, and viewing institutional analytics.',
    description:
      'An integrated entrance, exit, and attendance monitoring system for Pamantasan ng Lungsod ng Pasig. It records student attendance through face recognition or manual ID input, while an administrator dashboard supports log review, report export, analytics, and authentication monitoring.',
    tags: ['React', 'Vite', 'Electron.js', 'Python', 'Node.js', 'MySQL'],
    link: 'https://github.com/jalzoren/Entrance-and-Exit-Monitoring-PLP-Students',
    status: 'GitHub',
    plate: 'grid',
    accent: 'green',
  },
  {
    title: 'Tincase Interactive Info Website',
    subtitle: 'Interactive profile · Web',
    category: 'Interactive web',
    blurb:
      'A playful profile experience with clickable stickers, popups, animated transitions, and responsive layouts.',
    description:
      'A personal interactive website inspired by Carrd and Tincase aesthetics. Visitors explore profile information and interests through clickable stickers, dynamic text, loading transitions, animations, and a visitor counter.',
    tags: ['React', 'JavaScript', 'CSS', 'Animation'],
    link: 'https://github.com/jalzoren/TINCASE-INTERACTIVE-WEBSITE',
    status: 'GitHub',
    plate: 'wave',
    accent: 'primary',
  },
  {
    title: 'Clinic Monitoring System',
    subtitle: 'Healthcare · Clinic operations',
    category: 'Clinic system',
    blurb:
      'A web-based clinic application for organizing patient information, medical and dental records, and medicine inventory.',
    description:
      'A clinic operations system for Pamantasan ng Lungsod ng Pasig. Its listed modules include administrator login, a dashboard, health services and dental forms, borrowing records, daily transactions, and medicine inventory.',
    tags: ['Healthcare', 'Patient records', 'Inventory'],
    link: 'https://github.com/jalzoren/PLP-CLINIC-M-S',
    status: 'GitHub',
    plate: 'grid',
    accent: 'green',
  },
  {
    title: 'Balloon Words Blitz',
    subtitle: 'Word game · Interactive',
    category: 'Word game',
    blurb:
      'A hangman-style word game where Theo tries to stay afloat with five balloons.',
    description:
      'Theo’s Aerial Misfortune: Balloon Words Blitz is a hangman-style game built around guessing words while Theo drifts into the sky. The repository includes menu, prompt, and gameplay artwork.',
    tags: ['Word game', 'Hangman', 'Interactive'],
    link: 'https://github.com/ychine/TAMBWB',
    status: 'GitHub',
    plate: 'path',
    accent: 'primary',
  },
  {
    title: 'MAICRAFTS',
    subtitle: 'E-commerce · Handmade goods',
    category: 'E-commerce',
    blurb:
      'An e-commerce website concept showcasing handcrafted floral arrangements, crochet pieces, and other creative goods.',
    description:
      'A sample online shop created for an e-commerce system requirement. MAICRAFTS presents handmade floral pieces, dolls, custom bags, decorations, and seasonal gifts.',
    tags: ['E-commerce', 'React', 'Supabase', 'Handmade'],
    link: 'https://github.com/jerimiahbitancor/MAICRAFTS',
    status: 'GitHub',
    plate: 'hero',
    accent: 'green',
  },
]

export const experience = [
  {
    period: 'Nov 2026',
    role: 'Hackathon Participant',
    org: 'Hackathon',
    blurb:
      'Built a working web-based application in 5 hours — from concept to deployed prototype under competition pressure.',
    status: 'Live',
  },
  {
    period: '2024 – 2025',
    role: 'Layout Artist',
    org: 'Lundayan Student Publication, Pamantasan ng Lungsod ng Pasig',
    blurb:
      'Designed layouts for social media posts and the official school newspaper, applying visual design principles to editorial content.',
    status: 'Live',
  },
]

export const certifications = [
  {
    title: 'AWS Foundations: Machine Learning Basics',
    issuer: 'Amazon Web Services (AWS) / FutureLearn',
    date: 'Oct 2026',
    skills: ['AWS'],
  },
  {
    title: 'Foundations of Software Testing and Validation',
    issuer: 'University of Leeds, Click Start & Institute of Coding',
    date: 'Oct 2026',
    skills: ['Software Testing', 'SDLC'],
  },
  {
    title: 'Understanding Machine Learning',
    issuer: 'DataCamp',
    date: 'Oct 2026',
    skills: ['Machine Learning'],
    credentialId: '6fed34d4c5402d8d13379f89facced93415fbcf9',
  },
  {
    title: 'Cybersecurity',
    issuer: 'Asian Development Bank Institute',
    date: 'Oct 2026',
    skills: ['Cybersecurity'],
    credentialId: '204345-179-258-0758',
  },
  {
    title: 'Digital Skills: User Experience',
    issuer: 'Accenture / FutureLearn',
    date: 'Oct 2026',
    skills: ['UX Design', 'Responsive Web Design'],
  },
  {
    title: 'Google Cloud Fundamentals: Core Infrastructure',
    issuer: 'Google',
    date: 'Sep 2026',
    skills: ['Google Cloud Platform'],
    credentialId: '27541494',
  },
  {
    title: 'HTML Essentials',
    issuer: 'Cisco',
    date: 'Sep 2026',
    skills: ['HTML', 'Responsive Web Design'],
  },
]

export const school = {
  name: 'Pamantasan ng Lungsod ng Pasig',
  shortName: 'PLP',
  degree: 'BS Information Technology',
  yearLabel: '4th Year',
  period: '2023 – Present',
  expected: 'Expected graduation 2027',
  status: 'Ongoing',
  progress: 0.75,
  progressLabel: '4th year · on track',
  coursework: [
    'Web Systems & Technologies',
    'Object-Oriented Programming',
    'Data Structures & Algorithms',
    'Database Management',
    'UI/UX Design',
    'Software Engineering',
  ],
  note: 'Course list is representative; adjust to your actual curriculum.',
}

export const schoolShs = {
  name: 'Dee Hwa Liong Academy',
  shortName: 'DHLA',
  strand: 'Senior High School',
  period: '2021 – 2023',
  status: 'Graduated',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/jalzoren', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/laurence-james-flavier', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:flavierlaurence01@gmail.com', icon: 'mail' },
]

export const footer = {
  credit: '© 2026 Laurence James Flavier · Pasig City, PH',
}
