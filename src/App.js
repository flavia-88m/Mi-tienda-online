
import './App.css';
import { NavBar } from './components/navBar/navBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemCount } from './components/ItemCount/ItemCount'


function App() { 
  const welcome = 'HELLO BABES!'
  const sayHello = 'Te invitamos a que chusmees todo lo que tenemos para ofrecerte'

  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting= {welcome}/>
     <ItemListContainer greeting2= {sayHello}/>
     <ItemCount initial={1} stock={10} onAdd={0}/>
    </div>
  );
}

export default App;
