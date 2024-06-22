import { formPath, lg } from "../logger"

interface Abstraction {
    operation(): void
}

interface Implementation {
    operationImplementation(): void
}

class ConcreteImplementationA implements Implementation {
    operationImplementation(): void {
        lg(formPath(__filename), "Конкретная реализация A")
    }
}

class ConcreteImplementationB implements Implementation {
    operationImplementation(): void {
        lg(formPath(__filename), "Конкретная реализация B")
    }
}

class RefinedAbstraction implements Abstraction {
    private implementation: Implementation

    constructor(implementation: Implementation) {
        this.implementation = implementation
    }

    operation(): void {
        lg(formPath(__filename), "Вызов операции в расширенной абстракции")
        this.implementation.operationImplementation()
    }
}

export const bridge = () => {
    const implementationA = new ConcreteImplementationA()
    const abstractionA = new RefinedAbstraction(implementationA)
    abstractionA.operation()

    const implementationB = new ConcreteImplementationB()
    const abstractionB = new RefinedAbstraction(implementationB)
    abstractionB.operation()
}