import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList Container/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting= 'Bienvenidos'/>
     <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
    </div>
  );
}

export default App;


