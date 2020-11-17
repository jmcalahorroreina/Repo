import {URL_API} from "../constants/api"
export default (id) =>
  new Promise((resolve, reject) => {
    fetch(`${ URL_API}/vehicles/${id}`)
      .then(response => {
        if (response.ok) {
          response.json().then(resolve).catch(reject)
        } else {
          response.json().then(errJson => {
            console.log(errJson)
          }).catch(reject)
        }
      }).catch( response => {
        alert('Error')
      })
})