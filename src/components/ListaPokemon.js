import React, { useState, useEffect } from "react";
export const ListaPokemon = () => {
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
  return (
    <section className="px-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
            {data.map((val, index) => (
              <li key={index} className="border cursor-pointer">
                <div className="flex items-center mx-10">
                  <p className="font-bold">N° {val.id}</p>

                  <img
                    src={val.sprites.front_default}
                    className=""
                    alt={`Pokemon ${index + 1}`}
                  />
                  <p className="font-bold">{val.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>hola</h1>
        </div>
      </div>
    </section>
  );
};
