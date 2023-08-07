import React, { FunctionComponent, useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { ButtonT } from "./styles"


interface ButtonProps{
    props:any
}

export const Button:FunctionComponent<ButtonProps>=(props)=>{
    const {theme}:any = useContext(ThemeContext)
    const {img} = theme;
    const imgs= img;
    return(
        <ButtonT {...props}
        
        ><img src={imgs}/></ButtonT>
    )
}




