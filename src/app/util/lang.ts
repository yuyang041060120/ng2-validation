export function isPresent(obj: any): boolean {
  return obj !== undefined && obj !== null;
}

export function isDate(obj: any): boolean {
  return !/Invalid|NaN/.test(new Date(obj).toString());
}

export function parseDate(obj: any): string {
  try {
    if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
      return obj.year + '-' + obj.month + '-' + obj.day;
    }
  } catch (e) {}
  return obj;
}
