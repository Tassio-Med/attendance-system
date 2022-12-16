// import firebase from './services/firebaseConnection';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
