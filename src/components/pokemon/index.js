import { useEffect, useState } from "react"
import { getPokemon } from "../../services/getPokemon"
import { useParams } from "react-router-dom"
import { Abilitys } from "../abilitys"
import React,{ useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import{Section,NameImg,Moves,List,AbilitysDiv,LinkHome,Div}from "./styles"

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

export { PokemonDetail }