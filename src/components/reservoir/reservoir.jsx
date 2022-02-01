import style from "./reservoir.module.css";
import { useState } from 'react';
import PropTypes from 'prop-types';



const Reservoir = (props) => {

    const { max } = props;
    const { onReservoirPlein } = props;

    const [niveau, setNiveau] = useState(0);

    const handleUp = () => {
        if (niveau < 10) {
            setNiveau(n => n + 1);
            if (niveau + 1 === 10) {

                /* On déclenche l'évènement */
                onReservoirPlein();


                
            };
        }
    }

    const handleDown = () => {
        if (niveau > 0) {
            setNiveau(n => n - 1);
        }
    }

    onReservoirPlein(niveau >= max);
    return (

        <div>
            <p>Le niveau du réservoir est de {niveau} sur {max} </p>
            <button onClick={handleDown} className={style.button}>Retirer 1L</button>
            <button onClick={handleUp} className={style.button}>Ajouter 1L</button>

        </div>

    )
}

Reservoir.defaultProps = {
    max: 10,
    /* On donne une loop (fonction qui ne fait rien) pour éviter que l'app plante lorsque la fonction se délenche*/
    onReservoirPlein: () => { },
}

export default Reservoir;