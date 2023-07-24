import { useEffect, useState } from "react"
import { getListPokemons } from "../../services/getListPokemons"
import styled from "styled-components"
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

const Button = styled.button`
border-radius:50%;
transition:0.5s;
border:none;
&:hover{
  margin-left:15px;
  border: solid 1px  red;
}
&:hover img{
  opacity:0.8;
  width:33px;
}
`

