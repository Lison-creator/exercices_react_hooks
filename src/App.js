import './App.css';
import { useState } from 'react';
import Compteur from './components/compteur/compteur';
import ContactForm from './components/contact-form/contact-form';
import Calculatrice from './components/calculatrice/calculatrice';
import Reservoir from './components/reservoir/reservoir';
import Searchbar from './components/search-bar/search-bar';
import ManipulationTableau from './components/manipulation-tableau/manipulation-tableau';

function App() {

  const[message,setMessage] = useState("");

  const handleReservoirPlein=(isPlein)=>{
    if(isPlein){
      setMessage("Le réservoir est plein ! ");
    }
    else{
      setMessage('');
    }}

    const handleSearchResult = (data) =>{
      console.log("On recherche : "+ data);
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
        )}
        <hr />
        <h1>Barre de recherche</h1>
        <Searchbar hint= "Vous voulez chercher quoi ?"
        onSearch={handleSearchResult}/>
        <hr />

        <h2>Exemple de manipulation du tableau</h2>
        <ManipulationTableau/>

        <footer>Bas de page</footer>
      </header>
    </div>
  );
}

export default App;
