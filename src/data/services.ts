export interface Service {
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    title: 'Contract Backend Development',
    description:
      'End-to-end design and delivery of APIs and services in Go, Node.js, Java, and Python — from architecture decisions to production deployment and maintenance.',
    tags: ['Node.js', 'Java', 'Python', 'REST APIs', 'Go', 'AWS'],
  },
  {
    title: 'Fintech Product Engineering',
    description:
      'Banking and fiscal-management systems built hands-on: KYC onboarding, cash flow, credit-card spend management, service-invoice issuance, and payment flows.',
    tags: ['Banking APIs', 'KYC', 'Payments'],
  },
  {
    title: 'Legacy Modernization',
    description:
      'Refactoring and upgrading legacy systems to current runtimes, versions, and patterns — so new features ship faster as your product grows.',
    tags: ['Refactoring', 'Cloud migration', 'Tech debt', 'Security review'],
  },
  {
    title: 'Staff Augmentation & Technical Leadership',
    description:
      'I embed with your existing team and raise its output — with chapter-lead experience driving tech-debt reduction, process improvements, and technology choices.',
    tags: ['Team leadership', 'Processes', 'Mentoring', 'Security review'],
  },
  {
    title: 'AI-Accelerated Solo Delivery',
    description:
      'I build entire systems single-handedly, multiplying my output with state-of-the-art AI tools and techniques — the delivery speed of a small team at a fraction of the cost, with a senior engineer behind every line.',
    tags: ['End-to-end delivery', 'AI workflows', 'Fast iteration', 'Cost-efficient'],
  },
  {
    title: 'Performance & Observability',
    description:
      'When systems slow down under real demand, I find out why and fix it — profiling and optimizing hot paths, and integrating logging, tracing, and monitoring so your team sees problems before users do.',
    tags: ['Performance tuning', 'Logging & tracing', 'Monitoring'],
  },
];
