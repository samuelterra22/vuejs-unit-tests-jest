const axios = require('axios')

let contacts = []
const Contacts = {

  add (contact) {
    if (
      contact.hasOwnProperty('id') &&
      contact.hasOwnProperty('name') &&
      contact.hasOwnProperty('email')
    ) {
      contacts.push(contact)
    } else {
      throw 'Invalid format'
    }
  },
  delete (contactId) {

    const index = contacts
      .map(({id}) => id)
      .findIndex(id => id === contactId)

    if (index > -1) {
      contacts = [
        ...contacts.slice(0, index),
        ...contacts.slice(index + 1)
      ]
    }

  },
  reboot () {
    contacts = []
  },

  db () {
    return [
      ...contacts
    ]
  },

  starWars (url) {
    // https://swapi.co/
    // http://swapi.co/api/people
    return axios.get(url)
      .then(({data}) => {
        return data.count
      })
  }
}

module.exports = Contacts