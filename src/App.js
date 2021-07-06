import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from './components/navBar/navBar'
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './pages/ItemDetailContainer/itemDetailContainer'
import '../src/App.css'


export const App = () => {
  const welcome = 'HELLO BABES!'
  const sayHello = 'Te invitamos a que chusmees todo lo que tenemos para ofrecerte'
  return(
    <Router>
      <main className="App">
      <NavBar/>
      <ItemListContainer greeting={welcome} greeting2={sayHello}/>
        <Switch>
           <Route exact path="/">
               <ItemListContainer />
           </Route>
           <Route exact path="/category/:id">
               <ItemListContainer />
           </Route>
           <Route exact path="/item/:id">
               <ItemDetailContainer />
           </Route>
        </Switch>
     </main>
   </Router>
  )
}


export default App;
