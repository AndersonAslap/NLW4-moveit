import { useContext } from "react";
import { SideBarContext } from "../contexts/SideBarContext";
import { ChallengeBox } from "./ChallengeBox";
import { CompletedChallenges } from "./CompletedChallenges";
import { Countdown } from "./Countdown";
import { ExperienceBar } from "./ExperienceBar";
import { Profile } from "./Profile";

import { CountdownProvider } from '../contexts/CountdownContext';

export function MainComponent() {

    const {isHomeActive} = useContext(SideBarContext);

    return (
        <>
            {
               isHomeActive ? (
                <>
                  <ExperienceBar />

                  <CountdownProvider>
                    <section>
                      <div>
                        <Profile />
                        <CompletedChallenges />
                        <Countdown />
                      </div>

                      <div>
                        <ChallengeBox />
                      </div>
                    </section>
                  </CountdownProvider>
                </>
              ) : (
                <>
                  <section>

                  </section>
                </>
              )
            }
        </>
    );
}