export function isObjectEmpty(obj: any): boolean {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function isArrayEmpty(array: any): boolean {
    
    return !Array.isArray(array) || array.length <= 0;
}

export function isDataExistsInArray(array: any, key: string): boolean {
    return Array.isArray(array) && array.length > 0 && array[0][key] !== undefined;
}