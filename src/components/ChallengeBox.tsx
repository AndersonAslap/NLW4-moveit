import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const contextData = useContext(ChallengesContext);

    console.log(contextData);

    const hasActiveChallende = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallende ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 min</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                        >Falhei</button>
                        
                        <button
                            type="button"
                            className={styles.challengeSucceededdButton}
                        >Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
            
        </div>
    );
}