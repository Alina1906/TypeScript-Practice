import path from "path"

let loggerIndex = 1

export const lg = (path: string, message: any): void => {
    console.log(`№ ${loggerIndex}: ${path} : ${message}`)
    loggerIndex += 1
}

export const formPath = (filename: string): string => {
    const root = path.basename(path.dirname(path.dirname(filename)))
    const part = path.basename(path.dirname(filename))
    const topic = path.basename(filename, path.extname(filename))

    return path.join(root, part, topic)
}