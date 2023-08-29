import logo from "./logo.svg";
import "./App.css";
import { ListaPokemon } from "./components/ListaPokemon";
import { Buscador } from "./components/Buscador";

function App() {
  return (
    <div className="bg-fondo bg-cover bg-center w-full">
      <div className="flex flex-col h-auto">
        <Buscador></Buscador>
        <ListaPokemon></ListaPokemon>
      </div>
    </div>
  );
}

export default App;
