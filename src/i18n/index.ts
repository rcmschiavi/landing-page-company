/**
 * Site languages. English is the default and lives at the root (/);
 * Portuguese lives under /pt/. The blog is English-only.
 */
export const languages = { en: 'English', pt: 'Português' } as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** A value with one variant per language. */
export type Localized<T> = Record<Lang, T>;

/** BCP 47 tag for <html lang>, hreflang, and Intl formatting. */
export const langTag: Localized<string> = { en: 'en', pt: 'pt-BR' };

/** Homepage URL per language. */
export const homePath: Localized<string> = { en: '/', pt: '/pt/' };

/** Maps Astro.currentLocale to a Lang, falling back to English. */
export const getLang = (locale: string | undefined): Lang =>
  locale && locale in languages ? (locale as Lang) : defaultLang;

/** Strings shared by several components. */
export const ui = {
  en: {
    emailMe: 'Email me',
    menu: 'Menu',
    switchLang: 'Ler em português',
  },
  pt: {
    emailMe: 'Fale comigo',
    menu: 'Menu',
    switchLang: 'Read in English',
  },
} satisfies Localized<Record<string, string>>;
