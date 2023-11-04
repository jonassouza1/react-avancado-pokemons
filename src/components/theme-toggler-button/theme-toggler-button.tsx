import React, { FunctionComponent,  useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import {Div,Button} from './styles'


    
export const ThemeTogglerButton:FunctionComponent = () => {
    const {theme ,setTheme} = useContext<any>(ThemeContext);
     localStorage.setItem('theme', JSON.stringify(theme))

    return (
        <Div themes={theme}>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}> <img src={theme.img}/></Button>
        </Div>
    )
}



