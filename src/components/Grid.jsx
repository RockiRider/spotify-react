import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { TrackContext, FilterContext } from "../context/trackContext";
import styles from '../styles/Grid.module.css';
import { ListItem,List, Avatar,ListItemAvatar,ListItemText,Typography} from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import axios from "axios";

const Grid = () => {

    const [token, setToken] = useContext(UserContext);
    const [filter, setFilter] = useContext(FilterContext);
    const [trackData,setTrackData] = useContext(TrackContext);
    const [tracks, setTracks] = useState([]);

    useEffect(()=> {
        setTracks(trackData);
    },[trackData])

    useEffect(() => {

        if(filter){
            const filteredData = trackData.filter(el => {
                const artistsList = el.track.artists.map(el => el.name);
                
                if(artistsList.includes(filter)) return el;
            })
            setTracks(filteredData);
        }else{
            setTracks(trackData);
        }
    },[filter])

    const handleRefetch = () => {
        console.log("Called Refetch");
        axios.get('https://api.spotify.com/v1/me/player/recently-played',{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': `application/json`
            },
            params:{
                limit:'10',
                before: Date.now(),
            }
        }).then(data => {
            const trackData = data.data.items;
            setTrackData(trackData);
        }).catch(err => {
            console.log(err);
        })
    }
    
    return(
        <div className={styles.gridWrapper}>
            <div className={styles.gridArea}>
                <div className={styles.headingArea}>
                    <h2>Recently Played Tracks</h2>
                    <RefreshIcon onClick={handleRefetch}/>
                </div>
                <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>

                    {tracks.map((item,i) => {
                        const artistsList = item.track.artists.map(el => el.name).join(', ');
                        return(
                            <ListItem alignItems="flex-start" key={item.track.id}>
                                <ListItemAvatar>
                                    <Avatar alt="Album Image" src={item.track.album.images[0].url} />
                                </ListItemAvatar>
                                <ListItemText
                                primary={item.track.name}
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {artistsList}
                                    </Typography>
                                        {` - ${item.track.album.name}`}
                                    </React.Fragment>
                                }/>
                            </ListItem>
                        )
                    })}

                </List>
            </div>
        </div>
    )
}

export {Grid};