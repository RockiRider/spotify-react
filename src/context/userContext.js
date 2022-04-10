import React, { useState, createContext } from 'react';

/* Shares URL Across Components */

export const UserContext = createContext();

export const UserProvider = props => {
    const [token, setToken] = useState('');
    return <UserContext.Provider value={[token,setToken]}>{props.children}</UserContext.Provider>;
};