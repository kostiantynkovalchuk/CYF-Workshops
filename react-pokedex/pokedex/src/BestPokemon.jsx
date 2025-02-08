import PropTypes from "prop-types";

function BestPokemon(props) {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
}

BestPokemon.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BestPokemon;
