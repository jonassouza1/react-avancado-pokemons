import { styled } from "styled-components"


export const Button = styled.button`
border-radius:50%;
transition:0.5s;
border:none;
&:hover{
  margin-left:15px;
  border: solid 1px  red;
}
&:hover img{
  opacity:0.8;
  width:33px;
}
`