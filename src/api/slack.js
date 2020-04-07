import { API } from '../config'

export const sendMessage = message => {
  return fetch(`${API}/postmessage`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  }).then(res => {
    return res.json()
  }).catch(err => {
    console.log(err)
  })
}
