import logo from './logo.svg';
import './App.css';
import ContactState from './components/contactoEstado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ContactState></ContactState>
      </header>
    </div>
  );
}

export default App;
