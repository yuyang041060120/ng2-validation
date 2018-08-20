export function isPresent(obj: any): boolean {
  return obj !== undefined && obj !== null;
}

export function isDate(obj: any): boolean {
  try {
    const date = new Date(obj);
    return !isNaN(date.getTime());
  } catch (e) {
    return false;
  }
}

export function parseDate(obj: any): string {
  try {
    // Moment.js
    if (obj._d instanceof Date) {
      const d = obj._d as Date;
      const month = +d.getMonth() + 1;
      const day = +d.getDate();
      return `${d.getFullYear()}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
    }

    // NgbDateStruct
    if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
      const month = +obj.month;
      const day = +obj.day;
      return `${obj.year}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
    }
  } catch (e) { }
  return obj;
}

function formatDayOrMonth(month: number): string|number {
  return month < 10 ? `0${month}` : month;
}
