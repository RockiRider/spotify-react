import React, {useEffect, useContext, useState} from "react";
import { TrackContext, FilterContext } from "../context/trackContext";
import { ListItem,List, ListItemButton} from "@mui/material";

const SidebarMain = () => {

    const [trackData, setTrackData] = useContext(TrackContext);
    const [artists, setArtists] = useState([]);
    const [filter, setFilter] = useContext(FilterContext);
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        const inFilter = window.localStorage.getItem("filter");
        if(inFilter){
            setFilter(inFilter);
        }
    },[])

    useEffect(() => {
        const inFilter = window.localStorage.getItem("filter");
        if(filter && inFilter && filter !== inFilter && !artists.includes(filter)){
            window.localStorage.removeItem("filter");
            console.log(filter,inFilter);
            console.log('Filter not equal to inFilter OR Filter not in Artists');
        }
    },[filter,artists])

    useEffect(() => {
        if(!trackData.length > 0) return;
        const artists = trackData.flatMap((el) => {
            const names = el.track.artists.map(el => el.name)
            return names;
        });
        const uniqueArtists = [...new Set(artists)];
        setArtists(uniqueArtists);
        
    },[trackData])

    

    const handleListItemClick = (event, index) => {

        if(selectedIndex !== index){
            setFilter(artists[index]);
            window.localStorage.setItem("filter",artists[index]);
            setSelectedIndex(index);
        }else{
            setFilter('');
            window.localStorage.removeItem("filter");
            setSelectedIndex(null)
        }
    };

    return(
        <div>
            <List sx={{ width: '100%', maxWidth: '100%' }}>
                {artists.map((item,i) => {
                    return(
                        <ListItem key={i} alignItems="flex-start">
                            <ListItemButton selected={selectedIndex === i} onClick={(event) => handleListItemClick(event, i)}>{item}</ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

export {SidebarMain}