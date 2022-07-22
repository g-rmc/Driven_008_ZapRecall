import './style.css';
import logo from '../assets/img/logo.png';

export default function Welcome (){

    return (
        <div className='welcome'>
            <img src={logo} alt='' />
            <h1>ZapRecall</h1>
            <div className='button-start'>
                Iniciar ZapRecall
            </div>
        </div>
    )
}