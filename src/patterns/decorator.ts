import { lg } from "../logger"

interface Component {
    operation(): string
}

class ConcreteComponent implements Component {
    operation(): string {
        return "Concrete component operation"
    }
}

class Decorator implements Component {
    protected component: Component

    constructor(component: Component) {
        this.component = component
    }

    operation(): string {
        return this.component.operation()
    }
}

class ConcreteDecoratorA extends Decorator {
    operation(): string {
        return `Decorator A(${this.component.operation()})`
    }
}

class ConcreteDecoratorB extends Decorator {
    operation(): string {
        return `Decorator B(${this.component.operation()})`
    }
}


export const decorator = () => {
    const simpleComponent = new ConcreteComponent()
    lg(simpleComponent.operation())

    const decoratedComponentA: Decorator = new ConcreteDecoratorA(simpleComponent)
    lg(decoratedComponentA.operation())

    const decoratedComponentB: Decorator = new ConcreteDecoratorB(simpleComponent)
    lg(decoratedComponentB.operation())
}