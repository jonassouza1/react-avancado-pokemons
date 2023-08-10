import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Home } from './pokemons'
import { Pokemon } from './pokemon'





const AppRoutes = ()=>{
    return (
    <BrowserRouter>
    <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/pokemon/:name' element={<Pokemon/>} />
    </Routes>
    </BrowserRouter>
    )
}
export {AppRoutes}