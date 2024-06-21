import { formPath, lg } from "../logger"

abstract class AbstractProductA {
    abstract methodA(): void
}

abstract class AbstractProductB {
    abstract methodB(): void
}

interface AbstractFactory {
    createProductA(): AbstractProductA
    createProductB(): AbstractProductB
}

class ConcreteProductA extends AbstractProductA {
    public methodA(): void {
        lg(formPath(__filename), "Concrete product A method")
    }
}

class ConcreteProductB extends AbstractProductB {
    public methodB(): void {
        lg(formPath(__filename), "Concrete product B method")
    }
}

class ConcreteFactory implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA()
    }
    createProductB(): AbstractProductB {
        return new ConcreteProductB()
    }
}

export const abstractFactory = () => {
    const factory1: AbstractFactory = new ConcreteFactory()
    const productA = factory1.createProductA()
    const productB = factory1.createProductB()

    productA.methodA()
    productB.methodB()
}