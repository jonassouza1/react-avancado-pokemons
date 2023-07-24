
import { setupServer } from 'msw/node'
import { rest } from 'msw'

describe('gettypepokemons component', () => {

  const worker = setupServer(
    rest.get('https://pokeapi.co/api/v2/type/poison', async (req, res, ctx) => {
      return res(
        ctx.json(
          {
            name: 'pokemon'
          }
        )
      )
    }),
  )
  beforeAll(() => { worker.listen() })

  it('it should consume an api and parse the response', async () => {

    const getTypePokemon = await fetch('https://pokeapi.co/api/v2/type/poison')
    const result = await getTypePokemon.json()
    expect(result.name).toBe('pokemon')
  })
})