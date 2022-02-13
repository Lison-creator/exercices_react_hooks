import { useState } from 'react';
import style from "./search-bar.module.css";


const Searchbar = (props)=>{

    const {hint, onSearch} = props;

    const [query,setQuery]= useState("");
    const handleSubmit = (e) =>{
        
        /* Désactivation du comportement par défaut du formulaire */
        e.preventDefault();

        /* ON envoie l'event */
        onSearch(query);

        /* On reset le formulaire */
        setQuery("");

    }
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder={hint} type="text" 
            onChange={(e)=>setQuery(e.target.value)} value={query} />
            <input type="submit" value="Rechercher" 

            /* On désactive le bouton si le champ de l'imput est vide */
            disabled={query === ""} />
        </form>
    )
}

Searchbar.defaultProps ={
    hint : '',
    onSearch: () => {}
}

export default Searchbar;