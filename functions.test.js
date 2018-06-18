const functions = require('./functions')

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log('Database Initialized...')
// const closeDatabase = () => console.log('Database closed...')

const nameCheck = () => console.log('Checking name...')

describe('Checking names', () => {
  beforeEach(() => nameCheck())

  test('User is Jeff', () =>{
    const user = 'Jeff'
    expect(user).toBe('Jeff')
  })

  test('User is Karen', () =>{
    const user = 'Karen'
    expect(user).toBe('Karen')
  })
})

// toBe
test('Adds  2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})

// not
test('Adds  2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5)
})

// CHECK OFR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toByFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
})

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy()
  expect(functions.checkValue(false)).toBeFalsy()
  expect(functions.checkValue(0)).toBeFalsy()
  expect(functions.checkValue(undefined)).toBeFalsy()
})

// toEqual
test('User should be Samuel Vieira object', () => {
  expect(functions.createUSer()).toEqual({
    firstName: 'Samuel',
    lastName: 'Vieira'
  })
})

// Less thas and greater than
test('Should be under 1600', () => {
  const load1 = 800
  const load2 = 800
  expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

// Arrays
test('Admin should be in usernames', () => {
  let usernames = ['john', 'karen', 'admin']
  expect(usernames).toContain('admin')
})

// Working with async data

/*

// Promise
test('User fetched name shold be Leanne Graham', () => {
  expect.assertions(1)
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
})

// Promise
test('User fetched name shold be Leanne Graham (async)', async () => {
  expect.assertions(1)
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
})

*/