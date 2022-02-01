import './App.css';
import Compteur from './components/compteur/compteur';
import ContactForm from './components/contact-form/contact-form';
import Calculatrice from './components/calculatrice/calculatrice';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Le compteur</h1>

        <Compteur step={1} />
        <Compteur step={3} />
        <Compteur step={5} />
        <hr/>


        <h1>Les formulaires</h1>
        <ContactForm />

        <hr/>
        <h1>Calculatrice</h1>
        <Calculatrice />

        <footer>Bas de page</footer>
      </header>
    </div>
  );
}

export default App;
