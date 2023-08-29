import React, { useState } from "react";


import ListaPokemon from "./components/ListaPokemon";
import Buscador from "./components/Buscador";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-fondo bg-cover bg-center min-h-screen">
      <div className="flex flex-col ">
        <Buscador onSearch={setSearchTerm} />
        <ListaPokemon searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;

