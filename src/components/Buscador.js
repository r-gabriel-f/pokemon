import React from "react";
import poke from "../assetes/logo.png";
import bola from "../assetes/bola.png";
export const Buscador = () => {
  return (
    <div class="p-4 md:p-8 mb-4 flex flex-col md:flex-row items-center">
      <img src={poke} class="w-32 md:w-52" alt="logo" />
      <div class="flex-grow flex">
        <input
          type="search"
          class="mt-4 md:ml-4 px-4 py-2 md:py-5 w-full rounded border "
          placeholder="Buscar Pokemon"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <img src={bola} class="w-16 md:w-24 mt-4  cursor-pointer" alt="logo" />
      </div>
    </div>
  );
};
