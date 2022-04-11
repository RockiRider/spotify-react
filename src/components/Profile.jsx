import React, {useEffect, useState, useContext} from "react";
import { UserContext } from "../context/userContext";
import { Avatar } from "@mui/material";
import axios from 'axios';

const Profile = () => {

    const [name, setName] = useState('');
    const [img, setImage] = useState('');
    const [token, setToken] = useContext(UserContext);

    useEffect(() => {

        axios.get('https://api.spotify.com/v1/me',{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': `application/json`
            }
        }).then(data => {
            const results = data.data;
            if(results.display_name)setName(results.display_name);
            if(results.images.length > 0)setImage(results.images[0]);
        }).catch(err => {
            console.log(err);
        })
    },[])

    return(
        <div className="profileArea">
            <Avatar src={`"${img}"`}/>
            <h2>Hello, {name}</h2>
        </div>
    )
}

export {Profile}