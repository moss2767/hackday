const sha1 = require('js-sha1')

const search = (body, hash) => {
  const result = { compromised: false, count: 0 }

  const pattern = new RegExp(hash + ':(\\d+)')
  const match = body.match(pattern)
  if (match) {
    result.compromised = true
    result.count = match[1]
  }
  // console.log('The hashes matching the query', body)
  // console.log('The exact match, if any, and the number of occurences (comma-separated)', match[0])
  return result
}

const checkPassword = query => {
  const hash = sha1(query).toUpperCase()
  const hashToSend = hash.substring(0, 5)
  const hashToVerify = hash.substring(5)

  // console.log('your hashed password', hash)
  // console.log('The part we send to the server', hashToSend)
  // console.log('The part we keep', hashToVerify)

  return fetch('https://api.pwnedpasswords.com/range/' + hashToSend)
    .then(response => response.text())
    .then(body => search(body, hashToVerify))
    .catch(error => console.log(error))
}

export default checkPassword
