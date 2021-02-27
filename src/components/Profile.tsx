import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const {level} = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/43682613?s=460&u=56d27426c0c45540b85edd1a03d2ec815e50a882&v=4" alt="Anderson Adolfo"/>
            
            <div>
                <strong>Anderson Adolfo</strong>
                <p>
                    <img src="icons/level.svg" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}