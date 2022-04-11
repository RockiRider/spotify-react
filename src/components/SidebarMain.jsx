import React, {useEffect, useContext, useState} from "react";
import { TrackContext, FilterContext } from "../context/trackContext";
import { ListItem,List, ListItemButton, Pagination} from "@mui/material";
import styles from '../styles/SidebarMain.module.css';

const SidebarMain = () => {

    const [trackData, setTrackData] = useContext(TrackContext);
    const [artists, setArtists] = useState([]);
    const [filter, setFilter] = useContext(FilterContext);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const [ currentPage, setCurrentPage] = useState(1);
    const [ artistsPerPage, setArtistsPerPage] = useState(12);

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
            setSelectedIndex(null);
        }
    };
    const handlePagination = (event) => {
        const num = parseInt(event.target.textContent)
        setCurrentPage(num);
    }

    const indexOfLastTrack = currentPage * artistsPerPage;
    const indexOfFirstTrack = indexOfLastTrack - artistsPerPage;
    const currentArtists = artists.slice(indexOfFirstTrack,indexOfLastTrack);
    const paginationCount = Math.ceil(artists.length / artistsPerPage);

    return(
        <div className={styles.artistsArea}>
            <List sx={{ width: '100%', maxWidth: '100%' }}>
                {currentArtists.map((item,i) => {
                    return(
                        <ListItem key={i} alignItems="flex-start">
                            <ListItemButton selected={selectedIndex === i} onClick={(event) => handleListItemClick(event, i+indexOfFirstTrack )}>{item}</ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
            <Pagination page={currentPage} onChange={handlePagination} count={paginationCount}/>
        </div>
    )
}

export {SidebarMain}