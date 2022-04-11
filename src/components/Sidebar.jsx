import React, {useEffect, useState} from "react";
import styles from '../styles/Sidebar.module.css';
import { Profile } from "./Profile";


const Sidebar = () => {


    return(
        <div className={styles.sidebarWrapper}>
            <div className={styles.sidebarArea}>
                <Profile/>
            </div>
        </div>
    )
}

export {Sidebar}