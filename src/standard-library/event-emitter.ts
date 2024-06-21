import EventEmitter from "events"
import { lg } from "../logger"

export const eventEmitter = () => {
    const emitter = new EventEmitter()
    const bangCallback = () => lg("BANG!")

    emitter.on("bang",bangCallback)

    emitter.emit("bang")

    emitter.removeAllListeners("bang")
}