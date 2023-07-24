import { baseUrl } from "../variables/variables";

async function getPokemon(names) {
  const pokemon = await fetch(`${baseUrl}pokemon/${names}`)
  const result = await pokemon.json()
  return await result
}

export { getPokemon }