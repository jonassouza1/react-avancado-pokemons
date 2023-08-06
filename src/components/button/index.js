import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { ButtonT } from "./styles"
export const Button=(props)=>{
    const {theme} = useContext(ThemeContext)
    const {img} = theme;
    const imgs= img;
    return(
        <ButtonT {...props}
        themes={theme}
        ><img src={imgs}/></ButtonT>
    )
}




