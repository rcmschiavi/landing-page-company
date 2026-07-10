export interface StackGroup {
  label: string;
  items: string[];
}

/** Labels for the hero's floating-skills cloud. Keep short (≤ ~14 chars) so slots don't overlap. */
export const highlights: string[] = [
  'Node.js',
  'TypeScript',
  'Python',
  'Go',
  'Java',
  'AWS',
  'Docker',
  'Kubernetes',
  'PostgreSQL',
  'Redis',
  'Microservices',
  'CI/CD',
  'REST APIs',
  'Payments',
  'KYC',
  'Cybersecurity',
  'Agentic AI',
  'RAG',
  'Event-driven',
  'Observability',
];

export const stack: StackGroup[] = [
  {
    label: 'Languages & Runtimes',
    items: ['Python', 'Go', 'Node.js / TypeScript', 'Java'],
  },
  {
    label: 'Cloud & Infrastructure',
    items: ['AWS', 'Docker', 'Microservices', 'CI/CD', 'Kubernetes', 'Terraform'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MariaDB / MySQL', 'DynamoDB', 'Redis', 'Supabase', 'Elasticsearch', 'TimescaleDB'],
  },
  {
    label: 'Practices',
    items: ['REST API design', 'Automated testing', 'Agile delivery', 'Legacy refactoring', 'Observability & monitoring', 'Security & compliance', 'Saga patterns', 'Event-driven architecture'],
  },
];
