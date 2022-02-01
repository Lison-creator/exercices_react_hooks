import { useState } from 'react';
import PropTypes from 'prop-types';
import style from "./compteur.module.css";
import classNames from "classnames";


const Compteur = (props) => {
    /* On récupère les props pour la valeur par défaut */

    /* On récupère la valeur de step qui se trouve dans "props" pour pouvoir changer le pas d'incrémentation depuis le fichier "app" directement */
    const {step} = props; 

    // Utilisation du "useState" pour créer l'etat "count"
    const [count, setCount] = useState(0);

    /* Les méthodes d'action */

    const handleMulti = () => {
        console.log('x2');

        // Modification de l'etat "count"
        // -> Affection basé sur la valeur actuelle de l'etat "count"
        setCount(t => t + step);
    }

    const handleReset = () => {
        console.log('Reset');

        /* Remet le compteur à 0 */
        setCount(0);
        
    }

    const handleIncrementation = () => {
        console.log("incrémentation choix");

        setCount(t => t + step);
    }

    const styleCompteur = classNames({
        [style.textSize]:true,
        [style.textReset]:count === 0

    })
    return (<>
        <h3></h3>
        <div>
            <p className={styleCompteur} >La valeur actuelle : {count} </p>

            <div>
                <button onClick={handleIncrementation}> + {step} </button>
                <button onClick={() => setCount(c => c - step)}> - {step} </button>
            </div>
            
        </div>
        {/* Ternaire simple, ans "else" */}
        {(count !== 0) &&(
            <button onClick={handleReset}>Reset</button>
        )}

    </>);
};

/* On définit un pas par défaut pour la valeur de départ */
Compteur.defaultProps ={
       step: 1
}
Compteur.propTypes ={
    step: PropTypes.number
}

 
export default Compteur;
