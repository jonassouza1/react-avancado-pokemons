import { BrowserRouter,Route,RouteProps,Routes } from "react-router-dom"
import { Home } from './pokemons'
import { Pokemon } from './pokemon'
import { FunctionComponent } from "react"


interface Props{
     Route(_props: RouteProps): React.ReactElement | null
}
interface RoutP extends Props{
    exact?:boolean;
}

const AppRoutes:FunctionComponent<RoutP> = ()=>{
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