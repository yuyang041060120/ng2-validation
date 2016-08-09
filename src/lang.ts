export function isPresent(obj: any): boolean {
    return obj !== undefined && obj !== null;
}

export function isString(obj: any): obj is String {
    return typeof obj === 'string';
}