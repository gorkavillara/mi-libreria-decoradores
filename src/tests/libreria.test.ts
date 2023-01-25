import { logMethod } from "..";

class Persona {
    @logMethod
    saluda(nombre: string) {
        return `Hola ${nombre}`
    }
}

describe("Testeando el decorador logMethod", () => {
    beforeEach(() => {
        // spies en console.log
        jest.spyOn(console, "log")
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
    it("Testeamos que el decorador logMethod llama al console.log dos veces", () => {
        const miPersona = new Persona()
        miPersona.saluda("Gorka")
        expect(console.log).toBeCalled()
        expect(console.log).toBeCalledTimes(2)
    })
})