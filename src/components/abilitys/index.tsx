import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAbilitys } from "../../services/getAbilitys"
import { List } from "./styles"

interface ChangeEfeect {
   effect?: string | null | undefined;

}
interface Changes {
   effect_entries: ChangeEfeect[]
}
interface EntriesEffect {
   effect?: string | null | undefined;
   short_effect: string | null | undefined;
}
type Entries = EntriesEffect

interface T {
   name: string;
   effect_changes: Changes[];
   effect_entries: Entries[]

}


const Abilitys = () => {
   const [ability, setAbilitys] = useState<T>({
      effect_changes: [{ effect_entries: [{}, { effect: "" }] }],
      effect_entries: [{ effect: "", short_effect: "" }, { effect: "", short_effect: "" }],
      name: ''
   })
   const { name } = useParams()
   useEffect(() => {
      async function fetchData() {
         const response = await getAbilitys(name)
         setAbilitys(response)
      }
      fetchData()
   },)
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

