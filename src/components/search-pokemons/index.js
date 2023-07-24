import { useState } from "react"
import styled from "styled-components"
import pokemonsSearchType from "../../images/pokemonsSearchType.jpg"
import iconButton from '../../images/iconButton.png'
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

const Form = styled.form`
margin:30px;
display:flex;
align-items:center;
flex-direction:column;
justify-content:end;
background:url(${pokemonsSearchType});
background-size:cover;
background-repeat:none;
width:131px;
height:141px;
border:solid 1px gold;
border-radius:30%;
label{
    font-size:17px;
    font-weight:700;
    color:blue;
    margin-bottom:10px;
}
transition:0.3s;
&:hover{
    opacity:0.8;
    border:none;
}
`
const Div = styled.div`
display:flex;
align-items:center;
margin-left:40px;
max-width:150px;
margin-bottom:0px;
input{
    transition:0.4s;
    border:solid 1px gold;
    max-width:60px;
    height:14px;
    margin-left:5px;
}
button{
    border:none;
    border-radius:50%;
    margin-left:5px;
    border:solid 1px red;
}

&:hover input{
    border:solid 1px #000000;
}
`
const Img = styled.img`
width:20px;
height:18px;
cursor:pointer;
`
