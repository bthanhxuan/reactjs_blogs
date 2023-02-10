import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
// import { useIsAuthenticated } from '../../hooks/useIsAuthenticated';
import { actChangePasswordAsync } from '../../store/user/actions';
import './change-pw.css';

function ChangePasswordPage() {
  // useIsAuthenticated();

  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    password: '',
    new_password: '',
    confirm_new_password: '',
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

  function handleChangePassword(e) {
    e.preventDefault();

    setLoading(true);
    dispatch(actChangePasswordAsync(formData)).then((res) => {
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
            <h1 className="form-title text-center">Đổi mật khẩu</h1>
            <div className="form-login-register">
              {formError && (
                <p style={{ color: 'red', textAlign: 'center' }}>{formError}</p>
              )}
              <form autoComplete="off" onSubmit={handleChangePassword}>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChangeValue}
                  label="Mật khẩu cũ"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                />
                <Input
                  type="password"
                  name="new_password"
                  value={formData.new_password}
                  onChange={handleChangeValue}
                  label="Mật khẩu mới"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                />
                <Input
                  type="password"
                  name="confirm_new_password"
                  value={formData.confirm_new_password}
                  onChange={handleChangeValue}
                  label="Nhập lại mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" loading={loading}>
                    Thay đổi
                  </Button>
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

export default ChangePasswordPage;
