import './style.css';
import React from 'react';
import { BsPlay } from 'react-icons/bs';
import Turn from '../assets/img/setinha.png';

export default function Card({ id, question, answer }) {

    const [questionStatus, setQuestionStatus] = React.useState(1);

    function Status1() {
        return (
            <div className='card' onClick={()=>setQuestionStatus(2)}>
                <h2>Pergunta {id}</h2>
                <BsPlay size='35px' />
            </div>
        )
    }

    function Status2() {
        return (
            <div className='question' onClick={()=>setQuestionStatus(3)}>
                <p>{question}</p>
                <img src={Turn} alt='' />
            </div>
        )
    }

    function Status3() {
        return (
            <div className='question' onClick={()=>setQuestionStatus(4)}>
                <p>{answer}</p>
                <img src={Turn} alt='' />
            </div>
        )
    }

    function Status4() {
        return (
            <div className='card'>
                <h2>Pergunta {id} Respondida</h2>
                <BsPlay size='35px' />
            </div>
        )
    }

    switch (questionStatus) {
        case 1:
            return (<Status1 />);
        case 2:
            return (<Status2 />);
        case 3:
            return (<Status3 />);
        case 4:
            return (<Status4 />);
    }
}