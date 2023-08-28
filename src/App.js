import logo from './logo.svg';
import './App.css';
import { ListaPokemon } from './components/ListaPokemon';
import { Buscador } from './components/Buscador';

function App() {
  return (
    <div className="App">
      <Buscador></Buscador>
      <ListaPokemon></ListaPokemon>
    </div>
  );
}

export default App;
