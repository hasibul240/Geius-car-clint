import React from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase';

export const AuthContext = React.createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const create_user = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const sign_out = () => {
        setLoading(true);
        return signOut(auth);
    }

    React.useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, current_user => {
            setUser(current_user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const auth_info = {
        user, loading,
        create_user, login, sign_out
    };

    return (
        <AuthContext.Provider value={auth_info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;