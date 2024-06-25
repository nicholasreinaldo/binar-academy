const sum = require('../src/utils/sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('adds 5 + 6 to equal 11', () => {
  expect(sum(5, 6)).toBe(11)
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).not.toBe(13)
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

describe('checking string', () => {
  const name = 'Samuel Anugerah Zega'

  test('first test - checking name parts', () => {
    const arrName = name.split(' ')
    expect(arrName[0]).toBe('Samuel')
    expect(arrName[1]).toBe('Anugerah')
    expect(arrName[2]).toBe('Zega')
  })

  test('second test - checking name length', () => {
    expect(name.length).toBe(20)
  })
})
