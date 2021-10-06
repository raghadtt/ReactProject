import logo from './logo.svg';
import './App.css';

const att = <h1>Hello</h1>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello!
        </p>
        {att}
      </header>
    </div>
  );
}

export default App;
