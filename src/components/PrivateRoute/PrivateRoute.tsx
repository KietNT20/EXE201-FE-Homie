import { PATH } from '@/constant/path';
import WithProfileCheck from '@/middlewares/withProfileCheck';
import tokenMethod from '@/util/token';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirectPath = PATH.LOGIN }) => {
  if (!tokenMethod.get()?.token) {
    return <Navigate replace to={redirectPath} />;
  }

  return <WithProfileCheck />;
};

export default PrivateRoute;
