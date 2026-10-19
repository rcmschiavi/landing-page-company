import type { Localized } from '../i18n';

export interface StackGroup {
  label: Localized<string>;
  /** Tool names are the same in every language; prose items are localized. */
  items: string[] | Localized<string[]>;
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
    label: { en: 'Languages & Runtimes', pt: 'Linguagens & runtimes' },
    items: ['Python', 'Go', 'Node.js / TypeScript', 'Java'],
  },
  {
    label: { en: 'Cloud & Infrastructure', pt: 'Nuvem & infraestrutura' },
    items: ['AWS', 'Docker', 'Microservices', 'CI/CD', 'Kubernetes', 'Terraform'],
  },
  {
    label: { en: 'Data', pt: 'Dados' },
    items: ['PostgreSQL', 'MariaDB / MySQL', 'DynamoDB', 'Redis', 'Supabase', 'Elasticsearch', 'TimescaleDB'],
  },
  {
    label: { en: 'Practices', pt: 'Práticas' },
    items: {
      en: ['REST API design', 'Automated testing', 'Agile delivery', 'Legacy refactoring', 'Observability & monitoring', 'Security & compliance', 'Saga patterns', 'Event-driven architecture'],
      pt: ['Design de APIs REST', 'Testes automatizados', 'Entrega ágil', 'Refatoração de legados', 'Observabilidade & monitoramento', 'Segurança & compliance', 'Padrão Saga', 'Arquitetura orientada a eventos'],
    },
  },
];
