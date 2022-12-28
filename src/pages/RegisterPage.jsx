import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import { actRegisterAsync } from '../store/user/actions';
import './LoginPage/login.css';

function RegisterPage() {
  const token = useSelector((state) => state.USER.token);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nickname: '',
    username: '',
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (token) {
      history.push('/');
    }
  }, [token, history]);

  function handleChangeValue(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    dispatch(actRegisterAsync(formData)).then((res) => {
      if (!res.ok) {
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
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              {formError && (
                <p style={{ color: 'red', textAlign: 'center' }}>{formError}</p>
              )}
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input
                  label="Nickname"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleChangeValue}
                  placeholder="Nhập Nickname"
                  autoComplete="off"
                />
                <Input
                  label="Tên đăng nhập"
                  name="username"
                  value={formData.username}
                  onChange={handleChangeValue}
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                />
                <Input
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChangeValue}
                  placeholder="Nhập email ..."
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
                    Đăng ký
                  </Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
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

export default RegisterPage;
