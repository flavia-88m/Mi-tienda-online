
import './App.css';
import {NavBar} from './components/navBar/navBar'
import './components/navBar/navBar.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() { 
  const welcome = 'Bienvenidos a tienda de Chicas, los productos que ofrecemos son'
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer/>
    </div>
  );
}

export default App;
