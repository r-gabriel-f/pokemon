import {useEffect, useState} from "react";

export const Datos = () => {
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

      setData(promises);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchPokemonData();
  }, []);
  return data;
};
