"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheableMethod = exports.measureTime = exports.logMethod = void 0;
// 1 - Loguear el método que se está llamando
const logMethod = (target, propertyKey, descriptor) => {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Se ha llamado al método ${propertyKey}, con los parámetros ${JSON.stringify(args)}`);
        const resultado = metodoOriginal.apply(this, args);
        // TO-DO: Solucionar esto de aquí
        console.log(`El método ha devuelto el siguiente valor: ${resultado}`);
        return resultado;
    };
};
exports.logMethod = logMethod;
// 2 - Medir el tiempo que tarda un método en ejecutarse
const measureTime = (target, propertyKey, descriptor) => {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const ahora = Date.now();
        const resultado = metodoOriginal.apply(this, args);
        const luego = Date.now();
        console.log(`El método ${propertyKey} ha tardado ${luego - ahora}ms`);
        return resultado;
    };
};
exports.measureTime = measureTime;
const cacheableMethod = (cache) => {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const key = JSON.stringify({ target, propertyKey, args });
            if (cache[key]) {
                console.log(`Estoy retornando el resultado cacheado para el método ${propertyKey}`);
                return cache[key];
            }
            console.log(`Estoy retornando el resultado nuevo para el método ${propertyKey}`);
            const resultado = metodoOriginal.apply(this, args);
            cache[key] = resultado;
            console.log("key", key);
            return resultado;
        };
    };
};
exports.cacheableMethod = cacheableMethod;
// const cache: CacheObject = {}
// class Cantante {
//     nombre: string
//     estrofa: string
//     constructor(n: string, e: string) {
//         this.nombre = n
//         this.estrofa = e
//     }
//     @measureTime
//     @cacheableMethod(cache)
//     canta() {
//         console.log(this.estrofa)
//         for (let i = 0; i < 1000000000; i++) { let a = 0 }
//         return this.estrofa
//     }
// }
// const miCantante = new Cantante("Kurt Cobain", "Load up on guns, bring your friends")
// miCantante.canta()
// miCantante.canta()
// miCantante.canta()
// miCantante.canta()
