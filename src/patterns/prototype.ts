import { formPath, lg } from "../logger"

interface Clonable {
    clone(): Clonable
}

class Cell implements Clonable {
    public size: number

    constructor(size: number) {
        this.size = size
    }

    clone(): Cell {
        this.size = this.size / 2
        return new Cell(this.size)
    }
}

export const prototype = () => {
    const ameoba = new Cell(10)
    lg(formPath(__filename), `My weight is ${ameoba.size}`)
    const ameoba2 = ameoba.clone()
    lg(formPath(__filename), `My weight is ${ameoba.size}`)
    lg(formPath(__filename), `My weight is ${ameoba2.size}`)
}