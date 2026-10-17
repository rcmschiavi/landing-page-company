import { langTag, type Lang } from '../i18n';

// UTC keeps date-only frontmatter (parsed as UTC midnight) from
// rendering as the previous day on UTC-negative build machines.
const formatters = {
  en: new Intl.DateTimeFormat(langTag.en, { dateStyle: 'long', timeZone: 'UTC' }),
  pt: new Intl.DateTimeFormat(langTag.pt, { dateStyle: 'long', timeZone: 'UTC' }),
};

export const formatDate = (date: Date, lang: Lang = 'en') => formatters[lang].format(date);
