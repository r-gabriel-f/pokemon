import React, { useState, useEffect } from "react";
export const ListaPokemon = () => {
  const itemsPerPage = 12;
  const [paginaActual, setpaginaActual] = useState(1);
  const indiceinicio = itemsPerPage * paginaActual;
  const [data, setData] = useState([]);

  const GetAllPokemon = async () => {
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1273&offset=0"
      );
      const responseJson = await res.json();

      const promesas = await Promise.all(
        responseJson.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return data;
        })
      );
      console.log(promesas);
      setData(promesas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    GetAllPokemon();
  }, []);

  const datosmostrador = data.slice(indiceinicio, indiceinicio + itemsPerPage);
  const pagessiguiente = () => {
    setpaginaActual(paginaActual + 1);
  };
  const pagesatras = () => {
    setpaginaActual(paginaActual - 1);
  };
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <section className="px-8">
      <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0">
        {datosmostrador.map((val, index) => (
          <li key={index} className="flex justify-center border-2 border rounded-lg cursor-pointer bg-black bg-opacity-50">
            <div className="flex items-center text-white">
              <p className="font-bold mx-2">N° {val.id}</p>
              <img
                src={val.sprites.front_default}
                className="ml-2"
                alt={`Pokemon ${index + 1}`}
              />
              <p className="font-bold ml-2 ">{val.name}</p>
            </div>
          </li>
        ))}
      </ul>
      </>
      <div className="flex items-center my-10 justify-center">
        <button
          onClick={pagesatras}
          disabled={paginaActual === 0}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Atras
        </button>
        <span className="text-white mx-10 md:text-black">{`${paginaActual} of ${totalPages}`}</span>
        <button
          onClick={pagessiguiente}
          disabled={indiceinicio + itemsPerPage >= data.length}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};
