export function formatToDayMonthYear(isoString, locale = "en-US") {
  const d = new Date(isoString);
  if (Number.isNaN(d.getTime())) return "";

  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
}
