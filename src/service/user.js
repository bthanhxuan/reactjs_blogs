import API from './api';

const userService = {
  login({ username, password }) {
    return API.call().post('/jwt-auth/v1/token', {
      username,
      password,
    });
  },
  fetchMe(token) {
    return API.callWithToken(token).get('/wp/v2/users/me');
  },
  register({ username, password, email, nickname }) {
    return API.call().post('/wp/v2/users/register', {
      username,
      password,
      email,
      nickname,
    });
  },
};

export default userService;
