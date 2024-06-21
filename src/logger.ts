let loggerIndex = 1

export const lg: Function = (message: string): void => {
    console.log(`№ ${loggerIndex}: ${message}`)
    loggerIndex += 1
}