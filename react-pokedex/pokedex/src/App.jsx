import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];

function App() {
  function logWhenClicked() {
    console.log("Logo was clicked!");
  }

  return (
    <>
      <Logo
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        appName="Pokedex"
        handleClick={logWhenClicked}
      />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />
    </>
  );
}

export default App;
