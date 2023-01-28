import { add, addOrConcat, arrowNoop, noop, orderBurger } from './exos.js'

describe('noop and arrowNoop', () => {
  test('should return undefined', () => {
    const result = noop()

    expect(result).toEqual(undefined)
  })
  test('should return undefined', () => {
    const result = arrowNoop()

    expect(result).toEqual(undefined)
  })
})

describe('addOrConcat', () => {
  const expected = 42
  test('should return 42', () => {
    const result = add(40, 2)

    expect(result).toEqual(expected)
  })

  test('should also return 42', () => {
    const result = add(20, 22)

    expect(result).toEqual(expected)
  })

  test('should also return "42"', () => {
    const result = addOrConcat('4', 2)
    const expected = '42'

    expect(result).toEqual(expected)
  })
})

describe('add', () => {
  test('should NOT throw an error if arguments are numbers', () => {
    const result = () => add(4, 38)
    expect(result).not.toThrow()
  })
  test('should throw an error if any argument is not a number', () => {
    const result = () => add('a', 'b')
    expect(result).toThrow()
  })
  test('should throw an error if any argument is not a number', () => {
    const result = () => add('a', 4)
    expect(result).toThrow()
  })
  test('should throw an error if any argument is not a number', () => {
    const result = () => add(2, 'b')
    expect(result).toThrow()
  })
})

describe('orderBurger', () => {
  test('should return an object with appropriate feats', () => {
    const cooking = 'à point'
    const pickle = true
    const cheese = 2
    const result = orderBurger(cooking, pickle, cheese)
    expect(result).toEqual({ cooking, pickle, cheese })
  })
})
