const sum = require('../src/utils/sum')

describe('sum function tests', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('adds 5 + 6 to equal 11', () => {
    expect(sum(5, 6)).toBe(11)
  })

  it('adds 1 + 2 to not equal 13', () => {
    expect(sum(1, 2)).not.toBe(13)
  })

  it('adds 1 + 2 to equal 3 (duplicate test 1)', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('adds 1 + 2 to equal 3 (duplicate test 2)', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

describe('checking string', () => {
  const name = 'Samuel Anugerah Zega'

  it('should check name parts', () => {
    const arrName = name.split(' ')
    expect(arrName[0]).toBe('Samuel')
    expect(arrName[1]).toBe('Anugerah')
    expect(arrName[2]).toBe('Zega')
  })

  it('should check name length', () => {
    expect(name.length).toBe(20)
  })
})
