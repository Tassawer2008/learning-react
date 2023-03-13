import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import Person from './Components/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <Menu />
        <Person/>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to New App Tassawer</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
