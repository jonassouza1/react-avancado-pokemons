import { useEffect, useState } from "react"
import { getListPokemons } from "../../services/getListPokemons"
import { Link } from "react-router-dom"
import { LoadMorePokemons } from "../load-more-pokemons"
import { SearchPokemons } from "../search-pokemons"
import { getTypePokemons } from "../../services/getTypePokemon"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"
import pokemonsCell from "../../images/pokemonsCell.jpg"
const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([])
    const { theme } = useContext(ThemeContext)
    useEffect(() => {
        async function fetchData() {
            const list = await getListPokemons(10)
            setPokemons(list)
        }
        fetchData()
    }, [])
    const addNewList = newlist => {

        setPokemons([...pokemons, ...newlist])
    }
    const addPokemonType = async newPokemons => {
        const typepokemon = await getTypePokemons(newPokemons)
        if(typepokemon ===undefined || 0){return }else{
        setPokemons([...typepokemon])}

    }
    return (
        <Section themes={theme} >
            <SearchPokemons addPokemonType={addPokemonType} />
            <List>
                {pokemons.map((pokemon, index) => {
                    return <Li key={index}>
                        <Link
                            to={`/pokemon/${pokemon.name}`}>
                            <img src={pokemon.sprites.other.dream_world.front_default} />
                        </Link>
                        <H1>{pokemon.name}</H1>
                    </Li>
                })}
            </List>
            <ButtonLoadMore>
                <p>Load</p>
                <LoadMorePokemons addNewList={addNewList} />
            </ButtonLoadMore>
        </Section>
    )
}
const Section = styled.section`
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

export { PokemonsList }