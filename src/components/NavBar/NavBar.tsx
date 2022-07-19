import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <nav>
      <Link to='/home'>
        <span>TipeDogs</span>
      </Link>
      <Link to='/dog'>
        <span>Crear Raza</span>
      </Link>
    </nav>
  );
}

export default NavBar;
