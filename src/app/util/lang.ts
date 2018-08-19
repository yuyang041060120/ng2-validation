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
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }

    // NgbDateStruct
    if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
      return `${obj.year}-${+obj.month}-${obj.day}`;
    }
  } catch (e) { }
  return obj;
}
