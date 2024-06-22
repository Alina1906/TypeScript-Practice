import { formPath, lg } from "../logger"

class Subsystem1 {
    operation(): void {
        lg(formPath(__filename), "Subsystem1")
    } 
}

class Subsystem2 {
    operation(): void {
        lg(formPath(__filename), "Subsystem2")
    } 
}

class Facade {
    private subsystem1: Subsystem1
    private subsystem2: Subsystem2

    constructor() {
        this.subsystem1 = new Subsystem1()
        this.subsystem2 = new Subsystem2()
    }

    operation(): void {
        lg(formPath(__filename), "Facade operation")
        this.subsystem1.operation()
        this.subsystem2.operation()
    }
}

export const facade = () => {
    const facade = new Facade()
    facade.operation()
}