import React, { useState } from "react";
import poke from "../assetes/logo.png";
import bola from "../assetes/bola.png";

const Buscador = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <>
      <div className="m-8 flex flex-col md:flex-row items-center">
        <img src={poke} className="w-32 md:w-52" alt="logo" />

        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          className=" px-4 py-2 md:w-full m-4 rounded border bg-black bg-opacity-50 text-white"
          placeholder="Buscar Pokemon"
          aria-label="Search"
          aria-describedby="search-addon"
        />

        <img src={bola} className="w-16 md:w-24 cursor-pointer" alt="logo" />
      </div>
     
    </>
  );
};

export default Buscador;
