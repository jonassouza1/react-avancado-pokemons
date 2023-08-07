import React, { FunctionComponent, createContext } from "react";
import night from '../images/night.jpg'
import light from '../images/light.jpg'
import treeLeaft from '../images/treeLeaft.png'
import comet from '../images/comet.png'
import  {usePersistedState} from "../storage/usePersistedState"
import { DefaultTheme } from "styled-components";




export const themes = {
    light: {
        backgroundImage: `url(${light})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        color: '#000000',
        img:`${comet}`

    },
    dark: {
        backgroundImage: `url(${night})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        color: '#eeeeee',
        img:`${treeLeaft}`
    }
}

export const ThemeContext = createContext({})

interface ThemesProps{
children:React.ReactNode;
}
export const ThemeProvider:FunctionComponent<ThemesProps> = ({children}) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',light)
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
