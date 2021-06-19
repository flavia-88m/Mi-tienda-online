
import './App.css';
import {NavBar} from './components/navBar/navBar'
import './components/navBar/navBar.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import './components/ItemListContainer/ItemListContainer.css'

function App() { 
  const welcome = 'HELLO BABES!'
  const sayHello = 'Te invitamos a que chusmees todo lo que tenemos para ofrecerte'

  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting= {welcome}/>
     <ItemListContainer greeting2= {sayHello}/>
    </div>
  );
}

export default App;
