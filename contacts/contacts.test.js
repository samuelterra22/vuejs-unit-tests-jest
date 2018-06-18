const Contacts = require('./contacts')

describe('contacts', () => {

  const someContacts = [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com'
    },
    {
      id: 2,
      name: 'Jane',
      email: 'jane@gmail.com'
    },
    {
      id: 3,
      name: 'Yolo',
      email: 'yolo@gmail.com'
    },
  ]

  describe('add ', () => {
    beforeEach(() => {
      Contacts.reboot()
    })

    test('Add a contact with props {id, name, email}', () => {
      const contact = someContacts[0]
      Contacts.add(contact)

      const current = Contacts.db()
      const expected = [contact]

      expect(current).toEqual(expected)
    })

    test('Check if don\'t contains props {id, name, email}', () => {
      const contact = {
        name: 'Steven',
        email: 's@gmail.com'
      }

      expect(() => Contacts.add(contact)).toThrow('Invalid format')
    })

  })

  describe('delete ', () => {
    beforeEach(() => {
      Contacts.reboot()
      someContacts.forEach(contact => Contacts.add(contact))
    })

    test('Should delete first contact', () => {
      Contacts.delete(1)

      const current = Contacts.db()
      const expected = [
        someContacts[1],
        someContacts[2]
      ]

      expect(current).toEqual(expected)
    })

    test('Should\'nt delete contact if don\'t exists', () => {
      Contacts.delete(100)

      const current = Contacts.db()
      const expected = someContacts

      expect(current).toEqual(expected)
    })

  })

  describe('star wars ', () => {
    test('Should be exists star wars person', (done) => {

      const url = 'http://swapi.co/api/people'
      Contacts.starWars(url)
        .then(count => {
          expect(count).toBeGreaterThan(0)
          done()
        })

    })

    test('Error if url wrong', async () => {

      const url = 'http://swapi.co/api/yolo'

      const current = Contacts.starWars(url)

      expect(current).rejects.toEqual(Error('Request failed with status code 404'))

    })

  })

})