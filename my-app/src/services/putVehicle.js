import {URL_API} from "../constants/api"
import axios from 'axios'

export default (data) =>
  axios({
    method: 'put',
    url: `${URL_API}/vehicles`,
    responseType: 'json',
    data: data.payload,
    headers:{
      "Access-Control-Allow-Origin": "*",
      'Accept':'application/json',
      'Content-Type': 'application/json',
    }
  }).then(response => { 
    return Promise.resolve(response);
  })
  .catch(error => {
    alert(error.response && error.response.data && error.response.data.Message);
    return Promise.reject(error);
  });
  