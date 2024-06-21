import { lg } from "."

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

export class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b
    }
}
