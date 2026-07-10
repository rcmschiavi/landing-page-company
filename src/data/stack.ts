export interface StackGroup {
  label: string;
  items: string[];
}

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
