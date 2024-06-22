import { formPath, lg } from "../logger"

interface Target {
    request(): void
}

class Adaptee {
    specificRequest(): void {
        lg(formPath(__filename), "Вызван метод specificRequest у Adaptee")
    }
}

class Adapter implements Target {
    private adaptee: Adaptee

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee
    }

    request(): void {
        lg(formPath(__filename), "Адаптер адаптирует адапти")
        this.adaptee.specificRequest()
    }
}

export const adapter = () => {
    const adaptee = new Adaptee()
    const adapter = new Adapter(adaptee)
    adapter.request()
}