import React from "react"
import { Login } from "./AuthFlow"
import styles from '../styles/LoginDisplay.module.css';

const LoginDisplay = () => {

    return(

        <div className={styles.loginArea}>
            <h1>Spotify App</h1>
            <h5>Login to Spotify to continue</h5>
            <Login/>
        </div>
    )
}

export {LoginDisplay}