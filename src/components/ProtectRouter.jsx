import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

ProtectRouter.propTypes = {};

function ProtectRouter(props) {
  const isLogin = useSelector((state) => state.global.isLogin);
  console.log('islogin', isLogin);
  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectRouter;
