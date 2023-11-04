import { fireEvent, render } from '@testing-library/react'
import { SearchPokemons } from './index'

describe('search pokemons component', () => {

  it('should test the input if it is "undefined"', () => {
    const { getByLabelText } = render(<SearchPokemons />)
    const input = getByLabelText('Search Type')

    expect(input.value).toBe("")
  })

  it('should test input if the have value', () => {
    const { getByLabelText } = render(<SearchPokemons />)
    const input = getByLabelText('Search Type')
    fireEvent.change(input, { target: { value: 'poison' } })

    expect(input.value).toBe("poison")
  })

  it('should test the click in button ', () => { 
    const { getByRole } = render(<SearchPokemons />)
    const button = getByRole('btn')
    fireEvent.click(button)

  })
  it('should call addtypepokemon prop click', () => {
    const addPokemonType = jest.fn();
    const { getByLabelText, getByText } = render(<SearchPokemons addPokemonType={addPokemonType} >click</SearchPokemons>)
    const input = getByLabelText('Search Type')
    const button = getByText('click')

    fireEvent.change(input, { target: { value: 'poison' } })
    fireEvent.click(button)
    expect(addPokemonType).toHaveBeenCalledWith('poison')
  })

})