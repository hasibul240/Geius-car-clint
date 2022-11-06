import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = React.useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='w-56 mx-auto'><progress className="progress w-56"></progress></div>
    }

    if (user) {
        return children;
    }
    
    return <Navigate to='/login' state={{from: location}} replace/>
};

export default PrivateRoute;