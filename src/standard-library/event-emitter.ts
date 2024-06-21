import EventEmitter from "events"
import { formPath, lg } from "../logger"

export const eventEmitter = () => {
    const emitter = new EventEmitter()
    const bangCallback = () => lg(formPath(__filename), "BANG!")

    emitter.on("bang",bangCallback)

    emitter.emit("bang")

    emitter.removeAllListeners("bang")
}