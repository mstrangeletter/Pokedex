import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-red-600 text-white py-4 px-8">
      <div className="text-3xl font-bold">Pokedex</div>
      <div>
        <NavLink
          activeClassName="underline"
          className="mx-4 hover:underline"
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="underline"
          className="mx-4 hover:underline"
          to="/pokemones"
        >
          Pokemones
        </NavLink>
      </div>
    </nav>
  );
}
