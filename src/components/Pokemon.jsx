import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default () => {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  console.log(pokemon);

  const getPokemon = async (pokemonName) => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName);
    const data = await res.json();
    setPokemon(data);
  };

  useEffect(() => {
    getPokemon(params.pokemonName);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto p-8">
        <div className="flex flex-row items-center justify-center rounded-md shadow-md bg-gradient-to-br from-gray-100 to-gray-400">
          {pokemon.sprites && (
            <img
              className="w-2/3"
              
              src={pokemon.sprites.other.dream_world.front_default}
              //src={pokemon.sprites.back_default}
              alt=""
            />
          )}

          {pokemon.stats && (
            <div className="w-2/3 p-4">
              <h1 className="text-3xl font-bold mb-4">{pokemon.name.toUpperCase()}</h1>
              <ul>
                <li>HP: {pokemon.stats[0].base_stat}</li>
                <li>Attack: {pokemon.stats[1].base_stat}</li>
                <li>Defense: {pokemon.stats[2].base_stat}</li>
                <li>Special-Atack: {pokemon.stats[3].base_stat}</li>
                <li>Special-Defense: {pokemon.stats[4].base_stat}</li>
                <li>Speed: {pokemon.stats[5].base_stat}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
