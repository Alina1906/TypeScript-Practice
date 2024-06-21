import { lg } from "../logger"

export const promise = () => {
    const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})

promise.then((result) => {
    lg(result)
}, (reason) => {
    lg(reason)
})
}