import { lg } from ".."

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
        lg("Concrete product A method")
    }
}

class ConcreteProductB extends AbstractProductB {
    public methodB(): void {
        lg("Concrete product B method")
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

export default () => {
    const factory1: AbstractFactory = new ConcreteFactory()
    const productA = factory1.createProductA()
    const productB = factory1.createProductB()

    productA.methodA()
    productB.methodB()
}