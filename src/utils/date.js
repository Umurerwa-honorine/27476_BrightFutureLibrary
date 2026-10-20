
export function parseDate(isoDate) {
  const [y, m, d] = isoDate.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function formatDate(isoDate) {
  return parseDate(isoDate).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function isUpcoming(isoDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return parseDate(isoDate) >= today;
}
