import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState("");
  const navigate = useNavigate();

  const getPokemones = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    setPokemones(data.results);
  };

  useEffect(() => {
    getPokemones();
  }, []);

  const redireccionarALaVistaDeDetalle = () => {
    navigate(`/pokemon/${pokemonSeleccionado}`);
  };
  
  return (
    
    <div className="flex flex-col items-center justify-center h-screen">
      <div
      style={{
        marginTop:"0",
        paddingTop:"0",
        height:"50vh",
        width:"100%",
        backgroundImage:"url(https://e0.pxfuel.com/wallpapers/590/759/desktop-wallpaper-pokemon-for-ipad-pokemon-sad-pokemon.jpg)",
        backgroundPosition:"center",
        backgroundSize:"cover",
      }}
      >

      </div>
      <img 
      className="my-5"
      style={{
        height:"150px"
      }}src="https://vader.news/__export/1588965166057/sites/gadgets/img/2020/05/08/2-25193_pokemon-ball-transparent-background-transparent-background-pokeball-png.png_423682103.png" alt="" />
      <h4 className="text-xl font-bold mb-4">Seleccione un pokemón</h4>
      <select
        className="px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4"
        value={pokemonSeleccionado}
        onChange={({ target }) => setPokemonSeleccionado(target.value)}
      >
        <option value="" disabled selected>
          -- Pokemones --
        </option>
        {pokemones.map((pokemon, i) => (
          <option key={i} value={pokemon.name}>
            {pokemon.name.toUpperCase()}
          </option>
        ))}
      </select>

      <button
        className={`px-4 py-2 rounded-md bg-red-500 text-white font-bold ${!pokemonSeleccionado ? 'opacity-50 cursor-default' : 'hover:bg-red-600 active:bg-red-700 focus:outline-none'}`}
        disabled={!pokemonSeleccionado}
        onClick={() => redireccionarALaVistaDeDetalle()}
      >
        Ver Detalle
      </button>
    </div>
  );
};
