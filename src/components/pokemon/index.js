import { useEffect, useState } from "react"
import { getPokemon } from "../../services/getPokemon"
import { useParams } from "react-router-dom"
import { Abilitys } from "../abilitys"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"
import pokeboll from "../../images/pokeboll.png"
import home from "../../images/home.png"
import { Link } from "react-router-dom"
const PokemonDetail = () => {
    const [pokemon, setPokemon] = useState({
        moves: [{ move: '' }],
        types: [],
        sprites: { other: { dream_world: '' } }
    })
    const { theme } = useContext(ThemeContext)

    const { name } = useParams()

    useEffect(() => {
        async function fetchData() {
            const pokemonDetail = await getPokemon(name)
            setPokemon(pokemonDetail)
        }
        fetchData()
    }, [])
    return (
        <Section themes={theme}>
            <LinkHome>
                <Link to='/'><Div><p>Home</p></Div></Link>
            </LinkHome>
            <NameImg>
                <img src={pokemon.sprites.other.dream_world.front_default} />
                <h1>{pokemon.name}</h1>
            </NameImg>
            <Moves>
                <h3>Moves </h3>
                <List>
                    {pokemon.moves.filter((info, index) => index < 20).map((info, index) => {
                        return <li key={index}>
                            <p>{info.move.name}</p>
                        </li>
                    })}
                </List>
            </Moves>
            <AbilitysDiv>
                <Abilitys params={name} />
                <h3>Type</h3>
                {pokemon.types.map((info, index) => {
                    return <p key={index}>{info.type.name}</p>
                })}
            </AbilitysDiv>
        </Section>
    )
}

const Section = styled.section`
${props => props.themes}
display:flex;
flex-flow:column wrap;
min-width:100vw;
align-items:end;
justify-content:end;
padding:30px;
img{
    width:400px;
    position:absolute;
    left:250px;
    transition:0.7s;
    &:hover{
        left:380px;
        padding-top:15px;
        transform: rotate(10deg)
    }
}

@media(max-width:840px){
    align-items:center;
    justify-content:center;
    img{
        &:hover{
            left:150px;
        }
    }

}
`
const NameImg = styled.div`
display:flex;
position:absolute;
left:10px;
top:10px;
background:url(${pokeboll});
background-size:cover;
background-repeat:none;
height:450px;
width:500px;
border-radius:40%;

h1{
    font-size:40px;
    font-family: 'Luckiest Guy', cursive;
}

@media(max-width:840px){
  position:relative;
  max-width:270px;
  max-height:270px;
  left:-20px;
  border-radius:40%;
  h1{
    position:absolute;
    font-size:30px;
    top:-40px;
  }
  img{
    max-width:200px;
    left:120px;
  }
}
`
const Moves = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
margin-top:50px;
h3{
    font-family: 'Kablammo', cursive;
    font-size:25px;
    color:#191970;
    text-shadow:2px 2px  #00BFFF;
}

`
const List = styled.ul`
display:flex;
align-items:center;
flex-flow:column wrap;
max-height:200px;
width:300px;
list-style:none;
margin-top:30px;
`
const AbilitysDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h3{
    font-size:20px;
}
`
const LinkHome = styled.div`
@media(min-width:840px){
    position:absolute;
    top:20px;
    right:200px;
}
`
const Div = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background:url(${home});
background-size:cover;
background-repeat:none;
width:80px;
height:80px;
color:#DC143C;
transition:0.4s;
&:hover{
    width:100px;
    height:100px;
}
p{
    font-size:20px;
   margin-top:-20px;
   transition:0.4s;
}
&:hover p{
   margin:0;
}

`



export { PokemonDetail }