import './style.css';
import logo from '../assets/img/logo.png';
import { useState } from 'react';

export default function Welcome ({setStart, setZapNumber}){

    const [validInput, setValidInput] = useState(0)

    function start () {
        setZapNumber(validInput);
        setStart(true);
    }

    return (
        <div className='welcome'>
            <img src={logo} alt='' />
            <h1>ZapRecall</h1>
            <input type='number' placeholder='Digite sua meta de zaps...' onChange={event => setValidInput(event.target.value)} ></input>

            {validInput >= 1 && validInput <= 8 ?

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