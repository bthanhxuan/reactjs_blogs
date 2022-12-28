import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import { useIsAuthenticated } from '../../hooks/useIsAuthenticated';
import { actLoginAsync } from '../../store/user/actions';
import './login.css';

function LoginPage() {
  useIsAuthenticated();

  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function handleChangeValue(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmitLogin(e) {
    e.preventDefault();

    setLoading(true);
    dispatch(actLoginAsync(formData)).then((res) => {
      if (res.ok) {
        history.push('/');
      } else {
        setFormError(res.message);
        setLoading(false);
      }
    });
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng nhập</h1>
            <div className="form-login-register">
              {formError && (
                <p style={{ color: 'red', textAlign: 'center' }}>{formError}</p>
              )}
              <form autoComplete="off" onSubmit={handleSubmitLogin}>
                <Input
                  name="username"
                  value={formData.username}
                  onChange={handleChangeValue}
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                />
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChangeValue}
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" loading={loading}>
                    Đăng nhập
                  </Button>
                  <Link to="/register">Đăng ký</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default LoginPage;
