
import { baseUrl } from "../variables/variables"

async function getListPokemons(limit:number|undefined) {
   const listPokemons = await fetch(`${baseUrl}pokemon?limit=${limit}`)
   const { results } = await listPokemons.json()
   const pokemonsName = results.map((pokemon:any) => pokemon.name)
   const listName = pokemonsName.map(async (name:string) => {
      const pokemon = await fetch(`${baseUrl}pokemon/${name}`)
      const result = await pokemon.json()
      return result
   })
   return Promise.all(listName)
}

export {getListPokemons}