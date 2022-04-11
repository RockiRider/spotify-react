import React from "react";
import styles from '../styles/Sidebar.module.css';
import {SidebarMain} from './SidebarMain';
import { Logout } from "./AuthFlow";
import { Profile } from "./Profile";


const Sidebar = () => {


    return(
        <div className={styles.sidebarWrapper}>
            <div className={styles.sidebarArea}>
                <div className={styles.sidebarMain}>
                    <Profile/>
                    <SidebarMain/>
                </div>
                <div className={styles.sidebarBottom}>
                    <Logout/>
                </div>
            </div>
        </div>
    )
}

export {Sidebar}