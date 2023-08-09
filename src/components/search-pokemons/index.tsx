import { FunctionComponent, useState } from "react"
import iconButton from '../../images/iconButton.png'
import {Form,Div,Img} from './styles'

interface SearchProps{
children?:React.ReactNode;
addPokemonType:(newPokemons: string) => Promise<void>;
}
const SearchPokemons:FunctionComponent <SearchProps>= ({ addPokemonType,children }) => {
    const [inputs, setInputs] = useState<string>('')

    const handleInputChange:(event: any) => Promise<void> = async (event) => {
        const inputValue:string = event.target.value
        setInputs(inputValue)
    }
    const handleSubmit: (event: any) => Promise<void> = async event => {
        event.preventDefault()
        addPokemonType(inputs)
    }
    return (
        <Form role="btn" onSubmit={handleSubmit} >
            <label htmlFor="type">Search Type</label>
            <Div>
                <input placeholder=" type it ..." type="text" id="type" name="type" onChange={handleInputChange} value={inputs} />
                <button><Img src={iconButton} />{children}</button>
            </Div>
        </Form>
    )
}

export { SearchPokemons }


