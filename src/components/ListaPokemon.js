import React, { useState, useEffect } from "react";

const ListaPokemon = ({ searchTerm }) => {
  const itemsPerPage = 12;
  const [paginaActual, setPaginaActual] = useState(0);
  const [data, setData] = useState([]);

  const fetchPokemonData = async () => {
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1273&offset=0"
      );
      const responseJson = await res.json();

      const promises = await Promise.all(
        responseJson.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return data;
        })
      );
      console.log(promises);
      setData(promises);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const filteredData = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = itemsPerPage * paginaActual;
  const displayedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToNextPage = () => {
    setPaginaActual(paginaActual + 1);
  };

  const goToPreviousPage = () => {
    setPaginaActual(paginaActual - 1);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const typesFrequency = {}; // Objeto para contar la frecuencia de cada tipo

  // Calcula la frecuencia de cada tipo
  data.forEach((pokemon) => {
    pokemon.types.forEach((type) => {
      const typeName = type.type.name;
      if (typesFrequency[typeName]) {
        typesFrequency[typeName]++;
      } else {
        typesFrequency[typeName] = 1;
      }
    });
  });

  console.log("Frecuencia de tipos:", typesFrequency);
  return (
    <section className="px-8 my-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedData.map((val, index) => (
          <li
            key={index}
            className="flex justify-center border-2 border rounded-lg cursor-pointer bg-black bg-opacity-50"
          >
            <div className="flex items-center text-white">
              <p className="font-bold mx-2">N° {index + 1}</p>
              <img
                src={val.sprites.front_default}
                className="ml-2"
                alt={`Pokemon ${index + 1}`}
              />
              <p className="font-bold ml-2 ">{val.name}</p>
              <div className="flex flex-col mt-2">
                {val.types.map((type, typeIndex) =>(
                  <button
                    key={typeIndex}
                    className={`bg-${type.type.name} py-2 px-4 rounded`}
                  >
                    {type.type.name}
                    
                  </button>
                  
                ))}
                
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
    </section>
  );
};

export default ListaPokemon;
