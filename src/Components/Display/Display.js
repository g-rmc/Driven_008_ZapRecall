import './style.css';
import React from 'react';
import logo from '../assets/img/logo.png';
import Card from '../Card/Card';
import Bottom from '../Bottom/Bottom';

export default function Display({setStart}) {

    let deckReact = [   { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript' },
                        { question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces' },
                        { question: 'Componentes devem iniciar com __', answer: 'letra maiúscula' },
                        { question: 'Podemos colocar __ dentro do JSX?', answer: 'expressões' },
                        { question: 'O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma' },
                        { question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências' },
                        { question: 'Usamos props para __', answer: 'passar diferentes informações para componentes ' },
                        { question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' },
    ];

    deckReact.sort(() => Math.random() - 0.5);
    let questions = deckReact //.slice(4);

    const [userAnswers, setUserAnswers] = React.useState([]);

    return (
        <div className='page'>
            <div className='head' >
                <img src={logo} alt=''/>
                <h1>ZapRecall</h1>
            </div>

            <div className='cards'>
                {questions.map((obj, index) => <Card    key={index} id={index + 1} question={obj.question} answer={obj.answer} 
                                                        userAnswers={userAnswers} setUserAnswers={setUserAnswers}/>
                )}
            </div>
            
            <Bottom userAnswers={userAnswers} questions={questions} setStart={setStart}/>
        </div>
    )
}