import classes from './main.module.css';
import background from '../assets/back-image.png'
import { useState } from 'react';

function Main(){

    const [isEntered, setEntered] = useState(false)

    return(
        <>
        <main className={classes.background}>
            <img src={background} 
                onMouseEnter={() => setEntered(true)}
                onMouseLeave={()=> setEntered(false)}/>
            <header className={isEntered ? `${classes.sobre_position}` : `${classes.out_position}` }>
                <h2>Day Trade Book</h2>
                <p>E-book sobre Day Trade, aqui você saberá de tudo sobre essa profissão que mudará a sua vida para sempre, sem enrolação</p>
            </header>
        </main>
        </>
    )
}

export default Main;