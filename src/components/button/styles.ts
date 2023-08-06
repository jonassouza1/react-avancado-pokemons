import { styled } from "styled-components";


const ButtonT = styled.button`
${props => props.theme};
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
export { ButtonT }