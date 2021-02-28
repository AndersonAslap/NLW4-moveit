import { useContext, useState } from 'react';
import { SideBarContext } from '../contexts/SideBarContext';
import styles from '../styles/components/SideBarLeft.module.css';

export function SideBarLeft() {

    const { isHomeActive, isAwardActive, activeHome, activeAward } = useContext(SideBarContext);

    return (
        <div className={styles.sideBarLeftContainer}>
            <div className={styles.sideBarLeftLogo}>
                <img src="/icons/logo.svg" />
            </div>

            <div className={styles.sideBarLeftItems}>
                <img 
                    src={ isHomeActive ? "/icons/home-active.svg" : "/icons/home.svg" }
                    className={styles.active} 
                    onClick={activeHome} />

                <img 
                    src={ isAwardActive ? "/icons/award-active.svg" : "/icons/award.svg" }
                    className={styles.active} 
                    onClick={activeAward}/>
            </div>
        </div>
    )
}