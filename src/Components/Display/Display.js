import './style.css';
import React from 'react';
import logo from '../assets/img/logo.png';
import Card from '../Card/Card';
import Bottom from '../Bottom/Bottom';

export default function Display({setStart, zapNumber, deck}) {

    const deckReact = [ { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript' },
    { question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces' },
    { question: 'Componentes devem iniciar com __', answer: 'letra maiúscula' },
    { question: 'Podemos colocar __ dentro do JSX?', answer: 'expressões' },
    { question: 'O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma' },
    { question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências' },
    { question: 'Usamos props para __', answer: 'passar diferentes informações para componentes ' },
    { question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' },
    ];

    const deckJS = [ { question: 'O que é árvore DOM?', answer: 'É a árvore de elementos do HTML representada como objetos no JavaScript' },
    { question: 'Qual a melhor maneira de alterar estilos CSS através do JavaScript?', answer: 'Adicionando ou removendo classes conforme a necessidade' },
    { question: 'O que é um evento no JavaScript?', answer: 'Ações ou ocorrências que acontecem nos elementos acarretadas pelo usuário' },
    { question: 'O que são Promises no JavaScript?', answer: 'Uma variavel que guarda uma promessa que depois de um tempo se tornará um valor ou um erro' },
    { question: 'O que são Status Codes?', answer: 'Códigos para dar mais informações sobre uma requisição (sucesso/erro de cliente/erro de servidor)' },
    { question: 'O que são Higher-Order Functions (HOFs)?', answer: 'São funções que recebem outras funções como parâmetro' },
    ];

    const deckHTML = [ { question: 'Qual é o papel/responsabilidade do HTML na construção de um site?', answer: 'Ele traz o conteúdo e a semântica dos elementos de um site' },
    { question: 'O que é indentação?', answer: 'Organizar os elementos filhos deslocados com espaços ou tabs pra direita em relação ao elemento pai' },
    { question: 'O que é CSS Reset?', answer: 'É uma técnica onde resetamos os estilos padrões que o browser adiciona nos elementos' },
    { question: 'O que é box model?', answer: 'É o modelo utilizado no CSS para representar os elementos, contendo largura, altura, margens, paddings e bordas' },
    ];

    let questions =[]

    if (deck === 'React (8 cards)'){
        questions = deckReact;
    } else if (deck === 'JavaScript (6 cards)'){
        questions = deckJS;
    } else if (deck === 'HTML/CSS (4 cards)'){
        questions = deckHTML;
    }

    questions.sort(() => Math.random() - 0.5);

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
            
            <Bottom userAnswers={userAnswers} questions={questions} setStart={setStart} zapNumber={zapNumber}/>
        </div>
    )
}