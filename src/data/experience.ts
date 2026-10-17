import type { Localized } from '../i18n';

export interface ExperienceEntry {
  company: string;
  domain: Localized<string>;
  roles: { title: string; period: Localized<string> }[];
  location: Localized<string>;
  bullets: Localized<string[]>;
  tech: string[];
}

const remote = { en: 'Remote', pt: 'Remoto' };

export const experience: ExperienceEntry[] = [
  {
    company: 'Independent Consulting',
    domain: { en: 'Confidential clients worldwide', pt: 'Clientes confidenciais pelo mundo' },
    roles: [
      { title: 'Contract Software Engineer', period: { en: 'Ongoing', pt: 'Em andamento' } },
    ],
    location: remote,
    bullets: {
      en: [
        'Building systems from scratch and refactoring MVPs into scalable architectures.',
        'Integrating logging and tracking so teams can observe and debug production behavior.',
        'Improving the performance of high-demand processes and validating system security.',
        'Implementing AI workflows and other systems engineering work.',
      ],
      pt: [
        'Construindo sistemas do zero e refatorando MVPs em arquiteturas escaláveis.',
        'Integrando logs e rastreamento para que os times consigam observar e depurar o comportamento em produção.',
        'Melhorando a performance de processos de alta demanda e validando a segurança dos sistemas.',
        'Implementando workflows de IA e outros trabalhos de engenharia de sistemas.',
      ],
    },
    tech: ['Node.js', 'Go', 'AWS', 'Python'],
  },
  {
    company: 'Celcoin',
    domain: { en: 'Fintech', pt: 'Fintech' },
    roles: [
      {
        title: 'Senior Software Engineer',
        period: { en: 'Jul 2024 – Present', pt: 'jul 2024 – atual' },
      },
    ],
    location: remote,
    bullets: {
      en: [
        'Building new features, projects, and services in Node.js and Java on a cloud-hosted banking platform.',
        'Driving the refactoring and upgrade of legacy projects to current versions and patterns, unblocking new development as the products grow.',
      ],
      pt: [
        'Construindo novas funcionalidades, projetos e serviços em Node.js e Java numa plataforma bancária hospedada em nuvem.',
        'Conduzindo a refatoração e a atualização de projetos legados para versões e padrões atuais, destravando novos desenvolvimentos à medida que os produtos crescem.',
      ],
    },
    tech: ['Node.js', 'Java', 'Cloud', 'Go', 'AWS'],
  },
  {
    company: 'Linker',
    domain: { en: 'Fintech', pt: 'Fintech' },
    roles: [
      {
        title: 'Backend Chapter Lead',
        period: { en: 'Oct 2023 – Jul 2024', pt: 'out 2023 – jul 2024' },
      },
      {
        title: 'Software Engineer',
        period: { en: 'Aug 2021 – Oct 2023', pt: 'ago 2021 – out 2023' },
      },
    ],
    location: remote,
    bullets: {
      en: [
        'Built APIs for business banking and fiscal management: cash flow, service-invoice issuance, credit-card spend management, and KYC onboarding for companies and fiscal officers.',
        'Python microservices over MariaDB, PostgreSQL, DynamoDB, and Redis, with a Node.js interface layer on AWS Lambda.',
        'As Chapter Lead, coordinated the backend team on technical debt, process improvements, and technology choices.',
      ],
      pt: [
        'Construí APIs de banking empresarial e gestão fiscal: fluxo de caixa, emissão de notas fiscais de serviço, gestão de gastos com cartão de crédito e onboarding de KYC para empresas e contadores.',
        'Microsserviços em Python sobre MariaDB, PostgreSQL, DynamoDB e Redis, com uma camada de interface em Node.js no AWS Lambda.',
        'Como Chapter Lead, coordenei o time de backend em dívida técnica, melhorias de processo e escolhas de tecnologia.',
      ],
    },
    tech: ['Python', 'Node.js', 'AWS', 'PostgreSQL', 'DynamoDB', 'Redis'],
  },
  {
    company: 'Marlex',
    domain: { en: 'Surgical robotics', pt: 'Robótica cirúrgica' },
    roles: [
      {
        title: 'Product Development Engineer',
        period: { en: 'Sep 2020 – Aug 2021', pt: 'set 2020 – ago 2021' },
      },
    ],
    location: { en: 'São José, Brazil', pt: 'São José, Brasil' },
    bullets: {
      en: [
        'Developed and integrated systems and equipment for laparoscopic-surgery applications.',
        'Simulation and control of robotic systems with ROS and Python, a RESTful Python processing/control service, and an Android control app.',
        'Automated testing for anthropomorphic-robot trajectory simulation.',
      ],
      pt: [
        'Desenvolvi e integrei sistemas e equipamentos para aplicações em cirurgia laparoscópica.',
        'Simulação e controle de sistemas robóticos com ROS e Python, um serviço RESTful em Python para processamento e controle, e um app Android de controle.',
        'Testes automatizados para simulação de trajetória de robô antropomórfico.',
      ],
    },
    tech: ['Python', 'ROS', 'Android', 'REST'],
  },
];

export const earlierRoles: Localized<string> = {
  en: 'Earlier: Android and Python development with Docker and AWS (Spinver, 2019) · machine-learning research on heart-disease diagnosis at eVIDA Group, Bilbao (2018) · mechatronics research scholarship with three patents in welding automation (2016–2018).',
  pt: 'Antes: desenvolvimento Android e Python com Docker e AWS (Spinver, 2019) · pesquisa em machine learning para diagnóstico de doenças cardíacas no eVIDA Group, Bilbao (2018) · bolsa de pesquisa em mecatrônica com três patentes em automação de soldagem (2016–2018).',
};
