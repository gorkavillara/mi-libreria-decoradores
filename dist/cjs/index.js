"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMethod = void 0;
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
// 3 - Almacenar en caché la información de un valor
class Cantante {
    constructor(n, e) {
        this.nombre = n;
        this.estrofa = e;
    }
    canta() {
        console.log(this.estrofa);
        return this.estrofa;
    }
}
__decorate([
    exports.logMethod
], Cantante.prototype, "canta", null);
const miCantante = new Cantante("Kurt Cobain", "Load up on guns, bring your friends");
miCantante.canta();
