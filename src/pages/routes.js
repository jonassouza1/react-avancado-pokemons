import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Home } from './pokemons'
import { Pokemon } from './pokemon'

const AppRoutes = ()=>{
    return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/pokemon/:name' element={<Pokemon/>} />
    </Routes>
    </BrowserRouter>
    )
}
export {AppRoutes}