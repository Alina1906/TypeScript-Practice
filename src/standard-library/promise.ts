import { formPath, lg } from "../logger"

export const promise = () => {
    const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})

promise.then((result) => {
    lg(formPath(__filename), result)
}, (reason) => {
    lg(formPath(__filename), reason)
})
}