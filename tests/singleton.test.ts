import {singleton} from "../src/patterns"

describe('Singleton Test', () => {
    it('should return true working with the instance', () => {
        const result = singleton()
        expect(result).toBe(true)
    })
})