import './buynow.css'
import { useState } from 'react'

function BuyNow(){
    const [moused, setMoused] = useState({x: 0, y: 0})
    const [sizing, setSizing] = useState(false)
    const [leaving, setLeaving] = useState(false)
    const [isClipPath, setClipPath] = useState("")

    const handlerPayment = ()=>{
        window.location.href = ''
    }

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
        if(type === "enter"){
            return setSizing(true)
        }
        if(type === "leave-from-main"){
            setLeaving(false)
        }
        else if(type === "enter-from-main"){
            setLeaving(true)
        }
    }
    return(
        <>
        <main className='main_payment' onMouseMove={(e) => handlerMouse(e)} 
        onMouseOut={() => handlerLeavingAndRisingMouse('leave-from-main')}
        onMouseOver={() => handlerLeavingAndRisingMouse('enter-from-main')}>
            <section className='card' 
            onMouseLeave={() => handlerLeavingAndRisingMouse('enter')}
            onMouseEnter={() => handlerLeavingAndRisingMouse('leave')}>
                <h2><span class="material-symbols-outlined">
                    check
                </span>Conhecimento em Day Trading</h2>
                <h2><span class="material-symbols-outlined">
                    check
                </span>Conhecimento sobre Velas tanta verdes quanto vermelhas</h2>
                <h2><span class="material-symbols-outlined">
                    check
                </span>Conhecimento em Como vender as Ações na hora exata</h2>
                <h2><span class="material-symbols-outlined">
                    check
                </span>Ficar Bom nisso e viver disso</h2>
            </section>
            <section className='card_payment'
                onMouseLeave={() => handlerLeavingAndRisingMouse('enter')}
                onMouseEnter={() => handlerLeavingAndRisingMouse('leave')}>
                <button onClick={handlerPayment} className='button_payment'>Pagar Agora</button>
            </section>
            <div className='cursor'
                style={{
                top: `${moused.y}px`,
                left: `${moused.x}px`,
                width: sizing ? "15px" : "80px",
                height: sizing ? "15px" : "80px",
                transition: "linear 0.1s 0.001s",
                display: leaving ? "block" : "none"
                }}
                />
        </main>
        </>
    )
}

export default BuyNow;