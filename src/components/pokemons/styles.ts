import pokemonsCell from "../../images/pokemonsCell.jpg"
import styled from "styled-components"

interface Theme {
    themes:any;
}

const Section = styled.section<Theme>`
${props => props.themes}
@media(max-width:780px){
    display:flex;
    flex-flow:column wrap;
    align-items:center;
}
`
const List = styled.ul`
list-style:none;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
min-height:700px;
`
const Li = styled.li`
display:flex;
flex-flow:column wrap;
align-items:center;
justify-content:center;
text-decoration:none;
background:url(${pokemonsCell});
background-size:cover;
background-repeat:none;
width:200px;
height:300px;
margin:10px;
border:solid 1px gold;
border-radius:10%;
text-align:center;
position:relative;
transition:0.3s;
img{
    max-width:130px;
    height:130px;
    margin-bottom:50px;
}
&:hover{
    opacity:0.7;
    border:solid 1px red;
    margin-top:5px;
}
&:hover img{
   max-width:150px;
   height:140px;
}
` 

const H1 = styled.h1`
position:absolute;
margin-top:105px;
margin-left:15px;
font-size:16px;
color:#000000;
font-weight:700;
`

const ButtonLoadMore = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top:-5px;
`
export{Section,List,Li,H1,ButtonLoadMore}