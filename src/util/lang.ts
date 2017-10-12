export function isPresent(obj: any): boolean {
  return obj !== undefined && obj !== null;
}

export function isDate(obj: any): boolean {
  return !/Invalid|NaN/.test(new Date(obj).toString());
}

export function parseDate(obj: any): string {
  if (typeof obj === 'object') {
    return obj.year + '-' + obj.month + '-' + obj.day;
  }
  return obj;
}