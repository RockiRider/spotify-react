import React from "react";
import { Sidebar } from "./Sidebar";
import { Grid } from './Grid';
import styles from '../styles/SpotifyDisplay.module.css';

const SpotifyDisplay = () => {

    return(
        <div className={styles.spotifyWrapper}>
            <Sidebar/>
            <Grid/>
        </div>
    )
}

export {SpotifyDisplay}