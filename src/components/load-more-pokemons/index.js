import { useEffect, useState } from "react"
import { getListPokemons } from "../../services/getListPokemons"
import { Button } from "./styles"
import iconButton from '../../images/iconButton.png'

const LoadMorePokemons = ({ addNewList }) => {
  const [pokemons, setNewlist] = useState([])

  useEffect(() => {
    async function fetchData() {
      const getPokemons = await getListPokemons()
      const newPokemons = await getPokemons
      const newListPokemons = newPokemons.filter(info => info.id > 10)
      setNewlist(newListPokemons)
    }
    fetchData()
  }, [])

  const add = () => {
    addNewList(pokemons)
    setNewlist([])
  }

  return <Button onClick={() => add()} ><img src={iconButton} /></Button>

}

export { LoadMorePokemons }



