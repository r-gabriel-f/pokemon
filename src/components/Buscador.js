import React from "react";
import poke from "../assetes/logo.png";
import bola from "../assetes/bola.png";
export const Buscador = () => {
  return (
    <div className="p-8 mb-4 flex items-center">
      <img src={poke} className="w-52" alt="logo" />
      <input
        type="search"
        className="px-4 py-5 md:py-2 w-full rounded border focus:outline-none focus:border-blue-500"
        placeholder="Buscar Pokemon"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <img src={bola} className="w-24" alt="logo" />

      
    </div>
  );
};
