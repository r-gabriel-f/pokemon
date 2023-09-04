import React, { useState, useEffect } from "react";
import PokemonLightbox from "./PokemonLightbox";

const ListaPokemon = ({
  data,
  searchTerm,
  setTypesFrequency,
  selectedType,
}) => {
  console.log(data + "est");
  const itemsPerPage = 12;
  const [paginaActual, setPaginaActual] = useState(0);

  const [minValue] = useState(null);
  const [maxValue] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const TypesFrequency = () => {
    const uniqueTypeNames = new Set();

    data.forEach((pokemon) => {
      pokemon.types.forEach((type) => {
        const typeName = type.type.name;
        uniqueTypeNames.add(typeName);
      });
    });
    const typeNamesArray = Array.from(uniqueTypeNames);
    setTypesFrequency(typeNamesArray);
  };

  useEffect(() => {
    TypesFrequency();
  });

  const filterByName = (data, searchTerm) => {
    return data.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterByType = (data, selectedType) => {
    return selectedType
      ? data.filter((pokemon) =>
          pokemon.types.some((type) => type.type.name === selectedType)
        )
      : data;
  };

  const filterByHeight = (data, minValue, maxValue) => {
    return minValue && maxValue
      ? data.filter(
          (pokemon) => pokemon.height >= minValue && pokemon.height <= maxValue
        )
      : data;
  };

  const filteredData = filterByName(data, searchTerm);
  const filteredByType = filterByType(filteredData, selectedType);
  const filteredByHeight = filterByHeight(filteredByType, minValue, maxValue);

  const startIndex = itemsPerPage * paginaActual;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredByHeight.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setPaginaActual(paginaActual + 1);
  };

  const goToPreviousPage = () => {
    setPaginaActual(paginaActual - 1);
  };

  const totalPages = Math.ceil(filteredByHeight.length / itemsPerPage);

  const handleOpenLightbox = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowLightbox(true);
  };

  const handleCloseLightbox = () => {
    setShowLightbox(false);
    setSelectedPokemon(null);
  };

  return (
    <section className="mx-8 mt-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedData.map((val, index) => (
          <li
            key={index}
            className="flex justify-center border-2 border rounded-lg cursor-pointer bg-black bg-opacity-50"
            onClick={() => handleOpenLightbox(val)}
          >
            <div className="flex items-center text-white">
              <p className="font-bold mx-2">N° {index + 1}</p>
              <img
                src={val.sprites.front_default}
                className="ml-2"
                alt={`Pokemon ${index + 1}`}
              />
              <div className="flex  flex-col mt-2">
                <p className="font-bold ml-2 ">{val.name}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center my-5 justify-center">
        <button
          onClick={goToPreviousPage}
          disabled={paginaActual === 0}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Atras
        </button>
        <span className="lg:text-black mx-10 md:text-white sm:text-white">{`${
          paginaActual + 1
        } of ${totalPages}`}</span>
        <button
          onClick={goToNextPage}
          disabled={startIndex + itemsPerPage >= filteredData.length}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Siguiente
        </button>
      </div>
      {showLightbox && (
        <PokemonLightbox
          pokemonData={selectedPokemon}
          onClose={handleCloseLightbox}
        />
      )}
    </section>
  );
};

export default ListaPokemon;
