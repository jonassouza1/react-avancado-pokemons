import { baseUrl } from "../variables/variables";

async function getPokemon(names:string|undefined) {
  const pokemon = await fetch(`${baseUrl}pokemon/${names}`)
  const result = await pokemon.json()
  return await result
}

export { getPokemon }