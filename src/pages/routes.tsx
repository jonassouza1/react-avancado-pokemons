import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonsList } from "../components/pokemons";
import { PokemonDetail } from "../components/pokemon";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/react-avancado-pokemons">
      <Routes>
        <Route path="/" element={<PokemonsList />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
export { AppRoutes };
