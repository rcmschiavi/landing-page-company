/**
 * All site identity in one place. Items marked TODO are placeholders —
 * fill them in and the whole site updates.
 */
export const site = {
  // TODO: confirm the name you want displayed publicly
  ownerName: 'Rodolfo Schiavi',
  ownerInitials: 'RS',
  role: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
  // TODO: replace with your company's legal/trade name
  companyName: 'Schiavi Systems & Software',
  email: 'rodolfo.schiavi@outlook.com',
  // TODO: replace with your LinkedIn profile URL
  linkedin: 'https://www.linkedin.com/in/rodolfo-schiavi',
  github: 'https://github.com/rcmschiavi',
  location: { en: 'Brazil', pt: 'Brasil' },

  // Umami Cloud (cookieless, free tier): create a website at
  // https://cloud.umami.is and paste its ID here. Empty = analytics off.
  analytics: {
    umamiWebsiteId: '',
    domain: 'rodolfo.schiavi.me',
  },

  seo: {
    en: {
      title:
        'Rodolfo Schiavi — Senior Backend Engineer | Contract Development & Staff Augmentation',
      description:
        'Senior backend engineer with 8+ years building fintech, AI, and high-demand systems in Node.js, Go, Java, and Python. Contract development and staff augmentation worldwide.',
    },
    pt: {
      title:
        'Rodolfo Schiavi — Engenheiro de Backend Sênior | Desenvolvimento sob contrato e alocação em times',
      description:
        'Engenheiro de backend sênior com mais de 8 anos construindo sistemas de fintech, IA e alta demanda em Node.js, Go, Java e Python. Desenvolvimento sob contrato e alocação em times no Brasil e no exterior.',
    },
  },

  // `section` links to an anchor on the homepage of the current language.
  nav: [
    { label: { en: 'Services', pt: 'Serviços' }, section: 'services' },
    { label: { en: 'Stack', pt: 'Stack' }, section: 'stack' },
    { label: { en: 'Experience', pt: 'Experiência' }, section: 'experience' },
    { label: { en: 'About', pt: 'Sobre' }, section: 'about' },
    { label: { en: 'Blog', pt: 'Blog' }, href: '/blog' },
  ],
} as const;
