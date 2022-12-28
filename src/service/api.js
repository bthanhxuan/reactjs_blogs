import axios from 'axios';

const API = {
  call() {
    return axios.create({
      baseURL: 'http://wp-api.test/wp-json',
    });
  },
  callWithToken(token) {
    return axios.create({
      baseURL: 'http://wp-api.test/wp-json',
      headers: { Authorization: 'Bearer ' + token },
    });
  },
};

export default API;
