import { dailyVerses, type DailyVerse } from "@/content/daily-verses";

const millisecondsPerDay = 86_400_000;
const rotationStartDay = Date.UTC(2026, 8, 15) / millisecondsPerDay;

type CalendarDate = {
  year: number;
  month: number;
  day: number;
};

export type DailyFeedEntry = {
  id: string;
  dateKey: string;
  dayNumber: number;
  isToday: boolean;
  verse: DailyVerse;
};

function getBrasiliaDate(date: Date): CalendarDate {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return {
    year: Number(values.year),
    month: Number(values.month),
    day: Number(values.day),
  };
}

function toDayNumber(date: CalendarDate) {
  return Date.UTC(date.year, date.month - 1, date.day) / millisecondsPerDay;
}

function toDateKey(dayNumber: number) {
  return new Date(dayNumber * millisecondsPerDay).toISOString().slice(0, 10);
}

function positiveModulo(value: number, divisor: number) {
  return ((value % divisor) + divisor) % divisor;
}

export function createDailyFeed(now: Date, length = 7): DailyFeedEntry[] {
  const today = toDayNumber(getBrasiliaDate(now));

  return Array.from({ length }, (_, index) => {
    const dayNumber = today - index;
    const verseIndex = positiveModulo(dayNumber - rotationStartDay, dailyVerses.length);
    const verse = dailyVerses[verseIndex];
    const dateKey = toDateKey(dayNumber);

    return {
      id: `daily-${dateKey}-${verse.id}`,
      dateKey,
      dayNumber,
      isToday: index === 0,
      verse,
    };
  });
}
