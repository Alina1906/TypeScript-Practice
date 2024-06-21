import { lg } from "../logger"

function log(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
):PropertyDescriptor {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
        lg(`Calling ${propertyKey} with arguments: ${args}`)
        return originalMethod.apply(this, args)
    }

    return descriptor
}

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b
    }
}

export const decorator = new Calculator()
