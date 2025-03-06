import classes from './description.module.css'
import CandleStickImg from './../assets/second-img.jpg'
import { useState} from 'react';

function Description(){
    const [moused, setMoused] = useState({x: 0, y: 0})
    const [sizing, setSizing] = useState(false)

    const handlerMouse = (e)=>{
        const mainRect = e.currentTarget.getBoundingClientRect()
        setMoused({
            x: e.clientX - mainRect.left,
            y: e.clientY - mainRect.top,
        })
    }
    const handlerLeavingAndRisingMouse = (type) => {
        if(type === "leave"){
            return setSizing(false)
        }
        if(type === "rise"){
            return setSizing(true)
        }
    }

    return(
        <>
            <main className={classes.main_description} onMouseMove={(e) => handlerMouse(e)}>
                <img src={CandleStickImg} 
                onMouseLeave={() => handlerLeavingAndRisingMouse('rise')}
                onMouseEnter={() => handlerLeavingAndRisingMouse('leave')}/>
                <header className={classes.description_text} 
                onMouseLeave={() => handlerLeavingAndRisingMouse('rise')}
                onMouseEnter={() => handlerLeavingAndRisingMouse('leave')}>
                    <h3>Voce ira ganhar muito Dinheiro Aqui!</h3>
                    <p>Este livro e completo, voce aprendera tudo o que e necessario no Day Trading e poder ate ser essa sua Profissão</p>
                </header>
                <div className={classes.cursor}
                    style={{
                    top: `${moused.y}px`,
                    left: `${moused.x}px`,
                    width: sizing ? "15px" : "80px",
                    height: sizing ? "15px" : "80px",
                    transition: "linear 0.1s 0.001s"
                    }}
                />
            </main>
        </>
    )
}

export default Description