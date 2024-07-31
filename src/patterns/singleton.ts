import { formPath, lg } from "../logger"

class Singleton {
    private static instance: Singleton

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }

    public log(): void {
        lg(formPath(__filename), "I'm singleton")
    }

    public return_1(): true { return true }
}

export const singleton = (): true => {
    const instance1: Singleton = Singleton.getInstance()
    const instance2: Singleton = Singleton.getInstance()

    instance1.log()
    instance2.log()
    return instance1.return_1()
}