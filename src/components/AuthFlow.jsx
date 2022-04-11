import React, {useContext} from 'react'
import { UserContext } from "../context/userContext";
import { Button } from '@mui/material';

const Login = () => {

    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT;
    const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE;
    const SCOPE = process.env.REACT_APP_SCOPE;

    const randomString = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const handleLogin = () => {
        const STATE = randomString(32);
        const URL = `${AUTH_ENDPOINT}?client_id=${encodeURIComponent(CLIENT_ID)}&scope=${SCOPE}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=${encodeURIComponent(RESPONSE_TYPE)}&state=${encodeURIComponent(STATE)}`;
        window.localStorage.setItem("state",STATE);
        window.location = URL;
    }

    return (
        <Button variant="contained" onClick={handleLogin}>Login</Button>
    )
}

const Logout = () => {

    const [token, setToken] = useContext(UserContext);

    const handleLogout = () => {
        localStorage.removeItem('state');
        localStorage.removeItem('token');
        setToken('');
    }

    return (
        <Button variant="contained" onClick={handleLogout}>Logout</Button>
    )
}

export {Login,Logout};