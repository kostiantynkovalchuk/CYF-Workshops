import Logo from "./Logo";
import { BestPokemon } from "./BestPokemon";
import { CaughtPokemon } from "./CaughtPokemon";
const abilities = ["Anticipation", "Adaptability", "Run-Away"];

function App() {
  return (
    <>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />
    </>
  );
}

export default App;
