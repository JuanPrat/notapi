import './App.css';
import { Navbar } from './components/stateless/navbar';
import { Home } from './pages/home'
import { Login } from './pages/login'

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
      <Login></Login>
    </div>
  );
}

export default App;
