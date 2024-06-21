import { lg } from ".."

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
        lg("I'm singleton")
    }
}

const instance1: Singleton = Singleton.getInstance()
const instance2: Singleton = Singleton.getInstance()

export default () => {
    instance1.log()
    instance2.log()
}