import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { set_auth_token } from '../../../API/Auth';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const { google_sign_in } = React.useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handle_login = () => {
        google_sign_in()
            .then(result => {
                const user = result.user;
                console.log(user);

                set_auth_token(user, from, navigate);

            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <p className='text-center'>socila login</p>
            <p className='text-center'>
                <button onClick={handle_login} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;