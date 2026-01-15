import './buynow.css'
import { useState } from 'react'

function BuyNow(){
    const [moused, setMoused] = useState({x: 0, y: 0})
    const [isHoveringMain, setHovering] = useState(false)
    const [isHoveringItem, setHoveringItem] = useState(false)

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
    return(
        <>
        <main className='main_payment' onMouseMove={(e) => handlerMouse(e)} 
        onMouseOut={() => setHovering(false)}
        onMouseOver={() => setHovering(true)}>
            <section className='card' 
            onMouseLeave={() => setHoveringItem(false)}
            onMouseEnter={() => setHoveringItem(true)}>
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
                onMouseLeave={() => setHoveringItem(false)}
                onMouseEnter={() => setHoveringItem(true)}>
                <button onClick={handlerPayment} className='button_payment'>Pagar Agora</button>
            </section>
            {isHoveringMain && (<div className='cursor'
                style={{
                top: `${moused.y}px`,
                left: `${moused.x}px`,
                width: !isHoveringItem ? 15 : 80,
                height: !isHoveringItem ? 15 : 80,
                transition: "linear 0.1s 0.001s",
                }}
                />)}
        </main>
        </>
    )
}

export default BuyNow;