/**
 * All site identity in one place. Items marked TODO are placeholders —
 * fill them in and the whole site updates.
 */
export const site = {
  // TODO: confirm the name you want displayed publicly
  ownerName: 'Rod Cavour',
  ownerInitials: 'RC',
  role: 'Senior Backend Engineer',
  // TODO: replace with your company's legal/trade name
  companyName: 'COMPANY_NAME',
  email: 'rod.cavour@gmail.com',
  // TODO: replace with your LinkedIn profile URL
  linkedin: 'https://www.linkedin.com/in/PLACEHOLDER',
  location: 'Brazil',

  seo: {
    title:
      'Rod Cavour — Senior Backend Engineer for Fintech | Contract Development & Staff Augmentation',
    description:
      'Senior software engineer with 6+ years in fintech backend systems — Node.js, Java, Python, AWS. Available for contract development and staff augmentation worldwide.',
  },

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Stack', href: '#stack' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
  ],
} as const;
