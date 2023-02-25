import './App.css';
import Contacts from './components/Contacts';
import Logo from "./components/Logo"

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <Logo title="PK" />
        <Contacts />
      </header>

      <section className='section'>
        <div className='heading'>React Codespace</div>
        <button>Explore</button>
      </section>
    </div>
  );
}

export default App;
