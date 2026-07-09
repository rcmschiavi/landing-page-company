export interface Service {
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    title: 'Contract Backend Development',
    description:
      'End-to-end design and delivery of APIs and services in Node.js, Java, and Python — from architecture decisions to production deployment and maintenance.',
    tags: ['Node.js', 'Java', 'Python', 'REST APIs'],
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
    tags: ['Refactoring', 'Cloud migration', 'Tech debt'],
  },
  {
    title: 'Staff Augmentation & Technical Leadership',
    description:
      'I embed with your existing team and raise its output — with chapter-lead experience driving tech-debt reduction, process improvements, and technology choices.',
    tags: ['Team leadership', 'Processes', 'Mentoring'],
  },
];
