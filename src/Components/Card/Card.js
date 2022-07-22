import './style.css';
import React from 'react';
import { BsPlay } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
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
            <div className='answer'>
                <p>{answer}</p>
                <div className='button'>
                    <div className='red' onClick={()=>setQuestionStatus('red')}>Não lembrei</div>
                    <div className='yellow' onClick={()=>setQuestionStatus('yellow')}>Quase não lembrei</div>
                    <div className='green' onClick={()=>setQuestionStatus('green')}>Zap!</div>
                </div>
            </div>
        )
    }

    function Status({card, icon}) {
        return (
            <div className={card}>
                <h2>Pergunta {id}</h2>
                {icon}
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
        case 'red':
            return (<Status card={'cardRed'} icon={<AiFillCloseCircle size='25px' />}/>);
        case 'yellow':
            return (<Status card={'cardYellow'} icon={<AiFillQuestionCircle size='25px' />}/>);
        case 'green':
            return (<Status card={'cardGreen'} icon={<AiFillCheckCircle size='25px' />}/>);
    }
}