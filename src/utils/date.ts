// UTC keeps date-only frontmatter (parsed as UTC midnight) from
// rendering as the previous day on UTC-negative build machines.
const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' });

export const formatDate = (date: Date) => formatter.format(date);
