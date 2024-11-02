import { FunctionComponent, useEffect, useState } from "react";
import { getPokemon } from "../../services/getPokemon";
import { useParams } from "react-router-dom";
import { Abilitys } from "../abilitys";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import {
  Section,
  NameImg,
  Moves,
  List,
  AbilitysDiv,
  LinkHome,
  Div,
} from "./styles";
import { Link } from "react-router-dom";

interface Move {
  move: { name: string };
}
interface Obj {
  slot: number;
  type: { name: string };
}

interface DreamWorld {
  dream_world: { front_default: string };
}
interface Other {
  other: DreamWorld;
}
interface PokemonProps {
  name: string;
  moves: Move[];
  types: Obj[];
  sprites: Other;
}
const PokemonDetail: FunctionComponent = () => {
  const [pokemon, setPokemon] = useState<PokemonProps>({
    name: "",
    moves: [{ move: { name: "" } }],
    types: [{ slot: 1, type: { name: "" } }],
    sprites: { other: { dream_world: { front_default: "" } } },
  });
  const { theme } = useContext<any>(ThemeContext);

  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      const pokemonDetail = await getPokemon(name);
      setPokemon(pokemonDetail);
    }
    fetchData();
  }, [name]);
  return (
    <Section themes={theme}>
      <LinkHome>
        <Link to="/">
          <Div>
            <p>Home</p>
          </Div>
        </Link>
      </LinkHome>
      <NameImg>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt="pokemon"
        />
        <h1>{pokemon.name}</h1>
      </NameImg>
      <Moves>
        <h3>Moves </h3>
        <List>
          {pokemon.moves
            .filter((info, index) => index < 20)
            .map((info, index) => {
              return (
                <li key={index}>
                  <p>{info.move.name}</p>
                </li>
              );
            })}
        </List>
      </Moves>
      <AbilitysDiv>
        <Abilitys />
        <h3>Type</h3>
        {pokemon.types.map((info, index) => {
          return <p key={index}>{info.type.name}</p>;
        })}
      </AbilitysDiv>
    </Section>
  );
};

export { PokemonDetail };
