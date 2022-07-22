import React from 'react';
import "./reset.css";
import "./style.css";
import Welcome from "../Welcome/Welcome";
import Display from "../Display/Display";

export default function App () {

    const [start, setStart] = React.useState(false);

    return (
        <div className='content'>
            {!start? 
            <Welcome setStart = {setStart}/> :
            <Display />
            }
        </div>
    )
}