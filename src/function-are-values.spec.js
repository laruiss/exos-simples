import { add, multiply, compute, getOperation, evaluate } from './function-are-values.js'

describe('add', () => {
  test('add(40, 2) doit renvoyer 42', () => {
    const actual = add(40, 2)
    const expected = 42
    expect(typeof actual).toBe('number')
    expect(actual).toBe(expected)
  })

  test('add(1, 2) doit renvoyer 3', () => {
    const actual = add(1, 2)
    const expected = 3
    expect(typeof actual).toBe('number')
    expect(actual).toBe(expected)
  })
})

describe('multiply()', () => {
  test('multiply(21, 2) doit renvoyer 42', () => {
    const actual = multiply(21, 2)
    const expected = 42
    expect(typeof actual).toBe('number')
    expect(actual).toBe(expected)
  })

  test('multiply(3, 4) doit renvoyer 12', () => {
    const actual = multiply(3, 4)
    const expected = 12
    expect(typeof actual).toBe('number')
    expect(actual).toBe(expected)
  })
})

describe('compute()', () => {
  test('compute(add, 40, 2) doit renvoyer 42', () => {
    const actual = compute(add, 40, 2)
    const expected = 42
    expect(typeof actual).toBe('number')
    expect(actual).toBe(expected)
  })

  test('compute(add, 1, 2) doit renvoyer 3', () => {
    const actual = compute(add, 1, 2)
    const expected = 3
    expect(typeof actual).toBe('number')
    expect(actual).toBe(expected)
  })

  test('compute(multiply, 40, 2) doit renvoyer 42', () => {
    const actual = compute(multiply, 40, 2)
    const expected = 80
    expect(typeof actual).toBe('number')
    expect(actual).toBe(expected)
  })

  test('compute(multiply, 3, 2) doit renvoyer 6', () => {
    const actual = compute(multiply, 3, 2)
    const expected = 6
    expect(typeof actual).toBe('number')
    expect(actual).toBe(expected)
  })
})

describe('getOperation()', () => {
  test('getOperation("+") doit renvoyer add', () => {
    const actual = getOperation('+')
    const expected = add
    expect(typeof actual).toBe('function')
    expect(actual).toBe(expected)
  })
  test('getOperation("*") doit renvoyer multiply', () => {
    const actual = getOperation('*')
    const expected = multiply
    expect(typeof actual).toBe('function')
    expect(actual).toBe(expected)
  })
})

describe('evaluate()', () => {
  test('evaluate("+ 40 2") doit renvoyer 42', () => {
    const actual = evaluate('+ 40 2')
    const expected = 42
    expect(typeof actual).toBe('number')
    expect(actual).toBe(expected)
  })

  test('evaluate("* 20 2") doit renvoyer 40', () => {
    const actual = evaluate('* 20 2')
    const expected = 40
    expect(typeof actual).toBe('number')
    expect(actual).toBe(expected)
  })
})
