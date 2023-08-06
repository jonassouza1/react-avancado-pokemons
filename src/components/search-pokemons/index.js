import { useState } from "react"
import iconButton from '../../images/iconButton.png'
import {Form,Div,Img} from './styles'
const SearchPokemons = ({ addPokemonType,children }) => {
    const [inputs, setInputs] = useState([])

    const handleInputChange = async event => {
        const inputValue = event.target.value
        setInputs(inputValue)
    }
    const handleSubmit = async event => {
        event.preventDefault()
        addPokemonType(inputs)
    }
    return (
        <Form role="btn" onSubmit={handleSubmit} >
            <label htmlFor="type">Search Type</label>
            <Div>
                <input placeholder=" type it ..." type="text" id="type" name="type" onChange={handleInputChange} value={inputs.inputValue} />
                <button><Img src={iconButton} />{children}</button>
            </Div>
        </Form>
    )
}

export { SearchPokemons }


