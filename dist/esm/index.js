// 1 - Loguear el método que se está llamando
export const logMethod = (target, propertyKey, descriptor) => {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Se ha llamado al método ${propertyKey}, con los parámetros ${JSON.stringify(args)}`);
        const resultado = metodoOriginal.apply(this, args);
        // TO-DO: Solucionar esto de aquí
        console.log(`El método ha devuelto el siguiente valor: ${resultado}`);
        return resultado;
    };
};
// 2 - Medir el tiempo que tarda un método en ejecutarse
export const measureTime = (target, propertyKey, descriptor) => {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const ahora = Date.now();
        const resultado = metodoOriginal.apply(this, args);
        const luego = Date.now();
        console.log(`El método ${propertyKey} ha tardado ${luego - ahora}ms`);
        return resultado;
    };
};
export const cacheableMethod = (cache) => {
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
            return resultado;
        };
    };
};
