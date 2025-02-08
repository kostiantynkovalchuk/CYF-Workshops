import React, { useState } from "react";

function CaughtPokemon() {
  const [caught, setCaught] = useState(0);

  function catchPokemon() {
    setCaught(caught + 1);
  }

  return (
    <div>
      <p>Pokémon caught: {caught}</p>
      <button onClick={catchPokemon}>Catch Pokémon</button>
    </div>
  );
}

export default CaughtPokemon;
