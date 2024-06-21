import { formPath, lg } from "../logger"

class Product {
    parts: string[] = []

    public logParts(): void {
        lg(formPath(__filename), `Product parts: ${this.parts.join(', ')}`)
    }
}

interface Builder {
    buildPartA(): void
    buildPartB(): void
    buildPartC(): void
    getResult(): Product
}

class ConcreteBuilder implements Builder {
    private product: Product = new Product()

    buildPartA(): void {
        this.product.parts.push('part A')
    }

    buildPartB(): void {
        this.product.parts.push('part B')
    }

    buildPartC(): void {
        this.product.parts.push('part C')
    }

    getResult(): Product {
        return this.product
    }
}

class Director {
    private builder: Builder

    constructor(builder: Builder) {
        this.builder = builder
    }

    constructProduct(){
        this.builder.buildPartA()
        this.builder.buildPartB()
        this.builder.buildPartC()
    }
}

export const builder = () => {
    const builder: Builder = new ConcreteBuilder()
    const director: Director = new Director(builder)

    director.constructProduct()

    const product: Product = builder.getResult()
    product.logParts()
}