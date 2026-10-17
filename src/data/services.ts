import type { Localized } from '../i18n';

export interface Service {
  title: string;
  description: string;
  tags: string[];
}

export const services: Localized<Service[]> = {
  en: [
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
  ],
  pt: [
    {
      title: 'Desenvolvimento backend sob contrato',
      description:
        'Design e entrega ponta a ponta de APIs e serviços em Go, Node.js, Java e Python — das decisões de arquitetura ao deploy em produção e à manutenção.',
      tags: ['Node.js', 'Java', 'Python', 'APIs REST', 'Go', 'AWS'],
    },
    {
      title: 'Engenharia de produtos fintech',
      description:
        'Sistemas bancários e de gestão fiscal construídos na prática: onboarding de KYC, fluxo de caixa, gestão de gastos com cartão de crédito, emissão de notas fiscais de serviço e fluxos de pagamento.',
      tags: ['APIs bancárias', 'KYC', 'Pagamentos'],
    },
    {
      title: 'Modernização de sistemas legados',
      description:
        'Refatoração e atualização de sistemas legados para runtimes, versões e padrões atuais — para que novas funcionalidades saiam mais rápido à medida que o produto cresce.',
      tags: ['Refatoração', 'Migração para nuvem', 'Dívida técnica', 'Revisão de segurança'],
    },
    {
      title: 'Alocação em times & liderança técnica',
      description:
        'Entro no seu time e aumento a capacidade de entrega dele — com experiência como chapter lead conduzindo redução de dívida técnica, melhorias de processo e escolhas de tecnologia.',
      tags: ['Liderança de time', 'Processos', 'Mentoria', 'Revisão de segurança'],
    },
    {
      title: 'Entrega solo acelerada por IA',
      description:
        'Construo sistemas inteiros sozinho, multiplicando minha produção com ferramentas e técnicas de IA de ponta — a velocidade de um time pequeno por uma fração do custo, com um engenheiro sênior por trás de cada linha.',
      tags: ['Entrega ponta a ponta', 'Workflows de IA', 'Iteração rápida', 'Custo-eficiente'],
    },
    {
      title: 'Performance & observabilidade',
      description:
        'Quando um sistema fica lento sob demanda real, descubro o porquê e corrijo — fazendo profiling e otimizando os caminhos críticos, e integrando logs, tracing e monitoramento para que seu time veja os problemas antes dos usuários.',
      tags: ['Tuning de performance', 'Logs & tracing', 'Monitoramento'],
    },
  ],
};
