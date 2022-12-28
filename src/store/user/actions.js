import userService from '../../service/user';

export const ACT_LOGIN = 'ACT_LOGIN';

export function actLogin(token, currentUser) {
  return {
    type: ACT_LOGIN,
    payload: {
      token,
      currentUser,
    },
  };
}

export function actLoginAsync({ username, password }) {
  return async (dispatch) => {
    try {
      const response = await userService.login({ username, password });
      const data = response.data;
      const token = data.token;
      dispatch(actFetchMeAsync(token));
      return {
        ok: true,
      };
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        message: 'Thông tin đăng nhập chưa hợp lệ!',
      };
    }
  };
}

export function actFetchMeAsync(token) {
  if (!token) token = localStorage.getItem('ACCESS_TOKEN');

  return async (dispatch) => {
    try {
      const responseMe = await userService.fetchMe(token);
      const currentUser = responseMe.data;
      dispatch(actLogin(token, currentUser));
    } catch (error) {
      console.log(error);
    }
  };
}
