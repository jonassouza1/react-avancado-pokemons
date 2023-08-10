
import { baseUrl } from "../variables/variables"
import { getPokemon } from "./getPokemon"

async function getTypePokemons(type:string) {
    const pokemons = await fetch(`${baseUrl}type/${type}`)
    const { pokemon } = await pokemons.json()
    if (pokemon === undefined) { return }
    const filterPokemon = await pokemon.filter((info:null, index:number) => index < 10).map((info:any) => info.pokemon.name)
    const namePokemons = filterPokemon.map(async (name:string) => {
        const getPokemons = await getPokemon(name)
        const result = await getPokemons
        return result
    })
    return await Promise.all(namePokemons)
}

export { getTypePokemons }