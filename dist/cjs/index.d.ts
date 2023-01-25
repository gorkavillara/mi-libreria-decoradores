export declare const logMethod: (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare const measureTime: (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export type CacheObject = {
    [key: string]: any;
};
export declare const cacheableMethod: (cache: CacheObject) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
