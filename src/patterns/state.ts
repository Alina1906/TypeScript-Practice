import { lg } from "../logger"

interface State {
    handle(): void
}

class ConcreteStateA implements State {
    public handle(): void {
        lg("A")
    }
}

class ConcreteStateB implements State {
    public handle(): void {
        lg("B")
    }
}

class Context {
    private state: State

    constructor(state: State = new ConcreteStateA()) {
        this.state = state
    }

    setState(state: State): void {
        this.state = state
    }

    public request(): void {
        this.state.handle()
    }
}

export const state = () => {
    const context: Context = new Context()
    context.request()
    context.setState(new ConcreteStateB())
    context.request()
}
