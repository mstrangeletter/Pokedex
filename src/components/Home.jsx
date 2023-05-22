export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
       <img style={{
        height:"200px"
      }}src="https://vader.news/__export/1588965166057/sites/gadgets/img/2020/05/08/2-25193_pokemon-ball-transparent-background-transparent-background-pokeball-png.png_423682103.png" alt="" />
      <h1 className="text-5xl font-bold mb-8">Bienvenido maestro pokemon</h1>
      <img
        style={{
          height:"300px"
        }}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        alt=""
      />
    </div>
  );
}
