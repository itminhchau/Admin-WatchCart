import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

ProtectRouter.propTypes = {};

function ProtectRouter(props) {
  const user = useSelector((state) => state.global.current);
  const loginSuccess = user ? !!user.id : false;

  return loginSuccess ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectRouter;
