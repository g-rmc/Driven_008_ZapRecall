import './style.css';
import logo from '../assets/img/logo.png';
import { useState } from 'react';

export default function Welcome ({setStart, setZapNumber, setDeck, deck}){

    const [validInput, setValidInput] = useState(0)

    function start () {
        setZapNumber(validInput);
        setStart(true);
    }

    return (
        <div className='welcome'>
            <img src={logo} alt='' />
            <h1>ZapRecall</h1>

            <datalist id="decks">
                <option value="React (8 cards)" />
                <option value="JavaScript (6 cards)" />
                <option value="HTML/CSS (4 cards)" />
            </datalist>

            <input type='search' placeholder='Escolha seu Deck' list='decks' onChange={event => setDeck(event.target.value)} ></input>
            <input type='number' placeholder='Digite sua meta de zaps...' onChange={event => setValidInput(event.target.value)} ></input>

            {validInput >= 1 && deck !== ''?

                <div className='button-start' onClick={start}>
                    Iniciar Recall!
                </div>
            
                :
                
                <div className='button-freeze'>
                    Iniciar Recall!
                </div>   
            }
        </div>
    )
}