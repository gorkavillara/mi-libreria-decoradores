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
// 3 - Almacenar en caché la información de un valor
// class Cantante {
//     nombre: string
//     estrofa: string
//     constructor(n: string, e: string) {
//         this.nombre = n
//         this.estrofa = e
//     }
//     @logMethod
//     canta() {
//         console.log(this.estrofa)
//         return this.estrofa
//     }
// }
// const miCantante = new Cantante("Kurt Cobain", "Load up on guns, bring your friends")
// miCantante.canta()
