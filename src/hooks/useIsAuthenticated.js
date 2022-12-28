import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export function useIsAuthenticated() {
  const token = useSelector((state) => state.USER.token);
  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push('/');
    }
  }, [token, history]);
}
