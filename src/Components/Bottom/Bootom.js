import './style.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';

export default function Botom({userAnswers}){

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

    return (
        <div className='bottom'>
                <h2>{userAnswers.length}/4 CONCLUÍDOS</h2>
                <div>
                    {userAnswers.map((color, index) => <Icons key={index} color={color}/>)}
                </div>
        </div>
    )
}