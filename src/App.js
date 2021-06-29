
import './App.css';
import { NavBar } from './components/navBar/navBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/itemDetailContainer'



function App() { 
  const welcome = 'HELLO BABES!'
  const sayHello = 'Te invitamos a que chusmees todo lo que tenemos para ofrecerte'

  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting={welcome} greeting2={sayHello}/>
     <ItemDetailContainer/>
    </div>
  );
}

export default App;
