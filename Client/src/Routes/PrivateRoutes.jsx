import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ContextAPI } from '../Provider/ContextProvider';
import LoadingForUser from '../Components/LoadingForUser';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(ContextAPI);

  if (loading) {
    return <LoadingForUser></LoadingForUser>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PrivateRoutes;
