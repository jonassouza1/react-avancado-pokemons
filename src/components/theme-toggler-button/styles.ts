import {  styled } from "styled-components"

interface T{
    themes:{}
}

const Button:any = styled.button<T>`
${props => props.themes}
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
const Div = styled.div<T>`
${props => props.theme}
position:absolute;
top:10px;
right:10px;

`

export { Button, Div }