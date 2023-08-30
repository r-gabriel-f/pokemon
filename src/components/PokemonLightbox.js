import React from "react";

const PokemonLightbox = ({ pokemonData, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-carta bg-cover bg-center w-96 p-4 rounded-lg relative shadow-lg">
        <div className="bg-black bg-opacity-50 text-white rounded-lg">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-2 text-white cursor-pointer bg-red-500 rounded-full p-1 w-10 h-10"
          >
            X
          </button>

          <p className="font-bold text-center text-lg mt-2">
            N°: {pokemonData.id}
          </p>

          <img
            src={pokemonData.sprites.front_default}
            alt={`Pokemon ${pokemonData.name}`}
            className="mx-auto mt-2"
          />

          <p className="font-bold text-center mt-2 text-xl">
            {pokemonData.name}
          </p>
          <hr className="border-black my-4" />
          <div className="text-center">
            <p className="font-semibold">
              Tipo:
              {pokemonData.types.map((type, typeIndex) => (
                <span key={typeIndex}>
                  {typeIndex === 0
                    ? ` ${type.type.name}`
                    : typeIndex === 1
                    ? `, ${type.type.name}`
                    : ` ${type.type.name}`}
                </span>
              ))}
            </p>

            <p className="font-semibold">Altura: {pokemonData.height} m</p>
            <p className="font-semibold">Peso: {pokemonData.weight} kg</p>
          </div>
          <hr className="border-black my-4" />
          <div className="text-center">
            <p className="font-semibold">
              Habilidades:
              {pokemonData.abilities.map((ability, abilityIndex) => (
                <span key={abilityIndex}>
                  {abilityIndex === 0
                    ? ` ${ability.ability.name}`
                    : abilityIndex === 1
                    ? `, ${ability.ability.name}`
                    : ` ${ability.ability.name}`}
                </span>
              ))}
            </p>
          </div>
          <hr className="border-black my-4" />
          <div className="text-center">
            <p className="font-semibold">
              Estadisticas:
              {pokemonData.stats.map((stats, statsIndex) => (
                <span key={statsIndex}>
                  <br></br>
                  {stats.stat.name}: {stats.base_stat}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonLightbox;
