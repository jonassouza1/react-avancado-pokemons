
import { baseUrl } from "../variables/variables"
import { getPokemon } from "./getPokemon"

async function getTypePokemons(type) {
    const pokemons = await fetch(`${baseUrl}type/${type}`)
    const { pokemon } = await pokemons.json()
    if (pokemon === undefined) { return }
    const filterPokemon = await pokemon.filter((info, index) => index < 10).map(info => info.pokemon.name)
    const namePokemons = filterPokemon.map(async name => {
        const getPokemons = await getPokemon(name)
        const result = await getPokemons
        return result
    })
    return await Promise.all(namePokemons)
}

export { getTypePokemons }