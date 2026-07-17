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
    year: '2026',
    title: 'ADAS Safety Monitor',
    role: 'ML & Safety Engineer',
    tags: ['YOLOv8n', 'TensorRT', 'OOD Monitor', 'SOTIF'],
    href: 'https://github.com/pruthuraj/Safety-Monitored-Edge-Perception-for-ADAS',
    blurb:
      'Camera-only YOLOv8n detector (KITTI) accelerated with TensorRT FP16, supervised by a runtime out-of-distribution monitor driving a NOMINAL / DEGRADED / FAIL_SAFE state machine. Reached mAP50 0.856 at 17.2 ms full-loop p95 (vs 40 ms budget) and 0.982 night-OOD AUROC, backed by an STPA/HARA → SR-01..06 → GSN safety case aligned to SOTIF and ISO/PAS 8800.',
  },
  {
    n: '02',
    year: '2026 – Present',
    title: 'HexTTs',
    role: 'ML Engineer',
    tags: ['PyTorch', 'CUDA', 'VITS'],
    href: 'https://github.com/pruthuraj/HexTTs',
    blurb:
      'Built a full VITS text-to-speech pipeline from scratch on 13,100 LJSpeech clips. Implemented AMP training, checkpoint resume, mel spectrogram caching, and TensorBoard logging — reducing iteration time ~30% through mixed-precision and cache optimisations.',
  },
  {
    n: '03',
    year: '2026 – Present',
    title: 'Shared Memory MCP',
    role: 'Backend Architect',
    tags: ['Node.js', 'SQLite', 'WebSocket', 'MCP'],
    href: 'https://github.com/pruthuraj/sharedMemory',
    blurb:
      'Multi-agent coordination service with persistent memory backend, semantic search, and bidirectional graph relations. Dual-protocol support (WebSocket + MCP stdio), TTL management, and AI-powered memory suggestions for distributed agent systems.',
  },
  {
    n: '04',
    year: '2025 – 2026',
    title: 'ECG Digital Twin',
    role: 'High Integrity Systems',
    tags: ['MATLAB', 'PTB-XL', 'V-Model'],
    href: 'https://github.com/pruthuraj/ECG_Digital_Twin',
    blurb:
      'Safety-critical ECG monitoring system following the V-Model lifecycle on the PTB-XL dataset. Delivered mode-based operation, watchdog supervision, SQI gating, fault injection testing, and full requirements-to-test traceability.',
  },
  {
    n: '05',
    year: '2024 – Present',
    title: 'WebReader',
    role: 'System Architect',
    tags: ['Firebase', 'SQLite3', 'JavaScript'],
    href: 'https://github.com/pruthuraj/NovelReaderApp',
    blurb:
      'Offline-first digital library with SQLite local storage, Firebase Auth, and real-time book sync. Integrated TTS processing and engagement analytics tracking reading behaviour, with network-fallback mechanisms ensuring content access offline.',
  },
  {
    n: '06',
    year: '2023 – 2024',
    title: 'Datascope',
    role: 'Data Engineer',
    tags: ['Flask', 'MongoDB', 'Pandas'],
    href: 'https://github.com/pruthuraj/DataScope',
    blurb:
      'Full-stack price analytics platform with automated web scraping, Pandas-driven data cleaning, Flask REST API, and MongoDB storage. Added price-drop email alerts, trend dashboards, and CSV/XLSX exports for end-user reporting.',
  },
]

export const stats = [
  { value: '13.1k', label: 'Audio Clips' },
  { value: '45M', label: 'TTS Params' },
  { value: '06', label: 'Major Projects' },
  { value: '9.11', label: 'BCA CGPA' },
]

export const skillGroups = [
  { category: 'Languages', tools: ['Python', 'JavaScript', 'SQL', 'MATLAB'] },
  { category: 'ML / Data', tools: ['PyTorch', 'NumPy', 'Pandas', 'TensorBoard', 'CUDA', 'TensorRT'] },
  { category: 'Backend', tools: ['Flask', 'REST APIs', 'FastAPI'] },
  { category: 'Databases', tools: ['MongoDB', 'SQLite', 'Firebase'] },
  { category: 'Tools', tools: ['Git', 'Linux', 'Vite', 'GitHub Actions'] },
]

export const education = [
  {
    degree: 'MSc High Integrity Systems',
    institution: 'Frankfurt University of Applied Sciences',
    period: '2024 – Present',
  },
  {
    degree: 'BCA',
    institution: 'Parul University',
    period: '2021 – 2024',
    note: 'CGPA 9.11',
  },
]

export const aboutCopy = [
  'I am an MSc student in High Integrity Systems at Frankfurt University of Applied Sciences, focused on ML engineering, backend systems, and data analytics.',
  'My work spans model training, REST APIs, data pipelines, safety-critical simulation, and practical software systems built from scratch. I am seeking a Werkstudent role in ML Engineering, Data Science, or Backend Development.',
]
