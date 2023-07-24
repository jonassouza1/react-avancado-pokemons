import React, { createContext } from "react";
import night from '../images/night.jpg'
import light from '../images/light.jpg'
import treeLeaft from '../images/treeLeaft.png'
import comet from '../images/comet.png'
import  {usePersistedState} from "../storage/usePersistedState"

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

export const ThemeProvider = (props) => {
    const [theme, setTheme] = usePersistedState('theme',themes.light)
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
