import { isReallyNaN } from './is-nan.js'

describe('isReallyNaN', () => {
  test('should return true', () => {
    const result = isReallyNaN(NaN)

    expect(result).toEqual(true)
  })
  test('should return false', () => {
    const result = isReallyNaN('NaN')

    expect(result).toEqual(false)
  })
})
