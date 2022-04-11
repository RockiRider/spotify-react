import React, { useState, createContext } from 'react';

/* Shares URL Across Components */

export const TrackContext = createContext();

export const TrackProvider = props => {
    const [trackData, setTrackData] = useState([]);
    return <TrackContext.Provider value={[trackData,setTrackData]}>{props.children}</TrackContext.Provider>;
};

export const FilterContext = createContext();

export const FilterProvider = props => {
    const [filter, setFilter] = useState(null);
    return <FilterContext.Provider value={[filter,setFilter]}>{props.children}</FilterContext.Provider>;
};

