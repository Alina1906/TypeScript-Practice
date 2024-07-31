import {state} from "../src/patterns"

describe('KAN_T1_State Test', () => {
    it('should return true working with the instance', () => {
        const result = state()
        expect(result).toBe(true)
    })
})
