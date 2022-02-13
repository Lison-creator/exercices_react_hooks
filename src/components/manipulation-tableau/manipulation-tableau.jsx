import style from "./manipulation-tableau.module.css";
import { useState } from 'react';
import { nanoid } from 'nanoid';   //npm install nanoid


const ManipulationTableau = () => {

    const [elements, setElements] = useState([

        /* Si on essaie d'afficher "elements" dans le html, ça plante car ce n'est pas du jsx. On doit transformer la liste en jsx */
        { id: nanoid(), msg: "Succulente", time: new Date() },
        { id: nanoid(), msg: "Cactus", time: new Date() },
        { id: nanoid(), msg: "Liane", time: new Date() },
        { id: nanoid(), msg: "Orchidée", time: new Date() },
        { id: nanoid(), msg: "Pensée", time: new Date() },
        { id: nanoid(), msg: "Achilée", time: new Date() },
        { id: nanoid(), msg: "Aloe Vera", time: new Date() },
    ]);

    /* On prend en charge l'event pour ajouter des éléments*/
    /* On va passer par le State */

    const handleAddElement = () => {

        /* L'élément à ajouter: */
        const newElement = { id: nanoid(), msg: "Succulente", time: new Date() };

        /* On passe par le state: */

        /* La méthode "concat" permet d'ajouter un élément à la liste */
        setElements(elems => elems.concat(newElement));

        /* Deuxième façon d'ajouter un élément: */
        /* setElements(elems => [...elems,newElement]); */
    }
    /* On transforme la liste en JSX */
    const elementsJSX = elements.map(
        elem => <li key={elem.id}>
            {elem.msg} {elem.time.toLocaleTimeString("fr-BE")}
        </li>
    );
console.log(elements);
    return (<>
        {/* Bouton pour ajouter un élément */}
        <button onClick={handleAddElement} className={style.button}>Ajouter un élément</button>

        <ul>
            {/* On affiche la liste transformée en JSX */}
            {elementsJSX}
        </ul>
    </>);
}

export default ManipulationTableau;