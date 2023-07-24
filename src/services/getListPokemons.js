
import { baseUrl } from "../variables/variables"

async function getListPokemons(limit) {
   const listPokemons = await fetch(`${baseUrl}pokemon?limit=${limit}`)
   const { results } = await listPokemons.json()
   const pokemonsName = results.map(pokemon => pokemon.name)
   const listName = pokemonsName.map(async name => {
      const pokemon = await fetch(`${baseUrl}pokemon/${name}`)
      const result = await pokemon.json()
      return result
   })
   return Promise.all(listName)
}

export {getListPokemons}