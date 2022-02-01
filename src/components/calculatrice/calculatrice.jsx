import { useState } from 'react';
import PropTypes from 'prop-types';
import style from "./calculatrice.module.css";
import classNames from "classnames";


const Calculatrice = (props) => {

    const [count, setCount] = useState(0);
    const [operator, setOperator] = useState("X");
    const [nb1, setNb1] = useState(0);
    const [nb2, setNb2] = useState(0);

    /* Au cas où l'utilisateur.ice tape autre chose qu'un nombre : */

    /* Callback avec un paramètre "setStateValue" pour pouvoir récupérer plusieurs nombres différents (nb1 et nb2) */
    const handleNumberInput = (e, setStateValue) => {

        /* Regex: (^) doit commencer par: chiffres entre 0 et 9 [0-9], il peut y en avoir plusieurs (+), peut être suivie d'une virgule ou d'un point [\.,] et d'autres nombres ensuite, et cette partie (après la virgule) peut exister 0 ou plusieurs fois (?)  */

        const regexNumber = /^[0-9]+([\.,][0-9]*)?$/
        const value = e.target.value;
        console.log(value);

        if (value === "" || regexNumber.test(value)) {
            setStateValue(value.replace(",","."));
        }

    }

    const handleCalcul = () =>{
        
    }


    const handleResult = () => {
        console.log("handle Result");
        console.log(operator);

        const val1 =parseFloat(nb1);
        const val2 =parseFloat(nb2);

        if (isNaN(val1)|| isNaN(val2) ) {
            setCount("🧙🏼‍♂ Fool of a Took !! 🧙🏼‍♂");

            /* Le "return" empêche le code de continuer après cette boucle si elle est vérifiée */
            return;
        }

        switch (operator) {
            case "+":
                setCount(val1 + val2);
                break;
            case "-":
                setCount(val1 - val2);
                break;
            case "X":
                setCount(val1 * val2);
                break;
            case "/":
                if (val2 === 0) {
                    setCount("On ne divise jamais par zéro, voyons ! 😱 ")
                }
                else{
                   setCount(val1 / val2); 
                }
                
                break;
            case "^":
                setCount((Math.pow(val1, val2)));
                break;
            case "!":
                /* La Factorielle */
                let resultat = 1;
                let compteur = 2;

                while (compteur <= nb1) {
                    resultat = resultat * compteur;
                    console.log("Résultat : " + resultat);
                    console.log("Compteur : " + compteur);
                    compteur++
                }
                setCount(c => resultat);
                break;

            default:
                /* Au cas où l'opérateur est modifié dans le html de la page web */
                setCount("Veuillez selectionner une opération valide !");
                break;
        }
    }

    return (
        <>
            <div>
                
                <label className={style.labelCalculatrice} htmlFor="nb1">1er nombre :</label>
                <input className={style.inputCalculatrice} type="text" id="nb1" onChange={(e) => handleNumberInput(e,setNb1)} value={nb1} />
            </div>

            {/* Pour la factorielle, on n'a besoin que d'un seul nombre, donc on cache cette div si la valeur de l'option est "!" */}

            {operator !== "!" && (
                <div>
                    <label className={style.labelCalculatrice} htmlFor="nb2">2ème nombre :</label>
                    <input className={style.inputCalculatrice} type="text" id="nb2" onChange={(e) => handleNumberInput(e,setNb2)} value={nb2} />
                </div>
            )}

            <div>
                <label className={style.labelCalculatrice} htmlFor="operator" >Opérateur :</label>
                <select name="" id="operator" onChange={(e) => setOperator(e.target.value)} value={operator}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="X">X</option>
                    <option value="/">/</option>
                    <option value="^">^</option>
                    <option value="!">!</option>
                </select>
            </div>
            <div>
                <button className={style.button} onClick={handleResult}>Calculer</button><br></br>
                <p>Résultat: {count}</p>
            </div>
        </>
    )


}


export default Calculatrice;