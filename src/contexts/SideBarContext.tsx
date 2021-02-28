import { createContext, ReactNode, useState } from "react";

interface SideBarContextData {
    isHomeActive : boolean;
    isAwardActive : boolean;
    activeHome: () => void;
    activeAward: () => void;
}

interface SideBarProviderProps {
    children: ReactNode;
}

export const SideBarContext = createContext({} as SideBarContextData);

export function SideBarProvider ({ children } : SideBarProviderProps) {

    const [isHomeActive, setIsHomeActie] = useState(true);
    const [isAwardActive, setIsAwardActive] = useState(false);    

    function activeHome(){
        if (!isHomeActive) {
            setIsHomeActie(true);
            setIsAwardActive(false);
        }
    }

    function activeAward() {
        if (!isAwardActive) {
            setIsHomeActie(false);
            setIsAwardActive(true);
        }
    }

    return (
        <SideBarContext.Provider
            value={{
                isHomeActive,
                isAwardActive,
                activeHome,
                activeAward,
            }}
        >
            {children}
        </SideBarContext.Provider>
    );

}