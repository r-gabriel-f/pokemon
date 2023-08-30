import React, { useState } from "react";

import ListaPokemon from "./components/ListaPokemon";
import Buscador from "./components/Buscador";
import TiposPokemon from "./components/TiposPokemon";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [typesFrequency, setTypesFrequency] = useState({});

  return (
    <div className="bg-fondo bg-cover bg-center min-h-screen">
      <div className="flex flex-col">
        <Buscador onSearch={setSearchTerm} />
        <TiposPokemon
          typesFrequency={typesFrequency}
          setSelectedType={setSelectedType}
        />
        <ListaPokemon
          searchTerm={searchTerm}
          setTypesFrequency={setTypesFrequency}
          selectedType={selectedType}
        />
      </div>
    </div>
  );
}

export default App;
