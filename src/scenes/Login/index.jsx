import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setLogin } from 'state/globalSlice';

Login.propTypes = {};

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    dispatch(setLogin());
    if (location.state?.from) {
      navigate(location.state.from);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
    </div>
  );
}

export default Login;
