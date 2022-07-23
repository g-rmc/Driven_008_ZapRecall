import './style.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import party from '../assets/img/party.png';
import sad from '../assets/img/sad.png';

export default function Bottom({userAnswers, questions, setStart, zapNumber}){

    function Icons({color}){
        
        switch (color) {
            case 'red':
                return (<AiFillCloseCircle size='25px' color='#FF3030'/>);
            case 'yellow':
                return (<AiFillQuestionCircle size='25px' color='#FF922E'/>);
            case 'green':
                return (<AiFillCheckCircle size='25px' color='#2FBE34'/>);
            default:
                return (<>Erro!</>);
        }
    }

    function isGood() {
        let numRed = 0;
        let numGreen = 0;

        for (let i = 0; i < userAnswers.length; i++){
            if (userAnswers[i] === 'red'){
                numRed++
            } else if (userAnswers[i] === 'green'){
                numGreen++
            }
        }

        return (numRed === 0 && numGreen >= zapNumber);
    }

    function Positive(){
        return (
            <div className='results'>
                <span>
                    <img src={party} alt=''/>
                    Parabéns
                </span>
                Você não esqueceu de<br/>nenhum flashcard!
            </div>
        )
    }

    function Negative(){
        return (
            <div className='results'>
                <span>
                    <img src={sad} alt=''/>
                    Putz...
                </span>
                Ainda faltam alguns...<br/>Mas não desanime!
            </div>
        )
    }

    function Results() {
        return (
        <>
            {isGood() ? <Positive /> : <Negative />}
        </>
        )
    }

    function Restart() {
        return(
            <div className='restart' onClick={() => setStart(false)}>
                REINICIAR RECALL
            </div>
        )
    }

    return (
        <div className='bottom'>

                {userAnswers.length === questions.length ? <Results /> : <></>}
                <h2>{userAnswers.length}/{questions.length} CONCLUÍDOS</h2>
                <div>
                    {userAnswers.map((color, index) => <Icons key={index} color={color}/>)}
                </div>
                {userAnswers.length === questions.length ? <Restart /> : <></>}
        </div>
    )
}