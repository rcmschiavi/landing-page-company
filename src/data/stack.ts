export interface StackGroup {
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    label: 'Languages & Runtimes',
    items: ['Node.js / TypeScript', 'Java', 'Python', 'Go'],
  },
  {
    label: 'Cloud & Infrastructure',
    items: ['AWS', 'AWS Lambda', 'Docker', 'Microservices'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MariaDB / MySQL', 'DynamoDB', 'Redis'],
  },
  {
    label: 'Practices',
    items: ['REST API design', 'Automated testing', 'Agile delivery', 'Legacy refactoring'],
  },
];
