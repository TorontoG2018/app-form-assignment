import React from "react";
import "../App.css";
import { useState } from "react";
import Axios from "axios";

function PokemonSelection({ pokemonName, setPokemonName }) {
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonChosen(true);
      }
    );
  };

  return (
    <div className="pokemon-container">
      <div className="TitleSection">
        <input
          type="text"
          name="pokemonName"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        />
        <button type="button" onClick={searchPokemon}>
          Search Pokemon
        </button>

        <div className="DisplaySection">
          {!pokemonChosen ? (
            <h2>Please choose a Pokemon </h2>
          ) : (
            <>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.img} />
              <h4>Species: {pokemon.species}</h4>
              <h4>Type: {pokemon.type}</h4>
              <h4>Hp: {pokemon.hp}</h4>
              <h4>Attack: {pokemon.attack}</h4>
              <h4>Defense: {pokemon.defense}</h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonSelection;
