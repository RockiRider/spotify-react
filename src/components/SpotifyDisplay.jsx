import React,{useContext, useEffect} from "react";
import { UserContext } from "../context/userContext";
import { TrackContext, TrackProvider } from "../context/trackContext";
import { Sidebar } from "./Sidebar";
import { Grid } from './Grid';
import styles from '../styles/SpotifyDisplay.module.css';
import axios from 'axios';

const SpotifyDisplay = () => {

    const [ token, setToken] = useContext(UserContext);
    const [ trackData, setTrackData] = useContext(TrackContext);

    useEffect(()=> {
        axios.get('https://api.spotify.com/v1/me/player/recently-played',{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': `application/json`
            },
            params:{
                limit:'50',
                before: Date.now(),
            }
        }).then(data => {
            const trackData = data.data.items;
            setTrackData(trackData);
            console.log(trackData);
        }).catch(err => {
            console.log(err);
        })
    },[])

    return(
        <div className={styles.spotifyWrapper}>
            <Sidebar/>
            <Grid/>
        </div>
    )
}

export {SpotifyDisplay}