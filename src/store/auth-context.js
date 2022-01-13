import React, { useState } from 'react';
require('dotenv').config();

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
    localId: '',
    loginLocalId: (localId) => {},
    logoutLocalId: () => {},
    isMng: false
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState('');

    const [localId, setLocalId] = useState('');


    //!! means that if the token is empty it returns false
    // and if the token is not empty it return true
    const userIsLoggenIn = !!token;
    const IsUserMng = (localId === process.env.REACT_APP_MNG_KEY) ? true : false;

    const loginHandler = (token) => {
        setToken(token);
    };

    const logoutHandler = () => {
        setToken(null);
    };

    const loginLocalIdHandler = (localId) => {
        setLocalId(localId);
    }

    const logoutLocalIdHandler = () => {
        setLocalId(null);
    }

    const contaxtValue = {
        token: token,
        isLoggedIn: userIsLoggenIn,
        login: loginHandler,
        logout: logoutHandler,
        localId: localId,
        loginLocalId: loginLocalIdHandler,
        logoutLocalId: logoutLocalIdHandler,
        isMng: IsUserMng
    };

    return (
        <AuthContext.Provider value={contaxtValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;