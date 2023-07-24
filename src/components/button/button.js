import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"
export const Button=(props)=>{
    const {theme} = useContext(ThemeContext)
    const {img} = theme;
    const imgs= img;
    return(
        <ButtonClick {...props}
        themes={theme}
        ><img src={imgs}/></ButtonClick>
    )
}

const ButtonClick = styled.button`
${props=>props.theme};
background:url();
border:none;
cursor:pointer;
&:hover img{
    transition:0.4s;
    margin-top:30px;
    margin-right:30px;
    transform: rotate(10deg)
}
`


