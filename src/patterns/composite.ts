import { formPath, lg } from "../logger"

interface Component {
    operation(): void
}

class Leaf implements Component {
    operation(): void {
        lg(formPath(__filename), "Leaf operation")
    }
}

class Composite implements Component {
    private children: Component[] = []

    public add(component: Component): void {
        this.children.push(component)
    }

    public remove(component: Component): void {
        const index = this.children.indexOf(component)

        if(index > -1) {
            this.children.splice(index, 1)
        }
    }

    operation(): void {
        lg(formPath(__filename), "Composite operation")
        this.children.forEach(child => child.operation())
    }
}

export const composite = () => {
    const leaf1 = new Leaf()
    const leaf2 = new Leaf()
    const composite = new Composite()

    composite.add(leaf1)
    composite.add(leaf2)

    const composite2 = new Composite()
    composite2.add(composite)
    composite2.operation()
}