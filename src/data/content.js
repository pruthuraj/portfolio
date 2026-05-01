export const identity = {
  initials: 'PP',
  fullName: { first: 'Pruthuraj', last: 'Parikh' },
  tagline:
    'MSc High Integrity Systems student building ML pipelines, backend APIs, and data-driven software.',
  email: 'pruthurajparikh@gmail.com',
  location: 'Frankfurt am Main',
  availability: 'Open to Werkstudent roles - up to 20 hrs/week',
  socials: [
    { label: 'GitHub', href: 'https://github.com/pruthuraj' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/pruthuraj-parikh' },
  ],
  roles: ['ML Engineering', 'Backend Development', 'Data Engineering', 'High-Integrity Systems'],
}

export const sections = [
  { id: 'hero', label: 'Index' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const projects = [
  {
    n: '01',
    year: '2024 - Present',
    title: 'HexTTs',
    role: 'ML Engineer',
    tags: ['PyTorch', 'CUDA', 'VITS'],
    href: 'https://github.com/pruthuraj',
    blurb:
      'VITS text-to-speech model trained from scratch on 13,100 LJSpeech clips, with checkpoint resume, AMP, TensorBoard logging, mel caching, and Griffin-Lim inference.',
  },
  {
    n: '02',
    year: '2025 - Present',
    title: 'ECG Digital Twin',
    role: 'High Integrity Systems',
    tags: ['MATLAB', 'PTB-XL', 'V-Model'],
    href: 'https://github.com/pruthuraj',
    blurb:
      'Safety-critical ECG monitoring and simulation system with mode-based operation, watchdog supervision, SQI gating, fault injection, GUIs, and requirements-to-test traceability.',
  },
  {
    n: '03',
    year: '2023 - 2024',
    title: 'Datascope',
    role: 'Data Engineer',
    tags: ['Flask', 'MongoDB', 'Pandas'],
    href: 'https://github.com/pruthuraj',
    blurb:
      'Predictive price analytics platform with web scraping, data cleaning, REST APIs, MongoDB storage, CSV/XLSX exports, price-drop emails, and trend dashboards.',
  },
  {
    n: '04',
    year: '2024 - Present',
    title: 'WebReader',
    role: 'System Architect',
    tags: ['Firebase', 'SQLite3', 'JavaScript'],
    href: 'https://github.com/pruthuraj',
    blurb:
      'Digital library and user behavior platform with offline-first SQLite storage, Firebase Auth, real-time book updates, TTS processing, and engagement analytics.',
  },
]

export const stats = [
  { value: '13.1k', label: 'Audio Clips' },
  { value: '45M', label: 'TTS Params' },
  { value: '04', label: 'Major Projects' },
  { value: '9.11', label: 'BCA CGPA' },
]

export const skills = [
  { name: 'Python', level: 95 },
  { name: 'ML & Data', level: 88 },
  { name: 'Backend APIs', level: 86 },
  { name: 'Databases', level: 82 },
  { name: 'Data Engineering', level: 84 },
  { name: 'Frontend & Tools', level: 76 },
]

export const aboutCopy = [
  'I am an MSc student in High Integrity Systems at Frankfurt University of Applied Sciences, focused on ML engineering, backend systems, and data analytics.',
  'My work spans model training, REST APIs, data pipelines, safety-critical simulation, and practical software systems built from scratch. I am seeking a Werkstudent role in ML Engineering, Data Science, or Backend Development.',
]
