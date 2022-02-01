import './App.css';
import { useState } from 'react';
import Compteur from './components/compteur/compteur';
import ContactForm from './components/contact-form/contact-form';
import Calculatrice from './components/calculatrice/calculatrice';
import Reservoir from './components/reservoir/reservoir';

function App() {

  const[message,setMessage] = useState("");
  const handleReservoirPlein=(isPlein)=>{
    if(isPlein){
      setMessage("Le réservoir est plein ! ");
    }
    else{
      setMessage('');
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Le compteur</h1>

        <Compteur step={1} />
        <Compteur step={3} />
        <Compteur step={5} />
        <hr />


        <h1>Les formulaires</h1>
        <ContactForm />

        <hr />
        <h1>Calculatrice</h1>
        <Calculatrice />

        <hr />
        <h1>Réservoir</h1>
        <Reservoir onReservoirPlein={handleReservoirPlein} />
        {message &&(
          <p>{message}</p>
        )
        }

        <footer>Bas de page</footer>
      </header>
    </div>
  );
}

export default App;
