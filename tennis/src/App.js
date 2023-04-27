import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList Container/ItemListContainer';




function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting= 'Bienvenidos'/>
    </div>
  );
}

export default App;


