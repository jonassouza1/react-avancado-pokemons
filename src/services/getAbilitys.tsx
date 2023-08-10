import { baseUrl } from "../variables/variables"
import { getPokemon } from "./getPokemon"


async function getAbilitys(name:string|undefined){
  const PokemonId = await getPokemon(name)
  const {id} = await PokemonId
  const abilityPokemon = await fetch(`${baseUrl}ability/${id}/`)
  return await abilityPokemon.json()
}

export { getAbilitys }