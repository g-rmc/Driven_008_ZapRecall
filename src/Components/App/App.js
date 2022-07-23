import React from 'react';
import "./reset.css";
import "./style.css";
import Welcome from "../Welcome/Welcome";
import Display from "../Display/Display";

export default function App () {

    const [start, setStart] = React.useState(false);
    const [zapNumber, setZapNumber] = React.useState(0);
    const [deck, setDeck] = React.useState('');

    return (
        <div className='content'>
            {!start? 
            <Welcome setStart={setStart} setZapNumber={setZapNumber} setDeck={setDeck} deck={deck}/> :
            <Display setStart={setStart} zapNumber={zapNumber} deck={deck}/>
            }
        </div>
    )
}