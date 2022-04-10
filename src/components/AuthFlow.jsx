import React, {useContext} from 'react'
import { UserContext } from "../context/userContext";

const Login = () => {

    const CLIENT_ID = '37901a9fa9424f2e8957a5584170f6e6';
    const REDIRECT_URI = 'http://localhost:3000';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';

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
        console.log('HEREEE');
        const STATE = randomString(32);
        console.log("Here");
        const URL = `${AUTH_ENDPOINT}?client_id=${encodeURIComponent(CLIENT_ID)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=${encodeURIComponent(RESPONSE_TYPE)}&state=${encodeURIComponent(STATE)}`;
        window.localStorage.setItem("state",STATE);
        window.location = URL;
    }

    return (
        <button onClick={handleLogin}>Login</button>
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
        <button onClick={handleLogout}>Logout</button>
    )
}

export {Login,Logout};