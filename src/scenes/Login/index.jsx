import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, setLogin } from 'state/globalSlice';
import LoginForm from './LoginForm';

Login.propTypes = {};

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const result = await dispatch(login(values));
      const user = unwrapResult(result);
      if (user && user.id && user.role === 'admin') {
        navigate('/');
      } else {
        toast.warning('Bạn không có quyền vào admin');
      }
    } catch (error) {
      console.log('error login', error);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
