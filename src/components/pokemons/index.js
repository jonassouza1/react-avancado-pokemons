import { useEffect, useState } from "react"
import { getListPokemons } from "../../services/getListPokemons"
import { Link } from "react-router-dom"
import { LoadMorePokemons } from "../load-more-pokemons"
import { SearchPokemons } from "../search-pokemons"
import { getTypePokemons } from "../../services/getTypePokemon"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import {Section,List,Li,H1,ButtonLoadMore} from "./styles"
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


export { PokemonsList }