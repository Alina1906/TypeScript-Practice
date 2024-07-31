import { formPath, lg } from "../logger"

interface State {
    handle(): void
}

class ConcreteStateA implements State {
    public handle(): void {
        lg(formPath(__filename), "A")
    }
}

class ConcreteStateB implements State {
    public handle(): void {
        lg(formPath(__filename), "B")
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

export const state = (): true => {
    const context: Context = new Context()
    context.request()
    context.setState(new ConcreteStateB())
    context.request()
    return true
}
