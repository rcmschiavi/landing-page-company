export interface ExperienceEntry {
  company: string;
  domain: string;
  roles: { title: string; period: string }[];
  location: string;
  bullets: string[];
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Celcoin',
    domain: 'Fintech',
    roles: [{ title: 'Senior Software Engineer', period: 'Jul 2024 – Present' }],
    location: 'Remote',
    bullets: [
      'Building new features, projects, and services in Node.js and Java on a cloud-hosted banking platform.',
      'Driving the refactoring and upgrade of legacy projects to current versions and patterns, unblocking new development as the products grow.',
    ],
    tech: ['Node.js', 'Java', 'Cloud'],
  },
  {
    company: 'Linker',
    domain: 'Fintech',
    roles: [
      { title: 'Backend Chapter Lead', period: 'Oct 2023 – Jul 2024' },
      { title: 'Software Engineer', period: 'Aug 2021 – Oct 2023' },
    ],
    location: 'Remote',
    bullets: [
      'Built APIs for business banking and fiscal management: cash flow, service-invoice issuance, credit-card spend management, and KYC onboarding for companies and fiscal officers.',
      'Python microservices over MariaDB, PostgreSQL, DynamoDB, and Redis, with a Node.js interface layer on AWS Lambda.',
      'As Chapter Lead, coordinated the backend team on technical debt, process improvements, and technology choices.',
    ],
    tech: ['Python', 'Node.js', 'AWS Lambda', 'PostgreSQL', 'DynamoDB', 'Redis'],
  },
  {
    company: 'Marlex',
    domain: 'Surgical robotics',
    roles: [{ title: 'Product Development Engineer', period: 'Sep 2020 – Aug 2021' }],
    location: 'São José, Brazil',
    bullets: [
      'Developed and integrated systems and equipment for laparoscopic-surgery applications.',
      'Simulation and control of robotic systems with ROS and Python, a RESTful Python processing/control service, and an Android control app.',
      'Automated testing for anthropomorphic-robot trajectory simulation.',
    ],
    tech: ['Python', 'ROS', 'Android', 'REST'],
  },
];

export const earlierRoles =
  'Earlier: Android and Python development with Docker and AWS (Spinver, 2019) · machine-learning research on heart-disease diagnosis at eVIDA Group, Bilbao (2018) · mechatronics research scholarship with three patents in welding automation (2016–2018).';
