import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import { actUploadMediaAsync } from '../store/user/actions';
import './LoginPage/login.css';

function Profile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  function handleSelectFile(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleSubmitFile(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);
    dispatch(actUploadMediaAsync(formData));
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Cập nhật thông tin</h1>
            <div className="form-login-register">
              <form autoComplete="off">
                {selectedFile && (
                  <img src={URL.createObjectURL(selectedFile)} />
                )}
                <Input
                  type="file"
                  label="Hình ảnh"
                  autoComplete="off"
                  onChange={handleSelectFile}
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button
                    type="primary"
                    size="large"
                    onClick={handleSubmitFile}
                  >
                    Save
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

export default Profile;
