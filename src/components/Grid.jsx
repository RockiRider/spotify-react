import React, { useEffect, useContext } from "react";
import { UserContext } from "../context/userContext";
import styles from '../styles/Grid.module.css';
import { ListItem,List, Avatar,ListItemAvatar,ListItemText,Typography} from "@mui/material";
import axios from "axios";

const Grid = () => {

    const [ token, setToken] = useContext(UserContext);

    useEffect(()=> {

        const date = Date.now();
        console.log(date);
        axios.get('https://api.spotify.com/v1/me/player/recently-played',{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': `application/json`
            },
            params:{
                limit:'10',
                before: date,
            }
        }).then(data => {
            const trackData = data.data.items;
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
        console.log(token);
    },[])
    return(
        <div className={styles.gridWrapper}>
            <div className={styles.gridArea}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

export {Grid};