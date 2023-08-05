import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAbilitys } from "../../services/getAbilitys"
import  {List } from "./list"
const Abilitys = () => {
   const [ability, setAbilitys] = useState({
      effect_changes: [],
      effect_entries: [[], [{ effect: '' }]]
   })
   const { name } = useParams()
   useEffect(() => {
      async function fetchData() {
         const response = await getAbilitys(name)
         setAbilitys(response)
      }
      fetchData()
   }, )
   return (
      <List>
         <li>
            <h2>{ability.name}</h2>
            <h3>Effect:</h3>
            <p>{ability.effect_entries[1].effect}</p>
            <h3>Short Effect:</h3>
            <p>{ability.effect_entries[1].short_effect}</p>
         </li>

         {ability.effect_changes.map((info, index) => {
            return <li key={index}>
               <h3>Effect Changes</h3><p>{info.effect_entries[1].effect}</p>
            </li>
         })}
      </List>

   )
}

export { Abilitys }

