
import './App.css';
import PlayerList from './PlayerList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
<h1 className="text-center mt-4" style={{color:"red", textDecoration: "underline"}}>Player List</h1>
      <PlayerList/>
    </div>
  );
}

export default App;

